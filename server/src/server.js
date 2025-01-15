const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

const server = express()

server.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}))

server.use(morgan('dev'))

server.get('/home', (req, res)=>{
    res.send("home") 
})

module.exports = server