const { CarGoService, CarEATSService } = require('../src/CarServiceTemplate');

describe('Car Services Tests', () => {
  
  beforeEach(() => {
    console.log = jest.fn(); // Mock console.log before each test
  });

  describe('CarGoService', () => {
    test('it should provide all steps for carGo service', () => {
      const carGo = new CarGoService();

      carGo.provideService();

      expect(console.log).toHaveBeenCalledWith('Hatchback vehicle booked as per carGo service level.');
      expect(console.log).toHaveBeenCalledWith('Ride has been arranged.');
      expect(console.log).toHaveBeenCalledWith('Payment has been processed.');
      expect(console.log).toHaveBeenCalledWith('Complimentary water bottle provided for carGo service.');
    });
  });

  describe('CarEATSService', () => {
    test('it should provide all steps for carEATS service', () => {
      const carEATS = new CarEATSService();

      carEATS.provideService();

      expect(console.log).toHaveBeenCalledWith('Meal delivery ride has been arranged.');
      expect(console.log).toHaveBeenCalledWith('Payment has been processed for carEATS service.');
      expect(console.log).toHaveBeenCalledWith('Meal has been picked up from the restaurant and is en route.');
    });
  });

});
