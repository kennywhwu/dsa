// Given a string, return list of all unique permutations

function permutations(s) {
  let permutationSet = new Set();

  function _DFS(str, seen) {
    if (str.length === s.length) permutationSet.add(str);
    for (let i = 0; i < s.length; i++) {
      if (seen[i]) continue;
      seen[i] = true;
      _DFS(str + s[i], seen);
      seen[i] = false;
    }
  }
  _DFS("", []);
  return Array.from(permutationSet);
}

module.exports = permutations;
