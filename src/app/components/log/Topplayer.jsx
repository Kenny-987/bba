import React from 'react'
import players from "./players.json"
const Topplayer = () => {
  return (
    <section className="top-player-box">
        <h3>Top Players</h3>
        <div className="top-players">

        {players.map((player)=>{
            return  <div className="playercard" key={player.player_id}>
            <h3>{player.player_name}</h3>
            <p>Team: <span>{player.team_name}</span></p>
            <p>Games played: <span>{player.games_played}</span></p>
            <p>Points Scored: <span>{player.points_per_game}</span></p>
        </div>
        })}
        </div>
       
    </section>
  )
}

export default Topplayer