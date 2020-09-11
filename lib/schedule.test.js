const Schedule = require('./schedule');
const Order = require('./order-info');

describe('Schedule class', () => {
  it('should return next available time slot', () => {
    const schedule = new Schedule();

    const openSlot = schedule.nextOpenMinute();

    expect(openSlot).toEqual(0);
  });
  
  it('should clear #schedule and make all positions false', () => {
    const schedule = new Schedule();
    const openSlot = schedule.nextOpenMinute();
      
    schedule.clear();
    
    expect(openSlot).toEqual(0);
  });

  it('should console.log the schedule', () => {
    console.table = jest.fn();
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    schedule.print();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 40, status: 'busy' },
      { start: 41, end: 1439, status: 'free' }
    ]);
  });

  it('should add order to schedule according to startTime and deliveryMinute', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);
    
    expect(schedule.nextOpenMinute()).toEqual(41);
  });

  it('should add order to schedule according to startTime and deliveryMinute', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    schedule.clear();
    
    expect(schedule.nextOpenMinute()).toEqual(0);
  });
});
