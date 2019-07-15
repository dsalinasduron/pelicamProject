import xml.etree.ElementTree as ET
import csv

ff = open("trainval.txt", "r")
data = open('train.csv', 'w')
csvwriter = csv.writer(data)
count = 0
head = ["image_names","cell_type","xmin","xmax","ymin","ymax"]
csvwriter.writerow(head)
for i in ff:
    count += 1
    string = "BCCD_Dataset-master/BCCD/Annotations/" + i
    string = string[0:-1]
    string = string+".xml"
    tree = ET.parse(string)
    root = tree.getroot()
    image_names = root.find("filename").text

    

    resident = []
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
data.close()
# print(count)
# print("1")
