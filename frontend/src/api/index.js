import axios from "axios";

// export const URL = 'https://178.183.111.190/';
export const URL = `https://${process.env.IP || window.location.href.split('/')[2]}/`;
export const EDIT_NUMBER = `${URL}number`;


export const authentication = (token, sip, number) => (
  axios.post(EDIT_NUMBER, { sip, number }, { headers: { "x-auth-token": token } }).then((response) => response.data)
);