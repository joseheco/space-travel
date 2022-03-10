import rocketsReducer from '../redux/rockets/rocketsReducer';

describe('Validate rocket reducers', () => {
  const GET_ROCKETS_FROM_API = 'rocketStore/rockets/GET_ROCKETS_FROM_API';
  const SET_ROCKETS_RESERVED = 'rocketStore/rockets/SET_ROCKETS_RESERVED';
  const SET_ROCKETS_UNRESERVED = 'rocketStore/rockets/SET_ROCKETS_UNRESERVED';

  it('When there is not an state and an action, the default reducer should return the empty initial state (an empty array).', () => {
    expect(rocketsReducer(undefined, {})).toEqual([]);
  });

  it('When there is a previous state and does not exist an action, the default reducer should return the previous state.', () => {
    const previousState = [
      {
        id: 2,
        rocket_name: 'Falcon 9',
        description: 'Falcon 9 is a two-stage rocket designed and manufa… satellites and the Dragon spacecraft into orbit.',
        flickr_images: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'],
      },
    ];
    expect(rocketsReducer(previousState, {})).toEqual(previousState);
  });

  it('When dispatch action GET_ROCKETS_FROM_API, the reducer should update the empty initial state with the API data.', () => {
    const initialState = [];
    const apiData = [{
      id: 1,
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
      rocket_name: 'Falcon 1',
      flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
    }];
    const action = { type: GET_ROCKETS_FROM_API, payload: apiData };

    expect(rocketsReducer(initialState, action)).toEqual(apiData);
  });

  it('When dispatch action SET_ROCKETS_RESERVED, the reducer should add a property reserved=true to the rocket with id = 2.', () => {
    const previousState = [
      {
        id: 1,
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
        rocket_name: 'Falcon 1',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
      },
      {
        id: 2,
        rocket_name: 'Falcon 9',
        description: 'Falcon 9 is a two-stage rocket designed and manufa… satellites and the Dragon spacecraft into orbit.',
        flickr_images: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'],
      },
    ];
    const action = { type: SET_ROCKETS_RESERVED, payload: 2 };
    const newState = [
      {
        id: 1,
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
        rocket_name: 'Falcon 1',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
      },
      {
        id: 2,
        rocket_name: 'Falcon 9',
        description: 'Falcon 9 is a two-stage rocket designed and manufa… satellites and the Dragon spacecraft into orbit.',
        flickr_images: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'],
        reserved: true,
      },
    ];

    expect(rocketsReducer(previousState, action)).toEqual(newState);
  });

  it('When dispatch action SET_ROCKETS_UNRESERVED, the reducer should change the reserved property from true to false of the rocket with id = 2.', () => {
    const previousState = [
      {
        id: 1,
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
        rocket_name: 'Falcon 1',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
      },
      {
        id: 2,
        rocket_name: 'Falcon 9',
        description: 'Falcon 9 is a two-stage rocket designed and manufa… satellites and the Dragon spacecraft into orbit.',
        flickr_images: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'],
        reserved: true,
      },
    ];
    const action = { type: SET_ROCKETS_UNRESERVED, payload: 2 };
    const newState = [
      {
        id: 1,
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
        rocket_name: 'Falcon 1',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
      },
      {
        id: 2,
        rocket_name: 'Falcon 9',
        description: 'Falcon 9 is a two-stage rocket designed and manufa… satellites and the Dragon spacecraft into orbit.',
        flickr_images: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'],
        reserved: false,
      },
    ];

    expect(rocketsReducer(previousState, action)).toEqual(newState);
  });
});
