
import Navbar from './Navbar';
import Home from './Home';
import 'animate.css';
import SingleCard from './SingleCard';
import ThreeCard from './ThreeCard';
import Memory from './Memory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// import Particles from 'react-particles-js';
import './App.css'


import Particles from './data/particles';



function App() {
  return (
      
    
    <Router>
      <div className="App">
        {/* <Particles /> */}
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
            <Route path="/Memory">
              <Memory />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;