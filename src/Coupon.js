// Observer Interface
class Observer {
  update(message) {}
}
// Subject Class
class CouponSystem {
  constructor() {
    this.observers = [];
  }
  attach(observer) {
    this.observers.push(observer);
  }
  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(message) {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}
// Concrete Observer
class Rider extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }
  update(message) {
    console.log(`${this.name} received a new coupon: ${message}`);
  }
}
// Client Code
const couponSystem = new CouponSystem();
const rider1 = new Rider("John Doe");
const rider2 = new Rider("Jane Doe");
couponSystem.attach(rider1);
couponSystem.attach(rider2);
// Simulate sending a new coupon
couponSystem.notify("20% OFF on your next ride!");

module.exports = { Observer, CouponSystem, Rider };
