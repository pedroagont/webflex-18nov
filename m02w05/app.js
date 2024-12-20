console.log('hi');

// PROMISE TO FETCH AND PARSE TEXT
fetch('./pedro.txt')
  .then((res) => res.text())
  .then((data) => console.log(data));

// PROMISE TO FETCH AND PARSE IMG
fetch('./panda.jpg')
  .then((res) => res.blob())
  .then((data) => console.log(data));

// PROMISE TO FETCH AND PARSE LOCAL DATA
fetch('./data.json')
  .then((res) => res.json())
  .then((data) => console.log(data));

// PROMISE TO FETCH AND PARSE EXTERNAL DATA
fetch('https://swapi.py4e.com/api/people/')
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch('https://rickandmortyapi.com/api/character')
  .then((res) => res.json())
  .then((data) => console.log(data));

// TO FETCH MANY PROMISES AT SAME TIME AND ACCESS ALL VALUES
Promise.all([
  fetch('https://swapi.py4e.com/api/people').then((res) => res.json()),
  fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()),
]).then((all) => {
  console.log('all', all);

  const starWarsData = all[0];
  const rickAndMortyData = all[1];

  console.log('starWarsData', starWarsData);
  console.log('rickAndMortyData', rickAndMortyData);
});

// TO FETCH MANY PROMISES AT SAME TIME AT ACCESS THE FIRST THAT RESOLVES
Promise.race([
  fetch('https://swapi.py4e.com/api/people').then((res) => res.json()),
  fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()),
]).then((data) => {
  console.log(data);
});
