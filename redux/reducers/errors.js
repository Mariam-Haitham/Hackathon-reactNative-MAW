import { SET_ERRORS } from "../actions/types";

const initialState = null;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERRORS:
      const errors = payload;
      return errors;
    default:
      return state;
  }
};

export default reducer;
