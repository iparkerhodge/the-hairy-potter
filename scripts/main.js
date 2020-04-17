import { potHTML } from './potHTML.js'
import { toSell, usePotteryToSell } from './filterForSale.js'
import { makePot, usePots, getPots, deletePot } from './pottery.js'
import { kiln } from './kiln.js'

//On Page-Load:
const eventHub = document.querySelector('.container')
const formElement = document.querySelector('.makePot')

getPots().then( () => {

const contentTarget = document.querySelector('#inventory')
const pots = usePots()

toSell(pots)

const potteryToSell = usePotteryToSell()

contentTarget.innerHTML = `
    <br>
    <div>Inventory</div>
    <br>
    ${potteryToSell.map(pot=> potHTML(pot)).join("")}
`


formElement.innerHTML = `
    <form>
    <div>Make a Pot</div>
    <input type="text" id="shape" placeholder="shape">
    <input type="text" id="weight" placeholder="weight">
    <input type="text" id="height" placeholder="height">
    <input type="text" id="temp" placeholder="temperature to fire">
    <button type="button" id="make">Make Pot</button>
    </form>

    <form>
        <div>Fire all un-fired pots</div>
        <button type="button" id="fire">Fire All</button>
    </form>
`
})

//END

formElement.addEventListener("click", e=> {
    if(e.target.id === "make") {
        const shape = document.getElementById('shape').value
        const weight = parseInt(document.getElementById('weight').value)
        const height = parseInt(document.getElementById('height').value)
        const temp = parseInt(document.getElementById('temp').value)

        makePot(shape, weight, height, temp)
    }
})

formElement.addEventListener("click", e=> {
    if(e.target.id === "fire") {
        const pots = usePots()
        const unfired = pots.filter(pot => pot.fired === false)

        unfired.map(pot => {
            kiln(pot)
            console.log(`Pot ${pot.id} was fired`)
        })

        window.location.reload()
    }
})
eventHub.addEventListener("click", e=> {
    if(e.target.id.includes('sale--')) {
        const pots = usePots()
        const id = parseInt(e.target.id.split('--')[1])
        const pot = pots.find(pot => pot.id === id)

        window.alert(`${pot.shape} was sold for ${pot.price}`)
        deletePot(id)
        window.location.reload()
    }
})