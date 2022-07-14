const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Tarot Card Reading</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Ten cards</a>
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Three cards </a>
      </div>
    </nav>
  );
}
 
export default Navbar;