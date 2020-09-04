class Order {
  name = 'Nate'
  order = 'pizza';
  deliveryMinute;
  startTime;
  #COOK_TIME = 20;
  #driveDistance;

  constructor(deliveryMinute, distance) {
    this.name = 'Nate';  
    this.deliveryMinute = deliveryMinute;
    this.#driveDistance = distance;
    this.startTime =
      this.deliveryMinute - (this.#COOK_TIME + this.#driveDistance);
  }
}
// will not use methods

module.exports = Order;
