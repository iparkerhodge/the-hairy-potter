export const kiln = (pot, temperature) => {
    
    if (temperature > 2200) {
        pot.cracked = true
    }
    else {
        pot.cracked = false
    }
    
    pot.fired = true
}