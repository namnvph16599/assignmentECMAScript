import header from "../components/header";
import footer from "../components/footer";
import { UpdateUser } from "../instance/user";
import toastr from "toastr";
import { reRender } from "../utils/index";
const updateProfilePages = {
  async render(id) {
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data.fullname);
    return /*html */ `
    ${header.render()}
    <div class="bg-[#fcaf17] min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900 text-[#2a2a86]">
         Update Profile
        </h1>
        <p class="mt-2 text-center text-sm text-gray-600">    
        </p>
      </div>
      <form class="mt-8 space-y-6" id="form-update">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
        <div>
            <input id="fullname" value=${
              data.fullname
            } name="fullname" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>
          <div>
            <input id="email-address" value=${
              data.email
            } name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2a2a86] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Update
          </button>
        </div>
        <div class="flex items-center justify-center">
      </div>
      </form>
    </div>
  </div>
    ${footer.render()}
    `;
  },
  afterRender(id) {
    if (header.afterRender) header.afterRender();
    const formUpdateProfile = document.querySelector("#form-update");
    formUpdateProfile.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dataUpdate = await {
        id,
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email-address").value,
      };
      UpdateUser(dataUpdate).then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        toastr.success("Update profile  successfully");
        window.location.reload();
      });
    });
  },
};

export default updateProfilePages;
