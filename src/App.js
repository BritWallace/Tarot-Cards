
import Navbar from './Navbar';
import Home from './Home';
import 'animate.css';
import SingleCard from './SingleCard';
import ThreeCard from './ThreeCard';
import TenCard from './TenCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// import Particles from 'react-particles-js';
// import particlesConfig from './data/particles';



function App() {
  return (
      
    
    <Router>
      <div className="App">
      {/* <Particles height="100vh" width="100vw" params={particlesConfig} /> */}
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
              <SingleCard />
            </Route>
            <Route path="/TenCard">
              <SingleCard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;