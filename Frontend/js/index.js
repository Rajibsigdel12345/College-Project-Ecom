import * as constant from './constants.js' 
import * as component from './component.js'
import {verify,setLocal,getCart,addToCart} from './module.mjs'
const verified = await verify()
await DisplayProduct()
// window.onload = await verify();
// window.onload = DisplayProduct();
let page = 1;
//load nav bar on top
let navBar=document.getElementsByTagName('nav')[0]
navBar.innerHTML=component.nav('index.html',await getCart(true))
if (verified){
  navBar.appendChild(component.cartModal())
  let cart_modal_list =document.getElementById('cart-modal-list')
  let cart_item = await getCart(false)
  for (let x of cart_item){
    cart_modal_list.appendChild(component.cartItem(x))
  }
}

// display products

async function DisplayProduct(page=1){
  let product_display = document.getElementById('product-display')
  document.getElementById('loader').setAttribute('style','display:inline-block')
  product_display.innerHTML = ""
  try {
    const response = await fetch(constant.PRODUCTS_API+`?page=${page}`);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    document.getElementById('loader').setAttribute('style','display:none')
    const data = await response.json();
    console.log(data)
    data.results.forEach(element=>{
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
    alert("There was a problem with your fetch request: "+ error);
}
}
document.getElementById('previous-button').addEventListener('click', async function() {
  if (page > 1) { // Ensure page number doesn't go below 1
    page--; // Decrement page number
    await DisplayProduct(page); // Display previous page of products
  }
});
document.getElementById('next-button').addEventListener('click', async function() {
  page++; // Increment page number
  await DisplayProduct(page); // Display next page of products
});
// search product on key press
 document.getElementById('form-search').addEventListener('submit', async function (event)  {
    event.preventDefault();
    try {
      let product_display = document.getElementById('product-display')
      while(product_display.firstChild)
        {
          product_display.removeChild(product_display.firstChild)
        }
      document.getElementById('loader').setAttribute('style','display:block')
      let input = document.getElementById('search-text').value
      console.log(input)
      const response = await fetch(constant.PRODUCTS_API+`?search=${input}`);
      console.log("after fetch")
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      document.getElementById('loader').setAttribute('style','display:none')
      data.results.forEach(element=>{
        product_display.innerHTML += component.card(element)
      })
      
    } catch (error) {
      alert("There was a problem with your fetch request: "+ error);
    }
  }

)

document.body.addEventListener('click', async function(event) {
  
  if (event.target.classList.contains('add-to-cart')) {
    event.preventDefault(); 
    let product_id = event.target.getAttribute('data-product-id')
   addToCart(product_id)
  }
});

document.body.addEventListener('click', async function(event) {
  
  if (event.target.classList.contains('view-item')) {
    event.preventDefault();
    let product_id = event.target.getAttribute('data-product-id').toString()
    const response = await fetch(constant.PRODUCTS_API+`${product_id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      } 
    })
    const product_data = await response.json()
    setLocal('product',product_data)
    window.location.href = "detail.html";  
  
 
}
}
);




document.getElementById('logout').addEventListener('click', function(event) {
  event.preventDefault();
  // localStorage.clear()
  sessionStorage.clear()
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.location.href = "index.html";
});

