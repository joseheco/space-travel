const baseURL = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS_FROM_API = 'rocketStore/rockets/GET_ROCKETS_FROM_API';
const SET_ROCKETS_RESERVED = 'rocketStore/rockets/SET_ROCKETS_RESERVED';
const SET_ROCKETS_UNRESERVED = 'rocketStore/rockets/SET_ROCKETS_UNRESERVED';

const initializeState = [];

const getRocketsAPI = () => async (dispatch) => {
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      const newInitializeState = data.map((obj) => ({
        id: obj.id,
        rocket_name: obj.rocket_name,
        description: obj.description,
        flickr_images: obj.flickr_images,
      }));
      dispatch({
        type: GET_ROCKETS_FROM_API,
        payload: newInitializeState,
      });
    });
};

const setRocketReserved = (rocketId) => ({ type: SET_ROCKETS_RESERVED, payload: rocketId });
const setRocketUnreserved = (rocketId) => ({ type: SET_ROCKETS_UNRESERVED, payload: rocketId });

const rocketsReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_ROCKETS_FROM_API:
      return action.payload;
    case SET_ROCKETS_RESERVED: {
      return state.map((obj) => {
        if (obj.id === action.payload) return { ...obj, reserved: true };
        return obj;
      });
    }
    case SET_ROCKETS_UNRESERVED: {
      return state.map((obj) => {
        if (obj.id === action.payload) return { ...obj, reserved: false };
        return obj;
      });
    }
    default:
      return state;
  }
};

export {
  getRocketsAPI,
  setRocketReserved,
  setRocketUnreserved,
};

export default rocketsReducer;
