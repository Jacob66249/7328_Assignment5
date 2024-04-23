const { RideMediator, Rider } = require('../src/mediator');  // Adjust the path as necessary

describe('RideMediator', () => {
    let mediator;
    let alice;
    let bob;
    let charlie;

    beforeEach(() => {
        mediator = new RideMediator();
        alice = new Rider('Alice');
        bob = new Rider('Bob');
        charlie = new Rider('Charlie');
        mediator.registerRider(alice);
        mediator.registerRider(bob);
        mediator.registerRider(charlie);
    });

    test('should broadcast messages to all riders except sender', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        alice.send('Hi there, beautiful day!');
        expect(consoleSpy).toHaveBeenCalledWith('Alice sends message: "Hi there, beautiful day!"');
        expect(consoleSpy).toHaveBeenCalledWith('Bob received message: "Hi there, beautiful day!"');
        expect(consoleSpy).toHaveBeenCalledWith('Charlie received message: "Hi there, beautiful day!"');
        expect(consoleSpy).not.toHaveBeenCalledWith('Alice received message: "Hi there, beautiful day!"');
        consoleSpy.mockRestore();
    });
});
