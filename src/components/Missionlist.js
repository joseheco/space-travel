import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsReducer';

const MissionsList = ({
  id,
  name,
  description,
  joined,
}) => {
  const dispatch = useDispatch();
  const btnJoin = () => {
    dispatch(joinMission(id));
  };

  const btnLeave = () => {
    dispatch(leaveMission(id));
  };

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{description}</td>
        <td>
          {joined ? (
            <span>Active Member</span>
          ) : (
            <span>NOT A MEMBER</span>
          )}
        </td>
        <td>
          {joined ? (
            <button
              type="button"
              onClick={btnLeave}
            >
              Leave Mission
            </button>
          ) : (
            <button
              type="button"
              onClick={btnJoin}
            >
              Join Mission
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

MissionsList.defaultProps = { joined: false };

MissionsList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool,
};

export default MissionsList;
