import missionsReducer from '../redux/missions/missionsReducer';

describe('Testing join mission action', () => {
  it('testing join mission action when is true is the use join the mission', () => {
    const JOIN_MISSION = 'JOIN_MISSION';
    const action = { type: JOIN_MISSION, id: '2' };
    const state = [
      { id: '0', name: 'Thaicom', joined: false },
      { id: '1', name: 'Telstar1', joined: false },
      { id: '2', name: 'Iridium NEXT', joined: false },
    ];
    const result = missionsReducer(state, action);
    const newState = [
      { id: '0', name: 'Thaicom', joined: false },
      { id: '1', name: 'Telstar1', joined: false },
      { id: '2', name: 'Iridium NEXT', joined: true },
    ];
    expect(result).toEqual(newState);
  });
  it('when leave mission the joined change to false', () => {
    const LEAVE_MISSION = 'LEAVE_MISSION';
    const action = { type: LEAVE_MISSION, id: '0' };
    const state = [
      { id: '0', name: 'Thaicom', joined: true },
      { id: '1', name: 'Telstar1', joined: false },
      { id: '2', name: 'Iridium NEXT', joined: false },
    ];
    const result = missionsReducer(state, action);
    const newState = [
      { id: '0', name: 'Thaicom', joined: false },
      { id: '1', name: 'Telstar1', joined: false },
      { id: '2', name: 'Iridium NEXT', joined: false },
    ];
    expect(result).toEqual(newState);
  });
  it('the reducer should add a property reserved=true to the rocket with id = 1.', () => {
    const JOIN_MISSION = 'JOIN_MISSION';
    const previousState = [
      { id: '0', name: 'Thaicom' },
      { id: '1', name: 'Telstar1' },
    ];
    const action = { type: JOIN_MISSION, id: '1' };
    const newState = [
      { id: '0', name: 'Thaicom' },
      { id: '1', name: 'Telstar1', joined: true },
    ];
    expect(missionsReducer(previousState, action)).toEqual(newState);
  });
});

describe('Testing for mission action in missionsReducer ', () => {
  it('when the id provided is wrong, return same state', () => {
    const JOIN_MISSION = 'JOIN_MISSION';
    const action = { type: JOIN_MISSION, id: '3' };
    const state = [
      { id: '0', name: 'Thaicom', joined: false },
      { id: '1', name: 'Telstar1', joined: false },
      { id: '2', name: 'Iridium NEXT', joined: false },
    ];
    const result = missionsReducer(state, action);
    expect(result).toEqual(state);
  });
  it('when the id provided is wrong, return same state', () => {
    const LEAVE_MISSION = 'LEAVE_MISSION';
    const action = { type: LEAVE_MISSION, id: '3' };
    const state = [
      { id: '0', name: 'Thaicom', joined: false },
      { id: '1', name: 'Telstar1', joined: false },
      { id: '2', name: 'Iridium NEXT', joined: false },
    ];
    const result = missionsReducer(state, action);
    expect(result).toEqual(state);
  });
});
