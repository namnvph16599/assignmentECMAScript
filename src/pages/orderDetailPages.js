import header from "../components/header";
import footer from "../components/footer";
import { getOrderDetailById, getOrderByID } from "../instance/products";
const orderDetailPages = {
  async render(id) {
    const { data } = await getOrderDetailById(id);
    const dataOrders = await getOrderByID(id);
    console.log(dataOrders);
    return `
    ${await header.render()}
        <div class="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
        <div class="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
            <div class="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full">
                <h3 class="text-3xl xl:text-4xl dark:text-dark font-semibold leading-7 xl:leading-9 w-full md:text-left text-gray-800">My Order</h3>
                ${data.productsLists.map(
                  (val) => `
                <div class="flex justify-center items-center w-full mt-8 flex-col space-y-4">
                    <div class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
                        <div class="-m-px w-40 md:w-32">
                            <img class="hidden md:block" src="${val.image}" alt="girl-in-red-dress" />
                            <img class="md:hidden" src="https://i.ibb.co/f8pyz8q/Rectangle-8.png" alt="girl-in-red-dress" />
                        </div>
                        <div class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                            <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                                <h3 class="text-lg md:text-xl dark:text-dark w-full font-semibold leading-6 md:leading-5 text-gray-800">${val.title}</h3>
                                <div class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                                    <p class="text-sm leading-none dark:text-dark text-gray-600">Quantity: <span class="text-gray-800 dark:text-dark"> ${val.quantity}</span></p>
                                </div>
                            </div>
                            <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                                <p class="text-xl dark:text-dark lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">${val.priceTotal} $</p>
                            </div>
                        </div>
                    </div>`
                )}
                </div>
                <div class="flex flex-col flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                    <div class="flex justify-start items-start flex-col md:flex-row w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8 lg:w-full">
                        <div class="flex jusitfy-start items-start flex-col space-y-2">
                            <p class="text-base dark:text-dark font-semibold leading-4 text-gray-800">Shipping Address</p>
                            <p class="text-sm leading-5 dark:text-dark text-gray-600">${
                              data.address
                            }</p>
                        </div>
                    </div>
                    <div class="flex flex-col w-full space-y-4 w-full">
                        <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                        <div class="flex justify-between w-full">
                        <p class="text-base dark:text-dark leading-4 text-gray-800">Subtotal</p>
                        <p class="text-base dark:text-dark leading-4 text-gray-600">${
                          Number(dataOrders.data.priceAll )
                        } $</p>
                    </div>
                        <div class="flex justify-between w-full">
                        <p class="text-base dark:text-dark leading-4 text-gray-800">Quantity</p>
                        <p class="text-base dark:text-dark leading-4 text-gray-600">${
                          dataOrders.data.quantityAll
                        }</p>
                    </div>
                    <div class="flex justify-between w-full">
                    <p class="text-base dark:text-dark leading-4 text-gray-800">Transport fee</p>
                    <p class="text-base dark:text-dark leading-4 text-gray-600">${
                      30
                    } $</p>
                </div>
                            <div class="flex justify-between w-full">
                                <p class="text-base dark:text-dark leading-4 text-gray-800">Total</p>
                                <p class="text-base dark:text-dark leading-4 text-gray-600">${
                                  Number(dataOrders.data.priceAll )+ 30
                                } $</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ${footer.render()}
        `;
  },
};
export default orderDetailPages;
