// carDumper.js

/**
 * This module handles vehicle dumping for the RageMP project.
 * Author: ghostmarcos11-dev
 * Date: 2026-02-23
 */

class CarDumper {
    constructor() {
        this.vehicles = [];
    }

    dumpVehicle(vehicle) {
        this.vehicles.push(vehicle);
        console.log(`Dumped vehicle: ${JSON.stringify(vehicle)}`);
    }

    getDumpedVehicles() {
        return this.vehicles;
    }
}

module.exports = new CarDumper();