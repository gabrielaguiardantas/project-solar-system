import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const planetsList = planets.map((planet, index) => (
      <li key={ index } className="planetList">
        <PlanetCard
          planetName={ planet.name }
          planetImage={ planet.image }
        />
      </li>));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          { planetsList }
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
