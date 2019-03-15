const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    describe('GET /', () => {
        it('should return Test!', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.send).toBe('Test!')
                })
        })
    })
})