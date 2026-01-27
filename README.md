This is the base node js project template which everyonr can use it has been prepared by keeping some of the most important code principles and project management recommendations . Feel free to change and suggest things .

src -> Inside the src all the actual source code the project will reside , this will not include any kind of test . You might want to make seperate test folders

Lets take a look inside src folder

config -> In this folder anything regarding any configurations and setip of a library or module will be made . For exampl setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion , this is done in the server-config.js . One more example can be to setup you logging libraary that can help you to prepare meaningful logs , so configuration for this library should also be done there .

routes -> In the routes folder we register the routes and corresponding middleware and controllers to it .

midleware -> They are just going to intercept the incoming requests where we can write our vallidators , authenticators etc .

controllers -> They are kind of the last middleware as post them you call your business layer to execute the business layer logic . In controllers we just receive the incoming requests and data and then pass it to the business layer and once business layer returns the output we structure the api response in controller and sent the output .

repositories -> It contains all the logic which we require to interact with the DB by writing queries , all the raw queries or ORM queries will go here .

services -> It contains the business logic and interacts with repos for data from the database .

utils -> It contains helper method , error clases , etc .

Setup the project
Download this template from github and open it in yhournfavourite text editor

Move inside the follder and execute the following command

npm install

To run the server run nom run dev .

In the root directory create a .env file and add the following env variables

... PORT =< port number of the choice > ...

ex : ... PORT = 1000 ...

INside the src/config folder create a a file aconfig.json and write the following code : { "development": { "username": "root", "password": null, "database": "database_development", "host": "127.0.0.1", "dialect": "mysql" }, "test": { "username": "root", "password": null, "database": "database_test", "host": "127.0.0.1", "dialect": "mysql" }, "production": { "username": "root", "password": null, "database": "database_production", "host": "127.0.0.1", "dialect": "mysql" } }

Go inside src and run nox sequelize init to get the migrations and seeders folder along with cong=fig.json inside the config folder .

If you are setting up your development environment , then write the username of the db andd password of the db and in the dialect mention whatever db you are using ex : Maria , mysql

If you are using test and prod environment make sure you also replace the host with the hosted db url .


✅ Correct pairing (VERY IMPORTANT)
If you export like this 👇
module.exports = {
  AirplaneRepository
};

You MUST import like this 👇
const { AirplaneRepository } = require("../repositories");

If you export like this 👇
module.exports = AirplaneRepository;

You MUST import like this 👇
const AirplaneRepository = require("./airplane-repository");

🧠 Mental Rule (Memorize This)

If you see {} on export → use {} on import
If you don’t → don’t

🎯 Best Practice Recommendation (Backend / Interviews)

Leaf files (controller, repo, service):

module.exports = ClassOrFunction;


Index files:

module.exports = {
  Thing1,
  Thing2,
};


This gives:

clean imports

easy scaling

fewer bugs



index file  ---> apirRoutes --> v1 --> airplane ---> controller ---> service ---> repositories ---> talk to model --> changes in the database