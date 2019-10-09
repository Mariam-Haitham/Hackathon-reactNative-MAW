import { ADD_CHANNEL, FETCH_CHANNELS } from "./types";
import { setErrors } from "./errors";
import axios from "axios";

export const addChannel = channel => {
  return async dispatch => {
    // console.log("hello", channel);
    try {
      const res = await axios.post(
        "https://api-chatr.herokuapp.com/channels/create/",
        channel
      );
      const newChannel = res.data;

      dispatch(setErrors(""));

      dispatch({
        type: ADD_CHANNEL,
        payload: newChannel
      });
      alert("added");
    } catch (error) {
      console.error(error.response.data);
      dispatch(setErrors("Invalid input!!"));
    }
  };
};

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
