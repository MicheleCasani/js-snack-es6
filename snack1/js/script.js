//snack 1 

const bicicles = [
    {
        name: 'bici rossa',
        weight: 20,
    },
    {
        name: 'bici bianca',
        weight: 27,
    },
    {
        name: 'bici gialla',
        weight: 23,
    },
    {
        name: 'bici verde',
        weight: 30,
    },
    {
        name: 'bici blu',
        weight: 18,
    },
    {
        name: 'bici bianca',
        weight: 15,
    },
]

let lightBike = bicicles[0];

for (let i = 0; i < bicicles.length; i++) {
    if (bicicles[i].weight < lightBike.weight) {
        lightBike = bicicles[i];
    }
    console.log(bicicles[i].name + ' ' + 'è la bicicletta più leggera');
}

console.log(lightBike);