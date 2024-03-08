import React from "react";
import "./App.css";
import jsonData from "./CollegeBasketballTeams.json";

const bballTeams = jsonData.teams;

interface teamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>NCAA College Basketball Teams:</h1>;
}

class Team extends React.Component<teamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>School: {oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {bballTeams.map((team, index) => (
        <div key={index}>
          <Team {...team} />
          {index !== bballTeams.length - 1 && <hr />}{" "}
          {/* Add <hr /> if not the last team */}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
