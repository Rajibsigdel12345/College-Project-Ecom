import * as constant from './constants.js';
import {verify} from './module.mjs';
async function getVerify() {
  const response = await verify();
  if (response) {
    window.location.href = "index.html";
  }
}
window.onload = getVerify;

document.getElementById('login-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the form from being submitted normally
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  try {
    const response = await fetch(constant.LOGIN_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password:password })
    });

   
    const data = await response.json();
    if (!response.ok) {
      // console.log(data);
      throw new Error("Error: "+data.detail)
    }
    constant.setCookie('access_token',data.access,data.exp)
    // alert("User logged in successfully");
    window.location.href = `${sessionStorage.getItem('template')}`; // Redirect to the home page

  } catch (error) {
    // console.log(error)
    alert("There was a problem with your fetch request: " + error);
    // window.location.href = "login.html";
  }
});