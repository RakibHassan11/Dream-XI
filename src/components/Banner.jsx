const Banner = ({handleIncrementsCoin}) => {
    return (
      <div
        className="bg-cover bg-no-repeat hero mx-auto w-11/12 lg:w-10/12 bg-opacity-35 rounded-2xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/9GGDV5T/bg-shadow.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-50  bg-gradient-to-r from-blue-900/80 via-black to-violet-900/90 backdrop-blur rounded-2xl"></div>
        <div className=" hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
           <img className="mx-auto mb-10 mt-10" src="https://i.ibb.co.com/MyzqT1L/banner-main.png" alt="" />
            <h1 className="mb-5 text-4xl font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 text-lg lg:text-xl text-gray-400">
            Beyond Boundaries Beyond Limits
            </p>
            <button
             onClick={handleIncrementsCoin}
             className="btn bg-yellow-300 rounded-xl mb-10 px-8 text-xl text-gray-800  font-medium border-none hover:bg-yellow-200 transition-colors">
            Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  