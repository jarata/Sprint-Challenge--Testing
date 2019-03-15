const express = require('express');
const server = express();

server.use(express.json());

let games = [
    {
        id: 1,
        title: 'Pacman', // required
        genre: 'Arcade', // required
        releaseYear: 1980 // not required
    }
];

server.get('/', async  (req, res) => {
    res.send('Test!')
});

server.get('/games', async (req, res) => {
    try {
        let game = await games;
        res.status(200).json(game);
    } catch (e) {
        res.status(500).json(e)
    }
})

server.post('/games', async (req, res) => {

})
module.exports = server;