
import { ADD_CHANNEL, FETCH_CHANNELS } from "../actions/types";

const initialState = {
  channels: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      const newChannel = action.payload;
      return {
        ...state,
        channels: [newChannel, ...state.channels]
    case FETCH_CHANNELS:
      return {
        ...state,
        channels: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
