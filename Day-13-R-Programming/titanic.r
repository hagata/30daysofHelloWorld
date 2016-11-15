# Tutorual: https://statsguys.wordpress.com/2014/01/03/first-post/
#
# Bring in the data
# Make sure to set header = TRUE to access columns by Name, vs. V#

testData <- read.csv(file=file.path("data","test.csv"),header = TRUE, stringsAsFactors = FALSE)
trainData <- read.csv(file=file.path("data","train.csv"),header = TRUE, stringsAsFactors = FALSE)

head(trainData)

# Basic Plots
plot(density(trainData$Age, na.rm = TRUE))
plot(density(trainData$Fare, na.rm = TRUE))

# This is pretty grim
# Make a table
counts <- table(trainData$Survived, trainData$Sex)
# plot using the new table to compare
barplot(counts, xlab = "Gender", ylab = "Number of People", main = "survived and deceased between male and female")

# Calculate % of women survivors
counts[2] / (counts[1] + counts[2])
# Calculate % of male survivors
counts[4] / (counts[3] + counts[4])

# plot and calculate survival rates based on Class
Pclass_survival <- table(trainData$Survived, trainData$Pclass)
barplot(Pclass_survival, xlab = "Cabin Class", ylab = "Number of People",
main = "survived and deceased between male and female")

# Calc survival rates for each class
Pclass_survival[2] / (Pclass_survival[1] + Pclass_survival[2])
Pclass_survival[4] / (Pclass_survival[3] + Pclass_survival[4])
Pclass_survival[6] / (Pclass_survival[5] + Pclass_survival[6])
