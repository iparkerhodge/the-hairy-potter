export let potteryToSell = []

export const toSell = (pots) => {
    potsToSell = pots.filter(pot => pot.cracked === false)

    potsToSell.map(pot => {
        if(pot.weight > 3) {
            pot.price = 40
        }
        else {
            pot.price = 20
        }
    })
}