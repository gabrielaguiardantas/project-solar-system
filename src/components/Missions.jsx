import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionsList = missions.map((mission, index) => (
      <li key={ index } className="missionList">
        <MissionCard
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />
      </li>));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missionsList }
      </div>
    );
  }
}

export default Missions;
