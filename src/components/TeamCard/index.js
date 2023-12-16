// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, id, teamImageUrl} = eachTeam
  //   console.log(props)
  return (
    <li className="each_team-container">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageUrl} alt={name} className="logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
