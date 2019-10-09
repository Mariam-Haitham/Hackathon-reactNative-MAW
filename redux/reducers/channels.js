import { ADD_CHANNEL } from "../actions/types";
const initialState = {
  channels: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      const newChannel = action.payload;
      return {
        ...state,
        channels: [newChannel, ...state.channels]
      };
    default:
      return state;
  }
};
