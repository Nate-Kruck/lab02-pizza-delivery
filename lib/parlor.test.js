const Parlor = require('./parlor');
const Driver = require('./driver');
const Order = require('./order-info');

describe('Parlor class', () => {
  it('can add drivers', () => {
    const parlor = new Parlor();
    const driver = new Driver('Jimbo');

    parlor.addDriver(driver);
  });

});
