import players from './players'

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <img src={player.image} alt={player.name} className="player-image" />
      <h2>
        {player.name} ({player.nickName})
      </h2>
      <p>Position: {player.position}</p>
      <p>Number: {player.number}</p>
      <p>Age: {player.age}</p>
      <p>Nationality: {player.nationality}</p>
      <p>Origin: {player.origin}</p>
    </div>
  )
}

export default PlayerCard
