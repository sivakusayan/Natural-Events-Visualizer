# EOVis
A web application that provides an interactive map that is automatically updated with natural disasters. The user can manually explore
the map, or can search and filter for events by date, location, and category if they prefer.

The live app can be found [here](https://eovis.herokuapp.com/).

![EOVis](https://media.giphy.com/media/iqmAayQZqGzcjC255w/giphy.gif)

## What is the backend for?

The backend serves as an intermediary between the EONET API and the application. As the EONET API periodically cycles out old data,
the collection of events the user can search for will never be very large. 

As a workaround, we check the API everyday and permanently store new data into our database. This also gives us the ability
to do further processing, such as converting the data into usable GeoJSON, and reverse geocoding each event using the Google API.

## Technologies Used
* [React](https://reactjs.org/) (Library for building UIs)
* [Redux](https://redux.js.org/) (State Management Tool)
* [Mapbox](https://www.mapbox.com/) (Library for building interactive maps)
* [SASS](https://sass-lang.com/) (CSS Preprocessor)
