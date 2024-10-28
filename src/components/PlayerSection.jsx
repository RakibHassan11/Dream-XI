/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PlayerList from "./PlayerList";
import ToggleButtons from "./ToggleButtons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlayerSection = ({ coins, setCoins }) => {
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [view, setView] = useState("available"); // 'available' or 'selected'

  // Load player data from public/players.json
  useEffect(() => {
    fetch("/players.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        toast.error("Failed to load player data.");
      })
      .then((data) => {
        if (data) {
          setAvailablePlayers(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
        toast.error("Could not load player data.");
      });
  }, []);

  // Handle adding a player to the selected list with coin check
  const handleChoosePlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You can only select up to 6 players.");
      return;
    }

    if (selectedPlayers.some((p) => p.playerId === player.playerId)) {
      toast.error("Player already selected.");
      return;
    }

    if (coins < player.biddingPrice) {
      toast.error(`Not enough coins to select ${player.name}.`);
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.biddingPrice); // Deduct player's price from available coins
    toast.success(`${player.name} has been added to your team.`);
  };

  // Handle removing a player from the selected list
  const handleRemovePlayer = (player) => {
    const playerToRemove = selectedPlayers.find((p) => p.playerId === player.playerId);
    setSelectedPlayers(selectedPlayers.filter((p) => p.playerId !== player.playerId));
    setCoins(coins + playerToRemove.biddingPrice); // Refund the coins used for the player
    toast.info(`${playerToRemove.name} removed from your team.`);
  };

  // Handle "Add More Players" action
  const handleAddMorePlayers = () => {
    setView("available"); // Switch to the available player view
  };

  return (
    <div className="player-section mx-auto w-11/12 lg:w-10/12 mt-14">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Select Your Team</h2>
        <ToggleButtons view={view} setView={setView} selectedCount={selectedPlayers.length} />
      </div>

      {view === "available" ? (
        <PlayerList players={availablePlayers} onPlayerAction={handleChoosePlayer} actionLabel="Choose Player" />
      ) : selectedPlayers.length > 0 ? (
        <div>
          <PlayerList players={selectedPlayers} onPlayerAction={handleRemovePlayer} actionLabel="Remove" isSelected={true} />
          <button
            className={`bg-yellow-400 btn px-4 py-2 mt-4 ${view === 'available' ? 'btn bg-yellow-500 text-white rounded-xl' : 'bg-gray-300'}`}
            onClick={handleAddMorePlayers} 
          >
            Add More Players
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">No players selected yet.</p>
      )}

      <ToastContainer />
    </div>
  );
};

export default PlayerSection;
