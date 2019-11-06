const express = require('express')

const db = require('./data/dbConfig')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({message: 'CARS DB'})
})

server.get('/cars', (req, res) => {
    db('cars')
        .then(car => res.status(200).json(car))
        .catch(err => res.status(500).json({error: `error retrieving cars data`}))
    
})

server.post('/cars', (req, res) => {
    db
        .insert(req.body)
        .into('cars')
        .then(car => res.status(201).json(car))
        .catch(err => res.status(500).json({error: `error entering information`}))
})

module.exports = server