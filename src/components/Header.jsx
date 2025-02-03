const Header = () => {
  return (
    <div className="header">
      <nav className="menu">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Selangor_FC_logo.svg/800px-Selangor_FC_logo.svg.png"
          alt="Logo"
          className="SFClogo"
        />
        <a href="#">Home</a>
        <a href="#">News</a>
        <a href="#">Fixtures</a>
        <a href="#">About</a>
        <a href="#">Squad</a>
        <a href="#">Partners</a>
        <a href="#">Fans</a>
      </nav>
      <div className="subheader-info">
        <h1>SFC Squad</h1>
        <h2>This is the SFC players for the 2024/25 season</h2>
      </div>
    </div>
  )
}

export default Header
