const express = require('express');
const server = express();

server.use(express.json());

let games = [
    {
        id: 1,
        title: 'Pacman', // required
        genre: 'Arcade', // required
        releaseYear: 1980 // not required
    },
    {
        id: 2,
        title: 'Donkey Kong', // required
        genre: 'Arcade', // required
        releaseYear: 1981 // not required
    }
];

server.get('/', async  (req, res) => {
    res.send('Test!')
});

module.exports = server;