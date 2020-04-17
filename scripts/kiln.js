import { getPots } from "./pottery.js"

export const kiln = (pot) => {
    
    if (pot.temp > 2200) {
        pot.cracked = true
    }
    else {
        pot.cracked = false
    }
    
    pot.fired = true

    return fetch(`http://localhost:3000/pottery/${pot.id}`,{
        method:"PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pot)
    })
    .then(getPots)
}