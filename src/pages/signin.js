import header from "../components/header";
import footer from "../components/footer";
import { signin } from "../instance/user";
const signinPages = {
 async render() {
    return /*html*/ `
        ${await header.render()}

        <div class="bg-[#fcaf17] min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900 text-[#2a2a86]">
              Sign in
            </h1>
            <p class="mt-2 text-center text-sm text-gray-600">
                
            </p>
          </div>
          <form class="mt-8 space-y-6" id="form-signin">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div class="block pt-2">
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
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
                Sign in
              </button>
            </div>
            <div class="flex items-center justify-center">
            <div class="text-sm">
              <a href="/signup" class="block font-medium text-indigo-600 hover:text-indigo-500 text-center">
                Don't have acount! SIGNUP
              </a>
            </div>
          </div>
          </form>
        </div>
      </div>
        ${footer.render()}

        `;
  },
  afterRender() {
    const formSignin = document.querySelector("#form-signin");
    formSignin.addEventListener("submit", async (e) => {
      e.preventDefault();
      const userCallApi = await signin({
        email: document.getElementById("email-address").value,
        password: document.getElementById("password").value,
      })
        .then(({ data }) => {
          localStorage.setItem("user", JSON.stringify(data.user));
          if (JSON.parse(localStorage.getItem("user")).id == 1) {
            window.location.href = "/admin";
          } else {
            window.location.href = "/";
          }
        })
        .catch((error) => console.log("Sign in false!"));
    });
  },
};
export default signinPages;
