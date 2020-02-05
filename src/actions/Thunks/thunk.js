import actions from '../index';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SET_HACK_LIST, ADD_TEAM, SUBSCRIBE } from "../index";

const BACKEND_URL = "https://daksh2020.herokuapp.com";

export const loginThunk = (email, password) => async (dispatch) => {
  // do backend logic here
  let toastId = null
  try {
    toastId = toast("Logging in, please wait!", { autoClose: false })
    const data = await axios.post(BACKEND_URL + "/auth/login", { email, password });
    localStorage.setItem('token', data.data.token);
    console.log("From login thunk", data)
    toast.update(toastId, {
      type: toast.TYPE.SUCCESS, autoClose: 5000, className: "rotateY animated", render: "Login Success!"
    })
    dispatch({
      type: actions.LOGIN,
      data: data.data
    })
  } catch (err) {
    // toast.update.error(err.response.data);
    toast.update(toastId, {
      type: toast.TYPE.ERROR, autoClose: 5000, className: "rotateY animated", render: err.response.data || "Couldn't connect, Please try again"
    })
  }

}


export const signupThunk = (data) => async (dispatch) => {
  console.log(data);
  let toastId = null
  try {
    toastId = toast("Logging in, please wait!", { autoClose: false })

    const res = await axios.post(BACKEND_URL + "/auth/signup", data);
    console.log(res);

    toast.update(toastId, {
      type: toast.TYPE.SUCCESS, autoClose: 5000, render: "Signup Success! Please login to continue", className: "rotateY animated"
    })
    dispatch({
      type: actions.SIGNUP,
      data: "Signed up"
    })
  } catch (err) {
    console.log(err.response)
    toast.update(toastId, {
      type: toast.TYPE.ERROR, autoClose: 5000, className: "rotateY animated", render: err.response.data || "Couldn't connect, Please try again"
    })
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
  axios.get(BACKEND_URL + '/events')
    .then(res => {
      dispatch({
        type: SET_HACK_LIST,
        hackathons: res.data.events
      });
    })
    .catch(err => console.log(err.response));
}

export const registerHack = (data) => async dispatch => {
  let toastId = null
  const config = {
    headers: {
      "auth-token": localStorage.getItem('token')
    }
  }
  try {
    toastId = toast("Registering.....", { autoClose: false })
    const res = await axios.post(BACKEND_URL + '/hackathon/addTeam', data, config);
    if (res.data.ok) {
      toast.update(toastId, {
        type: toast.TYPE.SUCCESS, autoClose: 5000, render: "Team registered! We'll reach back to you", className: "rotateY animated"
      })
    } else {
    }
    dispatch({
      type: ADD_TEAM
    })
  } catch (err) {
    console.log(err.response)
    // toast.error(err.response.data.message);
    toast.update(toastId, {
      type: toast.TYPE.ERROR, autoClose: 5000, className: "rotateY animated", render: err.response.message || "Couldn't connect, Please try again"
    })
  }
}

export const subscribe = (email) => async (dispatch) => {
  try {
    const data = await axios.post(BACKEND_URL+"/subscribeEmail", { email });
    toast.success("Subscribe Success!")
    dispatch({
      type: SUBSCRIBE,
      data: data.data
    })
  } catch (err) {
    toast.error(err.response.data);
  }

}