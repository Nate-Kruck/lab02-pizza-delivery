class Schedule {
  #schedule = [
    false, 
    true, 
    true, 
    true
  ]


  nextOpenTimeSlot() {
    const openMinute = this.#schedule.indexOf(false);
    
    return openMinute;
  }
}

module.exports = Schedule;
