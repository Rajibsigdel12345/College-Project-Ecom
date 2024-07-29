import * as constant from './constants.js';
import * as component from './component.js';
export async function verify() {
  let token = constant.getCookie('access_token')
  if (token) {
    try {
      const response = await fetch(constant.VERIFY_API, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.ok) {
        const userData = await response.json();
        sessionStorage.setItem('username', userData.username)
        sessionStorage.setItem('user_id', userData.user_id) // Store the username in session storage
        constant.setCookie('exp', userData.exp, userData.exp) // Store the username in session storage
        constant.setCookie('iat', userData.iat, userData.exp) // Store the username in local storage
        return true;
      }
      else if (response.status == 401) {
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('user_id')
        return false;

      }
    } catch (error) {
      alert("verify function Error: " + error);
    }
  }
}

export function setLocal(key, kwargs) {
  localStorage.setItem(key, JSON.stringify(kwargs))
}

export async function DisplayProduct(page = 1, filter = null) {
  let product_display = document.getElementById('product-display')
  document.getElementById('loader').setAttribute('style', 'display:inline-block')
  product_display.innerHTML = ""
  try {
    const response = await fetch(constant.PRODUCTS_API + `?page=${page}`);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    document.getElementById('loader').setAttribute('style', 'display:none')
    const data = await response.json();
    console.log(data)
    data.results.forEach(element => {
      let product_card = component.card(element)
      product_display.innerHTML += product_card

    })
    if (!data.next) {
      document.getElementById('next-button').classList.add('disabled');
    } else {
      document.getElementById('next-button').classList.remove('disabled');
    }

    if (!data.previous) {
      document.getElementById('previous-button').classList.add('disabled');
    } else {
      document.getElementById('previous-button').classList.remove('disabled');
    }

  }
  catch (error) {
    alert("There was a problem with your fetch request: " + error);
  }
}

export async function getCart(count = true) {
  try {
    const response = await fetch(constant.CART_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + constant.getCookie('access_token')

      }
    });
    if (response.status == 400 || response.status == 500) {
      console.log(response.statusText, response.text())
      alert("Server Error Please try again later")
    }
    else if (response.status == 401) {
      // window.location.replace("login.html");
      return 0;
    }
    const data = await response.json();
    if (count) {
      let quantity = 0;
      data[0].cart_item.forEach(item => {
        quantity += item.quantity;
      }
      );
      return quantity
    }
    else {
      return data[0].cart_item;
    }

  }
  catch (error) {
    alert("getCart function Error: " + error);
  }
}

export async function addToCart(product_id, quantity = 1) {
  try {
    const response = await fetch(constant.CART_API, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + constant.getCookie('access_token')
      },
      body: JSON.stringify({
        cart: [{
          product_id: product_id,
          quantity: quantity,
          add_to_cart: true
        }]
      })
    });
    if (response.status == 400 || response.status == 500) {
      response.text().then(text => {
        alert("Server Error Please try again later")
      }
      )
      console.log(response.statusText,)
      throw new Error(response.statusText);
    }
    else if (response.status == 401) {
      window.location.replace("login.html");
      alert("Please login to add to cart");
    }
    const data = await response.json();
    console.log(data)
    // event.preventDefault();
    // alert("Product added to cart")
  }
  catch (error) {
    alert("There was a problem with your fetch request: " + error);
  }
}

export async function checkOut() {
  try {
    const response = await fetch(constant.CHECK_OUT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + constant.getCookie('access_token')
      }
    });
    if (response.status == 400 || response.status == 500) {
      console.log(await response.json())
      // throw new Error(await response.json());
    }
    else if (response.status == 401) {
      window.location.replace("login.html");
      alert("Please login to checkout");
    }
  }
  catch (error) {
    alert("There was a problem with your fetch request: " + error);
  }
}

export async function render_nav(navBar) {
  navBar.innerHTML += component.cartModal()
  let cart_modal_list = document.getElementById('cart-modal-list')
  let cart_item = await getCart(false)
  // console.log(cart_item)
  for (let x of cart_item) {
    cart_modal_list.innerHTML += component.cartItem(x)
  }
}

export async function orderData(){
  try {
    const response = await fetch(constant.ORDER_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + constant.getCookie('access_token')
}
    });
    if (response.status == 400 || response.status == 500) {
      console.log(await response.json())
      // throw new Error(await response.json());
    }
    else if (response.status == 401) {
      window.location.replace("login.html");
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data
  }
  catch (error) {
    alert("There was a problem with your fetch request: " + error);
  }
}

export async function getOrderDetail(pk){
  try {
    const response = await fetch(constant.ORDER_API+`${pk}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + constant.getCookie('access_token')
}
    });
    if (response.status == 400 || response.status == 500) {
      console.log(await response.json())
      // throw new Error(await response.json());
    }
    else if (response.status == 401) {
      window.location.replace("login.html");
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data
  }
  catch (error) {
    alert("There was a problem with your fetch request: " + error);
  }
}