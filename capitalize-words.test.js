const capitalize = require("./capitalize-words");

describe("capitalize", () => {
  it("should return capitalized words", () => {
    expect(capitalize("capitalize this")).toEqual("Capitalize This");
  });
});
