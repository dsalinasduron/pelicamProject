from applyConvolution import getImages
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import scipy
import numpy

def kmeansImage(image):
	# pixel per row
	pixels = image.reshape( (-1,image.shape[-1]) )
	kmeans = \
	KMeans(n_clusters=3,max_iter=30,algorithm="elkan",n_jobs=4,n_init=5)
	labels = kmeans.fit_predict(pixels).reshape(image.shape[0:2])
	result = numpy.zeros(image.shape,dtype=image.dtype)
	color = kmeans.cluster_centers_[labels[0,0]]
	for r in range(labels.shape[0]) :
		for c in range(labels.shape[1]) :
			color = kmeans.cluster_centers_[labels[r,c]]
			result[r,c,:] = color
	return result

if __name__ == "__main__" :
	from sys import argv
	if len(argv) >  1 :
		with getImages( argv[1:] ) as ( images, opened, failed ) :
			for i in images :
				 plt.imshow(kmeansImage(i))
				 plt.show()
