import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import express from "express";
import { createMovieRoutes } from "../movieRoutes";

describe("Movie Routes", () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use("/api/movies", createMovieRoutes());
  });

  describe("GET /api/movies", () => {
    it("should list all movies", async () => {
      const response = await request(app).get("/api/movies").expect(200);

      expect(response.body).toEqual({ message: "List all movies" });
    });
  });

  describe("GET /api/movies/:id", () => {
    it("should return movie details", async () => {
      const response = await request(app)
        .get("/api/movies/movie-123")
        .expect(200);

      expect(response.body).toEqual({ message: "Get movie details" });
    });
  });

  describe("GET /api/movies/popular", () => {
    it("should return popular movies", async () => {
      const response = await request(app)
        .get("/api/movies/popular")
        .expect(200);

      expect(response.body).toEqual({ message: "Get popular movies" });
    });
  });

  describe("GET /api/movies/top-rated", () => {
    it("should return top-rated movies", async () => {
      const response = await request(app)
        .get("/api/movies/top-rated")
        .expect(200);

      expect(response.body).toEqual({ message: "Get top-rated movies" });
    });
  });

  describe("GET /api/movies/by-genre/:genre", () => {
    it("should filter movies by genre", async () => {
      const response = await request(app)
        .get("/api/movies/by-genre/action")
        .expect(200);

      expect(response.body).toEqual({ message: "Filter movies by genre" });
    });
  });
});
