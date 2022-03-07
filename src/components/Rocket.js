import { PropTypes } from 'prop-types';

const Rocket = ({ rocket }) => (
  <li className="rocket__list-item">
    <div className="rocket__image">
      <img src={rocket.flickr_images[0]} alt="rocket" />
    </div>
    <div className="rocket__details">
      <h2>{rocket.rocket_name}</h2>
      <p>{rocket.description}</p>
      <button type="button" className="btn">Reserve Rocket</button>
    </div>
  </li>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Rocket;
