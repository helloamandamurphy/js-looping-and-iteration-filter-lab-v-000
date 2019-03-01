function findMatching (drivers, name) { //creating a function that accepts an array of drivers and a string argument name.
  return drivers.filter(function (matching) { //defines a second function inside the first function
    return matching.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, partialName) {
  return drivers.filter(function (partialMatch) {
    return partialMatch.slice(0, (partialName.length)) === partialName;
  });
}

function matchName() {
  
}