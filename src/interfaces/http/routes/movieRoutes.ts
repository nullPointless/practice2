import express, { Router } from "express";

export function createMovieRoutes(): Router {
  const router = express.Router();

  // GET /api/movies - List all movies
  router.get("/", (req, res) => {
    // TODO: Inject MovieController
    res.json({ message: "List all movies" });
  });

  // GET /api/movies/:id - Get movie details
  router.get("/:id", (req, res) => {
    // TODO: Inject MovieController
    res.json({ message: "Get movie details" });
  });

  // GET /api/movies/popular - Get popular movies
  router.get("/popular", (req, res) => {
    // TODO: Inject MovieController
    res.json({ message: "Get popular movies" });
  });

  // GET /api/movies/top-rated - Get top-rated movies
  router.get("/top-rated", (req, res) => {
    // TODO: Inject MovieController
    res.json({ message: "Get top-rated movies" });
  });

  // GET /api/movies/by-genre/:genre - Filter by genre
  router.get("/by-genre/:genre", (req, res) => {
    // TODO: Inject MovieController
    res.json({ message: "Filter movies by genre" });
  });

  return router;
}
