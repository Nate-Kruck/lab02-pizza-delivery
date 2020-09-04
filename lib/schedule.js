class Schedule {
  #schedule = [
    ...Array(480)
  ].fill(false);


  nextOpenTimeSlot() {
    const openMinute = this.#schedule.indexOf(false);
    
    console.log(this.#schedule);
    return openMinute;
  }

  clear() {
    this.#schedule.length = 0;
    console.log(this.#schedule);
  }
}

module.exports = Schedule;
