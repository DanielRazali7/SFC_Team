const Header = () => {
  return (
    <div className="header">
      <nav className="menu">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Selangor_FC_logo.svg/800px-Selangor_FC_logo.svg.png"
          alt="Logo"
          className="SFClogo"
        />
        <a href="https://www.selangorfc.com/en/home">Home</a>
        <a href="https://www.selangorfc.com/en/news">News</a>
        <a href="https://ticket.tickethotline.com.my/club/selangor/4/home">
          Fixtures
        </a>
        <a href="https://www.selangorfc.com/en/about-fas">About</a>
        <a href="https://www.selangorfc.com/en/home">Squad</a>
        <a href="https://www.selangorfc.com/en/partners">Partners</a>
        <a href="https://www.selangorfc.com/en/team-card">Team Card</a>
      </nav>
      <hr className="separator" />
      <div className="subheader-info">
        <h1>Selangor FC First Team</h1>
        <h2>Meet the SFC Squad for the 2024/25 Season</h2>
      </div>
    </div>
  )
}

export default Header
