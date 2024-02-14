import { planets, G } from './data.js';

export function calculateEscapeVelocity(planet_mass, planet_radius) {
    // Escape velocity v = sqrt(2GM/r)
    // G is the gravitational constant
    // M is the mass of the planet
    // r is the radius of the planet
    // The result is divided by 1000 to convert from m/s to km/s if needed
    return Math.sqrt((2 * G * planet_mass) / planet_radius) / 1000;
}

export function calculateRocketVelocity(rocket, specificImpulse) {
    const g0 = 9.81; // Standard gravity in m/s²
    const rocketMass = rocket.weight; // Total mass of the rocket without fuel
    const fuelMass = rocket.fuelMass; // Mass of the fuel

    const m0 = rocketMass + fuelMass; // Initial total mass (rocket + fuel)
    const mf = rocketMass; // Final total mass (rocket without fuel)

    const deltaV = specificImpulse * g0 * Math.log(m0 / mf);

    return deltaV; // Change in velocity (delta-v) in m/s
}


export function canEscapePlanet(rocket, planetName) {
    const planet = planets[planetName.toLowerCase()]; // to Ensure planetName is in the correct case
    if (!planet) {
        return "Invalid planet name.";
    }

    //  rocket has a cylindrical shape, the volume calculation will use πr²h
    // Also, the width provided is likely the diameter, so we use width / 2 to get the radius
    const rocketRadius = rocket.width / 2;
    const rocketVolume = Math.PI * rocketRadius * rocketRadius * rocket.height; // Volume = πr²h
    const rocketMass = rocket.weight; // Assuming the weight given is the mass

    // We only compare the rocket's velocity (which we don't have) to the planet's escape velocity
    const planetRadius = planet.circumference / (2 * Math.PI);
    const planetEscapeVelocity = calculateEscapeVelocity(planetName.mass, planetName.circumference);
    const rocketVelocity = calculateRocketVelocity(rocket);

    if (rocketVelocity > planetEscapeVelocity) {
        return `Rocket can escape ${planetName.charAt(0).toUpperCase() + planetName.slice(1)}.`;
    } else {
        return `Rocket cannot escape ${planetName.charAt(0).toUpperCase() + planetName.slice(1)}.`;
    }
}


 


