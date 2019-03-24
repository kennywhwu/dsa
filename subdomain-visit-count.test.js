const subdomainVisits = require("./subdomain-visit-count");

describe("subdomainVisits", () => {
  it("should return list of cumulative visits to each combination of subdomains", () => {
    expect(subdomainVisits(["9001 discuss.leetcode.com"])).toEqual([
      "9001 discuss.leetcode.com",
      "9001 com",
      "9001 leetcode.com",
    ]);
    expect(
      subdomainVisits([
        "900 google.mail.com",
        "50 yahoo.com",
        "1 intel.mail.com",
        "5 wiki.org",
      ])
    ).toEqual([
      "900 google.mail.com",
      "951 com",
      "901 mail.com",
      "50 yahoo.com",
      "1 intel.mail.com",
      "5 wiki.org",
      "5 org",
    ]);
  });
});
