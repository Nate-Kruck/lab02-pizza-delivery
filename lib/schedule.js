class Schedule {
  #schedule = [
    ...Array(480)
  ].fill(false);


  nextOpenTimeSlot() {
    const openMinute = this.#schedule.indexOf(false);
    
    return openMinute;
  }

  clear() {
    this.#schedule.length = 0;
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
