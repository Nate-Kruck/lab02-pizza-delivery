class Order {
  name = 'Nate'
  order = 'pizza';
  deliveryMinute;
  startTime;
  #COOK_TIME = 20;
  #driveDistance;

  constructor(name, deliveryMinute, distance) {
    this.name = name;  
    this.deliveryMinute = deliveryMinute;
    this.#driveDistance = distance;
  }

  get startMinute() {
    return this.deliveryMinute - (this.#COOK_TIME + this.#driveDistance);
  }
}
// will not use methods

module.exports = Order;
