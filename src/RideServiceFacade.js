// Strategies for different types of car services
class CarPOOLStrategy {
    calculateFee(distance) {
      return distance * 0.5; // Example calculation for carPOOL
    }
  }
  
  class CarXStrategy {
    calculateFee(distance) {
      return distance * 1.0; // Example calculation for CarX
    }
  }
  
  class CarBlackStrategy {
    calculateFee(distance) {
      return distance * 1.5; // Example calculation for CarBlack
    }
  }
  
  // Facade to hide the complexities of the strategies
  class RideFacade {
    constructor() {
      this.carPOOL = new CarPOOLStrategy();
      this.carX = new CarXStrategy();
      this.carBlack = new CarBlackStrategy();
    }
  
    calculateFee(serviceType, distance) {
      switch (serviceType) {
        case 'carPOOL':
          return this.carPOOL.calculateFee(distance);
        case 'carX':
          return this.carX.calculateFee(distance);
        case 'carBlack':
          return this.carBlack.calculateFee(distance);
        default:
          throw new Error('Invalid service type');
      }
    }
  }
  
  // Client code that uses the facade
  const facade = new RideFacade();
  const distance = 10; // Example distance
  console.log('carPOOL Fee:', facade.calculateFee('carPOOL', distance));
  console.log('carX Fee:', facade.calculateFee('carX', distance));
  console.log('carBlack Fee:', facade.calculateFee('carBlack', distance));
  
  // Export the RideFacade for testing purposes
  module.exports = { RideFacade, CarPOOLStrategy, CarXStrategy, CarBlackStrategy };
  