import * as constant from './constants.js' 
import * as component from './component.js'
import {verify,getCart,addToCart} from './module.mjs'
window.onload = await verify();

//load nav bar on top
document.getElementsByTagName('nav')[0].innerHTML=component.nav('detail.html',await getCart(true))

// display products
document.getElementById("product-detail").innerHTML = component.ProductDetail(localStorage.getItem('product'))

//search product
document.getElementById('form-search').addEventListener('submit', async function (event)  {
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
    const response = await fetch(constant.PRODUCTS_API+`?search=${input}`);
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
    while(product_display.firstChild)
      {
        product_display.removeChild(product_display.firstChild)
      }
    // document.getElementById('loader').setAttribute('style','display:none')
    data.results.forEach(element=>{
      product_display.innerHTML += component.card(element)
    })
    
  } catch (error) {
    alert("There was a problem with your fetch request: "+ error);
  }
}

);

document.body.addEventListener('click', async function(event){
  if (event.target.classList.contains('add-to-cart')){
    event.preventDefault();
    let product_id = event.target.getAttribute('id')
    let quantity = document.getElementById('inputQuantity').value
    await addToCart(product_id,quantity)
  }
});

document.getElementById('logout').addEventListener('click', function(event) {
  event.preventDefault();
  // localStorage.clear()
  sessionStorage.clear()
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.location.href = "index.html";
});