import xml.etree.ElementTree as ET
import csv

ff = open("test.txt", "r")
data = open('test.csv', 'w')
ff2 = open("counttest.txt", "w")
csvwriter = csv.writer(data)
# print(type(ff))
head = ["image_names","cell_type","xmin","xmax","ymin","ymax"]
csvwriter.writerow(head)
count = 0
for i in ff:
    count += 1
    string = "BCCD_Dataset-master/BCCD/Annotations/" + i
    string = string[0:-1]
    string = string+".xml"
    # print(string)
    tree = ET.parse(string)
    root = tree.getroot()
    image_names = root.find("filename").text

    # count = 0

    resident = []
    c = 0
    for member in root.findall('object'):
        resident = []
        cell_type = member.find("name").text
        bnd = member.find("bndbox")
        xmin = bnd.find("xmin").text
        ymin = bnd.find("ymin").text
        xmax = bnd.find("xmax").text
        ymax = bnd.find("ymax").text
        resident.append(image_names)
        resident.append(cell_type)
        resident.append(xmin)
        resident.append(xmax)
        resident.append(ymin)
        resident.append(ymax)
        csvwriter.writerow(resident)
        c += 1
    ff2.write(i[0:-1]+","+str(c)+"\n")
data.close()
print(count)
print("1")