/*! For license information please see detail.bundle.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,r,a={316:(t,e,n)=>{n.r(e),n.d(e,{ProductDetail:()=>c,card:()=>o,cartItem:()=>l,cartModal:()=>s,checkout:()=>u,nav:()=>i,orderDetail:()=>f,orderList:()=>p,orderSummary:()=>d});var r=n(502);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){return' <div class="col mb-5">\n  <div class="card h-100">\n      \x3c!-- Sale badge--\x3e\n      <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>\n      \x3c!-- Product image--\x3e\n      <div style="%">\n      <img class="card-img-top" src="'.concat(t.image_url,'" alt="..." style="object-fit:cover;overflow:hidden;height:250px"/>\n      </div>\n      \x3c!-- Product details--\x3e\n      <div class="card-body p-4" style="height:40%">\n          <div class="text-center">\n              \x3c!-- Product name--\x3e\n              <h5 class="fw-bolder">').concat(t.name,'</h5>\n              \x3c!-- Product reviews--\x3e\n              <div class="d-flex justify-content-center small text-warning mb-2">\n                  <div class="bi-star-fill"></div>\n                  <div class="bi-star-fill"></div>\n                  <div class="bi-star-fill"></div>\n                  <div class="bi-star-fill"></div>\n                  <div class="bi-star"></div>\n              </div>\n              \x3c!-- Product price--\x3e\n              <span class="text-muted text-decoration-line-through">NRs ').concat(t.price+100,"</span>\n              ").concat(t.price,'\n          </div>\n      </div>\n      \x3c!-- Product actions--\x3e\n      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">\n          <div class="text-center">\n          <span class= "product-id" style = "display:none">').concat(t.id,'</span>\n          <button data-product-id = "').concat(t.id,'" class="view-item btn btn-outline-dark my-1" >View</button>\n          <button data-product-id = "').concat(t.id,'" class="add-to-cart btn btn-outline-dark my-1">Add to cart</button>\n          </div>\n      </div>\n      </div>\n  </div>\n</div>')}function i(t,e){sessionStorage.setItem("template",t);var n=sessionStorage.getItem("username"),a=r.Ri("access_token");return'<div class="container px-4 px-lg-5">\n  <a class="navbar-brand" href="index.html">Jersey Nepal</a>\n  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">\n          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>\n          <li class="nav-item"><a class="nav-link" href="#!">About</a></li>\n          <li class="nav-item dropdown">\n              <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>\n              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\n                  <li><a class="dropdown-item" href="#!">All Products</a></li>\n                  <li><hr class="dropdown-divider" /></li>\n                  <li><a class="dropdown-item" href="#!">Popular Items</a></li>\n                  <li><a class="dropdown-item" href="#!">New Arrivals</a></li>\n              </ul>\n          </li>\n      </ul>\n      <div class="d-flex">\n          <button class="btn btn-outline-dark" data-toggle="modal" data-target="#cartModal" >\n              <i class="bi-cart-fill me-1"></i>\n              Cart\n              <span class="badge bg-dark text-white ms-1 rounded-pill">'.concat(e,'</span>\n          </button>\n          <a href="order.html" class="btn btn-outline-dark ms-2" type="submit">order</a>\n          \n          <form class = "d-flex" method = "get" id = "form-search"><input id = \'search-text\'class="form-control mx-2" type="search" placeholder="Search" aria-label="Search">\n              <button id =  type = "submit" class="btn btn-outline-dark" >Search</button>\n            </form>\n            \n      </div>\n      <a href="login.html" class="btn btn-outline-dark m-2" type="submit" style = "display:').concat(a&&n?"none":"inline",'">Login</a>\n      <span class = "m-2" style = "display:').concat(a&&n?"inline":"none",'">Hello ').concat(n,' !</span>\n        <a  id = "logout" href="index.html" class="btn btn-outline-dark m-2" type="submit" style = "display:').concat(a&&n?"inline":"none",'">Logout</a>\n  </div>\n</div>')}function c(t){return t=JSON.parse(t),'<div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="'.concat(t.image_url,'" alt="..." /></div>\n    <div class="col-md-6">\n        <div class="small mb-1">').concat(t.batch_id,":").concat(t.product_id,'</div>\n        <h1 class="display-5 fw-bolder">').concat(t.name,'</h1>\n        <div class="fs-5 mb-5">\n            <span class="text-decoration-line-through">NRs').concat(t.price+100,"</span>\n            <span>NRs").concat(t.price,'</span>\n        </div>\n        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>\n        <div class="d-flex">\n            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />\n            <a  href="#" data-product-id = "').concat(t.id,'" id = "').concat(t.id,'"class="add-to-cart btn btn-outline-dark flex-shrink-0" type="button">\n                <i class="bi-cart-fill me-1"></i>\n                Add to cart\n            </a>\n        </div>\n    </div>')}function s(){return'<div class="modal fade" id="cartModal"  role="dialog" aria-labelledby="cartModalLabel" >\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title" id="cartModalLabel">Cart</h5>\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n          </button>\n        </div>\n        <div class="modal-body">\n        <ul id = "cart-modal-list" class="list-group">\n        </ul>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n          <a href = "checkout.html" type="button" class="btn btn-primary">Check Out</a>\n        </div>\n      </div>\n    </div>\n  </div>'}function l(t){return'<li class="list-group-item d-flex justify-content-between align-items-center">\n    <div>\n      <img src ="'.concat(t.product.image_url,'" height="10%" width="10%"><span class = "mx-2">').concat(t.product.name,'</sapn>\n      </div>\n      <span class="badge bg-dark badge-pill">').concat(t.quantity,"</span>\n    \n    </li>")}function u(t){for(var e=t.product.quantity,n="",r=1;r<=e;r++)n+='<option value="'.concat(r,'" ').concat(r===t.quantity?"selected":"",">").concat(r,"</option>");return'<div id = "checkout-'.concat(t.id,'"class="card border shadow-none">\n  <div class="card-body">\n  <div class="d-flex align-items-start border-bottom pb-3">\n  <div class="me-4">\n  <img src="').concat(t.product.image_url,'"style="object-fit:cover;" alt class="avatar-lg rounded">\n  </div>\n  <div class="flex-grow-1 align-self-center overflow-hidden">\n  <div>\n  <h5 class="text-truncate font-size-18"><a href="#" data-product-id="').concat(t.product.id,'" class="text-dark product-name">').concat(t.product.name,'</a></h5>\n  <p class="text-muted mb-0">\n  <i class="bx bxs-star text-warning"></i>\n  <i class="bx bxs-star text-warning"></i>\n  <i class="bx bxs-star text-warning"></i>\n  <i class="bx bxs-star text-warning"></i>\n  <i class="bx bxs-star-half text-warning"></i>\n  </p>\n  <p class="mb-0 mt-1">Color : <span class="fw-medium">Gray</span></p>\n  </div>\n  </div>\n  <div class="flex-shrink-0 ms-2">\n  <ul class="list-inline mb-0 font-size-16">\n  <li class="list-inline-item">\n  <a  href="#" class="text-muted px-1">\n  <i data-product-id = "').concat(t.id,'" class="bi bi-trash remove-item"></i>\n  </a>\n  </li>\n  </ul>\n  </div>\n  </div>\n  <div>\n  <div class="row">\n  <div class="col-md-4">\n  <div class="mt-3">\n  <p class="text-muted mb-2">Price</p>\n  <h5 class="mb-0 mt-2"><span class="text-muted me-2"><del class="font-size-16 fw-normal">Nrs ').concat(t.product.price+100,"</del></span>Nrs ").concat(t.product.price,'</h5>\n  </div>\n  </div>\n  <div class="col-md-5">\n  <div class="mt-3">\n  <p class="text-muted mb-2">Quantity</p>\n  <div class="d-inline-flex">\n  <select class="form-select form-select-sm w-xl">\n  ').concat(n,'\n  </select>\n  </div>\n  </div>\n  </div>\n  <div class="col-md-3">\n  <div class="mt-3">\n  <p class="text-muted mb-2">Total</p>\n  <h5>Nrs ').concat(t.quantity*t.product.price,"</h5>\n  </div>\n  </div>\n  </div>\n  </div>\n  </div>\n  </div>")}function d(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=document.createElement("div"),r=0,o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;r+=i.quantity*i.product.price}}catch(t){o.e(t)}finally{o.f()}var c=Math.round(130*r)/1e3,s='<div class="mt-5 mt-lg-0">\n  <div class="card border shadow-none">\n      <div class="card-header bg-transparent border-bottom py-3 px-4">\n          <h5 class="font-size-16 mb-0">Order Summary\n          </h5>\n      </div>\n  <div class="card-body p-4 pt-2">\n      <div class="table-responsive">\n          <table class="table mb-0">\n              <tbody>\n                  <tr>\n                      <td>Sub Total :</td>\n                      <td class="text-end">Nrs '.concat(r,'</td>\n                  </tr>\n                  <tr>\n                      <td>Discount : </td>\n                      <td class="text-end">- Nrs 78</td>\n                  </tr>\n                  <tr>\n                      <td>Shipping Charge :</td>\n                      <td class="text-end">Nrs 25</td>\n                  </tr>\n                  <tr>\n                      <td>Estimated Tax : </td>\n                      <td class="text-end">Nrs ').concat(c,' </td>\n                  </tr>\n                  <tr class="bg-light">\n                      <th>Total :</th>\n                      <td class="text-end"><span class="fw-bold">Nrs ').concat(r+c+25-78,"</span>\n                      </td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n\n  </div>\n</div>");return n.innerHTML=s,n.firstChild}function p(t,e){return'<button class="btn btn-outline-dark" data-toggle="modal" data-target="#cartModal" >\n              <i class="bi-cart-fill me-1"></i>\n              Cart\n              <span class="badge bg-dark text-white ms-1 rounded-pill">'.concat(t,"</span>\n          </button>"),"<tr>\n                        <td>".concat(e,'</td>\n                        <td><a href="#" data-order-id = ').concat(t.id,' class = "orderList" data-bs-toggle="modal" data-bs-target="#exampleModal"> ').concat(t.order_id,"</a></td>\n                        <td>Nepal</td>                       \n                        <td>").concat(t.order_date,'</td>\n                        <td><span class="status text-info">&bull;</span> Shipped</td>\n                        <td>').concat(t.total_price,'</td>\n                        <td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>\n                    </tr>\n                    <tr>\n                    ')}function f(t){return'<div class="h-100 h-custom"  style="background-color: #eee;">\n  <div class="container py-5 h-100">\n    <div class="row d-flex justify-content-center align-items-center h-100">\n      <div class="col-lg-8 col-xl-6">\n        <div class="card border-top border-bottom border-3" style="border-color: #f37a27 !important;">\n          <div class="card-body p-5">\n            <p class="lead fw-bold mb-5" style="color: #f37a27;">Purchase Reciept</p>\n            <div class="row">\n              <div class="col mb-3">\n                <p class="small text-muted mb-1">Date</p>\n                <p>10 April 2021</p>\n              </div>\n              <div class="col mb-3">\n                <p class="small text-muted mb-1">Order No.</p>\n                <p>012j1gvs356c</p>\n              </div>\n            </div>\n            <div class="mx-n5 px-5 py-4" style="background-color: #f2f2f2;">\n              <div class="row">\n                <div class="col-md-8 col-lg-9">\n                  <p>BEATS Solo 3 Wireless Headphones</p>\n                </div>\n                <div class="col-md-4 col-lg-3">\n                  <p>£299.99</p>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-md-8 col-lg-9">\n                  <p class="mb-0">Shipping</p>\n                </div>\n                <div class="col-md-4 col-lg-3">\n                  <p class="mb-0">£33.00</p>\n                </div>\n              </div>\n            </div>\n            <div class="row my-4">\n              <div class="col-md-4 offset-md-8 col-lg-3 offset-lg-9">\n                <p class="lead fw-bold mb-0" style="color: #f37a27;">£262.99</p>\n              </div>\n            </div>\n            <p class="lead fw-bold mb-4 pb-2" style="color: #f37a27;">Tracking Order</p>\n            <div class="row">\n              <div class="col-lg-12">\n                <div class="horizontal-timeline">\n                  <ul class="list-inline items d-flex justify-content-between">\n                    <li class="list-inline-item items-list">\n                      <p class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">Ordered</p\n                        class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">\n                    </li>\n                    <li class="list-inline-item items-list">\n                      <p class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">Shipped</p\n                        class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">\n                    </li>\n                    <li class="list-inline-item items-list">\n                      <p class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">On the way\n                      </p>\n                    </li>\n                    <li class="list-inline-item items-list text-end" style="margin-right: 8px;">\n                      <p style="margin-right: -8px;">Delivered</p>\n                    </li>\n                  </ul>\n                </div>\n\n              </div>\n            </div>\n\n            <p class="mt-4 pt-2 mb-0">Want any help? <a href="#!" style="color: #f37a27;">Please contact\n                us</a></p>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'}},502:(t,e,n)=>{n.d(e,{Ee:()=>r,GO:()=>a,Ri:()=>c,TV:()=>i,rq:()=>o});var r="https://college-project-ecom.onrender.com/api/shop/products/",a="https://college-project-ecom.onrender.com/api/shop/cart/",o="https://college-project-ecom.onrender.com/api/verify/";function i(t,e,n){var r="";if(n)r="; expires="+new Date(n).toUTCString();else{var a=new Date;a.setTime(a.getTime()+36e5),r="; expires="+a.toUTCString()}document.cookie=t+"="+(e||"")+r+"; path=/"}function c(t){for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var a=n[r];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return null}},50:(t,e,n)=>{n.a(t,(async(t,e)=>{try{var r=n(502),a=n(316),o=n(417);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(){l=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new I(r||[]);return a(i,"_invoke",{value:T(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h="suspendedStart",v="suspendedYield",m="executing",y="completed",b={};function g(){}function x(){}function w(){}var k={};d(k,i,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(A([])));L&&L!==n&&r.call(L,i)&&(k=L);var S=w.prototype=g.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(a,o,i,c){var l=f(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==s(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return o=o?o.then(a,a):a()}})}function T(e,n,r){var a=h;return function(o,i){if(a===m)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var s=O(c,r);if(s){if(s===b)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===h)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var l=f(e,n,r);if("normal"===l.type){if(a=r.done?y:v,l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=y,r.method="throw",r.arg=l.arg)}}}function O(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var o=f(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,b;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(s(e)+" is not iterable")}return x.prototype=w,a(S,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:x,configurable:!0}),x.displayName=d(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},_(j.prototype),d(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new j(p(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(S),d(S,u,"Generator"),d(S,i,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),b}},e}function u(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){u(o,r,a,i,c,"next",t)}function c(t){u(o,r,a,i,c,"throw",t)}i(void 0)}))}}var i=await(0,o.MX)(),c=document.getElementsByTagName("nav")[0];c.innerHTML=a.nav("detail.html",await(0,o.Xl)(!0)),i&&await(0,o.NL)(c),document.getElementById("product-detail").innerHTML=a.ProductDetail(localStorage.getItem("product")),document.getElementById("form-search").addEventListener("submit",function(){var t=d(l().mark((function t(e){var n,o,i,c;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),t.prev=1,n=document.getElementById("product-display"),""!=(o=document.getElementById("search-text").value)){t.next=7;break}return alert("Please enter a search term"),t.abrupt("return");case 7:return console.log(o),t.next=10,fetch(r.Ee+"?search=".concat(o));case 10:if(i=t.sent,console.log("after fetch"),i.ok){t.next=14;break}throw new Error("Network response was not OK");case 14:return t.next=16,i.json();case 16:if(0!=(c=t.sent).results.length){t.next=20;break}return n.innerHTML="<h3>No products found</h3>",t.abrupt("return");case 20:for(;n.firstChild;)n.removeChild(n.firstChild);c.results.forEach((function(t){n.innerHTML+=a.card(t)})),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(1),alert("There was a problem with your fetch request: "+t.t0);case 27:case"end":return t.stop()}}),t,null,[[1,24]])})));return function(e){return t.apply(this,arguments)}}()),document.body.addEventListener("click",function(){var t=d(l().mark((function t(e){var n,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.target.classList.contains("add-to-cart")){t.next=18;break}if(e.preventDefault(),n=e.target.getAttribute("data-product-id"),!(r=document.getElementById("inputQuantity").value)){t.next=9;break}return t.next=7,(0,o.bE)(n,r);case 7:t.next=11;break;case 9:return t.next=11,(0,o.bE)(n,1);case 11:return t.t0=a,t.next=14,(0,o.Xl)(!0);case 14:return t.t1=t.sent,c.innerHTML=t.t0.nav.call(t.t0,"index.html",t.t1),t.next=18,(0,o.NL)(c);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),document.getElementById("logout").addEventListener("click",(function(t){t.preventDefault(),sessionStorage.clear(),document.cookie="access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",window.location.href="index.html"})),e()}catch(p){e(p)}}),1)},417:(t,e,n)=>{n.d(e,{MX:()=>d,NL:()=>y,Xl:()=>f,bE:()=>v});var r=n(502),a=n(316);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(){s=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new I(r||[]);return a(i,"_invoke",{value:T(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h="suspendedStart",v="suspendedYield",m="executing",y="completed",b={};function g(){}function x(){}function w(){}var k={};d(k,c,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(A([])));L&&L!==n&&r.call(L,c)&&(k=L);var S=w.prototype=g.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(a,i,c,s){var l=f(t[a],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==o(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,s)}))}s(l.arg)}var i;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return i=i?i.then(a,a):a()}})}function T(e,n,r){var a=h;return function(o,i){if(a===m)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var s=O(c,r);if(s){if(s===b)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===h)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var l=f(e,n,r);if("normal"===l.type){if(a=r.done?y:v,l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=y,r.method="throw",r.arg=l.arg)}}}function O(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var o=f(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,b;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return x.prototype=w,a(S,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:x,configurable:!0}),x.displayName=d(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},_(j.prototype),d(j.prototype,l,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new j(p(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(S),d(S,u,"Generator"),d(S,c,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),b}},e}function l(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){l(o,r,a,i,c,"next",t)}function c(t){l(o,r,a,i,c,"throw",t)}i(void 0)}))}}function d(){return p.apply(this,arguments)}function p(){return(p=u(s().mark((function t(){var e,n,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=r.Ri("access_token"))){t.next=26;break}return t.prev=2,t.next=5,fetch(r.rq,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 5:if(!(n=t.sent).ok){t.next=17;break}return t.next=9,n.json();case 9:return a=t.sent,sessionStorage.setItem("username",a.username),sessionStorage.setItem("user_id",a.user_id),r.TV("exp",a.exp,a.exp),r.TV("iat",a.iat,a.exp),t.abrupt("return",!0);case 17:if(401!=n.status){t.next=21;break}return sessionStorage.removeItem("username"),sessionStorage.removeItem("user_id"),t.abrupt("return",!1);case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(2),alert("verify function Error: "+t.t0);case 26:case"end":return t.stop()}}),t,null,[[2,23]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return h=u(s().mark((function t(){var e,n,a,o,i=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(i.length>0&&void 0!==i[0])||i[0],t.prev=1,t.next=4,fetch(r.GO,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r.Ri("access_token")}});case 4:if(400!=(n=t.sent).status&&500!=n.status){t.next=10;break}console.log(n.statusText,n.text()),alert("Server Error Please try again later"),t.next=12;break;case 10:if(401!=n.status){t.next=12;break}return t.abrupt("return",0);case 12:return t.next=14,n.json();case 14:if(a=t.sent,!e){t.next=21;break}return o=0,a[0].cart_item.forEach((function(t){o+=t.quantity})),t.abrupt("return",o);case 21:return t.abrupt("return",a[0].cart_item);case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(1),alert("getCart function Error: "+t.t0);case 27:case"end":return t.stop()}}),t,null,[[1,24]])}))),h.apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return m=u(s().mark((function t(e){var n,a,o,i=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,t.prev=1,t.next=4,fetch(r.GO,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r.Ri("access_token")},body:JSON.stringify({cart:[{product_id:e,quantity:n,add_to_cart:!0}]})});case 4:if(400!=(a=t.sent).status&&500!=a.status){t.next=11;break}throw a.text().then((function(t){alert("Server Error Please try again later")})),console.log(a.statusText),new Error(a.statusText);case 11:401==a.status&&(window.location.replace("login.html"),alert("Please login to add to cart"));case 12:return t.next=14,a.json();case 14:o=t.sent,console.log(o),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(1),alert("There was a problem with your fetch request: "+t.t0);case 21:case"end":return t.stop()}}),t,null,[[1,18]])}))),m.apply(this,arguments)}function y(t){return b.apply(this,arguments)}function b(){return(b=u(s().mark((function t(e){var n,r,o,c,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.innerHTML+=a.cartModal(),n=document.getElementById("cart-modal-list"),t.next=4,f(!1);case 4:r=t.sent,o=i(r);try{for(o.s();!(c=o.n()).done;)l=c.value,n.innerHTML+=a.cartItem(l)}catch(t){o.e(t)}finally{o.f()}case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={exports:{}};return a[t](n,n.exports,i),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},i.a=(a,o,i)=>{var c;i&&((c=[]).d=-1);var s,l,u,d=new Set,p=a.exports,f=new Promise(((t,e)=>{u=e,l=t}));f[e]=p,f[t]=t=>(c&&t(c),d.forEach(t),f.catch((t=>{}))),a.exports=f,o((a=>{var o;s=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[t])return a;if(a.then){var o=[];o.d=0,a.then((t=>{i[e]=t,r(o)}),(t=>{i[n]=t,r(o)}));var i={};return i[t]=t=>t(o),i}}var c={};return c[t]=t=>{},c[e]=a,c})))(a);var i=()=>s.map((t=>{if(t[n])throw t[n];return t[e]})),l=new Promise((e=>{(o=()=>e(i)).r=0;var n=t=>t!==c&&!d.has(t)&&(d.add(t),t&&!t.d&&(o.r++,t.push(o)));s.map((e=>e[t](n)))}));return o.r?l:i()}),(t=>(t?u(f[n]=t):l(p),r(c)))),c&&c.d<0&&(c.d=0)},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(50)})();