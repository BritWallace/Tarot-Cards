
import Navbar from './Navbar';
import Home from './Home';
import 'animate.css';
import SingleCard from './SingleCard';
import ThreeCard from './ThreeCard';
import TenCard from './TenCard';
import Memory from './Memory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// import Particles from 'react-particles-js';
import './App.css'
import Birthday from './Birthday';
import Particles from './data/particles';



function App() {
  return (
      
    
    <Router>
      <div className="App">
        {/* <ParticlesBackground /> */}
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/SingleCard">
              <SingleCard />
            </Route>
            <Route path="/ThreeCard">
              <ThreeCard />
            </Route>
            <Route path="/TenCard">
              <TenCard />
            </Route>
            <Route path="/Memory">
              <Memory />
            </Route>
            <Route path="/Birthday">
              <Birthday />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;