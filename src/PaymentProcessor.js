class PaymentProcessor {
  makePayment(amount) {
    throw new Error("Method 'makePayment()' must be implemented.");
  }
}
// Concrete Implementation of PayPalAPI (Real Subject)
class PayPalAPI extends PaymentProcessor {
  makePayment(amount) {
    console.log(`Calling PayPal API to process payment of $${amount}`);
  }
}
// Proxy Class
class PaymentProxy extends PaymentProcessor {
  constructor() {
    super();
    this.paypal = new PayPalAPI();
  }
  makePayment(amount) {
    // Add logic here (e.g., input validation, logging)
    console.log("PaymentProxy: Pre-processing payment data");
    this.paypal.makePayment(amount);
    console.log("PaymentProxy: Post-processing payment data");
  }
}
// Client Code
const paymentProxy = new PaymentProxy();
paymentProxy.makePayment(100);

module.exports = { PaymentProcessor, PayPalAPI, PaymentProxy };
