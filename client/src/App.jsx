import { useEffect, useState } from "react"
import Chat from "./components/Chat"
import { socket } from "./socket"




const App = ()=>{
  const [socketIsConnected, setSocketIsConnected] = useState(socket.connected)
  const [myMessage, setMyMessage] = useState('')
  const [messages, setMessages] = useState([])
  

  useEffect(()=>{
    socket.connect({query:{user:'s'}}) //Por defecto desactive la coneccion automatica, requiere de esta linea para que el socket se conecte
    //se puede pasar al archivo del autenticador para que si se autentica se conecte y si no, no.

    socket.on('connect', ()=>{      
      setSocketIsConnected(true)
    })
    
    socket.on('message', onMessage)

    return ()=>{
      socket.off('message', onMessage)
    }
  },[])
  
  const onMessage = (message) => {
    setMessages(prevState => [...prevState, message])

  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    //Comunicacion con el backend para guardar el mensaje
    setMessages(prevState => [...prevState, {from: "Me", body:myMessage}])
    socket.emit('message', myMessage)
    setMyMessage('')
  }

  return(
    <div className="text-center bg-gray-800 h-screen">
        <h1 className="text-3xl font-bold text-white">
          Reat time chat
        </h1>
        <Chat myMessage={myMessage} setMyMessage={setMyMessage} messages={messages} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default App