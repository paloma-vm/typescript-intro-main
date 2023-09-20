// Giant Robot class

import { KaijuType, Kaiju} from "./example-8";

// Goal creat an interface with a methods 

// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>

interface Robot {
    name: string,
    power: number,
    type: KaijuType
}

class Robot extends Kaiju {

    constructor(name: string, power: number, type: KaijuType) {
        super(name, power, type);
        this.name = name;
        this.power = power;
        this.type = type;
    }

    describe() {
        console.log(`name: ${this.name} type: ${this.type} power: ${this.power}`)
    }
}

const newRobot = new Robot('Robot', 100, KaijuType.ape);
newRobot.describe();
