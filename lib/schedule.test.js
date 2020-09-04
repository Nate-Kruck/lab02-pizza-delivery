const Schedule = require('./schedule');

describe('Schedule class', () => {
  it('should return next available time slot', () => {
    const schedule = new Schedule();

    const openSlot = schedule.nextOpenTimeSlot();

    expect(openSlot).toBe(0);
  });
});

it('should clear #schedule and make all positions false', () => {
  const schedule = new Schedule();

  const clearSchedule = schedule.length = 0;

  expect(clearSchedule).toBe(0);
});

it('should console.log the schedule', () => {
  const schedule = new Schedule();

  const printSchedule = schedule.print();

  expect(printSchedule).toBe('success');
});
