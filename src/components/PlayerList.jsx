/* eslint-disable react/prop-types */
import PlayerCard from './PlayerCard';

const PlayerList = ({ players, onPlayerAction, actionLabel }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {players.map((player) => (
        <PlayerCard
          key={player.playerId}
          player={player}
          onPlayerAction={onPlayerAction}
          actionLabel={actionLabel}
        />
      ))}
    </div>
  );
};

export default PlayerList;
