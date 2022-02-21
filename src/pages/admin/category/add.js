import headerAdmin from "../../../components/admin/header";
import { addCate } from "../../../instance/cate";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const adminCateAdd = {
  render() {
    return /*html */ `
        ${headerAdmin.render()}
        <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div class="sm:flex items-center justify-between">
            <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal 
            text-gray-800">Add Category</p>
            <a href="/admin/category" class="sm:ml-3">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <!-- Heroicon name: solid/check -->
              <= BACK
            </button>
          </a>
        </div>
    </div>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="" id="form-add-category">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="col-span-3">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                      Cate name                
                      </label>
                    <div class="mt-1">
                      <input type="text" name="cate_name" id="name" class="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-base border border-gray-300 rounded-md" placeholder="">
                    </div>
                  </div>
                </div>
                <div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    ADD
                  </button>
                </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
      </div>
        </div>
      </main>
            `;
  },
  afterRender() {
    // const formAddCategory = document.querySelector("#form-add-category");
    // formAddCategory.addEventListener("submit", async (e) => {
    //   console.log(document.getElementById("name").value);
    //   e.preventDefault();
    //   const dataPost = await {
    //     cate_name: document.getElementById("name").value,
    //   };
    //   addCate(dataPost)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => console.log(error));
    // });
    $("#form-add-category").validate({
      rules: {
        cate_name: {
          required: true,
        },
      },
      messages: {
        cate_name: {
          required: "Please enter  category name",
        },
      },
      submitHandler: async (form) => {
        const dataPost = await {
          cate_name: $("#name").val(),
        };
        addCate(dataPost)
          .then((response) => {
            toastr.success("Add category successfully");
            console.log(response);
          })
          .catch((error) => {
            toastr.error("Add category failed");
            console.log(error);
          });
        form.reset();
      },
    });
  },
};
export default adminCateAdd;
