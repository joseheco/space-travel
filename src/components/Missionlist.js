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
  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = () => {
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
              onClick={handleLeaveMission}
            >
              Leave Mission
            </button>
          ) : (
            <button
              type="button"
              onClick={handleJoinMission}
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
