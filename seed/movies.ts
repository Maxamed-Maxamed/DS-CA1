import {Movie,  MovieReview} from '../shared/types'

export const movies : Movie[] = [
  
  
  {
    adult: false,
    backdrop_path: '/4mmrgZW9bcgMRFdV1lCcXqCEXEr.jpg',
    genre_ids: [ 28, 18, 12, 9648, 53 ],
    id: 755401,
    original_language: 'en',
    original_title: 'Skydog',
    overview: 'After a high school senior working on his pilot’s license rescues a dog named Oreo, he finds out his mom is a CIA agent who’s been captured. He teams up with Oreo and a new friend to find his mother and uncover double agents inside the CIA.',
    popularity: 504.779,
    poster_path: '/5M3bY1rl9QIQSmrAGPEt9qutj64.jpg',
    release_date: '2020-10-20',
    title: 'Skydog',
    video: false,
    vote_average: 7.3,
    vote_count: 8
  },
  {
    adult: false,
    backdrop_path: '/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg',
    genre_ids: [ 28, 35 ],
    id: 897087,
    original_language: 'en',
    original_title: 'Freelance',
    overview: 'An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.',
    popularity: 501.319,
    poster_path: '/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg',
    release_date: '2023-10-05',
    title: 'Freelance',
    video: false,
    vote_average: 6.5,
    vote_count: 390
  },

  
]

// export const movieCasts: MovieCast[] = [
//   {
//     movieId: 1234,
//     actorName: "Joe Bloggs",
//     roleName: "Male Character 1",
//     roleDescription: "description of character 1",
//   },
//   {
//     movieId: 1234,
//     actorName: "Alice Broggs",
//     roleName: "Female Character 1",
//     roleDescription: "description of character 2",
//   },
//   {
//     movieId: 1234,
//     actorName: "Joe Cloggs",
//     roleName: "Male Character 2",
//     roleDescription: "description of character 3",
//   },
//   {
//     movieId: 2345,
//     actorName: "Joe Bloggs",
//     roleName: "Male Character 1",
//     roleDescription: "description of character 3",
//   },
// ];

export const movieReviews: MovieReview[] = [
  {
    
    movieId: 1234,
    ReviewerName: "John",
    reviewDate: "11/03/2024",
    content: "Great movie, loved the action scenes!",
    rating: 4.5,
  },
  {
    movieId: 1234,
    ReviewerName: "Brian",
    reviewDate: "12/03/2024",
    content: "The plot was a bit predictable, but overall enjoyable.",
    rating: 3.0,
  },
  {
    movieId: 2345,
    ReviewerName : "David",
    reviewDate: "13/03/2024",
    content: "Absolutely loved it! Can't wait for the sequel.",
    rating: 5.0,
  },
];
