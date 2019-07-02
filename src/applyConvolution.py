import  matplotlib.pyplot as plt
from scipy import ndimage
import numpy
from glob import glob

# class for loading images safely.
class getImages :
	def __init__(self,fileNames) :
		self.fileNames = fileNames
	def __enter__(self) :
		notOpened = []
		opened = []
		images = []
		for f in self.fileNames :
			try :
				images.append(plt.imread(f))
				opened.append(f)
			except :
				notOpened.append(f)
		return ( images, opened, notOpened )
	def __exit__(self,ExceptionType,ExceptionValue,traceback):
		if (ExceptionValue) :
			print(ExceptionType)
			print(ExceptionValue)

# convolution : n by m array
# image : x by y array, x > n, y > m
def convolveSlow( convolution, image ) :
	imX = image.shape[0]
	imY = image.shape[1]
	cX = convolution.shape[0]
	cY = convolution.shape[1]
	if ( (imX >= cX) and (imY > cY) ) :
		rX = imX - cX + 1
		rY = imY - cY + 1
		result = numpy.zeros( (rX,rY,image.shape[2]),\
                                      dtype=image.dtype)
		for x in range(rX):
			for y in range(rY):
				for d in range(result.shape[2]) :
					sX = x + cX
					sY = y + cY
					slice = image[x:sX,y:sY,d]
					result[x,y,d] = \
					numpy.sum(numpy.multiply(convolution,slice))
		return result
	else :
		raise Error("Convolution larger than image")

# finds the difference between a point and its neighbors.
# 
def neighborDifference(A,directions=[]) :
	return A - numpy.roll(A,2,1)

# execute if this is the main module
if __name__ == "__main__" :
	from sys import argv
	if ( len(argv) > 1 ) :
		convo = numpy.loadtxt(argv[1],delimiter=",")
		convolution = numpy.array([convo,convo,convo])
		with getImages(argv[2:]) as ( images, opened, failed ) :
			for f in failed :
				print("Could not open " + f)
			for (i,f) in zip(images, opened) :
				ci = ndimage.convolve(i,convolution)
				plt.imshow(ci)
				plt.show()
				#ci = convolveSlow(convolution,i)
				#plt.imsave("c_" + f,ci)
