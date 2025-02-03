function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <img src={player.image} alt={player.name} className="player-image" />
      <h2>
        {player.name} ({player.nickName})
      </h2>
      <ul>
        <p>Position: {player.position}</p>
        <p>Number: {player.number}</p>
        <p>Age: {player.age}</p>
        <p>Nationality: {player.nationality}</p>
        <p>Origin: {player.origin}</p>
        {player.socialMedia && player.socialMedia.instagram && (
          <a
            href={player.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            Follow my Instagram
          </a>
        )}
      </ul>
    </div>
  )
}

export default PlayerCard
