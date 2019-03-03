// Given number of boxes and max number to carry at once, return string of order of boxes to carry in as few trips as possible while distributing load as equally as possible

function carry(boxes, max) {
  if (boxes <= max) return boxes.toString();
  let order = [];
  let trips = Math.ceil(boxes / max);
  if (boxes % max === 0) {
    for (let i = 0; i < trips; i++) {
      order.push(max);
    }
  } else {
    let base = Math.floor(boxes / trips);
    for (let i = 0; i < trips; i++) {
      order.push(base);
    }
    let remainder = boxes - trips * base;
    for (let i = 0; i < remainder; i++) {
      order[i] += 1;
    }
  }
  let result = order.join(",");
  return result;
}

module.exports = carry;
