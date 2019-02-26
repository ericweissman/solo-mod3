# AARPlur
#### AARPlur is an interactive music app designed for the eldery to explore various genres of electronic music.

## Installation Steps
- Clone this repo: ```https://github.com/ericweissman/solo-mod3.git```
- Install dependencies: ```npm install```
- Start Local Host 3000: ```npm start```
- For testing suite: ```npm test```

## Background/About
For this project, I was assigned a random API and a random audience. The goal of the project was to create an app that solves a problem for the assigned audience using data from the API. I utilized the [TasteDive API] (https://tastedive.com/read/api) which provides data similar to whatever is queried. I used this API to fetch collections of artists that met my criteria for a genre of electronic music. 

My goal was to make the app extremely easy to use and provide explicit instructions to my users with the understanding that some of my target audience may not have as much exposure to apps. Users are able to explore different genres of music using the navigation options. Once the data has been resolved, it is displayed on the page in card format. Users can watch a YouTube video of the selected artist, view more info on their Wikipedia page, and favorite an artist card. When a user favorites the card, it persists in localStorage.


## Primary Technologies Used - Front End
- React
- Redux
- React Router
- SCSS
- Jest
- Enzyme

## Screenshots
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/20710327/53062708-ea1fff80-347e-11e9-9144-fdd5fccf754b.gif)

## Wireframes
#### Desktop
<img width="875" alt="desktop_aarplur" src="https://user-images.githubusercontent.com/20710327/53454814-aaf52f80-39e5-11e9-806f-f3bf64c1ab54.png">

#### Mobile
<img width="307" alt="mobile_aarplur" src="https://user-images.githubusercontent.com/20710327/53454842-c7916780-39e5-11e9-88cc-a5f3e7eb90e5.png">

## Next Steps
#### Future iterations of the project could include:
- Ability for users to search for specific artists from the data collected
- Allow users to search for specific artists and adjust fetch call accordingly


## Contributors

[Eric Weissman](https://github.com/ericweissman)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
