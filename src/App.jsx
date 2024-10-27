import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsLetter";

const App = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      {/* Players */}
      {/* NewsLetter*/}
    <Newsletter/>
    </div>
    
    {/* Footer */}
    <Footer/>
    
    </>  
  );
};

export default App;