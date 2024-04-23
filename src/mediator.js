// Mediator class
class RideMediator {
    constructor() {
        this.riders = [];
    }

    registerRider(rider) {
        this.riders.push(rider);
        rider.setMediator(this);
    }

    send(message, sender) {
        this.riders.forEach(rider => {
            // Broadcast message to all riders except the sender
            if (rider !== sender) {
                rider.receive(message);
            }
        });
    }
}

// Rider class
class Rider {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        console.log(`${this.name} sends message: "${message}"`);
        this.mediator.send(message, this);
    }

    receive(message) {
        console.log(`${this.name} received message: "${message}"`);
    }
}

// Client code
function setUpCommunication() {
  // Create an instance of the mediator
  const rideMediator = new RideMediator();

  // Create riders and register them with the mediator
  const alice = new Rider('Alice');
  const bob = new Rider('Bob');
  const charlie = new Rider('Charlie');

  rideMediator.registerRider(alice);
  rideMediator.registerRider(bob);
  rideMediator.registerRider(charlie);

  // Have one rider send a message
  alice.send('Hi there, beautiful day!');
}

// Execute the client code
setUpCommunication();

// Exporting for possible testing or other module usage
module.exports = { RideMediator, Rider, setUpCommunication };

