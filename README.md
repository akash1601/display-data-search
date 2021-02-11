# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# display-data-search

The display-data-search can display large numbers of rows in single page following number of pages.
User can also instant search their data. Data displayed accordingly search input.

Developed using the react

Fetched api "https://jsonplaceholder.typicode.com/comments" 

Api returned 500 comments. So displayed same data again to make it 1 Mil comments.

# Assumptions / Limitations 

* Data is not unique. Displayed same data multiple time
* User can see same data multiple times
* User can update `for` loop in App.js to display more or less data
* Loading time for searching and displaying depends on number of rows or data

# demo

![Demo for the App](public/display-search-data.gif)
