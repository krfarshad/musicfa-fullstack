export const artists = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "John Doe is a talented artist known for his unique style and captivating performances.",
    socialMedia: {
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      youtube: "https://youtube.com/johndoe",
    },
    avatarUrl: "https://example.com/avatar/johndoe.jpg",
    genres: [], // Populate with Genre ObjectIDs
    createdAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Jane Smith",
    email: "janesmith@example.com",
    bio: "Jane Smith's music blends classical and modern sounds, creating a unique auditory experience.",
    socialMedia: {
      twitter: "https://twitter.com/janesmith",
      facebook: "https://facebook.com/janesmith",
    },
    avatarUrl: "https://example.com/avatar/janesmith.jpg",
    genres: [], // Populate with Genre ObjectIDs
    createdAt: new Date(),
  },
];

export const musics = [
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Dreamscape",
    artist: artists[0]._id, // Reference to John Doe's ObjectID
    album: null, // Reference to Album ObjectID if available
    genre: null, // Reference to Genre ObjectID if available
    duration: 240, // 4 minutes
    releaseDate: new Date("2022-08-15"),
    url: "https://example.com/music/dreamscape.mp3",
    coverImageUrl: "https://example.com/covers/dreamscape.jpg",
    playCount: 1000,
    likeCount: 250,
    createdAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Sunset Melody",
    artist: artists[1]._id, // Reference to Jane Smith's ObjectID
    album: null, // Reference to Album ObjectID if available
    genre: null, // Reference to Genre ObjectID if available
    duration: 300, // 5 minutes
    releaseDate: new Date("2023-02-10"),
    url: "https://example.com/music/sunsetmelody.mp3",
    coverImageUrl: "https://example.com/covers/sunsetmelody.jpg",
    playCount: 500,
    likeCount: 150,
    createdAt: new Date(),
  },
];

export const playlists = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Chill Vibes",
    description: "A playlist to help you relax and unwind.",
    user: null, // Reference to User ObjectID
    tracks: [music[0]._id], // Array of Music ObjectIDs
    coverImageUrl: "https://example.com/playlists/chillvibes.jpg",
    isPublic: true,
    createdAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Morning Energizers",
    description: "Start your day with these upbeat tunes.",
    user: null, // Reference to User ObjectID
    tracks: [music[1]._id], // Array of Music ObjectIDs
    coverImageUrl: "https://example.com/playlists/morningenergizers.jpg",
    isPublic: true,
    createdAt: new Date(),
  },
];

export const genres = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Ambient",
    description:
      "A genre of music that emphasizes tone and atmosphere over traditional musical structure.",
    popularity: 5000,
    createdAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Pop",
    description:
      "Popular music with wide appeal, typically characterized by a strong rhythm and simple melodies.",
    popularity: 10000,
    createdAt: new Date(),
  },
];

export const notifications = [
  {
    _id: new mongoose.Types.ObjectId(),
    user: null, // Reference to User ObjectID
    message: "Your playlist 'Chill Vibes' has been liked by 20 new users!",
    type: "like",
    read: false,
    link: "https://example.com/playlists/chillvibes",
    createdAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    user: null, // Reference to User ObjectID
    message: "You have a new follower: John Doe.",
    type: "follow",
    read: false,
    link: "https://example.com/users/johndoe",
    createdAt: new Date(),
  },
];

export const users = [
  {
    _id: new mongoose.Types.ObjectId(),
    username: "musiclover123",
    email: "musiclover123@example.com",
    password: "hashed_password", // Ensure this is securely hashed
    avatarUrl: "https://example.com/avatars/musiclover123.jpg",
    likedTracks: [music[0]._id], // Array of liked Music ObjectIDs
    followedArtists: [artists[0]._id], // Array of followed Artist ObjectIDs
    playlists: [playlists[0]._id], // Array of Playlist ObjectIDs
    createdAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "harmonyhunter",
    email: "harmonyhunter@example.com",
    password: "hashed_password", // Ensure this is securely hashed
    avatarUrl: "https://example.com/avatars/harmonyhunter.jpg",
    likedTracks: [music[1]._id], // Array of liked Music ObjectIDs
    followedArtists: [artists[1]._id], // Array of followed Artist ObjectIDs
    playlists: [playlists[1]._id], // Array of Playlist ObjectIDs
    createdAt: new Date(),
  },
];

export const albums = [
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Echoes of Time",
    artist: artists[0]._id, // Reference to John Doe's ObjectID
    releaseDate: new Date("2023-05-01"),
    genre: genres[0]._id, // Reference to Genre ObjectID
    tracks: [music[0]._id], // Array of Music ObjectIDs
    coverImageUrl: "https://example.com/albums/echoesoftime.jpg",
    description:
      "A reflective album that takes you on a journey through the artist's memories.",
    likeCount: 500,
    createdAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Morning Light",
    artist: artists[1]._id, // Reference to Jane Smith's ObjectID
    releaseDate: new Date("2023-08-20"),
    genre: genres[1]._id, // Reference to Genre ObjectID
    tracks: [music[1]._id], // Array of Music ObjectIDs
    coverImageUrl: "https://example.com/albums/morninglight.jpg",
    description:
      "An album filled with uplifting and energetic tracks to start your day.",
    likeCount: 750,
    createdAt: new Date(),
  },
];
