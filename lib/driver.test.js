const Driver = require('./driver');
const Schedule = require('./schedule');

describe('Driver Class', () => {
  it('returns drivers name and currentSchedule', () => {
    const driver = new Driver('Jimbo');

    expect(driver.name).toEqual('Jimbo');
    expect(driver.currentSchedule).toEqual(expect.any(Schedule));
  });
});
