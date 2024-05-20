import * as constant from './constants.js'
import * as component from './component.js'
import { verify, setLocal, getCart, addToCart } from './module.mjs'
const verified = await verify()
if (!verified) {
  window.location.replace("login.html");
}

const cart_quantity = await getCart(true)
let navBar = document.getElementsByTagName('nav')[0]
navBar.innerHTML = component.nav('checkout.html', cart_quantity)
if (verified) {
  let cart_item = await getCart(false)
  navBar.appendChild(component.cartModal())
  let cart_modal_list = document.getElementById('cart-modal-list')
  for (let x of cart_item) {
    cart_modal_list.appendChild(component.cartItem(x))
  }
  if (cart_quantity <= 0) {
    document.getElementById('cartModal').setAttribute('style', 'display:none')
    // document.getElementById('order_display').innerHTML = component.emptyCart()
  }
  else {
    for (let x of cart_item) {
      document.getElementById('order_display').appendChild(component.checkout(x))
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
    alert(product_id)
    let response = await fetch(constant.CART_API + `${product_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + constant.getCookie('access_token')
      }
    })
    console.log(response)
  }
})
