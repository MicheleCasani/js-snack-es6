//snack2
//Creo un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
const footballTeams = [
    {
        name: 'milan',
        point: 0,
        foul: 0
    },
    {
        name: 'inter',
        point: 0,
        foul: 0
    },
    {
        name: 'napoli',
        point: 0,
        foul: 0
    },
    {
        name: 'salernitana',
        point: 0,
        foul: 0
    },
    {
        name: 'sassuolo',
        point: 0,
        foul: 0
    },
    {
        name: 'giuventus',
        point: 0,
        foul: 0
    },
]

//creo un ciclo per assegnare i punti e i falli a ciascuna squadra
for (i = 0; i < footballTeams.length; i++) {
    footballTeams[i].point = Math.floor(Math.random() * 100) + 1;
    footballTeams[i].foul = Math.floor(Math.random() * 100) + 1;
}
console.log(footballTeams);

//creo un array vuoto dove vado a inserire  solo i nomi e i falli delle squadre
let footballTeamsNameFoul = [];

//creo un nuovo ciclo per inserire i nomi e i falli delle squadre nell'array vuoto
for (let i = 0; i < footballTeams.length; i++) {
    footballTeamsNameFoul.push({
       name: footballTeams[i].name,
       foul: footballTeams[i].foul
    });
}
//stampo in console l'array con i nomi e i falli delle squadre di calcio
console.log(footballTeamsNameFoul);