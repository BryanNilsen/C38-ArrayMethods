import playlist from './data.js'

// get reference to element on DOM for results output
const mappedList = document.querySelector("#map_test")

// function to convert seconds to time
const secondsToTime = (secs) => {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = (secs % 3600) % 60;
  return { hours, minutes, seconds };
}




// ! forEach()
// *The forEach() method executes a provided function once for each array element.

// playlist.forEach(song => console.log(`${song.song.toUpperCase()} ROCKS`))

// * the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

const rock = playlist.forEach((song) => `${song.song.toUpperCase()} ROCKS`)
// console.log('rock: ', rock);  // --> returns undefined





// ! map()
// * like foreach, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.
// * Generally, map is faster than foreach

// * In this case, I want to create a new array of HTML Representations to render to the DOM with the index of that item included in the ID

const htmlRep = playlist.map((song, index) => `<div id="song--${index}">${song.song} - <em>${song.artist}</em></div>`)
// console.log('htmlRep: ', htmlRep);

// * I can then use that array however I want... in this case, I can iterate over it and render it to the DOM
// htmlRep.forEach(rep => mappedList.innerHTML += rep)


// pass in a function as an argument:
function makeHTML(item) {
  return `<h2>${item.song}</h2>`
}

function renderToDOM(item) {
  mappedList.innerHTML += item
}

const playlistAsHTML = playlist.map(makeHTML)
// playlistAsHTML.forEach(renderToDOM)





// !filter()
// * returns a NEW ARRAY of items that evaluate as true against a certain condition or set of conditions
// * In this case, I want a new array of Song Objects where the artist names are less than or equal to 8 characters

const artistsWithShortNames = playlist.filter(song => song.artist.length <= 8);
// console.log('Songs with Artist Names <= 8 Characters: ', artistsWithShortNames);





// ! CHAINING METHODS
// * In this case, I just want to return a new array of just UNIQUE artist names less than or equal to 8 characters

const justArtistsWithShortNames = new Set(playlist.map(song => song.artist).filter(song => song.length <= 8));
// console.log('Just Artists With Names <= 8 Characters: ', justArtistsWithShortNames);






// ! reduce()
// * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const array = [3, 12, 18, 4, 36, 47]
// console.log("Sum Array:", array.reduce((accumulator, currentValue) => accumulator + currentValue))
// console.log("Difference Array:", array.reduce((accumulator, currentValue) => accumulator - currentValue))
// console.log("Difference Array (Adjusted with Initial Value):", array.reduce((accumulator, currentValue) => accumulator - currentValue, 0))


// * Let's get the total length of the playlist by reducing the song length to one number
// * in this case, I had to provide an initial value [0] since I'm accessing a value on an object
const playlistRuntime = playlist.reduce((acc, crv) => acc + crv.length, 0)
// console.log('playlistRuntime: ', playlistRuntime);

// * you can then use that value in another function
// console.log('Time Converted:', secondsToTime(playlistRuntime))






// ! sort()
// * The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const colorsArray = ["yellow", "blue", "orange", "red", "indigo", "green", "violet"]
// console.log('Sorted Colors Array:', colorsArray.sort())

const numbersArray = [1, 4, 11, 8, 23, 7, 66, 90, 123]
// console.log('Sorted Numbers Array (default):', numbersArray.sort())
// WTF is up with this sorting??

// console.log('Sorted Numbers Array (with Compare Function ):', numbersArray.sort((a, b) => a - b))
// console.log('Sorted Numbers Array (with Compare Function ):', numbersArray.sort((a, b) => b - a))


// * Let's get an array of just song titles and lengths, filter out only the songs that start with an 'h', and sort them by the longest song first

const sorted = playlist.map(song => {
  const newSong = {
    song: song.song,
    length: song.length,
  }
  return newSong
}
).filter(song => song.song.charAt(0).toLowerCase() == 'h').sort((a, b) => b.length - a.length)

// console.log('sorted: ', sorted);