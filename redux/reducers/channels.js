import { FETCH_CHANNELS } from "../actions/types";

const initialState = {
  channels: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
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
