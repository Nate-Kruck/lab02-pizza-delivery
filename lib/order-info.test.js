const Order = require('./order-info');

describe('Order Class', () => {
  it('returns what time to start making pizza', () => {
    const order = new Order(40, 10, 'name');

    expect(order.startTime).toBe(10);
    expect(order.name).toBe('Nate');
  });
});
