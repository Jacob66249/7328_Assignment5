// Base class for Car
class Car {
    displayFeatures() {
        throw new Error("This method should be implemented by subclasses");
    }

    calculateFare(distance) {
        throw new Error("This method should be implemented by subclasses");
    }
}

// Subclasses for each car type
class NormalCar extends Car {
    displayFeatures() {
        return "Normal Car with basic features";
    }

    calculateFare(distance) {
        return 2.0 * distance;
    }
}

class LuxuryBlackCar extends Car {
    displayFeatures() {
        return "Luxury Black Car with premium features";
    }

    calculateFare(distance) {
        return 5.0 * distance;
    }
}

class SUV extends Car {
    displayFeatures() {
        return "SUV with enhanced features for rough terrains";
    }

    calculateFare(distance) {
        return 3.0 * distance;
    }
}

class WheelchairAccessibleCar extends Car {
    displayFeatures() {
        return "Wheelchair Accessible Transport with special features";
    }

    calculateFare(distance) {
        return 3.5 * distance;
    }
}

// CarFactory class to create Car instances
class CarFactory {
    getCar(carType) {
        switch (carType) {
            case 'normal':
                return new NormalCar();
            case 'luxury':
                return new LuxuryBlackCar();
            case 'suv':
                return new SUV();
            case 'wheelchair':
                return new WheelchairAccessibleCar();
            default:
                throw new Error("Unknown Car Type");
        }
    }
}

// Client code to interact with the car factory
class CarRentalClient {
  constructor(carFactory) {
    this.carFactory = carFactory;
  }

  displayCarFeatures(carType) {
    const car = this.carFactory.getCar(carType);
    console.log(car.displayFeatures());
  }

  displayCarFare(carType, distance) {
    const car = this.carFactory.getCar(carType);
    console.log(`The fare for ${carType} for ${distance} km is: ${car.calculateFare(distance)}`);
  }
}

// Exporting all classes and the client
module.exports = { Car, NormalCar, LuxuryBlackCar, SUV, WheelchairAccessibleCar, CarFactory, CarRentalClient };

// Example usage of the client
const carFactory = new CarFactory();
const client = new CarRentalClient(carFactory);

console.log("Car Features:");
client.displayCarFeatures('luxury');
client.displayCarFeatures('suv');

console.log("\nCar Fares:");
client.displayCarFare('luxury', 100);
client.displayCarFare('suv', 200);
