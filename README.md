# 3dev-fullstack
learn fullstack!

## contribute
If you have spare time, you can always make an addition to system! If you have something different in mind than the listed additions below, just DM @kwlski on DC.
### how to
* implement one of the possible additions below
* push your feature to a non protected branch
* open a pullrequest on github, that can be reviewed and merged into the "master" branch
### possible additions (topdown order)
#### documentation
- add a description for setting up the project as it is now, make a summary/guide of what we have done so far. See #1.
- document the possible API Routes for our library, consisting of users and books so far, use this readme file
#### node
- add proper validation for user creation (register)
- add scalability for validation in a seperate middleware, maybe third party library? For example Express-Validator
- add scalability for multiple routes and its CRUD and other operations
- add a library/package that documents our code with our given comments on functions, f.e. JSDoc
- add an API documentation generator f.e. something like Swagger
- add users route (CRUD)
- add books route (CRUD)
- add authentication routes (login, register)
- add API tests to all our routes
- ...more to come

#### frontend
- add a "create react app" boilerplate
- add a login form that hits our register route
- ...more to come

#### testing
- ...more to come

## how to use the repository
### 1. first you will need to install git and node
```
https://git-scm.com/downloads
https://nodejs.org/en/
```
### 2. clone the repository
now you can use git to clone this repository and get it so you have it locally on your machine as physical files
for this go to your desired directory where you want to have your files and run the following command
```
git clone https://github.com/threedevs/3dev-fullstack.git
```
you should now see a folder 3dev-fullstack
### 3. install the dependencies
open the folder 3dev-fullstack and install the packages that we need with following command from the npm registry
```
npm i
```
### 4. run the server
now you should be able to run the node server with nodemon which keeps track of changes and restarts the server if needed
```
nodemon server
```
### 5. run the frontend
now we can try using our server, for this open the frontend folder and run index.html in any way

### 6. done!

## code documentation
### API routes
...
### technology stack
...
### contributors
...
