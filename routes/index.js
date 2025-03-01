const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model"); 

/* GET home page */
router.get('/', async (req, res, next) => { 
  try {
    const movies = await Movie.find(); // Fetch all movies from MongoDB
    res.render("index", { 
      title: "Cinema Ironhack", // Passing "Cinema Ironhack" as the value for title
      movies: movies // Pass movies data to the template
    }); 
  } catch (error) {
    console.error("Error fetching movies:", error);
    next(error);
  }
});

module.exports = router;
