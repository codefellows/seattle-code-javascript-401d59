const vendorHandler = require("./handler.js");

describe("vendor handler", () => {
  it("should return a payload", () => {
    let sample = {};
    const payload = vendorHandler(sample);

    expect(payload.address).toBeTruthy();
    expect(payload.bananaphone).toBeFalsy();
  });
});
