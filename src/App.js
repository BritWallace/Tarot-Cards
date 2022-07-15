
import Navbar from './Navbar';
import Home from './Home';
import 'animate.css';
import SingleCard from './SingleCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

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
            <Route path="/SingleCard">
              <SingleCard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;