// Given a number and sentence string, return a string with the words equally padded out with space so total string length equal to passed in numnber

function padNumber(num, s) {
  let strLength = s.length;
  let words = s.split(" ");
  let numWords = words.length;
  let paddingTarget = num - strLength + (numWords - 1);
  let spacePerWord = Math.floor(paddingTarget / (numWords - 1));
  let additionalSpaces = paddingTarget % (numWords - 1);
  let space = "";
  for (let i = 0; i < spacePerWord; i++) {
    space += " ";
  }
  for (let i = 0; i < additionalSpaces; i++) {
    words[i] += " ";
  }
  let outputStr = words.join(space);

  return outputStr;
}

module.exports = padNumber;
