// Given list of tickets with departure and arrival locations, return reconstructed itinerary of all cities, assuming alphabetical order if multiple destinations

// https://leetcode.com/problems/reconstruct-itinerary

var findItinerary = function(tickets) {
  let destinations = {};
  for (let ticket of tickets) {
    if (destinations[ticket[0]] === undefined) {
      destinations[ticket[0]] = tickets
        .filter(e => e[0] === ticket[0])
        .map(e => e[1])
        .sort();
    }
  }

  let output = [];
  function _DFS(node) {
    let itinerary = destinations[node];
    while (itinerary && itinerary.length > 0) {
      _DFS(itinerary.shift());
    }
    output.unshift(node);
  }

  _DFS("JFK");

  return output;
};

module.exports = findItinerary;
