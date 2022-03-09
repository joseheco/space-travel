/* eslint-disable no-unused-vars */
import { React } from 'react';
import { PropTypes } from 'prop-types';

const MissionsList = ({ id, name, description }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr key={id}>
          <td>{name}</td>
          <td>{description}</td>
        </tr>
      </tbody>
    </table>
  </>
);

MissionsList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionsList;
