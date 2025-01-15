const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express() //Con esto se gestiona las rutas y demas funciones
const http = require('http')
const server = http.createServer(app) //Con esta linea se crea el servior, para escuchar y con express se gestiona lar rutas
const { Server } = require('socket.io')

const io = new Server(server, {
    cors:{
        origin: 'http://localhost:5173'
    }
})

app.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}))
app.use(morgan('dev'))

io.on('connection', (socket)=>{
    // console.log(socket.handshake.query);
    
    console.log("A user connected" + socket.id);

    
    socket.on('message', (message) => {
        socket.broadcast.emit('message', {from: socket.id.slice(9), body:message})
    })

    socket.on('disconnect', ()=>{
        console.log("user disconnect");
    })
})


//rutas en un futuro

app.get('/home', (req, res)=>{
    res.send("home") 
})

module.exports = server