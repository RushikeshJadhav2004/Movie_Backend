const express = require('express');
const router = express.Router();
const { addMovie, getMovies } = require('../controllers/movieController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

router.post('/add', protect, adminOnly, addMovie); // only admin can add
router.get('/', getMovies); // anyone can view movies

module.exports = router;
