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
          {joined ? (
            <div className="status active">
              <span>ACTIVE MEMBER</span>
            </div>
          ) : (
            <div className="status not-active">
              <span>NOT A MEMBER</span>
            </div>
          )}
        </td>
        <td>
          {joined ? (
            <button
              className="btnleave"
              type="button"
              onClick={btnleave}
            >
              Leave Mission
            </button>
          ) : (
            <button
              className="btnjoin"
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

MissionsList.defaultProps = { joined: false };

MissionsList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool,
};

export default MissionsList;
