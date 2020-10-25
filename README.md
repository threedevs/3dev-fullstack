# 3dev-fullstack, learn fullstack! (MERN Stack)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/threedevs/3dev-fullstack/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![GitHub issues](https://img.shields.io/github/issues/threedevs/3dev-fullstack/task?color=green&label=tasks)](https://GitHub.com/threedevs/3dev-fullstack/issues)
[![GitHub closed issues by-label](https://img.shields.io/github/issues-closed/threedevs/3dev-fullstack/task?label=tasks)](https://GitHub.com/threedevs/3dev-fullstack/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull-requests closed](https://img.shields.io/github/issues-pr-closed/threedevs/3dev-fullstack)](https://GitHub.com/threedevs/3dev-fullstack/pull/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![GitHub last commit](https://img.shields.io/github/last-commit/threedevs/3dev-fullstack)
## technology stack

<p align="middle">
    <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
    <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
    <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
    <img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
    <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
    <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/adobe%20xd%20-%23FF26BE.svg?&style=for-the-badge&logo=adobe%20xd&logoColor=white"/>
    <img src="https://img.shields.io/badge/figma%20-%23F24E1E.svg?&style=for-the-badge&logo=figma&logoColor=white"/>
    <img src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/>
    <img src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white"/>
    <img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>
    <img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
    <img src="https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black" />
    <img src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>
    <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
</p>

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
### 1. first you will need to install git, node and docker
```
https://git-scm.com/downloads
https://nodejs.org/en/
https://www.docker.com/products/docker-desktop
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
### 4. run the database and the server for development

now you should be able to run the node server with nodemon which keeps track of changes and restarts the server if needed

```
npm run backend
```

### 5. run the frontend
for this you can run in a separate terminal
```
npm run frontend
```
### 6. done!

## additional commands
start the db
```
npm run mongo-up
```
stop the db
```
npm run mongo-down
```
## code documentation
### Prototype
```
https://www.figma.com/file/XIUfEV7DlJHJCxwN8BAz5U/Library?node-id=1%3A3
```
### API routes
-   for this, please see routes.md in the documentation folder
### technology stack
- [nodejs](https://nodejs.org)
- [mongoDB](https://www.mongodb.com/)
- [React](https://reactjs.org/)
### API Docs
- generate api documentation to the "out folder"
```
npm run apidoc
```
-   to generate API documentation we use APIDocs:
```
 ./node_modules/.bin/apidoc -i routers -o out/
```
-   By using the command above in the terminal a new directory called "out" will be created in the project folder, inside this directory open the "index.html" file to view the full documentation. Note if you chose to name the output directory other than "out" please include this in the ".gitignore" file.
