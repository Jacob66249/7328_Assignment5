// Class definitions
class LegacyCarRental {
    bookCar(date, duration, location) {
        console.log(`Car booked on ${date} for ${duration} days at ${location}.`);
        return `Booking confirmed at ${location} on ${date} for ${duration} days.`;
    }
}

class NewCarReservation {
    reserveCar(startDate, endDate, pickUpLocation) {
        throw new Error("Method not implemented.");
    }
}

class CarRentalAdapter extends NewCarReservation {
    constructor(legacyCarRental) {
        super();
        this.legacyCarRental = legacyCarRental;
    }

    reserveCar(startDate, endDate, pickUpLocation) {
        const duration = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
        const date = startDate.toISOString().split('T')[0];
        return this.legacyCarRental.bookCar(date, duration, pickUpLocation);
    }
}

// Client code
const legacyCarRentalService = new LegacyCarRental();
const adapter = new CarRentalAdapter(legacyCarRentalService);

function reserveCarUsingAdapter(start, end, location) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    try {
        const confirmation = adapter.reserveCar(startDate, endDate, location);
        console.log(confirmation);
    } catch (error) {
        console.error(error.message);
    }
}

// Example client usage
reserveCarUsingAdapter('2023-10-12', '2023-10-15', 'New York City');

// Exports for potential module usage
module.exports = { LegacyCarRental, NewCarReservation, CarRentalAdapter, reserveCarUsingAdapter };
