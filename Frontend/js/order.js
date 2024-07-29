import { orderList,nav ,orderDetail} from "./component.js";
import { orderData ,render_nav,getCart,getOrderDetail} from "./module.mjs";

let navBar = document.getElementsByTagName('nav')[0]
navBar.innerHTML = nav('detail.html', await getCart(true))
await render_nav(navBar)
let order_data = await orderData();
let order_list = document.getElementById("order_list")
let count = 1
order_data.forEach(element => {
  order_list.innerHTML += orderList(element,count);
  count++;
});

document.body.addEventListener('click', async function (event) {
  if (event.target.classList.contains('orderList')) {
    event.preventDefault();
    let order_id = event.target.getAttribute('data-order-id')
    let order = await getOrderDetail(order_id)
    document.getElementById('order-detail').innerHTML = orderDetail(order)
  }
});
