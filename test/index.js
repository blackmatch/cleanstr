const chai = require('chai');
const expect = chai.expect;
const cleaner = require('../index');

describe('cleanstr test', function() {
  this.timeout(5 * 60 * 1000);
  const sampleStr = '\u0008123\u200B';
  
  it('#clean, string\'s length should be 4', () => {
    expect(cleaner.clean(sampleStr).length).to.equal(4);
  });

  it('#clean, invalid string', () => {
    expect(cleaner.clean(undefined)).to.equal(undefined);
  });

  it('#cleanZero, string\'s length should be 4', () => {
    expect(cleaner.cleanZero(sampleStr).length).to.equal(4);
  });

  it('#cleanZero, invalid string', () => {
    expect(cleaner.cleanZero(undefined)).to.equal(undefined);
  });

  it('#cleanAll, string\'s length should be 3', () => {
    expect(cleaner.cleanAll(sampleStr).length).to.equal(3);
  });

  it('#cleanAll, invalid string', () => {
    expect(cleaner.cleanAll(undefined)).to.equal(undefined);
  });

  it('#cleanCostem, string\'s length should be 3', () => {
    expect(cleaner.cleanCustom(sampleStr, '\u0008\u200B').length).to.equal(3);
  });

  it('#cleanCostem, invalid string', () => {
    expect(cleaner.cleanCustom(undefined, '\u200B')).to.equal(undefined);
  });
});