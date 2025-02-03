
export type IMovieType = "movie" | "series" | "episode";
export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: IMovieType;
  Poster: string;
}
//   "Title": "Pokémon: Detective Pikachu",
//   "Year": "2019",
//   "Released": "10 May 2019",
//   "Runtime": "104 min",
//   "Genre": "Adventure, Comedy, Family",
//   "Director": "Rob Letterman",
//   "Writer": "Dan Hernandez, Benji Samit, Rob Letterman",
//   "Actors": "Ryan Reynolds, Justice Smith, Kathryn Newton",
//   "Plot": "In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.",
//   "Language": "English, Japanese",
//   "Country": "United States, Japan, United Kingdom, Canada",
//   "Awards": "10 nominations total",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg",
//   "Ratings": [
//       {
//           "Source": "Internet Movie Database",
//           "Value": "6.5/10"
//       },
//       {
//           "Source": "Rotten Tomatoes",
//           "Value": "68%"
//       },
//       {
//           "Source": "Metacritic",
//           "Value": "53/100"
//       }
//   ],
//   "Metascore": "53",
//   "imdbRating": "6.5",
//   "imdbVotes": "188,408",
//   "imdbID": "tt5884052",
//   "Type": "movie",
//   "DVD": "N/A",
//   "BoxOffice": "$144,174,568",
//   "Production": "N/A",
//   "Website": "N/A",
//   "Response": "True"
export interface IMovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  BoxOffice: string;
  Website: string;
  Country: string;
  Language: string;
  Poster: string;
}
