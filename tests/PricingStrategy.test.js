const {
  RideService,
  NormalPricingStrategy,
  HighDemandPricingStrategy,
} = require("../src/PricingStrategy"); // Ensure you export your classes properly

describe("RideService Pricing Strategies", () => {
  let rideService;
  let rideInfo = { basePrice: 10 };

  beforeEach(() => {
    rideService = new RideService();
  });

  test("Normal Pricing Strategy calculates correct price", () => {
    // Use the normal pricing strategy
    rideService.setStrategy(new NormalPricingStrategy());
    const price = rideService.calculatePrice(rideInfo);
    expect(price).toEqual(10); // As per NormalPricingStrategy logic
  });

  test("High Demand Pricing Strategy calculates correct price", () => {
    // Switch to high-demand pricing strategy
    rideService.setStrategy(new HighDemandPricingStrategy());
    const price = rideService.calculatePrice(rideInfo);
    expect(price).toEqual(15); // 10 * 1.5 according to HighDemandPricingStrategy
  });

  test("RideService should switch strategies correctly", () => {
    // Initially use normal pricing
    rideService.setStrategy(new NormalPricingStrategy());
    let price = rideService.calculatePrice(rideInfo);
    expect(price).toEqual(10);

    // Switch to high-demand pricing and check again
    rideService.setStrategy(new HighDemandPricingStrategy());
    price = rideService.calculatePrice(rideInfo);
    expect(price).toEqual(15);
  });
});
