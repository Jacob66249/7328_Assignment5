// Assuming the above classes are in a file named 'RideService.js'
const { RideFacade } = require('../src/RideServiceFacade');


describe('RideFacade', () => {
  let facade;
  beforeAll(() => {
    facade = new RideFacade();
  });

  test('carPOOL fee calculation', () => {
    expect(facade.calculateFee('carPOOL', 10)).toBe(5);
  });

  test('carX fee calculation', () => {
    expect(facade.calculateFee('carX', 10)).toBe(10);
  });

  test('carBlack fee calculation', () => {
    expect(facade.calculateFee('carBlack', 10)).toBe(15);
  });

  test('invalid service type handling', () => {
    expect(() => facade.calculateFee('invalid', 10)).toThrow('Invalid service type');
  });
});
