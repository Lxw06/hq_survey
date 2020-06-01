// new syntax

// wrtie a function to retrive a blob of json
// make an ajax request, use the fetch fucntion
// fetch API ot function

//https://rallycoding.herokuapp.com/api/music_albums

//fetch only owrks with modern browser, ES2016 rules
// function fetchAlbums() {
//   fetch("https://rallycoding.herokuapp.com/api/music_albums")
//     .then(res => res.json())
//     .then(json => console.log(json));
// }
// different promise

const fetchAlbums = async () => {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await then(res => res.json());
  console.log(json);
};

fetchAlbums();

// aync request, returns a promise ( understood as part of object returned)
