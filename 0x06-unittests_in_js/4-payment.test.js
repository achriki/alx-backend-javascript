const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const {expect} = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
      const spy = sinon.spy(console);
      const dummy = sinon.stub(Utils, 'calculateNumber');

      dummy.returns(10);
      sendPaymentRequestToApi(100, 20);
      expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
      expect(dummy.callCount).to.be.equal(1);
      expect(spy.log.calledWith('The total is: 10')).to.be.true;
      expect(spy.log.callCount).to.be.equal(1);
      dummy.restore();
      spy.log.restore();
    })
})