if (typeof require !== 'undefined') XLSX = require('xlsx');
// pelicams-classifications-2019-06-20.xlsx
let workbook = XLSX.readFile('pelicams-classifications-2019-06-20.xlsx');

let sheetName = workbook.SheetNames[0];

let worksheet = workbook.Sheets[sheetName];

let information = XLSX.utils.sheet_to_json(worksheet);

let jsonInfo = [];

for (let i = 0; i < information.length; i++) {
  let r = JSON.parse(information[i].annotations)[0].value;

  for (let k = 0; k < r.length; k++) {
    let n = r[k];
    if (n !== undefined) {
      if (n.choice === "PELICANS") {
        let obj = {
          min : "",
          max : "",
          young : "",
          howManyYoung : "",
          fileName : "",
          id : ""
        };

        if (n.answers.HOWMANY !== undefined) {
          obj.min = n.answers.HOWMANY;
          obj.max = n.answers.HOWMANY;
        } else if (n.answers.HOWMANYPELICANSDOYOUSEE !== undefined) {
          let amount = n.answers.HOWMANYPELICANSDOYOUSEE;


          if (amount === "510") {
            obj.min = 5;
            obj.max = 10;
          } else if (amount === "610") {
            obj.min = 6;
            obj.max = 10;
          } else if (amount === "1620") {
            obj.min = 16;
            obj.max = 20;
          } else if (amount === "2130") {
            obj.min = 21;
            obj.max = 30;
          } else if (amount === "3140") {
            obj.min = 31;
            obj.max = 40;
          } else if (amount === "40") {
            obj.min = 40;
            obj.max = 1000;
          } else {
            obj.min = parseInt(amount);
            obj.max = parseInt(amount);
          }
        }

        if (n.answers.ARETHEREANYYOUNG !== undefined) {
          obj.young = n.answers.ARETHEREANYYOUNG;
        }
        if (n.answers.DOYOUSEEANYYOUNGPELICANSIFYOURENOTSUREWHATTHISISLOOKINTHEFIELDGUIDEUNDERCHARACTERISTICS !== undefined) {
          obj.young = n.answers.DOYOUSEEANYYOUNGPELICANSIFYOURENOTSUREWHATTHISISLOOKINTHEFIELDGUIDEUNDERCHARACTERISTICS;
        }
        if (n.answers.DOYOUSEEANYYOUNGPELICANSIFYOURENOTSUREWHATTHISISLOOKINTHEFIELDGUIDEUNDERADULTORJUVENILEPELICAN !== undefined) {
          obj.young = n.answers.DOYOUSEEANYYOUNGPELICANSIFYOURENOTSUREWHATTHISISLOOKINTHEFIELDGUIDEUNDERADULTORJUVENILEPELICAN;
        }

        if (n.answers.IFYOUSEEYOUNGPELICANSHOWMANY !== undefined) {
          obj.howManyYoung = n.answers.IFYOUSEEYOUNGPELICANSHOWMANY;
        }

        obj.id = information[i].subject_ids;
        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

        // console.log(obj);
        jsonInfo.push(obj);
      }
    }
  }
}


let newWB = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfo), "Sheet 1");

XLSX.writeFile(newWB, "output.xlsx");
