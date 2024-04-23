const { Observer, CouponSystem, Rider } = require("../src/Coupon"); // Adjust the path as necessary

describe("Observer Pattern Implementation Tests", () => {
  let couponSystem, rider1, rider2;
  beforeEach(() => {
    couponSystem = new CouponSystem();
    rider1 = new Rider("John Doe");
    rider2 = new Rider("Jane Doe");
    console.log = jest.fn(); // Mocking console.log to track its calls and suppress output
  });

  test("should attach observers correctly", () => {
    couponSystem.attach(rider1);
    couponSystem.attach(rider2);
    expect(couponSystem.observers).toContain(rider1);
    expect(couponSystem.observers).toContain(rider2);
  });

  test("should detach observers correctly", () => {
    couponSystem.attach(rider1);
    couponSystem.detach(rider1);
    expect(couponSystem.observers).not.toContain(rider1);
  });

  test("should notify all observers", () => {
    couponSystem.attach(rider1);
    couponSystem.attach(rider2);
    couponSystem.notify("20% OFF on your next ride!");
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      "John Doe received a new coupon: 20% OFF on your next ride!"
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      "Jane Doe received a new coupon: 20% OFF on your next ride!"
    );
  });
});
