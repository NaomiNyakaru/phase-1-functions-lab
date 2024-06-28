// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    if (location < 42) {
      return 42 - location;
    } else {
      return location - 42;
    }
  }

  function distanceFromHqInFeet(location){
    const distanceFromHq = distanceFromHqInBlocks(location);
    return distanceFromHq * 264;
    
  }

  function distanceTravelledInFeet(start, end){
    const startDistanceFromHq = distanceFromHqInFeet(start);
    const endDistanceFromHq = distanceFromHqInFeet(end);
    if (startDistanceFromHq > endDistanceFromHq) {
      return startDistanceFromHq - endDistanceFromHq;
    } else {
      return endDistanceFromHq - startDistanceFromHq;
    }

  }

  function calculatesFarePrice(start, destination){
    const distanceTravelled = distanceTravelledInFeet(start, destination);
  if (distanceTravelled > 2500) {
    return 'cannot travel that far';
  } else if (distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled <= 2000) {
    const chargeableDistance = distanceTravelled - 400;
    return chargeableDistance * 0.02;
  } else {
    return 25;
  }
    }
  