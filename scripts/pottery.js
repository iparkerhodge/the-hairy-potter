let pots = []

let potId = 1

export const makePot = (shape, weight, height) => {
    
    pots.push (
        {
            potId: potId,
            shape: shape,
            weight: weight,
            height: height
        }
    )

    const incrementPotId = (id) => {
        potId = id + 1
    }

    incrementPotId(potId)
}