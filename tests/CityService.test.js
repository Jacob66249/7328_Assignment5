//CityService test case
const { BasicCityService, FeaturesOptionsA, FeaturesOptionsB, FeaturesOptionsC } = require('../src/CityService');

describe('CityService Tests', () => {
  test('BasicCityService should return expected service', () => {
    const basicCityService = new BasicCityService();
    const result = basicCityService.getService();
    const expected = "Basic City Service";

    console.log("Result:", result); 
    expect(result).toBe(expected);
  });

  test('FeaturesOptionsA should add Feature A to service', () => {
    const basicCityService = new BasicCityService();
    const cityServiceWithFeatureA = new FeaturesOptionsA(basicCityService);
    const result = cityServiceWithFeatureA.getService();
    const expected = "Basic City Service with Feature A";

    console.log("Result with Feature A:", result); 
    expect(result).toBe(expected);
  });

  test('FeaturesOptionsB should add Feature B to service', () => {
    const basicCityService = new BasicCityService();
    const cityServiceWithFeatureA = new FeaturesOptionsA(basicCityService);
    const cityServiceWithFeatureAAndB = new FeaturesOptionsB(cityServiceWithFeatureA);
    const result = cityServiceWithFeatureAAndB.getService();
    const expected = "Basic City Service with Feature A with Feature B";

    console.log("Result with Feature B:", result); 
    expect(result).toBe(expected);
  });

  test('FeaturesOptionsC should add Feature C to service', () => {
    const basicCityService = new BasicCityService();
    const cityServiceWithFeatureA = new FeaturesOptionsA(basicCityService);
    const cityServiceWithFeatureAAndB = new FeaturesOptionsB(cityServiceWithFeatureA);
    const cityServiceWithAllFeatures = new FeaturesOptionsC(cityServiceWithFeatureAAndB);
    const result = cityServiceWithAllFeatures.getService();
    const expected = "Basic City Service with Feature A with Feature B with Feature C";

    console.log("Result with Feature C:", result); 
    expect(result).toBe(expected);
  });
});
