import { FETCH_CHANNELS } from "./types";

import axios from "axios";

export const fetchChannels = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://api-chatr.herokuapp.com/channels/"
      );
      const channels = response.data;
      dispatch({
        type: FETCH_CHANNELS,
        payload: channels
      });
    } catch (error) {
      console.log(error);
    }
  };
};
