import * as constant from './constants.js'

export function card(element) {
  let product = ` <div class="col mb-5">
  <div class="card h-100">
      <!-- Sale badge-->
      <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
      <!-- Product image-->
      <div style="%">
      <img class="card-img-top" src="${element.image_url}" alt="..." style="object-fit:cover;overflow:hidden;height:250px"/>
      </div>
      <!-- Product details-->
      <div class="card-body p-4" style="height:40%">
          <div class="text-center">
              <!-- Product name-->
              <h5 class="fw-bolder">${element.name}</h5>
              <!-- Product reviews-->
              <div class="d-flex justify-content-center small text-warning mb-2">
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star"></div>
              </div>
              <!-- Product price-->
              <span class="text-muted text-decoration-line-through">NRs ${element.price + 100}</span>
              ${element.price}
          </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
          <span class= "product-id" style = "display:none">${element.id}</span>
          <button data-product-id = "${element.id}" class="view-item btn btn-outline-dark my-1" >View</button>
          <button data-product-id = "${element.id}" class="add-to-cart btn btn-outline-dark my-1">Add to cart</button>
          </div>
      </div>
      </div>
  </div>
</div>`
  return product
}

export function nav(template, cart_item) {
  sessionStorage.setItem('template', template)
  const username = sessionStorage.getItem('username')
  const access_token = constant.getCookie('access_token')
  let navBar = `<div class="container px-4 px-lg-5">
  <a class="navbar-brand" href="index.html">Jersey Nepal</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#!">All Products</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
              </ul>
          </li>
      </ul>
      <div class="d-flex">
          <button class="btn btn-outline-dark" data-toggle="modal" data-target="#cartModal" >
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">${cart_item}</span>
          </button>
          <a href="order.html" class="btn btn-outline-dark ms-2" type="submit">order</a>
          
          <form class = "d-flex" method = "get" id = "form-search"><input id = 'search-text'class="form-control mx-2" type="search" placeholder="Search" aria-label="Search">
              <button id =  type = "submit" class="btn btn-outline-dark" >Search</button>
            </form>
            
      </div>
      <a href="login.html" class="btn btn-outline-dark m-2" type="submit" style = "display:${access_token && username ? 'none' : 'inline'}">Login</a>
      <span class = "m-2" style = "display:${access_token && username ? 'inline' : 'none'}">Hello ${username} !</span>
        <a  id = "logout" href="index.html" class="btn btn-outline-dark m-2" type="submit" style = "display:${access_token && username ? 'inline' : 'none'}">Logout</a>
  </div>
</div>`
  return navBar
}

export function ProductDetail(element) {
  element = JSON.parse(element)
  let product_detail = `<div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${element.image_url}" alt="..." /></div>
    <div class="col-md-6">
        <div class="small mb-1">${element.batch_id}:${element.product_id}</div>
        <h1 class="display-5 fw-bolder">${element.name}</h1>
        <div class="fs-5 mb-5">
            <span class="text-decoration-line-through">NRs${element.price + 100}</span>
            <span>NRs${element.price}</span>
        </div>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
        <div class="d-flex">
            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
            <a  href="#" data-product-id = "${element.id}" id = "${element.id}"class="add-to-cart btn btn-outline-dark flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                Add to cart
            </a>
        </div>
    </div>`
  return product_detail
}

export function cartModal() {
  // console.log(cart_item)
  // let modal_element = document.createElement('div')
  let modal = `<div class="modal fade" id="cartModal"  role="dialog" aria-labelledby="cartModalLabel" >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalLabel">Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <ul id = "cart-modal-list" class="list-group">
        </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <a href = "checkout.html" type="button" class="btn btn-primary">Check Out</a>
        </div>
      </div>
    </div>
  </div>`
  // modal_element.innerHTML = modal
  return modal
}
export function cartItem(cart_item) {
  // let cart_item_element = document.createElement('div')
  let item = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <img src ="${cart_item.product.image_url}" height="10%" width="10%"><span class = "mx-2">${cart_item.product.name}</sapn>
      </div>
      <span class="badge bg-dark badge-pill">${cart_item.quantity}</span>
    
    </li>`
  // cart_item_element.innerHTML = item
  return item
}

export function checkout(cart_item) {
  const product_quantity = cart_item.product.quantity
  let options = '';
  for (let i = 1; i <= product_quantity; i++) {
    options += `<option value="${i}" ${i === cart_item.quantity ? 'selected' : ''}>${i}</option>`;
  }
  // let checkout_element = document.createElement('div')
  let checkout_item = `<div id = "checkout-${cart_item.id}"class="card border shadow-none">
  <div class="card-body">
  <div class="d-flex align-items-start border-bottom pb-3">
  <div class="me-4">
  <img src="${cart_item.product.image_url}"style="object-fit:cover;" alt class="avatar-lg rounded">
  </div>
  <div class="flex-grow-1 align-self-center overflow-hidden">
  <div>
  <h5 class="text-truncate font-size-18"><a href="#" data-product-id="${cart_item.product.id}" class="text-dark product-name">${cart_item.product.name}</a></h5>
  <p class="text-muted mb-0">
  <i class="bx bxs-star text-warning"></i>
  <i class="bx bxs-star text-warning"></i>
  <i class="bx bxs-star text-warning"></i>
  <i class="bx bxs-star text-warning"></i>
  <i class="bx bxs-star-half text-warning"></i>
  </p>
  <p class="mb-0 mt-1">Color : <span class="fw-medium">Gray</span></p>
  </div>
  </div>
  <div class="flex-shrink-0 ms-2">
  <ul class="list-inline mb-0 font-size-16">
  <li class="list-inline-item">
  <a  href="#" class="text-muted px-1">
  <i data-product-id = "${cart_item.id}" class="bi bi-trash remove-item"></i>
  </a>
  </li>
  </ul>
  </div>
  </div>
  <div>
  <div class="row">
  <div class="col-md-4">
  <div class="mt-3">
  <p class="text-muted mb-2">Price</p>
  <h5 class="mb-0 mt-2"><span class="text-muted me-2"><del class="font-size-16 fw-normal">Nrs ${cart_item.product.price + 100}</del></span>Nrs ${cart_item.product.price}</h5>
  </div>
  </div>
  <div class="col-md-5">
  <div class="mt-3">
  <p class="text-muted mb-2">Quantity</p>
  <div class="d-inline-flex">
  <select class="form-select form-select-sm w-xl">
  ${options}
  </select>
  </div>
  </div>
  </div>
  <div class="col-md-3">
  <div class="mt-3">
  <p class="text-muted mb-2">Total</p>
  <h5>Nrs ${cart_item.quantity * cart_item.product.price}</h5>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>`
  // checkout_element.innerHTML = checkout_item
  return checkout_item
}

export function orderSummary(cart_item = null) {
  let order_summary = document.createElement('div')
  let total_amount = 0
  for (let x of cart_item) {
    total_amount += x.quantity * x.product.price
  }

  let vat = Math.round((130 * total_amount)) / 1000
  let summary = `<div class="mt-5 mt-lg-0">
  <div class="card border shadow-none">
      <div class="card-header bg-transparent border-bottom py-3 px-4">
          <h5 class="font-size-16 mb-0">Order Summary
          </h5>
      </div>
  <div class="card-body p-4 pt-2">
      <div class="table-responsive">
          <table class="table mb-0">
              <tbody>
                  <tr>
                      <td>Sub Total :</td>
                      <td class="text-end">Nrs ${total_amount}</td>
                  </tr>
                  <tr>
                      <td>Discount : </td>
                      <td class="text-end">- $ 78</td>
                  </tr>
                  <tr>
                      <td>Shipping Charge :</td>
                      <td class="text-end">$ 25</td>
                  </tr>
                  <tr>
                      <td>Estimated Tax : </td>
                      <td class="text-end">Nrs ${vat} </td>
                  </tr>
                  <tr class="bg-light">
                      <th>Total :</th>
                      <td class="text-end"><span class="fw-bold">Nrs ${total_amount + vat}</span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

  </div>
</div>`
  order_summary.innerHTML = summary
  return order_summary.firstChild
}

export function orderList(cart_item,num){
  
  let str = `<button class="btn btn-outline-dark" data-toggle="modal" data-target="#cartModal" >
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">${cart_item}</span>
          </button>`
  let order_list = `<tr>
                        <td>${num}</td>
                        <td><a href="#" data-order-id = ${cart_item.id} class = "orderList" data-bs-toggle="modal" data-bs-target="#exampleModal"> ${cart_item.order_id}</a></td>
                        <td>Nepal</td>                       
                        <td>${cart_item.order_date}</td>
                        <td><span class="status text-info">&bull;</span> Shipped</td>
                        <td>${cart_item.total_price}</td>
                        <td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>
                    </tr>
                    <tr>
                    `
  return order_list
}

export function orderDetail(order_item){
  let order_detail = `<div class="h-100 h-custom"  style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card border-top border-bottom border-3" style="border-color: #f37a27 !important;">
          <div class="card-body p-5">
            <p class="lead fw-bold mb-5" style="color: #f37a27;">Purchase Reciept</p>
            <div class="row">
              <div class="col mb-3">
                <p class="small text-muted mb-1">Date</p>
                <p>10 April 2021</p>
              </div>
              <div class="col mb-3">
                <p class="small text-muted mb-1">Order No.</p>
                <p>012j1gvs356c</p>
              </div>
            </div>
            <div class="mx-n5 px-5 py-4" style="background-color: #f2f2f2;">
              <div class="row">
                <div class="col-md-8 col-lg-9">
                  <p>BEATS Solo 3 Wireless Headphones</p>
                </div>
                <div class="col-md-4 col-lg-3">
                  <p>£299.99</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8 col-lg-9">
                  <p class="mb-0">Shipping</p>
                </div>
                <div class="col-md-4 col-lg-3">
                  <p class="mb-0">£33.00</p>
                </div>
              </div>
            </div>
            <div class="row my-4">
              <div class="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                <p class="lead fw-bold mb-0" style="color: #f37a27;">£262.99</p>
              </div>
            </div>
            <p class="lead fw-bold mb-4 pb-2" style="color: #f37a27;">Tracking Order</p>
            <div class="row">
              <div class="col-lg-12">
                <div class="horizontal-timeline">
                  <ul class="list-inline items d-flex justify-content-between">
                    <li class="list-inline-item items-list">
                      <p class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">Ordered</p
                        class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">
                    </li>
                    <li class="list-inline-item items-list">
                      <p class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">Shipped</p
                        class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">
                    </li>
                    <li class="list-inline-item items-list">
                      <p class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">On the way
                      </p>
                    </li>
                    <li class="list-inline-item items-list text-end" style="margin-right: 8px;">
                      <p style="margin-right: -8px;">Delivered</p>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            <p class="mt-4 pt-2 mb-0">Want any help? <a href="#!" style="color: #f37a27;">Please contact
                us</a></p>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  return order_detail
}