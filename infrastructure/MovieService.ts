import { Movie, type MovieRepository } from "../domain/Entites/Movie.js";

export class MovieService implements MovieRepository {
  async getpopularMovies(): Promise<Movie[]> {
    // Simulate fetching popular movies from an API or database
    return [
      new Movie(1, "Inception", new Date("2010-07-16"), "Sci-Fi", 10),
      new Movie(2, "The Dark Knight", new Date("2008-07-18"), "Action", 12),
    ];
  }

  async getMovieById(id: number): Promise<Movie | null> {
    // Simulate fetching a movie by ID from an API or database
    const movies = await this.getpopularMovies();
    return movies.find((movie) => movie.id === id) || null;
  }

  async getTopRatedMovies(): Promise<Movie[]> {
    // Simulate fetching top-rated movies from an API or database
    return [
      new Movie(
        3,
        "The Shawshank Redemption",
        new Date("1994-09-23"),
        "Drama",
        15,
      ),
      new Movie(4, "The Godfather", new Date("1972-03-24"), "Crime", 20),
    ];
  }
}
