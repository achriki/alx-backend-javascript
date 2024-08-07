const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const {expect} = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
      if (!spy) {
        spy = sinon.spy(console);
      }
    });
  
    afterEach(() => {
      spy.log.resetHistory();
    });

    it('sendPaymentRequestToAPI with 100, and 20', () => {
      sendPaymentRequestToApi(100, 20);
      expect(spy.log.calledWith('The total is: 120')).to.be.true;
      expect(spy.log.callCount).to.be.equal(1);
    });

    it('sendPaymentRequestToAPI with 10, and 10', () => {
      sendPaymentRequestToApi(10, 10);
      expect(spy.log.calledWith('The total is: 20')).to.be.true;
      expect(spy.log.callCount).to.be.equal(1)
    });
})