import {Films} from '../types/film';

export const films: Films = [
  {
    id: 1,
    name: 'Aviator',
    posterImage: '../../img/aviator.jpg',
    previewImage: '../../img/aviator.jpg',
    backgroundImage: '',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
    rating: '7,5',
    scoresCount: 346,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale'],
    runTime: 170,
    genre: 'Drama',
    released: 2004,
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    posterImage: '../../img/bohemian-rhapsody.jpg',
    previewImage: '../../img/bohemian-rhapsody.jpg',
    backgroundImage: '',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: '',
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
    rating: '7,9',
    scoresCount: 489,
    director: 'Bryan Singer',
    starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
    runTime: 134,
    genre: 'Biography',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Johnny English',
    posterImage: '../../img/johnny-english.jpg',
    previewImage: '../../img/johnny-english.jpg',
    backgroundImage: '',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: '',
    description: 'After a sudden attack on MI5, Johnny English, Britain\'s most confident, yet unintelligent spy, becomes Britain\'s only spy.',
    rating: '6,2',
    scoresCount: 154,
    director: 'Peter Howitt',
    starring: ['Rowan Atkinson', 'John Malkovich', 'Natalie Imbruglia'],
    runTime: 89,
    genre: 'Action',
    released: 2003,
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Macbeth',
    posterImage: '../../img/macbeth.jpg',
    previewImage: '../../img/macbeth.jpg',
    backgroundImage: '',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: '',
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    rating: '6,6',
    scoresCount: 55,
    director: 'Justin Kurzel',
    starring: ['Michael Fassbender', 'Marion Cotillard', 'Jack Madigan'],
    runTime: 113,
    genre: 'History',
    released: 2015,
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: '../../img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: '../../img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: '',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: '',
    description: 'The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.',
    rating: '6,5',
    scoresCount: 239,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Katherine Waterstone', 'Dan Fogler'],
    runTime: 134,
    genre: 'Fantasy',
    released: 2018,
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Snatch',
    posterImage: '../../img/snatch.jpg',
    previewImage: '../../img/snatch.jpg',
    backgroundImage: '',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: '',
    description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    rating: '8,3',
    scoresCount: 813,
    director: 'Guy Ritchie',
    starring: ['Jason Statham', 'Brad Pitt', 'Stephen Graham'],
    runTime: 104,
    genre: 'Comedy',
    released: 2000,
    isFavorite: true,
  },
  {
    id: 7,
    name: 'War of the Worlds',
    posterImage: '../../img/war-of-the-worlds.jpg',
    previewImage: '../../img/war-of-the-worlds.jpg',
    backgroundImage: '',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: '',
    description: 'Sci-fi action film about an alien invasion threatening the future of humanity. The catastrophic nightmare is depicted through the eyes of one American family fighting for survival.',
    rating: '6,5',
    scoresCount: 430,
    director: 'Steven Spielberg',
    starring: ['Tom Cruise', 'Dakota Fanning', 'Tim Robbins'],
    runTime: 116,
    genre: 'Sci-Fi',
    released: 2005,
    isFavorite: true,
  },
  {
    id: 8,
    name: 'The Revenant',
    posterImage: '../../img/revenant.jpg',
    previewImage: '../../img/revenant.jpg',
    backgroundImage: '',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: '',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    rating: '8,0',
    scoresCount: 744,
    director: 'Alejandro G. Inarritu',
    starring: ['Leonardo DiCaprio', 'Tom Hardy', 'Will Poulter'],
    runTime: 156,
    genre: 'Adventure',
    released: 2015,
    isFavorite: true,
  },
];
