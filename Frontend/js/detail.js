import * as constant from './constants.js'
import * as component from './component.js'
import { verify, getCart, addToCart } from './module.mjs'
const verified = await verify();

//load nav bar on top
async function render_nav(navBar) {
  navBar.innerHTML += component.cartModal()
  let cart_modal_list = document.getElementById('cart-modal-list')
  let cart_item = await getCart(false)
  for (let x of cart_item) {
    cart_modal_list.innerHTML += component.cartItem(x)
  }
}
let navBar = document.getElementsByTagName('nav')[0]
navBar.innerHTML = component.nav('detail.html', await getCart(true))
if (verified) {
  await render_nav(navBar)
}

// display products
document.getElementById("product-detail").innerHTML = component.ProductDetail(localStorage.getItem('product'))

//search product
document.getElementById('form-search').addEventListener('submit', async function (event) {
  event.preventDefault();
  try {
    let product_display = document.getElementById('product-display')
    let input = document.getElementById('search-text').value
    if (input == "") {
      alert("Please enter a search term")
      return
    }
    // document.getElementById('loader').setAttribute('style','display:block')

    console.log(input)
    const response = await fetch(constant.PRODUCTS_API + `?search=${input}`);
    console.log("after fetch")
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json();
    if (data.results.length == 0) {
      product_display.innerHTML = "<h3>No products found</h3>"
      return
    }
    //clear product display to insert products
    while (product_display.firstChild) {
      product_display.removeChild(product_display.firstChild)
    }
    // document.getElementById('loader').setAttribute('style','display:none')
    data.results.forEach(element => {
      product_display.innerHTML += component.card(element)
    })

  } catch (error) {
    alert("There was a problem with your fetch request: " + error);
  }
}

);

document.body.addEventListener('click', async function (event) {
  if (event.target.classList.contains('add-to-cart')) {
    event.preventDefault();
    let product_id = event.target.getAttribute('data-product-id')
    let quantity = document.getElementById('inputQuantity').value
    if (quantity) {
      await addToCart(product_id, quantity)
    }
    else {
      await addToCart(product_id, 1)
    }
    navBar.innerHTML = component.nav('index.html', await getCart(true))
    await render_nav(navBar)
  }
});

document.getElementById('logout').addEventListener('click', function (event) {
  event.preventDefault();
  // localStorage.clear()
  sessionStorage.clear()
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.location.href = "index.html";
});