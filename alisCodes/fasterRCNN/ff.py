# %matplotlib inline
# importing required libraries
import pandas as pd
import matplotlib.pyplot as plt
# %matplotlib inline
# from IPython import get_ipython
# get_ipython().run_line_magic('matplotlib', 'inline')
# 'exec(%matplotlib inline)'
from matplotlib import patches

# read the csv file using read_csv function of pandas
train = pd.read_csv("train.csv")
# print(train.head())

# reading single image using imread function of matplotlib
# image = plt.imread("JPEGImages/BloodImage_00000.jpg")
# plt.imshow(image)
# plt.show()

# Number of unique training images
# print(train['image_names'].nunique())

# Number of classes
# print(train['cell_type'].value_counts())

# fig = plt.figure()

# #add axes to the image
# ax = fig.add_axes([0,0,1,1])

# # read and plot the image
# image = plt.imread('JPEGImages/BloodImage_00395.jpg')
# plt.imshow(image)

# # iterating over the image for different objects
# for _,row in train[train.image_names == "BloodImage_00395.jpg"].iterrows():
#     xmin = row.xmin
#     xmax = row.xmax
#     ymin = row.ymin
#     ymax = row.ymax
    
#     width = xmax - xmin
#     height = ymax - ymin
    
#     # assign different color to different classes of objects
#     if row.cell_type == 'RBC':
#         edgecolor = 'r'
#         ax.annotate('RBC', xy=(xmax-40,ymin+20))
#     elif row.cell_type == 'WBC':
#         edgecolor = 'b'
#         ax.annotate('WBC', xy=(xmax-40,ymin+20))
#     elif row.cell_type == 'Platelets':
#         edgecolor = 'g'
#         ax.annotate('Platelets', xy=(xmax-40,ymin+20))
        
#     # add bounding boxes to the image
#     rect = patches.Rectangle((xmin,ymin), width, height, edgecolor = edgecolor, facecolor = 'none')
    
#     ax.add_patch(rect)
# plt.show()

data = pd.DataFrame()
data['format'] = train['image_names']

# as the images are in train_images folder, add train_images before the image name
for i in range(data.shape[0]):
    data['format'][i] = 'train_images/' + data['format'][i]

# add xmin, ymin, xmax, ymax and class as per the format required
for i in range(data.shape[0]):
    data['format'][i] = data['format'][i] + ',' + str(train['xmin'][i]) + ',' + str(train['ymin'][i]) + ',' + str(train['xmax'][i]) + ',' + str(train['ymax'][i]) + ',' + train['cell_type'][i]

data.to_csv('annotate.txt', header=None, index=None, sep=' ')