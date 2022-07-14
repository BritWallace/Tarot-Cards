import Navbar from './Navbar';
import Home from './Home';
import 'animate.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;