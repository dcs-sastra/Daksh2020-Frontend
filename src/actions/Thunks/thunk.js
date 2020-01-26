import actions from '../index';
import axios from 'axios';
import { toast } from 'react-toastify'

export const loginThunk = (email, password) => async (dispatch) => {
  // do backend logic here
  try {
    const data = await axios.post("/auth/login", { email, password });
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
    const res = await axios.post("/auth/signup", data);
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
