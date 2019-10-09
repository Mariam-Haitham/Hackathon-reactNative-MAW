import { ADD_CHANNEL } from "./types";
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
