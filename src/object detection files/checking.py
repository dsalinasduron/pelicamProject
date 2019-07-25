# import exif
import PIL.Image
import PIL.ExifTags
import glob
import csv
data = open("whatDoYouLike.csv", "w")
csvwriter = csv.writer(data)
csvwriter.writerow(["dates"])
for image in glob.glob('test_images/*.JPG'):

    img = PIL.Image.open(image)
    exif_data = img._getexif()
    exif = {
        PIL.ExifTags.TAGS[k]: v
        for k, v in img._getexif().items()
        if k in PIL.ExifTags.TAGS
    }
    # print(exif['DateTime'])
    csvwriter.writerow([exif['DateTime']])
data.close()

    