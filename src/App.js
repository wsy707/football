import React from "react";
import Leaderboard from "./Leaderboard";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white shadow-md rounded p-4 w-3/4">
                <h1 className="text-2xl font-bold mb-4 text-center">Football Leaderboard</h1>
                <Leaderboard />
            </div>
        </div>
    );
}

export default App;

