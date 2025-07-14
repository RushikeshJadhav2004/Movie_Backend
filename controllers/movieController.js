const Movie = require('../models/Movie');

exports.addMovie = async (req, res) => {
  try {
    const { title, genre, description, posterUrl, trailerUrl } = req.body;
    const newMovie = new Movie({ title, genre, description, posterUrl, trailerUrl });
    await newMovie.save();
    res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
