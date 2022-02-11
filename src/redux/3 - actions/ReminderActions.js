import axios from "axios";

import {
  ADD_REMINDER_FAIL,
  ADD_REMINDER_REQUEST,
  ADD_REMINDER_SUCCESS,
  EDIT_REMINDER_FAIL,
  EDIT_REMINDER_REQUEST,
  EDIT_REMINDER_SUCCESS,
  PUSH_REMINDER_REQUEST,
} from "../1 - constants/Constants";

export const addReminder =
  (city, description, time, date) => async (dispatch) => {
    try {
      dispatch({ type: ADD_REMINDER_REQUEST });

      const data = axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=321ba69e7e5e15bbec3d541b42d0a5c8&units=metric
  `
      );
      const weather = await data;
      console.log(typeof weather.data.main.temp);

      dispatch({
        type: ADD_REMINDER_SUCCESS,
        payload: { city, description, time, weather, date },
      });
    } catch (error) {
      dispatch({
        type: ADD_REMINDER_FAIL,
        payload: error,
      });
      console.log(error);
    }
  };

export const editReminder =
  (city, description, time, date) => async (dispatch) => {
    try {
      dispatch({ type: EDIT_REMINDER_REQUEST });

      const data = axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=321ba69e7e5e15bbec3d541b42d0a5c8&units=metric
  `
      );
      const weather = await data;
      console.log(typeof weather.data.main.temp);

      dispatch({
        type: ADD_REMINDER_SUCCESS,
        payload: {
          city,
          description,
          time,
          weather,
          date,
        },
      });
    } catch (error) {
      dispatch({ type: EDIT_REMINDER_FAIL, payload: error });
      console.log(error);
    }
  };

export const pushNewReminder =
  (city, description, time) => async (dispatch) => {
    try {
      dispatch({ type: PUSH_REMINDER_REQUEST });
    } catch (error) {}
  };
