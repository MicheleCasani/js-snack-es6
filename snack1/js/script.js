//snack 1 
//creo un array di oggetti con le biciclette
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
//creo una variabile per la bicicletta più leggera
let lightBike = bicicles[0];
// ciclo l'array per trovare la bicicletta più leggera
for (let i = 0; i < bicicles.length; i++) {
    if (bicicles[i].weight < lightBike.weight) {
        lightBike = bicicles[i];
    }
}
//stampo in console la bicicletta più leggera
console.log('la bicicletta più leggera è la '+' ' + lightBike.name + ' ' + 'con il peso di'+ ' ' + lightBike.weight + 'kg');