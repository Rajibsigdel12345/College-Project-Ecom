import * as constant from './constants.js'
import * as component from './component.js'
import { verify, setLocal, getCart, addToCart, render_nav, DisplayProduct } from './module.mjs'
const verified = await verify()
await DisplayProduct()
const cart_quantity = await getCart(true)
// window.onload = await verify();
// window.onload = DisplayProduct();
let page = 1;
//load nav bar on top
let navBar = document.getElementsByTagName('nav')[0]
navBar.innerHTML = component.nav('index.html', cart_quantity)
if (verified) {
  await render_nav(navBar)
}

// display products


document.getElementById('previous-button').addEventListener('click', async function () {
  if (page > 1) { // Ensure page number doesn't go below 1
    page--; // Decrement page number
    await DisplayProduct(page); // Display previous page of products
  }
});
document.getElementById('next-button').addEventListener('click', async function () {
  page++; // Increment page number
  await DisplayProduct(page); // Display next page of products
});
// search product on key press
document.getElementById('form-search').addEventListener('submit', async function (event) {
  event.preventDefault();
  try {
    let product_display = document.getElementById('product-display')
    while (product_display.firstChild) {
      product_display.removeChild(product_display.firstChild)
    }
    document.getElementById('loader').setAttribute('style', 'display:block')
    let input = document.getElementById('search-text').value
    console.log(input)
    const response = await fetch(constant.PRODUCTS_API + `?search=${input}`);
    console.log("after fetch")
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json();
    document.getElementById('loader').setAttribute('style', 'display:none')
    data.results.forEach(element => {
      product_display.innerHTML += component.card(element)
    })

  } catch (error) {
    alert("There was a problem with your fetch request: " + error);
  }
}

)

document.body.addEventListener('click', async function (event) {
  if (event.target.classList.contains('add-to-cart')) {
    event.preventDefault();
    let productId = event.target.getAttribute('data-product-id');
    addToCart(productId);
    navBar.innerHTML = component.nav('index.html', await getCart(true))
    await render_nav(navBar)
  }
})

// document.querySelectorAll('.view-item').forEach(button => {
//   button.addEventListener('click', async function (event) {
//     event.preventDefault();
//     let product_id = event.target.getAttribute('data-product-id').toString()
//     const response = await fetch(constant.PRODUCTS_API + `${product_id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     })
//     const product_data = await response.json()
//     setLocal('product', product_data)
//     window.location.href = "detail.html";
//   }
//   );
// })

document.body.addEventListener('click', async function (event) {
  if (event.target.classList.contains('view-item')) {
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




document.getElementById('logout').addEventListener('click', function (event) {
  event.preventDefault();
  // localStorage.clear()
  sessionStorage.clear()
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.location.href = "index.html";
});

