import { useSelector } from 'react-redux';

const ProfileRocket = () => {
  const myRockets = useSelector((state) => state.rocketsReducer);

  return (
    <div className="profile__group">
      <h2>My Rockets</h2>
      <ul className="profile__list">
        {
          myRockets && myRockets.filter((obj) => obj.reserved).map((obj) => <li key={obj.id} className="profile__list-item">{obj.rocket_name}</li>)
        }
      </ul>
    </div>
  );
};

export default ProfileRocket;
