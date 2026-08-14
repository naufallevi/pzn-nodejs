import { sumAll } from "../src/sum";

describe("ketika function sumAll dipanggil", () => {
  it("seharusnya mendapatkan nilai 50", () => {
    expect(sumAll([10, 10, 10, 10, 10])).toBe(50);
  });
});
