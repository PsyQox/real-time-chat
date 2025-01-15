

const Chat = ({myMessage, setMyMessage,handleSubmit, messages}) => {
    return(
        <div className="mt-10 flex flex-col items-center">
            <div className="w-2/4 items-start justify-center">
            <ul className="text-left">
                    {messages?.map((message, i)=>{
                        return(
                            <li className={`${message.from === 'Me' ? 'bg-gray-800  text-white p-3 rounded-lg my-3' : 'bg-blue-800 text-white p-3 rounded-lg my-3'}`} key={i}>{message.from}:{message.body}</li>
                        )
                    })}

            </ul>
            </div>

            <div className="mt-3">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="border border-gray-500 rounded-l-lg p-2" value={myMessage} onChange={(e)=>setMyMessage(e.target.value)}/>
                    <button className="bg-blue-500 p-2 rounded-r-xl border border-blue-500 text-white">Send</button>
                </form>
                
            </div>
            
        </div>
    )
}

export default Chat