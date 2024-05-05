import React from 'react';
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';
import plays from './Pages/plays.page';
import axios from 'axios';
import HomePage from './Pages/Home.pages';
import Movie from './Pages/Movie.page';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={plays} />
    </>
  );
}

export default App;
