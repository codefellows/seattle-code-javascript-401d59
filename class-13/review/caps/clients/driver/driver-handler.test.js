const driverHandler = require("./handler.js");

describe("Driver handler", () => {
  it("should return transit emit and console.log", () => {
    const emitter = {
      emit: jest.fn(),
    };
    const payload = { orderID: 123 };
    console.log = jest.fn();

    driverHandler.transit(emitter, payload);

    expect(emitter.emit).toHaveBeenCalledWith("inTransit", payload);
    expect(console.log).toHaveBeenCalledWith("DRIVER", "picked up", 123);
  });

  it("should return delivered emit and console.log", () => {
    const emitter = {
      emit: jest.fn(),
    };
    const payload = { orderID: 321 };
    console.log = jest.fn();

    driverHandler.delivered(emitter, payload);

    expect(emitter.emit).toHaveBeenCalledWith("delivered", payload);
    expect(console.log).toHaveBeenCalledWith("DRIVER", "delivered", 321);
  });
});
