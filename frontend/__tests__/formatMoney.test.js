import formatMoney from "../lib/formatMoney";

describe("formatMoney Function", () => {
  it("works with fractional dollars", () => {
    expect(formatMoney(1)).toEqual("$0.01");
    expect(formatMoney(20)).toEqual("$0.20");
    expect(formatMoney(7)).toEqual("$0.07");
    expect(formatMoney(60)).toEqual("$0.60");
  });

  it("leaves cents off for whole dollars", () => {
    expect(formatMoney(4000)).toEqual("$40");
    expect(formatMoney(200)).toEqual("$2");
    expect(formatMoney(20000000)).toEqual("$200,000");
  });

  it("works with whole and fractional dollars", () => {
    expect(formatMoney(5012)).toEqual("$50.12");
    expect(formatMoney(101)).toEqual("$1.01");
    expect(formatMoney(110)).toEqual("$1.10");
    expect(formatMoney(379827948729492938)).toEqual(
      "$3,798,279,487,294,929.50"
    );
  });
});
