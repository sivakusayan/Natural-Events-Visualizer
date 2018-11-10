import { SET_EVENTS } from '../actionTypes/eventActionTypes';

const eventsDefaultState = [];

export default (state = eventsDefaultState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return [...action.events];
    default:
      return state;
  }
};
