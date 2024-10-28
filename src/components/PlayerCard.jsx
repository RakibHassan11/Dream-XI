/* eslint-disable react/prop-types */
const PlayerCard = ({ player, onPlayerAction, actionLabel }) => {
  return (
    <div className="card p-4 border rounded-lg shadow-sm">
      <img src={player.image} alt={player.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-bold mt-4 mb-4"><i className="fa-solid fa-user"></i> {player.name}</h3>
      <div className='flex justify-between text-gray-500 p-2'>
      <p> <i className="fa-solid fa-flag"></i> {player.country}</p>
      <p>{player.role}</p>
      </div>
      <hr />
      <h3 className="text-lg font-bold mt-3">Rating</h3>
      
      <div className='flex justify-between mt-3 mb-3'>
      <p>{player.battingType}</p>
      <p className='text-gray-500'>{player.bowlingType}</p>
      </div>

      <div className='flex justify-between'>
      <p className="font-bold mt-2 py-2">Price: ৳{player.biddingPrice}</p>
      <button
        className="mt-2 px-2 py-2 text-base btn rounded"
        onClick={() => onPlayerAction(player)}
      >
        {actionLabel}
      </button>
      </div>
    </div>
  );
};

export default PlayerCard;
