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

    it('POST /login correct status & response ', (done) => {
        request.post(`${API_URL}/login`,{json:{userName: 'adam'}}, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome adam');
            done();
        })
    })

    it('GET /available_payments returns valid response ', (done) => {
        request.get(`${API_URL}/available_payments`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(JSON.parse(body)).to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
            done();
        })
    })
})