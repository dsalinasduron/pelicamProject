from applyConvolution import getImages
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

def kmeansImage(image):
	# pixel per row
	pixels = image.reshape( (-1,image.shape[-1]) )
	kmeans = KMeans(n_clusters=4)
	kmeans.fit(pixels)

if __name__ == "__main__" :
	from sys import argv
	if len(argv) >  1 :
		with getImages( argv[1:] ) as ( images, opened, failed ) :
			for i in images :
				kmeansImage(i)
