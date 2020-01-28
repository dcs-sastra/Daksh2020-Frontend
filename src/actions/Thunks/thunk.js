import actions from '../index';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SET_HACK_LIST, ADD_TEAM } from "../index";

const BACKEND_URL = "https://daksh2020.herokuapp.com";

export const loginThunk = (email, password) => async (dispatch) => {
  // do backend logic here
  try {
    const data = await axios.post(BACKEND_URL+"/auth/login", { email, password });
    localStorage.setItem('token', data.data.token);
    console.log("From login thunk", data)
    toast.success("Login Success!")
    dispatch({
      type: actions.LOGIN,
      data: data.data
    })
  } catch (err) {
    toast.error(err.response.data);
  }

}


export const signupThunk = (data) => async (dispatch) => {
  console.log(data);
  try {
    const res = await axios.post(BACKEND_URL+"/auth/signup", data);
    console.log(res);
    toast.success("Signed Up Successfully, Login to continue")
    dispatch({
      type: actions.SIGNUP,
      data: "Signed up"
    })
  } catch (err) {
    console.log(err.response)
    toast.error(err.response.data)
  }
}


export const authStateRefresh = () => dispatch => {
  const token = localStorage.getItem('token')
  if (token === null || token === undefined) {
    dispatch({
      type: actions.AUTHSTATE,
      data: false
    })
  }
  else {
    dispatch({
      type: actions.AUTHSTATE,
      data: true
    })
  }
}


export const signOut = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({
    type: actions.LOGOUT
  })
}

export const setHackathonList = (hackathons) => (dispatch) => {
  console.log("setHackathonList");
  axios.get(BACKEND_URL+'/events')
    .then(res => {
      console.log(res);
      dispatch({
        type: SET_HACK_LIST,
        hackathons: res.data.events
      });
    })
    .catch(err => console.log(err.response));
}

export const registerHack = (data) => async dispatch => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem('token')
    }
  }
  try {
    const res = await axios.post(BACKEND_URL+'/hackathon/addTeam', data, config);
    if (res.data.ok) {
      toast.success("Team registered! We'll reach back to you")
    } else {
    }
    dispatch({
      type: ADD_TEAM
    })
  } catch (err) {
    console.log(err.response)
    toast.error(err.response.data.message);
  }
}
