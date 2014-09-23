var heroes = [
  'Avengers',
  'Iron Man',
  'Captain America',
  'Hulk',
  'Spider-Man',
  'Thor',
  'X-Men',
  'Storm',
  'Fantastic Four',
  'Black Widow',
  'S.H.I.E.L.D.',
  'Guardians of the Galaxy'
];

function random() {
  return heroes[Math.floor(Math.random() * heroes.length)];
}

random.list = heroes;

module.exports = random;
