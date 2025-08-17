import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing images
import funchat_image from "/public/funchat_image.webp";
import study_image from "/public/study_image.webp";
import development_image from "/public/development_image.webp";
import coding_image from "/public/coding_image.jpeg";
import gaming_image from "/public/gaming_image.webp";
import collegelife_image from "/public/collegelife_image.webp";

function ChatRooms() {
  const navigate = useNavigate();
  const [hoveredRoom, setHoveredRoom] = useState(null);
  
  const rooms = [
    { 
      name: "Bhaichara on Top", 
      id: "messages", 
      image: funchat_image,
      description: "Connect and chat with others about anything fun and interesting"
    },
    { 
      name: "Study- Help", 
      id: "study", 
      image: study_image,
      description: "Join study groups and get help with your assignments"
    },
    { 
      name: "Ask For Help", 
      id: "development", 
      image: development_image,
      description: "Discuss about coding and help each other"
    },
    { 
      name: "Coding", 
      id: "coding", 
      image: coding_image,
      description: "Get help with code, share resources, and solve problems together"
    },
    { 
      name: "Khelega ??", 
      id: "gaming", 
      image: gaming_image,
      description: "Find gaming buddies and discuss your favorite games"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg shadow-sm select-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 select-none">Open Room</span>
          </div>
          <div className="flex items-center gap-2">
            
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* (Hero removed per request) */}
        
        {/* Featured Room Banner */}
  <div className="mb-12 rounded-2xl overflow-hidden shadow-md bg-gradient-to-r from-indigo-500 to-violet-600 text-white relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
          <div className="relative p-8 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">Featured Room</h2>
              <p className="mb-5 text-gray-100/90 leading-relaxed max-w-xl">Explore our most active space and meet people already chatting. Jump in or pick another room below.</p>
              <button
                onClick={() => navigate(`/${rooms[0].id}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100 active:scale-[.98] transition-all"
              >
                Explore Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 w-full max-w-sm">
              <img
                src={rooms[0].image}
                alt="Featured Room"
                className="rounded-xl shadow-lg w-full object-cover h-56 ring-1 ring-white/20"
              />
            </div>
          </div>
        </div>

        {/* Room Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Discover Rooms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
                onClick={() => navigate(`/${room.id}`)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-zinc-200 hover:-translate-y-1"
              >
        <div className="relative h-48">
                  <img 
                    src={room.image} 
                    alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {hoveredRoom === room.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                        Join Room
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{room.name}</h3>
                  <p className="text-gray-600 text-sm">{room.description}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <a href="https://www.instagram.com/biveksahh" target="_blank" className="text-sm text-gray-500">© 2025 Open Room. Developed By Bivek</a>
        </div>
      </div>
    </div>
  );
}

export default ChatRooms;