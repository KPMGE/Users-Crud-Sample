# Users simple api with CRUD operations

### Goal

The goal of this simple project is to learn how to create
a simple API(Application programming interface) for users.
Each user has 3 properties, name, age, and email, of course,
there are 4 operations: Create, Read, Update and Delete a user (CRUD).
These operations will operate upon a database, in case,
MongoDb which is an incredibly powerful NoSql database.

### Used Tecnologies

In this API, there are 4 main technologies: NodeJs, Express, MongoDB, and
Mongoose. NodeJs is a runtime for JavaScript outside the browser, Express
is a framework of NodeJs. MongoDB is one of the most famous NoSql
Databases and, lastly, the mongoose is a framework that makes our
interaction with MongoDb more easily with NodeJs

### ES6 conventions

this API uses the last versions of javaScript and, of course, ES6 notation
with import/export and so on.

### Instalation

In order to install and use this API, you just need to clone the current
repository, after that,
you can run the command `npm install` or `yarn install`. Now you have all
needed dependencies installed.
Now, it's time to configure your working environment variables. First,
create a file named `.env` and set
the properties `DB_URI` and `SERVER_PORT` with your credentials. Lastly,
you can run the command `npm start` or
`npm run devStart`. The first choice runs the API with the standard node, and
the second one runs it with nodemon.

### Routes

There are 5 routes you can use in order to retrive, create, update and delete data from database.

##### Get all users

> localhost:**_defined port_**/api/users

##### Get user by provided id

> localhost:**_defined port_**/api/users/**_user id_**

##### Create new user

> localhost:**_defined port_**/api/users

##### Update a created user

> localhost:**_defined port_**/api/users/**_user id_**

##### Update a created user

> localhost:**_defined port_**/api/users/**_user id_**
