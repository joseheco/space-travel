const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';
const FETCH_MISSION = 'FETCH_MISSION';

const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
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
    case FETCH_MISSION:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id === action.id) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id === action.id) {
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

export {
  joinMission,
  leaveMission,
  fetchMissionApi,
};

export default missionsReducer;
