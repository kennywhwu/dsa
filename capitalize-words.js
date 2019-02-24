// Return sentence with all words capitalized

function capitalize(words) {
  return words
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

module.exports = capitalize;
