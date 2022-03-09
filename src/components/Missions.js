import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionApi } from '../redux/missions/missionsReducer';
import MissionsList from './Missionlist';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missionRender = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    if (missionRender.length === 0) dispatch(fetchMissionApi());
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Content</th>
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
                joined={mission.joined}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
