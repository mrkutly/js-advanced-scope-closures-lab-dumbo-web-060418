function produceDrivingRange(num){
  return function(a, b){
    const distance = parseInt(b) - parseInt(a)

    if(distance <= num){
      return `within range by ${num - distance}`
    } else {
      return `${distance - num} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare * percent
  }
}

function createDriver(){
  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
