const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';
const FETCH_MISSION = 'FETCH_MISSION';

const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const fetchMissions = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

const fetchMissionApi = () => async (dispatch) => {
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json())
    .then((MissionsList) => {
      const initialState = MissionsList.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
      dispatch(fetchMissions(initialState));
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
      return [...action.payload];
    default:
      return state;
  }
};

export {
  joinMission,
  leaveMission,
  fetchMissionApi,
};

export default missionsReducer;
