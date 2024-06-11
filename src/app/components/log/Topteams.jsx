import React from 'react'
import teams from './topteams.json'
const Topteams = () => {
  return (
    <section className="top-player-box">
    <h3>Top Teams</h3>
    <div className="top-players">

    {teams.map((team)=>{
        return  <div className="playercard">
        <h3>{team.team_name}</h3>
        <p>Wins: <span>{team.wins}</span></p>
        <p>Losses: <span>{team.losses}</span></p>
        <p>Points scored: <span>{team.points_scored}</span></p>
        <p>Points against: <span>{team.points_against}</span></p>
    </div>
    })}
    </div>
   
</section>
  )
}

export default Topteams