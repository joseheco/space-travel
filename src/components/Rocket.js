import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { setRocketReserved, setRocketUnreserved } from '../redux/rockets/rocketsReducer';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const toogleReservation = (e) => {
    if (!rocket.reserved) dispatch(setRocketReserved(+e.target.dataset.id));
    else dispatch(setRocketUnreserved(+e.target.dataset.id));
  };

  return (
    <li className="rocket__list-item">
      <div className="list__item-image">
        <img src={rocket.flickr_images[0]} alt="rocket" />
      </div>
      <div className="list__item-details">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.description}
        </p>
        <button type="button" className="btn-blue" data-id={rocket.id} onClick={toogleReservation}>Reserve Rocket</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
