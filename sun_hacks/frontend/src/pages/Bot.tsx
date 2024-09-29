import React, { useState, useEffect } from 'react';
import { AiOutlineUser, AiOutlinePlus, AiOutlineHome, AiOutlineCalendar, AiOutlineBook, AiOutlineSync } from 'react-icons/ai';
import { FiInfo } from 'react-icons/fi';

const Bot: React.FC = () => {
    const [messages, setMessages] = useState([
        { text: "Hello. How are you doing", sender: "Sparky" },
        { text: "A heart full of gratitude, like a garden blooming with life.", sender: "Sparky" },
        { text: "A heart full of gratitude, like a garden blooming with life.", sender: "You" },
    ]);
    const [input, setInput] = useState("");
    const [showCards, setShowCards] = useState(true);
    const [currentCard, setCurrentCard] = useState(0);

    // Hard-coded responses based on user input
    const hardcodedResponses: { [key: string]: string } = {
        "Hello": "Hi there! How can I help you today?",
        "How are you": "I'm just a bot, but I'm here to assist you!",
        "Tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
        "Goodbye": "Take care! Have a great day!",
    };

    const sendMessage = () => {
        if (input.trim()) {
            // Add user's message
            setMessages([...messages, { text: input, sender: "You" }]);

            // Check for hardcoded response
            const response = hardcodedResponses[input.trim()];
            if (response) {
                setMessages(prevMessages => [...prevMessages, { text: response, sender: "Sparky" }]);
            }

            // Clear input
            setInput("");
        }
    };

    // Function to handle key press in the input field
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    // Function to handle next card
    const handleNextCard = () => {
        if (currentCard < 3) {
            setCurrentCard(currentCard + 1);
        } else {
            setShowCards(false);
        }
    };

    // Function to handle previous card
    const handlePreviousCard = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard - 1);
        }
    };

    // Save to localStorage to make the cards only appear once
    useEffect(() => {
        const cardsShown = localStorage.getItem('cardsShown');
        if (cardsShown) {
            setShowCards(true);
        }
    }, []);

    const handleStart = () => {
        setShowCards(false);
        localStorage.setItem('cardsShown', 'true');
    };

    const cards = [
        {
            title: "AI Generated Chatbot",
            description: "Get 24/7 support with our AI chatbot, offering quick, empathetic responses for advice or stress relief whenever you need it.",
            image: "/card1.png" // Replace this path with your image path
        },
        {
            title: "Mental Health Resources",
            description: "Access a variety of resources tailored for mental health and wellness, curated to help you through tough times.",
            image: "/card2.png" // Replace this path with your image path
        },
        {
            title: "Talk to Peers",
            description: "Join our community and chat with peers who understand what you're going through. You're not alone.",
            image: "/card3.png" // Replace this path with your image path
        },
        {
            title: "Personalized Support",
            description: "Receive personalized support based on your needs, goals, and preferences to guide you through your wellness journey.",
            image: "/card4.png" // Replace this path with your image path
        }
    ];

    return (
        <div className="relative flex justify-center items-center min-h-screen p-4" 
             style={{ background: "linear-gradient(to bottom, #c184b8, #e6c08e)" }}>
            
            {/* Dim background when cards are shown */}
            {showCards && <div className="absolute inset-0 bg-black opacity-50 z-10"></div>}

            {/* Onboarding Cards */}
            {showCards && (
                <div className="absolute flex flex-col justify-between items-center w-2/4 h-2/3 bg-white rounded-3xl p-8 z-20">
                    <h2 className="text-4xl pt-1 font-SF Pro text-black">{cards[currentCard].title}</h2>
                    <p className="text-center text-xl font-light text-gray-700 mt-0 -mt-1">{cards[currentCard].description}</p>
                    
                    {/* Ensure consistent image size */}
                    <div className="flex items-center justify-center w-full h-48"> {/* Set the container height */}
                        <img 
                            src={cards[currentCard].image} 
                            alt="Card Illustration" 
                            className="h-full max-w-xs object-contain" 
                        />
                    </div>

                    <div className="flex justify-between w-full mt-4">
                        <button 
                            onClick={handlePreviousCard}
                            className={`bg-gray-300 text-gray-700 px-4 py-2 rounded ${currentCard === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={currentCard === 0}
                        >
                            Back
                        </button>
                        <div className="flex space-x-2">
                            {cards.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`h-2 w-2 rounded-full ${index === currentCard ? "bg-yellow-500" : "bg-gray-300"}`}
                                />
                            ))}
                        </div>
                        <button 
                            onClick={currentCard === cards.length - 1 ? handleStart : handleNextCard}
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
                        >
                            {currentCard === cards.length - 1 ? "Start" : "Next"}
                        </button>
                    </div>
                </div>
            )}

            {/* Sidebar Container */}
            <div className={`w-1/5 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between p-6 h-[80vh] mr-6 ${showCards ? 'opacity-30' : ''}`}> 
                {/* Top Section with Buttons */}
                <div>
                    <h1 className="text-lg font-bold text-black mb-2">SparkWellness Portal</h1>
                    <hr className="border-black border-t-[1px] mb-4" />
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

                {/* Bottom Section */}
                <div className="mt-1">
                    <hr className="border-black border-t-[1px] mb-1" />
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
            <div className={`w-3/4 bg-opacity-80 rounded-lg flex flex-col p-6 h-[80vh] ${showCards ? 'opacity-30' : ''}`}>
                {/* Sparky Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-black">Sparky</h2>
                    <FiInfo className="text-xl text-gray-600 cursor-pointer" />
                </div>
                <hr className="border-t-2 border-gray-300 mb-4" />
                
                {/* Messages Section */}
                <div className="flex-1 overflow-y-auto space-y-4 p-4 rounded-lg">
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
                <div className="mt-4 flex items-center p-3 rounded-full">
                    <input
                        type="text"
                        className="flex-1 p-4 text-black rounded-full border"
                        placeholder="Write your feeling here"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress} // Add this line
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
