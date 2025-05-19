function Header() {
    return  <header style={headerStyle}>Cambee 🐝</header>; 
  }
  
  const headerStyle = {
    width: '100%',
    textAlign: 'center',
    padding: '16px 0',
    fontSize: '20px',
    fontWeight: 'bold',
    borderBottom: '1px solid #ddd'
  };

  export default Header;