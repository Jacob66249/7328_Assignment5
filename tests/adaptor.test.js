const { LegacyCarRental, NewCarReservation, CarRentalAdapter } = require('../src/adaptor');

describe('CarRentalAdapter', () => {
    test('it should adapt the new reservation interface to the legacy system', () => {
        const legacyCarRental = new LegacyCarRental();
        const adapter = new CarRentalAdapter(legacyCarRental);
        const startDate = new Date(2023, 9, 1); // October 1, 2023
        const endDate = new Date(2023, 9, 5); // October 5, 2023
        const location = "New York";
        const expected = "Booking confirmed at New York on 2023-10-01 for 4 days.";
        const result = adapter.reserveCar(startDate, endDate, location);

        expect(result).toBe(expected);
    });
});


