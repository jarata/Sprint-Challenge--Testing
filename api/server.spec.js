const request = require('supertest');
const server = require('./server');

describe('server.js', async () => {
    describe('GET /', async () => {
        it('should return Test!', async () => {
            const res = await request(server).get('/');
            expect(res.send).toBe('Test!')
        })
    })
    describe('GET /games', async () => {
        it('should return 200', async () => {
            const res = await request(server).get('/games');
            expect(res.status).toBe(200);
        });
        it('should return an array', async () => {
            const res = await request(server).get('/games');
            expect()
        });
        it('should return JSON', async () => {
            const res = await request(server).get('/games');
            expect(res.type).toBe('application/json')
        });
    })
    describe('POST /games', async () => {
        it('should return 422 if fields are incomplete', async () => {

        })
        it('should return 200', async)
    })
})