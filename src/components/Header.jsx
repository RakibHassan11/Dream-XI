
const Header = () => {
    return (
    <div className="navbar py-5 lg:py-7 container mx-auto w-11/12 lg:w-10/12 sticky top-0 z-10 backdrop-blur bg-white/60 ">

       
        <div className="navbar-start flex justify-between">
            
                <div className="flex items-center justify-around">   
                    <div className="flex gap-2">
                      <img className="h-14" src="https://i.ibb.co.com/Ttyh9MW/logo-footer.png" alt="" />
                    </div>
                </div>
            </div>
        
        <div className="navbar-end lg:flex gap-6">
            <ul className="gap-11 menu-horizontal px-1 text-nav_link_color text-base font-normal">
                <li><a href="#">Home</a></li>
                <li><a href="#">Fixture</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Schedules</a></li>

            </ul>
            <div className="flex gap-2 px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <p id="headerAmount" className="lg:text-2xl  whitespace-nowrap ">0 Coin </p>
                <img src="https://i.ibb.co.com/JFP8jmj/coin.png" />
                
            </div>
        </div>

        
        {/* <div className="navbar-end gap-6">
        <div className="join">
        <input className="input input-bordered join-item rounded-3xl " placeholder="Search" />
        </div>
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center ">
                    <i className="fa-regular fa-user"></i></button>        
        </div> */}
    </div>
    );
};

export default Header;