import Movie from '../models/movie.js';
import xlsx from 'xlsx';
import fs from 'fs';

export const createMovie = async (req, res) => {
  const { name, rating, genres, watchedUsers } = req.body;
  const movie = new Movie({
    name,
    rating,
    genres,
    watchedUsers
  });
  await movie.save();
  res.status(201).json(movie);
};

export const bulkUpload = async (req, res) => {
  const filePath = req.file.path;
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  await Movie.insertMany(data);
  fs.unlinkSync(filePath);
  res.json({ msg: 'Bulk upload successful', count: data.length });
};

export const listMovies = async (req, res) => {
  const { page = 1, limit = 10, genre, rating } = req.query;
  const query = {};
  if (genre) query.genres = genre;
  if (rating) query.rating = Number(rating);

  const movies = await Movie.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(movies);
};
