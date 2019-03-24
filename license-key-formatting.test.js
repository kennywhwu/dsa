const licenseKeyFormatting = require("./license-key-formatting");

describe("licenseKeyFormatting", () => {
  it("should return string of uppercase characters split by '-' for every K number", () => {
    expect(
      licenseKeyFormatting("e7d-2hejDJ-4ht8DSHu-ewio2-Fiu-e-82392S", 2)
    ).toEqual("E7-D2-HE-JD-J4-HT-8D-SH-UE-WI-O2-FI-UE-82-39-2S");
    expect(licenseKeyFormatting("5F3Z-2e-9-w", 4)).toEqual("5F3Z-2E9W");
    expect(licenseKeyFormatting("5F3Z-2e-9-we", 4)).toEqual("5-F3Z2-E9WE");
    expect(licenseKeyFormatting("2-5g-3-J", 2)).toEqual("2-5G-3J");
  });
});
