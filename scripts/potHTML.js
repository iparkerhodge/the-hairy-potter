export const potHTML = (pot) => {
    return `
        <div>shape: ${pot.shape}</div>
        <div>weight: ${pot.weight}</div>
        <div>height: ${pot.height}</div>
        <div>fired: ${pot.fired}</div>
        <div>cracked: ${pot.cracked}</div>
        <div>$${pot.price}</div>
        <button type="button" id="sale--${pot.id}">Sell</button>
    `
}