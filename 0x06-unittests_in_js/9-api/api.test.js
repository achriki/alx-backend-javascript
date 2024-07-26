const request = require('request');
const {expect} = require('chai');

describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    it('GET / correct response',(done) => {
        request.get(`${API_URL}/`,(_err, res, body)=> {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        })

    })

    it('GET /cart/:id correct status & response for valid ids', (done) => {
        request.get(`${API_URL}/cart/12`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal(`Payment methods for cart :12`);
            done();
        })
    })

    it('GET /cart/:id correct status & response for invalid numerical ids (404)', (done) => {
        request.get(`${API_URL}/cart/-12`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        })
    })

    it('GET /cart/:id correct status & response for invalid non-numerical ids (404)', (done) => {
        request.get(`${API_URL}/cart/hello-3232`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        })
    })
})