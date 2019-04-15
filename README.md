# RedX Code Challenge

### Node.js => PostgreSQL Backend 
#### Backend Installation Instructions
+ In your terminal, cd into code_challenge_rx
+ run ``yarn install`` (installs necessary dependencies) <br>
+ run ``nodemon`` OR ``node server/index.js``

_______________________________________________________________
<br>

### Axios => React | Redux Frontend
#### Frontend Installation Instructions
+ In a new terminal tab, cd into cc_frontend
+ run ``yarn install`` (installs necessary dependencies) <br>
+ run ``yarn start``

(If you're getting a GET 500 error as soon as you start up the Create React App Server, just refresh the Backend node server. Sometimes the frontend tries to hurry and run a GET request on all users before the DB is ready.)

Also, refreshing the Server will erase all values in the User table. This is used for testing purposes. If you want it to continue to persist the data, just comment out all of the code in db/init.sql and it will stop re-initializing the database.