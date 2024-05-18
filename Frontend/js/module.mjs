import * as constant from './constants.js';
export async  function verify() {
  let token = constant.getCookie('access_token')
  if (token) {
   try{ 
    const response = await fetch(constant.VERIFY_API, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.ok) {
    const userData = await response.json();
    sessionStorage.setItem('username',userData.username)
    sessionStorage.setItem('user_id',userData.user_id) // Store the username in session storage
    constant.setCookie('exp',userData.exp,userData.exp) // Store the username in session storage
    constant.setCookie('iat',userData.iat,userData.exp) // Store the username in local storage
    return true;
  }
  else if (response.status==401){
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('user_id')
    return false;
  
  }
} catch (error) {
  alert("verify function Error: "+ error);
}
}
}

export function setLocal(key,kwargs){
 localStorage.setItem(key,JSON.stringify(kwargs))
}

export async function getCart(count=true){
  try {
    const response = await fetch(constant.CART_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+constant.getCookie('access_token')
      
}});
  if (response.status==400 || response.status==500) {
    console.log(response.statusText,response.text())
    throw new Error(response.statusText);
  }
  else if (response.status==401) {
    // window.location.replace("login.html");
    return 0;
  }
  const data = await response.json();
  if (count){
    let quantity=0;
      data[0].cart_item.forEach(item => {
      quantity+=item.quantity;
    }
    );
    return quantity
  }
  else{
    return data[0].cart_item;
  }
  
  }
  catch (error) {
    alert("getCart function Error: "+ error);
  }
}

export async function addToCart(product_id,quantity=1){
  try {
    const response = await fetch(constant.CART_API, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+constant.getCookie('access_token')
      },
      body: JSON.stringify({
        cart: [{
          product_id: product_id,
          quantity: quantity,
          add_to_cart: true
        }]
      })
    });
    if (response.status==400 || response.status==500) {
      response.text().then(text => {
        alert(text)
      }
      )
      console.log(response.statusText,)
      throw new Error(response.statusText);
    }
    else if (response.status==401) {
      window.location.replace("login.html");
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data)
    // alert("Product added to cart")
  }
  catch (error) {
    alert("There was a problem with your fetch request: "+ error);
  }
}