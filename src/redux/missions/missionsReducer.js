const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';
const FETCH_MISSION = 'FETCH_MISSION';
const urlApi = 'https://api.spacexdata.com/v3/missions';

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const fetchMissionApi = () => async (dispatch) => {
  const request = await fetch(urlApi);
  const result = await request.json();
  dispatch({
    type: FETCH_MISSION,
    payload: [...result],
  });
};

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return [...state, action.payload];
    case LEAVE_MISSION:
      return state.filter((mission) => mission.item_id !== action.payload);
    case FETCH_MISSION:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
