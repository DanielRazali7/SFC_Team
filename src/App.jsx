import './App.css'
import players from './data/players.json'
import PlayerCard from './components/PlayerCard'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <div className="player-list">
        {players.teams.map((player, index) => (
          <PlayerCard player={player} key={index} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
