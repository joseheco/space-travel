import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionApi } from '../redux/missions/missionsReducer';
import MissionsList from './Missionlist';

const Missions = () => {
  const dispatch = useDispatch();
  const missionRender = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    if (missionRender.length === 0) dispatch(fetchMissionApi());
  }, []);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
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
    </section>
  );
};

export default Missions;
