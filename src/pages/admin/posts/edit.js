import headerAdmin from "../../../components/admin/header";
import { getPost, updatePost } from "../../../instance/posts";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
const adminPostsEdit = {
  async render(id) {
    const { data } = await getPost(id);
    return /*html */ `

    ${headerAdmin.render()}
    <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
    <div class="sm:flex items-center justify-between">
        <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal 
        text-gray-800">Update Post</p>
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
      <form action="" id="form-edit-post" >
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3">
                <label for="company-website" class="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div class="mt-1">
                  <input type="text" value="${
                    data.title
                  }" name="title" id="title" class="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-base border border-gray-300 rounded-md" placeholder="">
                </div>
              </div>
            </div>
        <div>


        <div class="col-span-3">
            <div class="mt-1">
              <input type="hidden" value=${
                data.id
              } name="company-website" id="idpro" class="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-base border border-gray-300 rounded-md" placeholder="">
            </div>
          </div>
        <div>
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div class="mt-1">
                <textarea id="description"  name="description" rows="3" class="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-base border border-gray-300 rounded-md" placeholder="">${
                  data.desc
                }</textarea>
              </div>
            </div>

            <div>
            <img  class="pt-4 mx-auto" id="imgPreview" src="${
              data.img
            }"  width="200"/>
              <label class="block text-sm font-medium text-gray-700">
                Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                  <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file_upload" type="file" class="sr-only">
                    </label>
                    
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              EDIT
            </button>
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
    const imgPost = document.querySelector("#file-upload");
    const imgReview = document.querySelector("#imgPreview");
    let imgNewUPload = "";
    imgPost.addEventListener("change", () => {
      imgReview.src = URL.createObjectURL(imgPost.files[0]);
    });

    // $("#form-edit-post").validate({
    //   rules: {
    //     title: { required: true },
    //     description: { required: true },
    //   },
    //   submitHandler: async (form) => {
    //     if (imgPost.files[0]) {
    //       const file = imgPost.files[0];
    //       const formData = new FormData();
    //       formData.append("file", file);
    //       formData.append("upload_preset", "ecma_asm");

    //       const { data } = await axios({
    //         url: "https://api.cloudinary.com/v1_1/vannam042/image/upload",
    //         method: "post",
    //         headers: {
    //           "Content-Type": "application/x-www-formendcoded",
    //         },
    //         data: formData,
    //       });
    //       imgNewUPload = data.url;
    //     }
    //     const dataPost = await {
    //       id,
    //       title: document.getElementById("title").value,
    //       desc: document.getElementById("description").value,
    //       createdAt: new Date(),
    //       img: imgNewUPload ? imgNewUPload : imgReview.src,
    //     };
    //     updatePost(dataPost)
    //       .then((response) => {
    //         window.location.href = "/admin/posts";
    //       })
    //       .catch((error) => console.log(error));
    //     // form.submit();
    //   },
    // });
    const formAddPost = document.querySelector("#form-edit-post");
    formAddPost.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (imgPost.files[0]) {
        const file = imgPost.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ecma_asm");

        const { data } = await axios({
          url: "https://api.cloudinary.com/v1_1/vannam042/image/upload",
          method: "post",
          headers: {
            "Content-Type": "application/x-www-formendcoded",
          },
          data: formData,
        });
        imgNewUPload = data.url;
      }
      const dataPost = await {
        id,
        title: document.getElementById("title").value,
        desc: document.getElementById("description").value,
        createdAt: new Date(),
        img: imgNewUPload ? imgNewUPload : imgReview.src,
      };
      updatePost(dataPost)
        .then((response) => {
          window.location.href = "/admin/posts";
        })
        .catch((error) => console.log(error));
    });
  },
};
export default adminPostsEdit;
