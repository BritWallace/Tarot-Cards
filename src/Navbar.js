import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>₸₳R𝇇₸</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/singleCard" style={{ 
          color: 'white', 
          backgroundColor: '#ed4c17',
          borderRadius: '8px' 
        }}>Single Card</Link>
        <Link to="/threeCard" style={{ 
          color: 'white', 
          backgroundColor: '#ed4c17',
          borderRadius: '8px' 
        }}>Three cards </Link>
        <Link to="/tenCard" style={{ 
          color: 'white', 
          backgroundColor: '#ed4c17',
          borderRadius: '8px' 
        }}>Ten Cards</Link>
        <Link to="/memory" style={{ 
          color: 'white', 
          backgroundColor: '#ed4c17',
          borderRadius: '8px' 
        }}>Memory</Link>
        <Link to="/birthday" style={{ 
          color: 'white', 
          backgroundColor: '#ed4c17',
          borderRadius: '8px' 
        }}>Birthday </Link>
        
          
      </div>
    </nav>
  );
}

export default Navbar;