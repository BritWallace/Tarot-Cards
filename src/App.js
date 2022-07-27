
import Navbar from './Navbar';
import Home from './Home';
import 'animate.css';
import SingleCard from './SingleCard';
import ThreeCard from './ThreeCard';
import TenCard from './TenCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// import Particles from 'react-particles-js';

import particlesConfig from './data/particles';



function App() {
  return (
      
    
    <Router>
      <div className="App">
      
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;