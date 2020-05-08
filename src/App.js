import React, { Component } from "react";
import axios from "axios";
import Equipos from "./Equipos";
import Players from "./Players";

class App extends Component {
  state = {
    equipos: [],
    data: [],
  };

  showTeam = async (e) => {
    this.setState({ data: [] });
    let team = e.target.value.toLowerCase();
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://data.nba.net/json/cms/noseason/team/${team}/roster.json`
    );
    this.setState({ data: res.data.sports_content.roster.players.player });
    //this.setState({ teamSelected: e.target.value });
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/http://data.nba.net/json/cms/noseason/sportsmeta/nba_teams.json"
    );

    let arr = [];

    res.data.sports_content.teams.team.map(
      (equipo) =>
        equipo.is_nba_team &&
        equipo.team_id != 1610616839 &&
        arr.push(equipo.team_nickname)
    );

    arr = arr.sort();

    this.setState({ equipos: arr });
  }

  render() {
    return (
      <div className="container text-center">
        <h1>NBApp</h1>
        <Equipos showTeam={this.showTeam} equipos={this.state.equipos} />
        <Players data={this.state.data} />
      </div>
    );
  }
}

// class App extends Component {
//   state = {
//     data: [],
//   };
//   accion = async () => {
//     const res = await axios.get(
//       "https://cors-anywhere.herokuapp.com/http://data.nba.net/json/cms/noseason/team/rockets/roster.json"
//     );
//     this.setState({ data: res.data.sports_content.roster.players.player });
//   };
//   render() {
//     return (
//       <div className="container text-center">
//         <h1>NBApp</h1>
//         <Players accion={this.accion} data={this.state.data} />
//       </div>
//     );
//   }
// }

export default App;
