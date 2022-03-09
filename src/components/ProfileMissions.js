import { useSelector } from 'react-redux';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div className="profile__group">
      <h2>My Missions</h2>
      <ul className="profile__list">
        {
        missions.filter((mission) => mission.joined).map((mission) => (
          <div key={mission.id}>
            <li className="profile__list-item">{mission.name}</li>
          </div>
        ))
        }
      </ul>
    </div>
  );
};

export default ProfileMissions;
