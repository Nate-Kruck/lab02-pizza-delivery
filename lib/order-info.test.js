const Order = require('./order-info');

describe('Order Class', () => {
  it('returns what time to start making pizza', () => {
    const order = new Order('pizza order', 50, 20);

    expect(order.deliveryMinute).toEqual(50);
    expect(order.name).toEqual('pizza order');
  });

  it('has a startMinute', () => {
    const order = new Order('pizza order', 50, 20);
    expect(order.startMinute).toEqual(10);
  });
});
