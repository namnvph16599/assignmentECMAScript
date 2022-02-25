import headerAdmin from "../../../components/admin/header";
import { reRender } from "../../../utils";
import { getAllOrders } from "../../../instance/products";
const adminOrdersPages = {
  async render() {
    const { data } = await getAllOrders();
    console.log(data);
    return /*html*/ `
    ${headerAdmin.render()}
    
    <div class="">
    <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div class="sm:flex items-center justify-between">
            <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Orders</p>
            <a href="/admin/posts/add" class="sm:ml-3">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <!-- Heroicon name: solid/check -->
              + ADD
            </button>
          </a>
        </div>
    </div>
    <div class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table class="w-full whitespace-nowrap">
            <thead>
                <tr tabindex="0" class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800">
                    <th class="font-normal text-left pl-4">ID</th>
                    <th class="font-normal text-left pl-5">Quantity</th>
                    <th class="font-normal text-left pl-5">Price</th>
                    <th class="font-normal text-left pl-5">Status At</th>
                </tr>
            </thead>
            <tbody class="w-full">
            ${data
              .map((val, ind) => {
                return /*html */ `
                  <tr tabindex="0" class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td class="pl-5">
                      <p class="text-sm font-medium leading-none text-gray-800">${val.id}</p>
                  </td>
                  <td class="pl-5">
                      <p class="font-medium">${val.quantityAll}</p>
                  </td>
                  <td class="pl-5">
                  <p class="font-medium">${val.priceAll}</p>
                  </td>
                  <td>
                  <div class="col-span-3">
                  <div class="mt-1">
                    <select name="" id="category"
                      class="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-base border border-gray-300 rounded-md">
                      <option class="" value=${val.status}>${val.status}</option>
                      <option class="" value="In progress">In progress</option>
                      <option class="" value="Done">Done</option>
                    </select>
                  </div>
                </div>
                  </td>
                  </tr>
                `;
              })
              .join("")}
      `;
  },
};

export default adminOrdersPages;
