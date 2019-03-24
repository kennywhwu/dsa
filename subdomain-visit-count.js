// Given an array of visits to specific domains, return cumulative visits to every combination of subdomains

// https://leetcode.com/problems/subdomain-visit-count/

function subdomainVisits(cpdomains) {
  let visitRef = {};
  for (let domain of cpdomains) {
    let [visits, url] = domain.split(" ");
    let urlArray = url.split(".");
    visitRef[url] = visitRef[url] + +visits || +visits;
    if (urlArray.length === 2) {
      visitRef[urlArray[1]] = visitRef[urlArray[1]] + +visits || +visits;
    } else if (urlArray.length === 3) {
      visitRef[urlArray[2]] = visitRef[urlArray[2]] + +visits || +visits;
      visitRef[urlArray.slice(1).join(".")] =
        visitRef[urlArray.slice(1).join(".")] + +visits || +visits;
    }
  }
  let output = [];
  for (let key in visitRef) {
    output.push([visitRef[key], key].join(" "));
  }
  return output;
}

module.exports = subdomainVisits;
