const {
  PaymentProcessor,
  PayPalAPI,
  PaymentProxy,
} = require("../src/PaymentProcessor");

describe("Payment Processing Tests", () => {
  beforeEach(() => {
    console.log = jest.fn(); // Mock console.log to prevent actual logging and to verify calls
  });

  test("PaymentProcessor should throw an error when makePayment is called", () => {
    const processor = new PaymentProcessor();
    expect(() => processor.makePayment(100)).toThrow(
      "Method 'makePayment()' must be implemented."
    );
  });

  test("PayPalAPI should log correct message on payment", () => {
    const paypal = new PayPalAPI();
    paypal.makePayment(100);
    expect(console.log).toHaveBeenCalledWith(
      "Calling PayPal API to process payment of $100"
    );
  });

  test("PaymentProxy should pre-process, call PayPalAPI, and post-process payment", () => {
    const proxy = new PaymentProxy();
    proxy.makePayment(100);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      "PaymentProxy: Pre-processing payment data"
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      "Calling PayPal API to process payment of $100"
    );
    expect(console.log).toHaveBeenNthCalledWith(
      3,
      "PaymentProxy: Post-processing payment data"
    );
  });
});
