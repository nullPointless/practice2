export class Movie {
  id: number;
  title: string;
  releaseDate: Date;
  genre: string;
  price: number;

  constructor(
    id: number,
    title: string,
    releaseDate: Date,
    genre: string,
    price: number,
  ) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.price = price;
  }
}

export interface MovieRepository {
  getpopularMovies(): Promise<Movie[]>;
  getMovieById(id: number): Promise<Movie | null>;
  getTopRatedMovies(): Promise<Movie[]>;
}
