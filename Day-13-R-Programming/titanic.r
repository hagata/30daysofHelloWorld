# Bring in the data
# Make sure to set header = TRUE to access columns by Name, vs. V#
testData <- read.csv(file=file.path("data","test.csv"),header = TRUE, stringsAsFactors = FALSE)
trainData <- read.csv(file=file.path("data","train.csv"),header = TRUE, stringsAsFactors = FALSE)

head(trainData)

# Basic Plots
plot(density(trainData$Age, na.rm = TRUE))
plot(density(trainData$Fare, na.rm = TRUE))
