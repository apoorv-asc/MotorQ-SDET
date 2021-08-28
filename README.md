# MotorQ-SDET

## Getting started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You should have NodeJS installed in your PC. You can check if NodeJS is installed on your PC by using the command
```
node --version
```

### Installing

1. Clone the repositry on your PC 
2. Once the repositry is cloned, open git bash in it and run
```
npm install
```
This will install all the dependencies required for the project.
3. I have already added the MongoDB database but it is linked to my account. 
If you want to link it to your go to MongoDB [MongoDB.com](http://mongodb.com/) and copy-paste thte URI in config/default.json.
4. In order to start the application, go to the command Prompt and run
```
npm run startApp
```
and proceed to 
```
localhost:5000/
```
If you have linked it to a new database then for the first time go to 
```
localhost:5000/createCourses 
```
for the first time to create 5 slots and after that point of time go to
```
localhost:5000/
```
