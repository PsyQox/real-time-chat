import { useEffect, useRef } from "react";
import { CiLocationArrow1 } from "react-icons/ci";

const Chat = ({myMessage, setMyMessage,handleSubmit, messages}) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Dezplazara al final para poder oobservar el primer mensaje
    
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return(
        <div className="mt-10 flex flex-col items-center">
            <div className="w-2/4 h-1/4 items-start justify-center">
                <ul className="text-left h-full max-h-96 overflow-y-auto">
                        {messages?.map((message, i)=>{
                            return(
                                <li className={`${message.from === 'Me' ? 
                                    'bg-slate-300 text-right text-black p-3 rounded-lg my-3': 
                                    'bg-blue-800 text-white p-3 rounded-lg my-3'}`} key={i}>{message.from}: {message.body}</li>
                            )
                        })}
                    <div ref={messagesEndRef} /> {/* Se usara para referenciar el final de la lista*/}
                </ul>
            </div>

            <div className="mt-3 w-2/4">
                <form onSubmit={handleSubmit} className="flex flex-row">
                <input placeholder="Te amo mi amor" type="text" className="w-11/12 border border-gray-500 rounded-l-lg p-2 h-12" value={myMessage} onChange={(e) => setMyMessage(e.target.value)}
                />
                <button className="bg-blue-500 h-12 w-1/12 flex items-center justify-center rounded-r-lg border border-blue-500 text-white">
                    <CiLocationArrow1 className="text-white text-xl" />
                </button>
                </form>
                
            </div>
            
        </div>
    )
}

export default Chat