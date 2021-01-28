console.log('star server')
const path = require('path')
const express = require('express');
const app = express();
const SocketIO = require('socket.io');
const { Socket } = require('dgram');

app.set('port', process.env.PORT || 4000 );

//static files 

app.use(express.static  ( path.join ( __dirname , 'public'))    );

const server = app.listen( app.get('port') , ()=>{
    console.log('server listen on port :: ' ,  app.get('port'));
})
const io = SocketIO(server,{
	cors: {
    		origin: "http://localhost",
    		methods: ["GET", "POST"],
    		credentials: true,
    		transports: ['websocket', 'polling'],
  	},
    	allowEIO3: true
	})

// websocket

io.on('connection' , () => {
    console.log(' new connection')
})

