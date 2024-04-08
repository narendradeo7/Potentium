import AboutusSec from "./_components/AboutusSec";
import FeatureSec from "./_components/FeatureSec";
import Footer from "./_components/Footer/Footer";
import HeroSec from "./_components/Herosec/HeroSec";
import LLMsSec from "./_components/LLMsSec";
import ResourcesSec from "./_components/ResourcesSec";
import Contactus from "./_components/_atoms/Contactus";



function App() {
  return (
    <div className="App">
       <HeroSec/>
      <AboutusSec/>
     <FeatureSec/>
     <ResourcesSec/>
     <LLMsSec/>
     <Contactus/>
     <Footer/>
    </div>

  );
}

export default App;
