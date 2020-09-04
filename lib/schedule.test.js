const Schedule = require('./schedule');

describe('Schedule class', () => {
  it('should return next available time slot', () => {
    const schedule = new Schedule();

    const openSlot = schedule.nextOpenTimeSlot();

    expect(openSlot).toBe(0);
  });
});
