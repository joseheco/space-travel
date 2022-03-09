/* eslint-disable no-unused-vars */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsReducer';

const MissionsList = ({
  id,
  name,
  description,
  reserved,
}) => {
  const dispatch = useDispatch();
  const btnjoin = () => {
    dispatch(joinMission(id));
  };

  const btnleave = () => {
    dispatch(leaveMission(id));
  };

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{description}</td>
        <td>
          {reserved ? (
            <span className="active-member">Active Member</span>
          ) : (
            <span>NOT A MEMBER</span>
          )}
        </td>
        <td>
          {reserved ? (
            <button
              type="button"
              onClick={btnleave}
            >
              Leave Mission
            </button>
          ) : (
            <button
              type="button"
              onClick={btnjoin}
            >
              Join Mission
            </button>
          )}
        </td>
      </tr>
    </>
  );
};
MissionsList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionsList;
