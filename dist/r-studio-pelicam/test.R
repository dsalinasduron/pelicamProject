# This is for learning R Syntax and how R operates.

test <- "Initialize variables with the '<-' syntax operator."

print (test)

# R uses atomic vectors for data types

listVector <- c("Apples","Bananas","Oranges")

# String concatation in R is somewhat strange.
# One must use the 'paste' function.

paste ("Item to buy:", listVector, sep=" ")

paste ("Here we see the type of class it is:", class(listVector), sep=" ")