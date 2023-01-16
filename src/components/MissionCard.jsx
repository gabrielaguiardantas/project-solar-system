import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">
          Nome:
          {' '}
          { name }
        </p>
        <p data-testid="mission-year">
          Ano:
          {' '}
          { year }
        </p>
        <p data-testid="mission-country">
          País:
          {' '}
          { country }
        </p>
        <p data-testid="mission-destination">
          Destino:
          {' '}
          { destination }
        </p>
        <br />
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
