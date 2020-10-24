# 3dev-fullstack

learn fullstack! (MERN Stack)

## current state
![current](documentation/state.png 'Current State')

## goal of this repository (vision)

create a plex-like book library, with multiple books and user authentication, with the addition of having anki cards and even more to come...
![layout](documentation/Layout.png 'Layout/Vision')

## contribute

If you have spare time, you can always make an addition to the system! If you have something different in mind, just DM @kwlski on DC. There is a list of issues to pick from.

### how to

-   implement one of the possible issues, assign the issue to yourself, if you are a beginner I can help you getting your changes to github
-   push your feature to a non protected branch, hereby we name the branch after the task it fulfills, in small letters. For example I make a documentation file for routes, so we are going to name the branch "routesdoc"
-   open a pullrequest on github, that can be reviewed and merged into the "master" branch
-   done! You have contributed!

### prototype

to contribute, you will need to have an idea what the app should look like, for this please see the prototype:

-   **[in work, see the prototype of the project! [Issue #2](https://github.com/threedevs/3dev-fullstack/issues/2)]**

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

## prerequisites for the current system, to make the backend work (not needed for frontend)

-   install mongodb on your system
-   install mongo compass on your system
-   connect with mongodb compass to your local mongodb server, you might need to start it first!
-   add database with name "library" to your local mongodb server
-   add collection with name "books" to your "library" database
-   add collection with name "users" to your "library" database

## code documentation

### Prototype

```
https://www.figma.com/file/XIUfEV7DlJHJCxwN8BAz5U/Library?node-id=1%3A3
```

### API routes

-   for this, please see routes.md in the documentation folder

### technology stack

...

### contributors

...

### API Docs

-   to generate API documentation we use APIDocs:

```
 ./node_modules/.bin/apidoc -i routers -o out/
```

-   By using the command above in the terminal a new directory called "out" will be created in the project folder, inside this directory open the "index.html" file to view the full documentation. Note if you chose to name the output directory other than "out" please include this in the ".gitignore" file.
