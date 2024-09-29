import React, { useState } from 'react';
import { AiOutlineUser, AiOutlinePlus, AiOutlineHome, AiOutlineCalendar, AiOutlineBook, AiOutlineSync, AiOutlineLike } from 'react-icons/ai';
import { FiInfo } from 'react-icons/fi';

const Bot: React.FC = () => {
    const [messages, setMessages] = useState([
        { text: "Hello. How are you doing", sender: "Sparky" },
        { text: "A heart full of gratitude, like a garden blooming with life.", sender: "Sparky" },
        { text: "A heart full of gratitude, like a garden blooming with life.", sender: "You" },
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "You" }]);
            setInput("");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4" 
             style={{ background: "linear-gradient(to bottom, #c184b8, #e6c08e)" }}>
            
            {/* Sidebar Container */}
            <div className="w-1/5 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between p-6 h-[80vh] mr-6"> 
                
                {/* Top Section with Buttons */}
                <div>
                    <h1 className="text-lg font-bold text-black mb-2">SparkWellness Portal</h1>
                    <hr className="border-black border-t-[1px] mb-4" /> {/* Thin black line */}
                    
                    <div className="space-y-3">
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-white py-4 px-4 rounded-lg w-full flex items-center justify-center font-semibold">
                            <AiOutlinePlus className="mr-2" /> Talk to Peers
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-white py-4 px-4 rounded-lg w-full flex items-center justify-center font-semibold">
                            <AiOutlinePlus className="mr-2" /> Make an Appointment
                        </button>
                        <button className="bg-white hover:bg-gray-200 text-gray-800 py-4 px-4 rounded-lg w-full flex items-center justify-center font-semibold">
                            <AiOutlineHome className="mr-2" /> My Profile
                        </button>
                        <button className="bg-white hover:bg-gray-200 text-gray-800 py-4 px-4 rounded-lg w-full flex items-center justify-center font-semibold">
                            <AiOutlineCalendar className="mr-2" /> My Appointment
                        </button>
                        <button className="bg-white hover:bg-gray-200 text-gray-800 py-4 px-4 rounded-lg w-full flex items-center justify-center font-semibold">
                            <AiOutlineBook className="mr-2" /> Resources
                        </button>
                    </div>
                </div>

                {/* Give Feedback Section */}
              

                {/* Bottom Section */}
                <div className="mt-1"> {/* Reduced margin top */}
                    <hr className="border-black border-t-[1px] mb-1" /> {/* Thin black line with smaller margin-bottom */}
                    <div className="flex items-center justify-between bg-gray-200 p-2 rounded-lg">
                        <div className="flex items-center text-black space-x-2">
                            <AiOutlineUser />
                            <span>SparkWellness Portal</span>
                        </div>
                        <AiOutlineSync />
                    </div>
                </div>
            </div>
            
            {/* Chat Container */}
            <div className="w-3/4 bg-opacity-80 rounded-lg  flex flex-col p-6 h-[80vh]">
                
                {/* Sparky Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-black">Sparky</h2>
                    <FiInfo className="text-xl text-gray-600 cursor-pointer" />
                </div>
                <hr className="border-t-2 border-gray-300 mb-4" />
                
                {/* Messages Section */}
                <div className="flex-1 overflow-y-auto space-y-4 p-4 rounded-lg ">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                            <div className={`rounded-lg p-3 max-w-xs text-sm ${msg.sender === "You" ? "bg-blue-100 text-black" : "bg-gray-200 text-black"}`}>
                                <p className="font-bold">{msg.sender}</p>
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Input Box */}
                <div className="mt-4 flex items-center p-3  rounded-full">
                    <input
                        type="text"
                        className="flex-1 p-4 text-black rounded-full  border "
                        placeholder="Write your feeling here"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={sendMessage} className="ml-3 bg-black hover:bg-white hover:text-black text-white py-3 px-5 rounded-lg">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bot;
