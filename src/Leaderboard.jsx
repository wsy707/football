import React from "react";
import data from "./data.json";

const Leaderboard = () => {
    const sortedTeams = data.teams.sort((a, b) => b.totalPoints - a.totalPoints);

    return (
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-300">
                    <th className="px-4 py-2 border">Rank</th>
                    <th className="px-4 py-2 border">Team</th>
                    <th className="px-4 py-2 border">Points</th>
                </tr>
            </thead>
            <tbody>
                {sortedTeams.map((team, index) => (
                    <tr
                        key={team.name}
                        className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                            } ${index === 0 ? "bg-yellow-200 font-bold" : ""}`}
                    >
                        <td className="px-4 py-2 border">{index + 1}</td>
                        <td className="px-4 py-2 border">{team.name}</td>
                        <td className="px-4 py-2 border">{team.totalPoints}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Leaderboard;
