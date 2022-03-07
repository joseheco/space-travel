import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRocketsAPI } from '../redux/rockets/rocketsReducer';
import Rocket from './Rocket';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsAPI());
  }, []);

  const list = [
    {
      id: '1',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      rocket_name: 'Falcon 9',
      flickr_images: [
        'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
      ],
    },
  ];

  return (
    <section className="page__section">
      <ul className="rocket__list">
        <Rocket rocket={list[0]} />
      </ul>
    </section>
  );
};

export default Home;
