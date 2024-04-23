// Define the template class
class CarServiceTemplate {
    constructor() {
      if (new.target === CarServiceTemplate) {
        throw new Error('Abstract class "CarServiceTemplate" cannot be instantiated directly.');
      }
    }
  
    provideService() {
      this.bookVehicle();
      this.arrangeRide();
      this.processPayment();
      this.additionalService();
    }
  
    bookVehicle() {
      console.log('Vehicle booked as per basic service level.');
    }
  
    arrangeRide() {
      console.log('Ride has been arranged.');
    }
  
    processPayment() {
      console.log('Payment has been processed.');
    }
  
    additionalService() {
      // Default to no additional service
    }
  }
  
  // Extend the template class for carGo service
  class CarGoService extends CarServiceTemplate {
    bookVehicle() {
      console.log('Hatchback vehicle booked as per carGo service level.');
    }
  
    additionalService() {
      console.log('Complimentary water bottle provided for carGo service.');
    }
  }
  
  // Extend the template class for carEATS service
  class CarEATSService extends CarServiceTemplate {
    arrangeRide() {
      console.log('Meal delivery ride has been arranged.');
    }
  
    processPayment() {
      console.log('Payment has been processed for carEATS service.');
    }
  
    additionalService() {
      console.log('Meal has been picked up from the restaurant and is en route.');
    }
  }
  
  // Client code for carGo service
  const carGoService = new CarGoService();
  carGoService.provideService();
  
  // Client code for carEATS service
  const carEATSService = new CarEATSService();
  carEATSService.provideService();
  
  // Export the classes for external use if necessary
  module.exports = { CarServiceTemplate, CarGoService, CarEATSService };
  