import header from "../components/header";
import footer from "../components/footer";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProCart,
} from "../utils/cart";
import { reRender } from "../utils/index";
import $ from "jquery";
const cartPages = {
  render() {
    let cart = [];
    if (localStorage.getItem("cartEcma")) {
      cart = JSON.parse(localStorage.getItem("cartEcma"));
    }
    return /*html*/ `
    ${header.render()}

    <div class="py-6 lg:px-20 md:px-6 px-4">
    <div class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table class="w-full whitespace-nowrap">
            <thead>
                <tr tabindex="0" class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800">
                    <th class="font-normal text-left pl-4">Products info</th>
                    <th class="font-normal text-left pl-12">Price</th>
                    <th class="font-normal text-left pl-12">Quantity</th>
                    <th class="font-normal text-left pl-20">Action</th>
                </tr>
            </thead>
            <tbody class="w-full">
            ${cart
              .map((item) => {
                return /*html*/ `
                <tr tabindex="0" class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                    <td class="pl-4 cursor-pointer">
                        <div class="flex items-center">
                            <div class="w-20">
                                <img class="w-full h-full" src=${item.image} alt="UX Design and Visual Strategy" />
                            </div>
                            <div class="pl-4">
                                <p class="font-medium">${item.title}</p>
                            </div>
                        </div>
                    </td>
                    <td class="pl-12">
                        <span class="__content-cart_intomoney text-sm font-medium leading-none text-gray-800">${item.priceTotal} </span><span>$</span>
                    </td>
                    <td class="pl-12">
                    <button data-id=${item.id} class="btn btn-decrease  mx-2 my-2 bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-4 py-1 text-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-800">-</button>
                    <input value=${item.quantity} type="number" min=1 class="input-quatity text-center pl-3 h-10 w-10 text-lg"/>
                    <button data-id=${item.id} class="btn btn-increase  mx-2 my-2  bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-4 py-1 text-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-800">+</button>

                    </td>
                    <td class="pl-20">
                    <button data-id=${item.id} class="btn btn-remove mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-red-500 px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700">Delete</button>
                    </td>
                </tr>
                `;
              })
              .join("")}
              <tr tabindex="0" class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td class="pl-4 cursor-pointer">
                    <div class="flex items-center">
                        <div class="w-20">
                        </div>
                        <div class="pl-4">
                        </div>
                    </div>
                </td>
                <td class=" pl-12 text-[#fcaf17] font-bold">
                <span class="price_total"></span><span>$</span>
                </td>
                <td class="quantity_total pr-12 text-center text-[#fcaf17] font-bold">
                </td>
                <td class=" pl-5">
                </td>
                <td class="pl-20">
                <button class="mx-2 my-2 bg-[#fcaf17] transition duration-150
                 ease-in-out hover:bg-[#fcaf17] rounded text-white px-6 py-2
                  text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 
                   focus:ring-indigo-600"><a class="btn-checkout">Checkout</a></button> 
                </td>
            </tr>
                  </tbody>
        </table>
                 


  </div>
${footer.render()}
      `;
  },
  afterRender() {
    const priceAll = document.querySelector(".price_total");
    const quantityAll = document.querySelector(".quantity_total");

    if (localStorage.getItem("cartEcma")) {
      // tính tiền cart
      let priceCartAll = $(".__content-cart_intomoney");
      let tongTien = 0;
      $.each(priceCartAll, function (indexInArray, valueOfElement) {
        let price = $(valueOfElement).html();
        let priceNumber = Number(price);
        tongTien += priceNumber;
      });
      priceAll.innerHTML = tongTien;
      //tính số lượng products
      let quantityinput = $(".input-quatity");
      let soluong = 0;
      $.each(quantityinput, function (indexInArray, valueOfElement) {
        let quantity = $(valueOfElement).val();
        let quantityNumber = Number(quantity);
        soluong += quantityNumber;
      });
      quantityAll.innerHTML = soluong;
    }

    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        if (btn.classList.contains("btn-increase")) {
          increaseQuantity(id, () => {
            reRender(cartPages, "#app");
          });
        } else if (btn.classList.contains("btn-decrease")) {
          decreaseQuantity(id, () => {
            reRender(cartPages, "#app");
          });
        } else {
          deleteProCart(id, () => {
            reRender(cartPages, "#app");
          });
        }
      });
    });

    const btnCheckout = $(".btn-checkout");
    btnCheckout.click(() => {
      localStorage.setItem("quantityAll", $(".quantity_total").html());
      localStorage.setItem("priceAll", $(".price_total").html());
      window.location.href = "/checkout";
    });
  },
};

export default cartPages;
