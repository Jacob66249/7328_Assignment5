const { CarFactory, NormalCar, LuxuryBlackCar, SUV, WheelchairAccessibleCar } = require('../src/CarFactory');

function testCarFeaturesAndFares() {
    const factory = new CarFactory();
    const typesAndExpectedOutputs = {
        'normal': [NormalCar, "Normal Car with basic features", 2.0 * 10],
        'luxury': [LuxuryBlackCar, "Luxury Black Car with premium features", 5.0 * 10],
        'suv': [SUV, "SUV with enhanced features for rough terrains", 3.0 * 10],
        'wheelchair': [WheelchairAccessibleCar, "Wheelchair Accessible Transport with special features", 3.5 * 10]
    };
    
    Object.entries(typesAndExpectedOutputs).forEach(([type, [expectedClass, expectedFeatures, expectedFare]]) => {
        const car = factory.getCar(type);
        expect(car).toBeInstanceOf(expectedClass);
        expect(car.displayFeatures()).toBe(expectedFeatures);
        expect(car.calculateFare(10)).toBe(expectedFare);
    });
}

describe('Car Factory Tests', () => {
    test('Features and Fares Test', testCarFeaturesAndFares);
});

