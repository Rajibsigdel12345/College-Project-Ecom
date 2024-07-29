import * as constant from './constants.js'
import * as component from './component.js'
import { verify, setLocal, getCart, render_nav, checkOut } from './module.mjs'
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
    console.log(product_id)
    document.getElementById(`checkout-${product_id}`).remove()
    await fetch(constant.CART_API + `${product_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + constant.getCookie('access_token')
      }
    })
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

document.getElementById('checkout').addEventListener('click', checkOut)

document.getElementById('logout').addEventListener('click', function (event) {
  event.preventDefault();
  // localStorage.clear()
  sessionStorage.clear()
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.location.href = "index.html";
});