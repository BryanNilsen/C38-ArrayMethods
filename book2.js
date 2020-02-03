// Get UL element on DOM for output
const bandsList = document.querySelector("#bands")

// ForEach
// playlist.forEach(item => console.log(`${item.song} - by ${item.artist}`));
playlist.forEach(song => bandsList.innerHTML += `<li><strong>${song.song}</strong> - ${song.artist} - ${song.yearReleased} <em>(${song.length} seconds)</em> </li>`);

// Find song from 1982
const songFrom1982 = playlist.find(song => song.yearReleased === "1982");
console.log('Song From 1982: ', songFrom1982);

// Find song with 'hell' in title
const hellSong = playlist.find(song => song.song.toLowerCase().includes("hell"));
console.log('Song with "hell" in title: ', hellSong);

// show results if using Filter instead of Find like above
const hellSongs = playlist.filter(song => song.song.toLowerCase().includes(" hell"));
console.log('Songs with "hell" in title: ', hellSongs);

// Filter with / without Sort (read the docs on .sort and don't freak out)
const filteredList = playlist
  .filter(song => song.length > 400)

console.table(filteredList);

const filteredListWithSort = playlist
  .filter(song => song.length > 400)
  .sort((a, b) => b.length - a.length);

console.table(filteredListWithSort);