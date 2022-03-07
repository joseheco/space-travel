import { PropTypes } from 'prop-types';

const Rocket = ({ rocket }) => (
  <li className="rocket__list-item">
    <div className="list__item-image">
      <img src={rocket.flickr_images[0]} alt="rocket" />
    </div>
    <div className="list__item-details">
      <h2>{rocket.rocket_name}</h2>
      <p>
        <span className="reserved-flag">Reserved</span>
        {rocket.description}
      </p>
      <button type="button" className="btn-blue btn-active" data-id={rocket.id}>Reserve Rocket</button>
      <button type="button" className="btn-cancel btn-active" data-id={rocket.id}>Cancel Reservation</button>
    </div>
  </li>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Rocket;
