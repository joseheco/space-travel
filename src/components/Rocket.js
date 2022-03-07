import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRocketReserved } from '../redux/rockets/rocketsReducer';

const Rocket = ({ rocket }) => {
  const [reservedFlagStyle, setResevedFlagStyle] = useState('');
  const [bookingBtnStyle, setBookingBtnStyle] = useState('btn-blue');
  const [bookingState, setBookingState] = useState('Reserve Rocket');

  const dispatch = useDispatch();

  useEffect(() => {
    if (rocket.reserved) {
      setResevedFlagStyle('ele-active');
      setBookingBtnStyle('btn-cancel');
      setBookingState('Cancel Reservation');
    }
  });

  const makeReservation = (e) => {
    dispatch(setRocketReserved(+e.target.dataset.id));
  };

  return (
    <li className="rocket__list-item">
      <div className="list__item-image">
        <img src={rocket.flickr_images[0]} alt="rocket" />
      </div>
      <div className="list__item-details">
        <h2>{rocket.rocket_name}</h2>
        <p>
          <span className={'reserved-flag '.concat(reservedFlagStyle)}>Reserved</span>
          {rocket.description}
        </p>
        <button type="button" className={bookingBtnStyle} data-id={rocket.id} onClick={makeReservation}>{bookingState}</button>
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
