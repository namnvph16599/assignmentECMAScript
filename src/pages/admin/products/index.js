import headerAdmin from "../../../components/admin/header";
import { getAllProducts, removeProducts } from "../../../instance/products";
import { reRender } from "../../../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const adminProductsHome = {
  async render() {
    const { data } = await getAllProducts();
    return /*html*/ `
        ${headerAdmin.render()}
        
        <div class="">
            <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                <div class="sm:flex items-center justify-between">
                    <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                    Products</p>
                    <a href="/admin/products/add" class="sm:ml-3">
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
                            <th class="font-normal text-left pl-12">Title</th>
                            <th class="font-normal text-left pl-12">Price</th>

                            <th class="font-normal text-left pl-12">Image</th>
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
                              <p class="font-medium">${val.title}</p>
                          </td>
                          <td class="pl-5">
                          <p class="font-medium">${val.price}</p>
                      </td>
                          <td class="pl-5">
                          <img src="${val.image}" alt="" width="100px">
                          </td>
                         
                          <td>
                      <a href="/admin/products/${val.id}/edit" class="font-medium text-base text-green-500 hover:text-indigo-900">Edit</a>
                      </td>
                      <td>
                      <button data-id=${val.id} class="font-medium text-base btn btn-remove text-red-500 hover:text-indigo-900">Delete</button>
                      </td>
                      </tr>
    
                        `;
                      })
                      .join("")}
                      
                        
        `;
  },
  afterRender() {
    const btnRemove = document.querySelectorAll(".btn-remove");
    btnRemove.forEach((button) => {
      const id = button.dataset.id;
      button.addEventListener("click", () => {
        if (confirm("Are you sure delete product this !")) {
          removeProducts(id)
            .then((response) => {
              toastr.success("Delete product successfully");
              reRender(adminProductsHome, "#app");
            })
            .catch((err) => {
              toastr.console.error();
              ("Delete product failed");
              console.log(err);
            });
        }
      });
    });
  },
};
export default adminProductsHome;
