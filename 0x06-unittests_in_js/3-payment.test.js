const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const {expect} = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
      const spy = sinon.spy(Utils);
      
      sendPaymentRequestToApi(100, 30);
      expect(spy.calculateNumber.calledWith('SUM', 100, 30)).to.be.true;
      expect(spy.calculateNumber.callCount).to.be.equal(1);
      spy.calculateNumber.restore();
    })
})