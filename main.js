const playlist = [
  {
    "song": "Heaven and Hell",
    "artist": "Black Sabbath",
    "yearReleased": "1980",
    "length": 419
  },
  {
    "song": "Girls Girls Girls",
    "artist": "Motley Crue",
    "yearReleased": "1987",
    "length": 270
  },
  {
    "song": "Creeping Death",
    "artist": "Metallica",
    "yearReleased": "1984",
    "length": 397
  },
  {
    "song": "Hurt",
    "artist": "Nine Inch Nails",
    "yearReleased": "1994",
    "length": 374
  },
  {
    "song": "Bulls on Parade",
    "artist": "Rage Against the Machine",
    "yearReleased": "1996",
    "length": 233
  },
  {
    "song": "Still of the Night",
    "artist": "Whitesnake",
    "yearReleased": "1986",
    "length": 401
  },
  {
    "song": "The Trooper",
    "artist": "Iron Maiden",
    "yearReleased": "1983",
    "length": 253
  },
  {
    "song": "Walk",
    "artist": "Pantera",
    "yearReleased": "1992",
    "length": 316
  },
  {
    "song": "Fly to the Angels",
    "artist": "Slaughter",
    "yearReleased": "1990",
    "length": 273
  },
  {
    "song": "Back in Black",
    "artist": "AC/DC",
    "yearReleased": "1980",
    "length": 254
  },
  {
    "song": "Fade to Black",
    "artist": "Metallica",
    "yearReleased": "1984",
    "length": 416
  },
  {
    "song": "Ace of Spades",
    "artist": "Motorhead",
    "yearReleased": "1980",
    "length": 170
  },
  {
    "song": "Holy Diver",
    "artist": "Dio",
    "yearReleased": "1983",
    "length": 281
  },
  {
    "song": "Ice Cream Man",
    "artist": "Van Halen",
    "yearReleased": "1978",
    "length": 200
  },
  {
    "song": "The Zoo",
    "artist": "Scorpions",
    "yearReleased": "1980",
    "length": 315
  },
  {
    "song": "Thunderstruck",
    "artist": "AC/DC",
    "yearReleased": "1990",
    "length": 292
  },
  {
    "song": "Epic",
    "artist": "Faith No More",
    "yearReleased": "1989",
    "length": 294
  },
  {
    "song": "Run to the Hills",
    "artist": "Iron Maiden",
    "yearReleased": "1982",
    "length": 415
  },
  {
    "song": "Highway to Hell",
    "artist": "AC/DC",
    "yearReleased": "1979",
    "length": 207
  },
  {
    "song": "Peace Sells",
    "artist": "Megadeth",
    "yearReleased": "1986",
    "length": 246
  },
  {
    "song": "Hot for Teacher",
    "artist": "Van Halen",
    "yearReleased": "1984",
    "length": 286
  },
  {
    "song": "Master of Puppets",
    "artist": "Metallica",
    "yearReleased": "1986",
    "length": 517
  },
  {
    "song": "Blackened",
    "artist": "Metallica",
    "yearReleased": "1988",
    "length": 402
  },
  {
    "song": "Rapid Fire",
    "artist": "Judas Priest",
    "yearReleased": "1980",
    "length": 249
  },
  {
    "song": "Kickstart My Heart",
    "artist": "Motley Crue",
    "yearReleased": "1989",
    "length": 284
  },
  {
    "song": "Ride the Lightning",
    "artist": "Metallica",
    "yearReleased": "1984",
    "length": 397
  },
  {
    "song": "Cemetery Gates",
    "artist": "Pantera",
    "yearReleased": "1990",
    "length": 423
  },
  {
    "song": "Killing in the Name",
    "artist": "Rage Against the Machine",
    "yearReleased": "1991",
    "length": 315
  },
  {
    "song": "Wish",
    "artist": "Nine Inch Nails",
    "yearReleased": "1992",
    "length": 226
  },
  {
    "song": "Home Sweet Home",
    "artist": "Motley Crue",
    "yearReleased": "1985",
    "length": 242
  },
  {
    "song": "War Pigs",
    "artist": "Black Sabbath",
    "yearReleased": "1970",
    "length": 478
  },
  {
    "song": "I'm the One",
    "artist": "Van Halen",
    "yearReleased": "1978",
    "length": 227
  },
  {
    "song": "Victim of Changes",
    "artist": "Judas Priest",
    "yearReleased": "1976",
    "length": 467
  },
  {
    "song": "Hells Bells",
    "artist": "AC/DC",
    "yearReleased": "1980",
    "length": 312
  },
  {
    "song": "Live Wire",
    "artist": "Motley Crue",
    "yearReleased": "1981",
    "length": 196
  },
  {
    "song": "For Whom the Bell Tolls",
    "artist": "Metallica",
    "yearReleased": "1984",
    "length": 310
  },
  {
    "song": "Red Hot",
    "artist": "Motley Crue",
    "yearReleased": "1983",
    "length": 203
  },
  {
    "song": "Freedom",
    "artist": "Rage Against the Machine",
    "yearReleased": "1991",
    "length": 366
  },
  {
    "song": "The Hellion / Electric Eye",
    "artist": "Judas Priest",
    "yearReleased": "1982",
    "length": 219
  }
]

// Get UL element on DOM for output
const bandsList = document.querySelector("#bands")

// ForEach
playlist.forEach(song => console.log(`${song.song} - by ${song.artist}`));

playlist.forEach(song =>
  bandsList.innerHTML +=
  `<li><strong>${song.song}</strong> - ${song.artist} - ${song.yearReleased} <em>(${song.length} seconds)</em> </li>`
);



// Find song from 1982
const songFrom1982 = playlist.find(song => song.yearReleased === "1982");
console.log('Song From 1982: ', songFrom1982);

// Find song with 'hell' in title
const hellSong = playlist.find(song => song.song.toLowerCase().includes("hell"));
console.log('Song with "hell" in title: ', hellSong);



// show results if using Filter instead of Find like above
const hellSongs = playlist.filter(song => song.song.toLowerCase().includes("hell"));
console.log('Songs with "hell" in title: ', hellSongs);


// Filter with/without Sort
const filteredList = playlist
  .filter(song => song.length > 400)

console.table(filteredList);

const filteredListWithSort = playlist
  .filter(song => song.length > 400)
  .sort((a, b) => b.length - a.length);

console.table(filteredListWithSort);