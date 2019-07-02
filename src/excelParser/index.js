if (typeof require !== 'undefined') XLSX = require('xlsx');
// pelicams-classifications-2019-06-20.xlsx
let workbook = XLSX.readFile('pelicams-classifications-2019-06-20.xlsx');

let sheetName = workbook.SheetNames[0];

let worksheet = workbook.Sheets[sheetName];

let information = XLSX.utils.sheet_to_json(worksheet);

let jsonInfoPelicans = [];
let jsonInfoHumans = [];
let jsonInfoGulls = [];
let jsonInfoPeregrineFalcons = [];
let jsonInfoGoldenEagles = [];
let jsonInfoGreatBlueHerons = [];
let jsonInfoCoyotes = [];
let jsonInfoTurkeyVultures = [];
let jsonInfoGreatHornedOwls = [];
let jsonInfoGeneralRodents = [];

for (let i = 0; i < information.length; i++) {
  let r = JSON.parse(information[i].annotations)[0].value;

  for (let k = 0; k < r.length; k++) {
    let n = r[k];
    if (n !== undefined) {

      // PELICANS
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

	        jsonInfoPelicans.push(obj);
	    }

	    // GULLS
        if (n.choice === "GULL") {
        	let obj = {
        		fileName: "",
        		id: ""
        	}

        	obj.id = information[i].subject_ids;
	        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

	        jsonInfoGulls.push(obj);
        }

      	// HUMANS
     	if (n.choice === "HUMANS") {
	      	let obj = {
	      		fileName: "",
	      		id: ""
	      	}

	      	obj.id = information[i].subject_ids;
	        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

	        jsonInfoHumans.push(obj);
        }

        // PEREGRINE FALCONS
        if (n.choice === "PEREGRINEFALCON") {
        	let obj = {
        		fileName: "",
        		id: ""
        	}

        	obj.id = information[i].subject_ids;
	        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

	        jsonInfoPeregrineFalcons.push(obj);
        }

        // GOLDEN EAGLES
        if (n.choice === "GOLDENEAGLE") {
        	let obj = {
        		fileName: "",
        		id: ""
        	}

        	obj.id = information[i].subject_ids;
	        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

	        jsonInfoGoldenEagles.push(obj);
        }

        // GREATBLUEHERON
        if (n.choice === "GREATBLUEHERON") {
        	let obj = {
        		fileName: "",
        		id: ""
        	}

        	obj.id = information[i].subject_ids;
	        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

	        jsonInfoGreatBlueHerons.push(obj);
        }

        // COYOTE
        if (n.choice === "COYOTE") {
        	let obj = {
        		fileName: "",
        		id: ""
        	}

        	obj.id = information[i].subject_ids;
	        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

	        jsonInfoCoyotes.push(obj);
        }

        // TURKEYVULTURE
        if (n.choice === "TURKEYVULTURE") {
        	let obj = {
        		fileName: "",
        		id: ""
        	}

        	obj.id = information[i].subject_ids;
	        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

	        jsonInfoTurkeyVultures.push(obj);
        }

        // GREATHORNEDOWL
        if (n.choice === "GREATHORNEDOWL") {
        	let obj = {
        		fileName: "",
        		id: ""
        	}

        	obj.id = information[i].subject_ids;
	        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

	        jsonInfoGreatHornedOwls.push(obj);
        }

        // GENERALRODENT
        if (n.choice === "GENERALRODENT") {
        	let obj = {
        		fileName: "",
        		id: ""
        	}

        	obj.id = information[i].subject_ids;
	        obj.fileName = (JSON.parse(information[i].subject_data)[obj.id].Filename !== undefined) ? JSON.parse(information[i].subject_data)[obj.id].Filename : JSON.parse(information[i].subject_data)[obj.id].image_name_1;

	        jsonInfoGeneralRodents.push(obj);
        }
    }
  }
}


let newWB = XLSX.utils.book_new();

console.log("Adding Pelicans to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoPelicans), "Pelicans");

console.log("Adding Gulls to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoGulls), "Gulls");

console.log("Adding Humans to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoHumans), "Humans");

console.log("Adding Peregrine Falcons to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoPeregrineFalcons), "Peregrine Falcons");

console.log("Adding Golden Eagles to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoGoldenEagles), "Golden Eagles");

console.log("Adding Great Blue Herons to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoGreatBlueHerons), "Great Blue Herons");

console.log("Adding Coyotes to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoCoyotes), "Coyotes");

console.log("Adding Turkey Vultures to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoTurkeyVultures), "Turkey Vultures");

console.log("Adding Great Horned Owls to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoGreatHornedOwls), "Great Horned Owls");

console.log("Adding General Rodents to sheet...");
XLSX.utils.book_append_sheet(newWB, XLSX.utils.json_to_sheet(jsonInfoGeneralRodents), "General Rodents");

XLSX.writeFile(newWB, "output.xlsx");
