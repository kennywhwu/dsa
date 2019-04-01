const findItinerary = require("./reconstruct-itinerary");

describe("findItinerary", () => {
  it("should return list of cities on itinerary", () => {
    expect(
      findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]])
    ).toEqual(["JFK", "NRT", "JFK", "KUL"]);
    expect(
      findItinerary([
        ["MUC", "LHR"],
        ["JFK", "MUC"],
        ["SFO", "SJC"],
        ["LHR", "SFO"],
      ])
    ).toEqual(["JFK", "MUC", "LHR", "SFO", "SJC"]);
    expect(
      findItinerary([
        ["JFK", "SFO"],
        ["JFK", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "JFK"],
        ["ATL", "SFO"],
      ])
    ).toEqual(["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]);
  });
});
