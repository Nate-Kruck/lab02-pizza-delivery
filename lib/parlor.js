class Parlor {
    #drivers = [];
    #order = [];

    #clearDriversSchedule() {
      this.#drivers
        .forEach(driver => driver.currentSchedul.clear());
    }

    #calculateSchedule() {
      this.#clearDriversSchedule;
    }

    addDriver(driver) {
      this.#drivers.push(driver);
      this.#calculateSchedule();
    }

    addOrder(order) {
      this.#order.push(order);
      this.#calculateSchedule();
    }
}

module.exports = Parlor;
