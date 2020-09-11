class Schedule {
  #schedule = [
    // 60 = 1hr
    ...Array(60)
  ].fill(false);

  nextOpenMinute() {
    return this.#schedule.indexOf(false);
  }

  clear() {
    try {
      const clearSchedule = this.#schedule.map(minute => {
        minute = false;
        return minute;
      });
      this.#schedule = clearSchedule;
    } catch{
      return 'failed';
    }
  }

  print() {
    try {
    //   console.table(this.#schedule);
      return 'success';
        
    } catch{
      return 'failed';
    }
  }

  addOrder(startTime, deliveryMinute) {
    for(let i = startTime; i <= deliveryMinute; i++){
      this.#schedule[i] = true;
      console.table(this.#schedule);
    }
  }
}

module.exports = Schedule;
