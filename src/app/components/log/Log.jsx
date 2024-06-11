import React from 'react'
import teams from './teams.json'
import './log.css'
import Link from "next/link"
import Topplayer from "./Topplayer"
import Topteams from './Topteams'
const Log = () => {
  return (
    <section className="table_container">
        
        <div className="table-wrapper">
        <div className="heading">
        <h2>BBA Table </h2>
<Link href="">Match center</Link>
        </div>
        <table className="table">
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Games Played</th>
          <th>Points</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Points Scored</th>
          <th>Points Against</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team.team_id}>
            <td>{team.team_name}</td>
            <td>{team.games_played}</td>
            <td>{team.points}</td>
            <td>{team.wins}</td>
            <td>{team.losses}</td>
            <td>{team.points_scored}</td>
            <td>{team.points_against}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className="performers">
<Topplayer/>
<Topteams/>
    </div>
    </section>
  )
}

export default Log