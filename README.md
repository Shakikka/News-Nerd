# Nominal News

This is a Mod 4 TakeHome Practice Project by [Joel Thomas](https://github.com/Shakikka)

## Outline

1. [Project Overview](#project-overview)
2. [App Overview](#app-overview)
3. [Learning Goals](#learning-goals)
4. [Tech Stack](#tech-stack)
5. [Features](#features)
6. [Instructions for Installation](#instructions-for-installation)
7. [Project Reflections](#project-reflections)


## Project Overview

The goal of this project was to build out a website with the required features in the given time frame (6 hours). This was practice for future take-home challenges of potential future employers.

## App Overview

Nominal News is an app that consumes the [NY Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). It displays thumbnails of top stories, as well as a more detailed view when clicked on, eventually leading the user to the link to the actual article. It also allows users to search articles by keywords in the article title.
 
## Learning Goals
 
 - Learn what a take-home challenge may be like when interviewing for jobs
 - See how much can be built out on an app within a required time-frame
  
## Tech Stack

### Front-End:
- JavaScript ECMA6
  - React (create-react-app)
  - React Router
- HTML5
- CSS3

### Testing:
- Cypress
  - Mocha
  - Chai

## Features

### See Top News Stories

<img src='./src/assets/top-stories.gif' alt='Top Stories'/>


### Search By Title & Story Details

<img src='./src/assets/news-search.gif' alt='Search by Title and Story Details'/>


## Instructions for Installation

  - To run this application on your local machine, clone down the 
         - [repo](https://github.com/Shakikka/Nominal-News) 
   
  - change into the root directory from the command line, and run `npm install`. 
    
  - Then run `npm start` to open the application locally. If you aren't taken there, visit `http://localhost:3000/`
    
  - To run the test suite locally, you will also need to run the command `npm i -D cypress` from the command line.
    
  - Once it  has installed, run `npx cypress open`, then select the `news.spec.js` test file. 
    
  - Note: you will need to run the application locally (start the server with `npm start` from the root directory on the command line) in order to run the automated tests.


## Project Reflections

### Challenges

  For the Detailed View, I was expecting to have access to the actual articles, but alas, they are behind a paywall. It took me a little more time than I'd care to admit to realize this.
     

### Wins

- I think it actually looks pretty good with the color scheme that I went with. I wasn't too sure about that in the beginning.
