/* eslint-disable no-unused-vars */
import { React } from 'react';
import { PropTypes } from 'prop-types';

const MissionsList = ({ id, name, description }) => (
  <>
    <tbody>
      <tr key={id}>
        <td>{name}</td>
        <td>{description}</td>
      </tr>
    </tbody>
  </>
);

MissionsList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionsList;
