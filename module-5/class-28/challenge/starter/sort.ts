import { Movie } from "./movies";

export const sortYear = (movies: Movie[]): Movie[] => movies.sort((a: Movie, b: Movie): number => a.year - b.year);
export const sortTitle = (movies: Movie[]): Movie[] => movies.sort((a: Movie, b: Movie): number => a.title.replace('The ', '').localeCompare(b.title.replace('The ', '')));
export const inGenre = (movies: Movie[], genre: string): Movie[] => movies.filter((movie: Movie) => movie.genres.includes(genre));