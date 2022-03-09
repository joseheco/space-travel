import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionApi } from '../redux/missions/missionsReducer';
import MissionsList from './Missionlist';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionApi());
  }, []);

  const missionRender = useSelector((state) => state.missionsReducer);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            missionRender.map((mission) => (
              <MissionsList
                key={mission.id}
                id={mission.id}
                name={mission.name}
                description={mission.description}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
