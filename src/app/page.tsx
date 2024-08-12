'use client'

import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { Send } from "lucide-react";


export default function Home() {


  const { messages, input, handleInputChange, handleSubmit } = useChat();
  
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch justify-center ">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap m-4 h-auto flex  p-2 border-s-4 flex-col even:bg-[#272626]">
          <span className="text-xl font-semibold text-[#9a2678]"> 
          {m.role === 'user' ? 'User: ' : 'AI: '}
          </span>
          <span className="text-white text-xl">
          {m.content}
          </span>
        </div>
      ))}

      <form onSubmit={handleSubmit} >
        <div className="fixed bottom-0 w-full max-w-md p-2 flex">
        <input
          className=" border border-gray-300 rounded8 w-8/12 p-1 bg-blue-100"
          value={input}
          placeholder="Question..."
          onChange={handleInputChange}
          
        />
        <Button
            type="submit"
            value={input}
          >
              <Send size={24}/>
          </Button>
        </div>
       
      </form>
    </div>
  );
}
