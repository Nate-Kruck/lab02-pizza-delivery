class Schedule {
  #schedule = [
    ...Array(480)
  ].fill(false);

  nextOpenTimeSlot() {
    return this.#schedule.indexOf(false);
  }

  clear() {
    
    console.table(this.#schedule);
  }

  print() {
    try {
      console.table(this.#schedule);
      return 'success';

    } catch{
      return 'failed';
    }
  }
}

module.exports = Schedule;
