import * as constant from './constants.js';
import { verify } from './module.mjs';
const verified = await verify();
if (verified) {
  window.location.href = `${sessionStorage.getItem('template')}`;
}

document.getElementById('login-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the form from being submitted normally
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const first_name = document.getElementById('first_name').value;
  const last_name = document.getElementById('last_name').value;
  try {
    const response = await fetch(constant.SIGNUP_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, first_name: first_name, last_name: last_name, username: username, password: password })
    });


    const data = await response.json();
    if (!response.ok) {
      // console.log(data);
      throw new Error("Error: " + data.detail)
    }
    constant.setCookie('access_token', data.access, data.exp)
    // alert("User logged in successfully");
    window.location.href = `${sessionStorage.getItem('template')}`; // Redirect to the home page

  } catch (error) {
    // console.log(error)
    alert("There was a problem with your fetch request: " + error);
    // window.location.href = "login.html";
  }
});