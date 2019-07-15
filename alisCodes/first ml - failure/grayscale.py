import cv2
import matplotlib.pyplot as plt
# %matplotlib inline

img_path = 'lotus76.jpg'

# Load color image 
bgr_img = cv2.imread(img_path)

# Convert to grayscale
gray_img = cv2.cvtColor(bgr_img, cv2.COLOR_BGR2GRAY)

# Normalize, rescale entries to lie in [0,1]
gray_img = gray_img.astype("float32")/255

# Plot image
plt.imshow(gray_img, cmap='gray')
# plt.show()