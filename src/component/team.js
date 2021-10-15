export default function Team(props){
    const {team, key} = props;
    return (
        <div className = "column" key = {key}>
          <h5>{team.name}</h5>
          <img src = {team.logo} alt = {team.name} width = {100} height = {100} />
        </div>
      )
}