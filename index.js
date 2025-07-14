const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const movieRoutes = require('./routes/movieRoutes');



const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // add auth routes
app.use('/api/movies', movieRoutes);

app.get("/",(req,res)=>{
    res.send("hello guyss");
    console.log(movie.posterUrl);

})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`✅ Server running at http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error(err));
