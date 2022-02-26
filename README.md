# getir-case-study

## Tools

React,
Redux,
Redux Saga,
Json-server

## Folder Structure

#### Components
In this folder, you can find presentational components.

#### Styles
In this folder, you can find global scss files. Such as variables, mixins, normalize scss files.

#### Hooks
In this folder, you can find custom hooks for use dynamically in more than one place.

#### Constant
In this folder, you can find constant variables such as action types for use in more than one place.

#### Service
In this folder, you can find api requests.

#### Store
In this folder, you can find our redux implementation such as reducers, actions, sagas. Also, store.js to provide to react.

#### Utils
In this folder, you can find our utility functions such as db.json for running json server.


## Running Project Locally

#### Installation
```sh
git clone https://github.com/berkbaybas/getir-case-study.git
cd getir-case-study
npm install
json-server --watch 'src/utils/db.json'
npm start
```

#### Details
###### `git clone https://github.com/berkbaybas/getir-case-study.git`
clone repository

###### `npm install`
install dependencies.

###### `json-server --watch 'src/utils/db.json'`
Run the backend server to [http://localhost:3000](http://localhost:3000).

###### `npm start`
Runs the app in the development mode. You can select localhost:3001\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

