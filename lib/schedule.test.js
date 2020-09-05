const Schedule = require('./schedule');

describe('Schedule class', () => {
  it('should return next available time slot', () => {
    const schedule = new Schedule();

    const openSlot = schedule.nextOpenMinute();

    expect(openSlot).toBe(0);
  });
  
  it('should clear #schedule and make all positions false', () => {
    const schedule = new Schedule();
      
    schedule.clear();
    const openSlot = schedule.nextOpenMinute();
    
    expect(openSlot).toBe(0);
  });

  it('should console.log the schedule', () => {
    const schedule = new Schedule();
    
    const printSchedule = schedule.print();
    
    expect(printSchedule).toBe('success');
  });

  it('should add order to schedule according to startTime and deliveryMinute', () => {
    const schedule = new Schedule();
    
    schedule.addOrder(0, 25);
    const openSlot = schedule.nextOpenMinute();
    
    expect(openSlot).toBe(26);
  });
});
