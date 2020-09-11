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
}

module.exports = Parlor;
