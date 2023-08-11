const sinon = require('sinon');
const { expect } = require('chai');

// Function to be tested
function writeCards(names, giftType) {
  return names.map(name => `Thank you, ${name}, for the wonderful ${giftType} gift!`);
}

// Function to be tested
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Test suite
describe('index.js', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  describe('writeCards()', () => {
    it('returns an array of thank you messages for each name provided to the function', () => {
      const messages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
      expect(messages).to.deep.equal([
        "Thank you, Guadalupe, for the wonderful surprise gift!",
        "Thank you, Ollie, for the wonderful surprise gift!",
        "Thank you, Aki, for the wonderful surprise gift!",
      ]);
    });
  });

  describe('countDown()', () => {
    it('invokes console.log once for each number, counting down from the number provided to zero', () => {
      countDown(10);
      expect(spy.callCount, "Expected countDown(10) to invoke 11 console.logs").to.equal(11);
    });

    it('logs each number when counting down, starting from the number provided', () => {
      countDown(4);
      expect(spy.calledWithExactly(4), "Expected countDown(4) to log 4 first").to.be.true;
      expect(spy.calledWithExactly(3), "Expected countDown(4) to log 3 after 4").to.be.true;
      expect(spy.calledWithExactly(2), "Expected countDown(4) to log 2 after 3").to.be.true;
      expect(spy.calledWithExactly(1), "Expected countDown(4) to log 1 after 2").to.be.true;
      expect(spy.calledWithExactly(0), "Expected countDown(4) to log 0 after 1").to.be.true;
    });
  });
});
