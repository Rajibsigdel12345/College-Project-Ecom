import * as constant from './constants.js';
import { verify } from './module.mjs';
const verified = await verify();
if (verified) {
  window.location.href = `${sessionStorage.getItem('template')}`;
}

document.getElementById('login-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the form from being submitted normally
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  try {
    let body;
    if (emailRegex.test(username)) {
      body = JSON.stringify({ email: username, password: password })
    } else {
      body = JSON.stringify({ username: username, password: password })
    }
    const response = await fetch(constant.LOGIN_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    });


    const data = await response.json();
    if (!response.ok) {
      throw new Error("Error: " + data.detail)
    }
    constant.setCookie('access_token', data.access, data.exp)
    window.location.href = `${sessionStorage.getItem('template')}`; // Redirect to the home page

  } catch (error) {
    alert("There was a problem with your fetch request: " + error);
  }
});