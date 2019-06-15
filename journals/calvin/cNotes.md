# Model Tuning Tips
* Training error should steadily decrease, steeply at first, and should eventually plateau as training converges.
* If the training has not converged, try running it for longer.
* If the training error decreases too slowly, increasing the learning rate may help it decrease faster.
	* But sometimes the exact opposite may happen if the learning rate is too high.
* If the training error varies wildly, try decreasing the learning rate.
	* Lower learning rate plus larger number of steps or larger batch size is often a good combination.
* Very small batch sizes can also cause instability. First try larger values like 100 or 1000, and decrease until you see degradation.

Here’s a quick example of how to apply a function to a Pandas Series:
clipped_feature = my_dataframe[“my_feature_name”].apply(lambda x: max(x, 0))


# Reducing Loss
We use gradient descent by picking a number and then iterating through our loss function to find the lowest point we can.
We use a scalar called learning rate to scale the gradient descent.


# Machine Learning Terminology
/Label/ - The variable we’re predicting
/Feature/ - An input variable
/Example/ - A particular instance of data (this can be labeled or unlabeled)
/Model/ - Defines relationship between features and a label
	/Regression Model/ - Predicts continuous values (ex: home price in 		California
	/Classification Model/ - Predicts discrete values (ex: is image a picture 		of a dog, a cat, or a mouse?
/loss/ - Number indicating how bad the model’s prediction was on a single example
/Mean Square Error/ - Average squared loss per example over whole dataset
/Batch/ - The total number of examples we use to calculate the gradient in a single iteration
