const firstRepeatedWord = require("./first-repeated-word");

describe("firstRepeatedWord", () => {
  it("should return first repeated word in sentence", () => {
    expect(
      firstRepeatedWord("He had had quite enough of this nonsense.")
    ).toEqual("had");
    expect(
      firstRepeatedWord("He  had;had.quite .;enough-of this nonsense.")
    ).toEqual("had");
    expect(firstRepeatedWord(".:,-.;  .;o;.,oo,.;-;       o")).toEqual("o");
    expect(firstRepeatedWord("a aa  aaa a aa a bbb")).toEqual("a");
  });
});
