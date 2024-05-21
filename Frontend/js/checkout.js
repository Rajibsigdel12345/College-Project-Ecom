import * as constant from './constants.js'
import * as component from './component.js'
import { verify, setLocal, getCart, render_nav } from './module.mjs'
const verified = await verify()
if (!verified) {
  window.location.replace("login.html");
}

const cart_quantity = await getCart(true)
let navBar = document.getElementsByTagName('nav')[0]
navBar.innerHTML = component.nav('checkout.html', cart_quantity)
if (verified) {
  await render_nav(navBar)
  if (cart_quantity <= 0) {
    // document.getElementById('cartModal').setAttribute('style', 'display:none')
    // document.getElementById('order_display').innerHTML = component.emptyCart()
  }
  else {
    let cart_item = await getCart(false)
    for (let x of cart_item) {
      document.getElementById('order_display').innerHTML += component.checkout(x)
    }
    document.getElementById('order_summary').appendChild(component.orderSummary(cart_item))
  }
}

document.body.addEventListener('click', async function (event) {
  if (event.target.classList.contains('product-name')) {
    event.preventDefault();
    let product_id = event.target.getAttribute('data-product-id').toString()
    const response = await fetch(constant.PRODUCTS_API + `${product_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const product_data = await response.json()
    setLocal('product', product_data)
    window.location.href = "detail.html";
  }
}
);

document.body.addEventListener('click', async function (event) {
  if (event.target.classList.contains('remove-item')) {
    event.preventDefault();
    let product_id = event.target.getAttribute('data-product-id')
    // alert(product_id)
    // console.log(`checkout-${product_id}`)
    document.getElementById(`checkout-${product_id}`).remove()
    let response = await fetch(constant.CART_API + `${product_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + constant.getCookie('access_token')
      }
    })
    // console.log(response.json())
    navBar.innerHTML = component.nav('index.html', await getCart(true))
    await render_nav(navBar)
    let cart_item = await getCart(false)
    document.getElementById('order_display').innerHTML = ""
    document.getElementById('order_summary').innerHTML = ""
    for (let x of cart_item) {
      document.getElementById('order_display').innerHTML += component.checkout(x)
    }
    document.getElementById('order_summary').appendChild(component.orderSummary(cart_item))
  }
})

document.getElementById('checkout').addEventListener('click', async function (event) {
  event.preventDefault();
  let response = await fetch(constant.CHECK_OUT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + constant.getCookie('access_token')
    }
  })
  console.log(response)
  if (response.status == 200) {
    alert("Order placed successfully")
    window.location.replace("index.html");
  }
  else if (response.status == 400 || response.status == 500) {
    response.text().then(text => {
      alert(text)
    })
    console.log(response.statusText,)
    throw new Error(response.statusText);
  }
  else {
    alert("There was a problem with your fetch request: " + response.statusText);
  }
})

document.getElementById('logout').addEventListener('click', function (event) {
  event.preventDefault();
  // localStorage.clear()
  sessionStorage.clear()
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.location.href = "index.html";
});