import headerAdmin from "../../../components/admin/header";
import { getCate, updateCate } from "../../../instance/cate";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
const adminCategoryedit = {
  async render(id) {
    const { data } = await getCate(id);
    return /*html */ `
    
        ${headerAdmin.render()}
        <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div class="sm:flex items-center justify-between">
            <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal 
            text-gray-800">Update Category</p>
            <a href="/admin/posts" class="sm:ml-3">
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
          <form action="" id="form-edit-category" >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div class="mt-1">
                      <input type="text" value="${
                        data.cate_name
                      }" name="cate_name" id="name" class="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-base border border-gray-300 rounded-md" placeholder="">
                    </div>
                  </div>
                </div>
            <div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                EDIT
              </button>
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
  afterRender(id) {
    $("#form-edit-category").validate({
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
          id,
          cate_name: $("#name").val(),
        };
        updateCate(dataPost)
          .then((response) => {
            toastr.success("Add category successfully");
            window.location.href = "/admin/category";
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
export default adminCategoryedit;
