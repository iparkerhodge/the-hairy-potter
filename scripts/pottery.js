let pots = []

export const makePot = (shape, weight, height, temp) => {
    const newPot = {
        shape: shape,
        weight: weight,
        height: height,
        temp: temp,
        fired: false,
        cracked: false,
        price: 0

    }

    return fetch('http://localhost:3000/pottery', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPot)
    })
    .then(getPots)
}

export const getPots = () => {
    return fetch('http://localhost:3000/pottery')
        .then(resp => resp.json())
        .then(parsed => {
            pots = parsed
        })
}

export const usePots = () => pots.slice()

export const deletePot = id => {
    return fetch(`http://localhost:3000/pottery/${id}`, {
        method: "DELETE",
    })
    .then(getPots)
}
