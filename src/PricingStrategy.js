class PricingStrategy {
  calculatePrice(info) {
    throw new Error("This method should be implemented");
  }
}

class NormalPricingStrategy extends PricingStrategy {
  calculatePrice(info) {
    // Basic pricing logic
    return info.basePrice;
  }
}
class HighDemandPricingStrategy extends PricingStrategy {
  calculatePrice(info) {
    // Pricing logic for high demand
    return info.basePrice * 1.5; // 50% higher in high demand
  }
}

class RideService {
  constructor() {
    this.strategy = new NormalPricingStrategy(); // Default strategy
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  calculatePrice(info) {
    return this.strategy.calculatePrice(info);
  }
}

const rideService = new RideService();
const rideInfo = { basePrice: 10 }; // Example ride information
console.log("Normal Pricing:", rideService.calculatePrice(rideInfo));
// The demand increases, and we switch to a high-demand pricing strategy
rideService.setStrategy(new HighDemandPricingStrategy());
console.log("High Demand Pricing:", rideService.calculatePrice(rideInfo));

module.exports = {
  PricingStrategy,
  NormalPricingStrategy,
  HighDemandPricingStrategy,
  RideService,
};
