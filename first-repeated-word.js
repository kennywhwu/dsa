// Given a sentence string, return the first repeated word.  Words can be separated by combinations of space, tabs, and (.;:-,)

function firstRepeatedWord(s) {
  let wordSet = new Set();
  let edited = s.replace(/,|:|;|-|\./g, " ");
  let words = edited.split(" ").filter(word => word !== "");
  for (let word of words) {
    if (wordSet.has(word)) {
      return word;
    } else {
      wordSet.add(word);
    }
  }
}

module.exports = firstRepeatedWord;
