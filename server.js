let express = require('express')
let cors = require('cors')
let app = express()
let PORT = 3000

app.use(cors())

let starterPokemon = {
    'bulbasaur': {
        'type': 'Grass',
        'species': 'Seed',
        'level': 0,
        'attack1': 'Tackle',
        'attack2': 'Vine Whip'

    },
    'charmander': {
        'type': 'Fire',
        'species': 'Lizard',
        'level': 0,
        'attack1': 'Scratch',
        'attack2': 'Ember'

    },
    'squirtle': {
        'type': 'Water',
        'species': 'Tiny Turtle',
        'level': 0,
        'attack1': 'Tackle',
        'attack2': 'Water Gun'

    },
    'unknown1': {
        'message': 'not a starting pokemon',
        

    }


}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/:name', (request, response) => {
    let pokemonName = request.params.name.toLowerCase()
    console.log(pokemonName)
    if (starterPokemon[pokemonName]) {
        response.json(starterPokemon[pokemonName])
    } else {
        response.json(starterPokemon['unknown1'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})