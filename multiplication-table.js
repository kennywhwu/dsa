// Given number, return 2D array of multiplication table of size n x n

function multiTable(num) {
  let outputArr = [];
  for (let i = 1; i <= num; i++) {
    let row = [];
    for (let j = 1; j <= num; j++) {
      row.push(i * j);
    }
    outputArr.push(row);
  }
  return outputArr;
}

module.exports = multiTable;
