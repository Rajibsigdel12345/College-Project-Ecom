//live endpoints
// export const PRODUCTS_API = "https://college-project-ecom.onrender.com/api/shop/products/"
// export const CART_API = "https://college-project-ecom.onrender.com/api/shop/cart/"
// export const ORDER_API = "https://college-project-ecom.onrender.com/api/shop/order/"
// export const LOGIN_API = "https://college-project-ecom.onrender.com/api/login/"
// export const REGISTER_API = "https://college-project-ecom.onrender.com/api/signup/"
// export const VERIFY_API = "https://college-project-ecom.onrender.com/api/verify/"
// export const CHECK_OUT_API = "https://college-project-ecom.onrender.com/api/checkout/"
// export const SIGNUP_API = "https://college-project-ecom.onrender.com/api/signup/"
// //local endpo
export const PRODUCTS_API = "http://127.0.0.1:8000/api/shop/products/"
export const CART_API = "http://127.0.0.1:8000/api/shop/cart/"
export const ORDER_API = "http://127.0.0.1:8000/api/shop/order/"
export const LOGIN_API = "http://127.0.0.1:8000/api/login/"
export const REGISTER_API = "http://127.0.0.1:8000/api/signup/"
export const VERIFY_API = "http://127.0.0.1:8000/api/verify/"
export const CHECK_OUT_API = "http://127.0.0.1:8000/api/checkout/"
export const SIGNUP_API = "http://127.0.0.1:8000/api/signup/"

export function setCookie(name, value, exp) {
  let expires = "";
  if (exp) {
    let date = new Date(exp);
    expires = "; expires=" + date.toUTCString();
  }
  else {
    let date = new Date();
    date.setTime(date.getTime() + (60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}