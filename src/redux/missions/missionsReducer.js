// const JOIN_MISSION = 'JOIN_MISSION';
// const LEAVE_MISSION = 'LEAVE_MISSION';
// const FETCH_MISSION = 'FETCH_MISSION';
// const urlApi = 'https://api.spacexdata.com/v3/missions';

// const joinMission = (payload) => ({
//   type: JOIN_MISSION,
//   payload,
// });

// const leaveMission = (payload) => ({
//   type: LEAVE_MISSION,
//   payload,
// });

// const fetchMissionApi = () => async (dispatch) => {
//   const request = await fetch(`${urlApi}`);
//   const result = await request.json();
//   dispatch({
//     type: FETCH_MISSION,
//     payload: [...result],
//   });
// };

// const initialState = [];

// const missionsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case JOIN_MISSION:
//       return [...state, action.payload];
//     case LEAVE_MISSION:
//       return state.filter((mission) => mission.item_id !== action.payload);
//     case FETCH_MISSION:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export {
//   joinMission,
//   leaveMission,
//   fetchMissionApi,
// };

// export default missionsReducer;

const initialState = [];
const JOIN_MISSION = 'JOIN_MISSION';
const FETCH_DATA = 'FETCH_DATA';
const LEAVE_MISSION = 'LEAVE_MISSION';

export const fetchDataRequest = () => async (dispatch) => {
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  const dataResult = await request.json();
  dispatch({
    type: FETCH_DATA,
    payload: [...dataResult],
  });
};

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;
