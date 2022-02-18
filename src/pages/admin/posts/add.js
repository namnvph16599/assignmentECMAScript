import headerAdmin from "../../../components/admin/header";
import { addPost } from "../../../instance/posts";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
const adminPostsAdd = {
  render() {
    return /*html */ `
    ${headerAdmin.render()}
    <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
    <div class="sm:flex items-center justify-between">
        <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal 
        text-gray-800">Add Post</p>
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
      <form action="" id="form-add-post">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="col-span-3">
                <label for="company-website" class="block text-sm font-medium text-gray-700">
                  Title Post                
                  </label>
                <div class="mt-1">
                  <input type="text" name="title" id="title" class="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-base border border-gray-300 rounded-md" placeholder="">
                </div>
              </div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div class="mt-1">
                <textarea id="description" name="description" rows="3" class="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-base border border-gray-300 rounded-md" placeholder=""></textarea>
              </div>
            </div>

            <div>
            <img class="pt-4 mx-auto" id="imgPreview" src="data:image/png;base64,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"  width="200"/>
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
                      <input id="file-upload" name="file_upload" type="file" class="sr-only"><br/>
                    </label>
                 
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              ADD
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
  afterRender() {
    const imgPost = document.querySelector("#file-upload");
    const imgReview = document.querySelector("#imgPreview");
    imgPost.addEventListener("change", () => {
      imgReview.src = URL.createObjectURL(imgPost.files[0]);
    });

    // $("#form-add-post").validate({
    //   rules: {
    //     title: { required: true },
    //     description: { required: true },
    //     file_upload: { required: true },
    //   },
    //   submitHandler: async (form) => {
    //     const file = imgPost.files[0];
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("upload_preset", "ecma_asm");

    //     const { data } = await axios({
    //       url: "https://api.cloudinary.com/v1_1/vannam042/image/upload",
    //       method: "post",
    //       headers: {
    //         "Content-Type": "application/x-www-formendcoded",
    //       },
    //       data: formData,
    //     });

    //     const dataPost = await {
    //       title: document.getElementById("title").value,
    //       desc: document.getElementById("description").value,
    //       createdAt: new Date(),
    //       img: data.url,
    //     };
    //     addPost(dataPost)
    //       .then((response) => {
    //         console.log(data);
    //         console.log(data.url);
    //         console.log(response);
    //       })
    //       .catch((error) => console.log(error));
    //     form.submit();
    //   },
    // });

    const formAddPost = document.querySelector("#form-add-post");
    formAddPost.addEventListener("submit", async (e) => {
      e.preventDefault();
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

      const dataPost = await {
        title: document.getElementById("title").value,
        desc: document.getElementById("description").value,
        createdAt: new Date(),
        img: data.url,
      };
      addPost(dataPost)
        .then((response) => {
          console.log(data);
          console.log(data.url);
          console.log(response);
        })
        .catch((error) => console.log(error));
    });
  },
};
export default adminPostsAdd;
