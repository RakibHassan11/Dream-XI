/* eslint-disable react/prop-types */
const ToggleButtons = ({ view, setView, selectedCount }) => {
  return (
    <div className="flex ">
      <button
        className={`px-4 py-2 rounded-l-xl border  ${view === 'available' ? 'bg-yellow-400 text-black' : 'bg-white'}`}
        onClick={() => setView('available')}
      >
        Available
      </button>
      <button
        className={`px-4 py-2 border rounded-r-xl ${view === 'selected' ? 'bg-yellow-400 text-black' : 'bg-white'}`}
        onClick={() => setView('selected')}
      >
        Selected ({selectedCount})
      </button>
    </div>
  );
};

export default ToggleButtons;
