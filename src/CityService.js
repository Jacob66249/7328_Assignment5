// CityService Interface
class CityService {
    getService() {
        throw new Error("This method should be overridden");
    }
}

// BasicCityService Concrete Component
class BasicCityService extends CityService {
    getService() {
        return "Basic City Service";
    }
}

// CityDecorator Decorator
class CityDecorator extends CityService {
    constructor(cityService) {
        super();
        this.cityService = cityService;
    }

    getService() {
        return this.cityService.getService();
    }
}

// Features/OptionsA ConcreteDecorator
class FeaturesOptionsA extends CityDecorator {
    getService() {
        return `${super.getService()} with Feature A`;
    }
}

// Features/OptionsB ConcreteDecorator
class FeaturesOptionsB extends CityDecorator {
    getService() {
        return `${super.getService()} with Feature B`;
    }
}

// Features/OptionsC ConcreteDecorator
class FeaturesOptionsC extends CityDecorator {
    getService() {
        return `${super.getService()} with Feature C`;
    }
}

// Client code to test
const basicCityService = new BasicCityService();
console.log(basicCityService.getService());

const cityServiceWithFeatureA = new FeaturesOptionsA(basicCityService);
console.log(cityServiceWithFeatureA.getService());

const cityServiceWithFeatureAAndB = new FeaturesOptionsB(cityServiceWithFeatureA);
console.log(cityServiceWithFeatureAAndB.getService());

const cityServiceWithAllFeatures = new FeaturesOptionsC(cityServiceWithFeatureAAndB);
console.log(cityServiceWithAllFeatures.getService());
module.exports = { BasicCityService, FeaturesOptionsA, FeaturesOptionsB, FeaturesOptionsC }; 