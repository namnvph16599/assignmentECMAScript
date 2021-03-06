import header from "../components/header";
import footer from "../components/footer";
import toastr from "toastr";
import $ from "jquery";
import { addOrder, addOrderDetail } from "../instance/products";
const checkoutPages = {
  async render() {
    return /*html*/ `
        ${await header.render()}
        <div class="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
            <div class="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                <div class="flex w-full flex-col justify-start items-start">
                    <div class="">
                        <p class="text-3xl lg:text-4xl dark:text-white font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                    </div>
                    <div class="mt-2">
                        <a href="/cart" class="text-base dark:text-gray-400 leading-4 underline hover:text-gray-800 text-gray-600">Back to my cart</a>
                    </div>
                    <form class="flex w-full flex-col justify-start items-start" id="form-checkout">
                    <div class="mt-12">
                        <p class="text-xl font-semibold  leading-5 text-dark">Shipping Details</p>
                    </div>
                    <div class="mt-8 flex flex-col justify-start items-start w-full space-y-8">
                        <input class="px-2 focus:outline-none dark:bg-transparent 
                        dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 
                        focus:ring-gray-500 border-b border-gray-200 leading-4 
                        text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Full Name" id="fullname" name="fullname" />
                        <input class="px-2 focus:outline-none dark:bg-transparent 
                        dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 
                        focus:ring-gray-500 border-b border-gray-200 leading-4 text-base 
                        placeholder-gray-600 py-4 w-full" type="email" placeholder="Email..." id="email" name="email"/>
                        <input class="px-2 focus:outline-none dark:bg-transparent 
                        dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 
                        focus:ring-gray-500 border-b border-gray-200 leading-4 text-base 
                        placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" id="address" name="address"/>
                        <input class="focus:outline-none dark:text-gray-400 dark:bg-transparent 
                        dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 px-2 border-b 
                        border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" 
                        type="text" placeholder="Phone Number" id="phone" name="phone" />
                        <input class="px-2 focus:outline-none dark:bg-transparent 
                        dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 
                        focus:ring-gray-500 border-b border-gray-200 leading-4 text-base 
                        placeholder-gray-600 py-4 w-full" type="text" placeholder="Message" id="message" name="message"/>
                    </div>
                    <button class="focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Proceed to payment</button>
                    </div>
                    </form>
    
                <div class="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
                    <div>
                        <h1 class="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">Order Summary</h1>
                    </div>
                    <div class="flex mt-7 flex-col items-end w-full space-y-6">
                        <div class="flex justify-between w-full items-center">
                            <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Total items</p>
                            <p class="quantity_total_items text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600"></p>
                        </div>
                        <div class="flex justify-between w-full items-center">
                            <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Total Charges</p>
                            <p  class="price_total_items text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600"></p>
                        </div>
                        <div class="flex justify-between w-full items-center">
                            <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Transport fee</p>
                            <p  class="price_fee_items text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600"></p>
                        </div>
                    </div>
                    <div class="flex justify-between w-full items-center mt-32">
                        <p class="text-xl dark:text-white font-semibold leading-4 text-gray-800">Estimated Total</p>
                        <span class="total text-lg dark:text-white font-semibold leading-4 text-gray-800"></span>
                    </div>
                </div>
            </div>
        </div>
      
        ${footer.render()}
    
        `;
  },
  afterRender() {
    const priceAll = $(".price_total_items");
    const quantityAll = $(".quantity_total_items");

    const priceAllValue = localStorage.getItem("priceAll");
    const quantityAllValue = localStorage.getItem("quantityAll");
    if (priceAllValue && quantityAllValue) {
      priceAll.html(priceAllValue + " $");
      quantityAll.html(quantityAllValue);
      $(".price_fee_items").html(30 + " $");
      $(".total").html(Number(priceAllValue) + 30 + " $");
    } else {
      priceAll.html("");
      quantityAll.html("");
      $(".price_fee_items").html("");
      $(".total").html("");
    }
    console.log(JSON.parse(localStorage.getItem("user")).id);
    $("#form-checkout").validate({
      rules: {
        fullname: { required: true },
        address: { required: true },
        email: { required: true, email: true },
        message: { required: true },
        phone: { required: true, minlength: 10, maxlength: 10 },
      },
      submitHandler() {
        async function handlerCheckout() {
          const dataOrderDetails = await {
            productsLists: JSON.parse(localStorage.getItem("cartEcma")),
            fullname: $("#fullname").val(),
            address: $("#address").val(),
            phone: $("#phone").val(),
            email: $("#email").val(),
            message: $("#message").val(),
          };
          if (localStorage.getItem("user")) {
            addOrderDetail(dataOrderDetails)
              .then((result) => {
                addOrder({
                  userId: JSON.parse(localStorage.getItem("user")).id,
                  orderDetailId: result.data.id,
                  status: "Pending",
                  priceAll: localStorage.getItem("priceAll"),
                  quantityAll: localStorage.getItem("quantityAll"),
                })
                  .then((response) => {
                    localStorage.removeItem("cartEcma");
                    localStorage.removeItem("priceAll");
                    localStorage.removeItem("quantityAll");
                    toastr.success("Orders success");
                    window.location.reload();
                  })
                  .catch((error) => {
                    console.log(error);
                    toastr.error("Orders failed");
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
        handlerCheckout();
      },
    });
  },
};

export default checkoutPages;
