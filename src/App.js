import './App.css';
import Navigation from './Section/Navigation/Navigation';
import Content from './Section/B-Evlove/ContentFirst';
import ContentSecond from './Section/B-Evlove/ContentSecond';
import BEvolveCard from './Section/B-Evlove/B-Evolve_ContentCard';
import About from './Section/About/About';
import ContentThree from './Section/EDuce/ContentThree';
import EduceCard from './Section/EDuce/EduceCard'
import Fooder from './Section/Fooder/Fooder';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Content/>
      <ContentSecond/>
      <BEvolveCard/>
      <ContentThree/>
      <EduceCard/>
      <About/>
      <Fooder/>
    </div>
  );
}

export default App;
