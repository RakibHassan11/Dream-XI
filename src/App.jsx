import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsLetter";
import { useState } from "react";
import PlayerSection from "./components/PlayerSection";

const App = () => {
  const [coins, setCoins] = useState(0);
  const handleIncrementsCoin = () => {
    setCoins(coins + 1000000)
  }

  return (
    <>
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header coins = {coins}/>
      {/* Banner */}
      <Banner handleIncrementsCoin = {handleIncrementsCoin}/>
      {/* Player Section */}
      <PlayerSection coins = {coins} setCoins = {setCoins}/>
      {/* NewsLetter*/}
    <Newsletter/>
    </div>
    
    {/* Footer */}
    <Footer/>
    
    </>  
  );
};

export default App;