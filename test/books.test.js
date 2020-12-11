const request = require('supertest');
const app = require('./../server');
var assert = require('assert'); 

/**
 * Testing get books
 */
describe('GET /api/books', function () {
    it('respond with all the books', function (done) {
        request(app)
            .get('/api/books')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

/**
 * Testing get books by id
 */
describe('GET /api/books/:id', function () {
    it('respond with particular book', function (done) {
        request(app)
            .get('/api/books/5fcee759a0d5fa8fd21c0146')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, response) {
                if (err) { return done(err); }
                assert.strictEqual(response.status, 200);
                assert.strictEqual(response.body.title, 'grey');
                done();
            });
     });
});