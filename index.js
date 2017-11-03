function produceDrivingRange(range) {
  return function(start, end) {
    const distance = Math.abs(parseInt(end) - parseInt(start));

    if (distance > range) {
      let outOfRange = distance - range
      return `${outOfRange} blocks out of range`
    } else {
      let withinRange = range - distance
      return `within range by ${withinRange}`
    }
  }
}

function produceTipCalculator(percent) {
  return function(total) {
    return total * percent
  }
}
