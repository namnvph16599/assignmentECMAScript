import { reRender } from "../utils";
import { getAllCates } from "../instance/cate";
const header = {
  render() {
    return /*html*/ `
    <header>
  <div class="relative bg-white bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 ">
    <div class="
    w-full
    flex
    items-center
  ">
      <div class="px-4 w-50 max-w-full">
        <a href="/" class="navbar-logo w-full block py-5">
          <img src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/logo.svg?1644287733320" alt="logo" class="h-8 w-auto sm:h-10">
        </a>
      </div>
      <div class="flex px-4 justify-between items-center w-full">
        <div>
          <button id="navbarToggler" class="
              block
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              lg:hidden
              focus:ring-2
              ring-primary
              px-3
              py-[6px]
              rounded-lg
            ">
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
          </button>
          <nav id="navbarCollapse" class="
              absolute
              py-5
              lg:py-0 lg:px-4
              xl:px-6
              bg-white
              lg:bg-transparent
              shadow-lg
              rounded-lg
              max-w-[250px]
              w-full
              lg:max-w-full lg:w-full
              right-4
              top-full
              hidden
              lg:block lg:static lg:shadow-none
            ">
            <ul class="blcok lg:flex">
              <li class="relative group">
                <a href="/" class="
                    ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-dark
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0
                  ">
                  Home
                </a>
              </li>
              <li class="relative group submenu-item">
              <a href="javascript:void(0)" class="
                  text-base text-dark
                  lg:text-dark-400
                  font-bold
                  lg:group-hover:opacity-70
                  lg:group-hover:text-dark
                  group-hover:text-primary
                  py-2
                  lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                  flex
                  mx-8
                  lg:mr-0 lg:ml-8
                  xl:ml-12
                  relative
                  after:absolute
                  after:w-2
                  after:h-2
                  after:border-b-2
                  after:border-r-2
                  after:border-current
                  after:rotate-45
                  lg:after:right-0
                  after:right-1
                  after:top-1/2
                  after:-translate-y-1/2
                  after:mt-[-2px]
                ">
                Category
              </a>
              <div class="box-category submenu relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
              </div>
            </li>
              <li class="relative group">
                <a href="/products" class="
                    ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-dark
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0 lg:ml-7
                    xl:ml-12
                  ">
                  Products
                </a>
              </li>
              <li class="relative group">
                <a href="/news" class="
                    ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-dark
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0 lg:ml-7
                    xl:ml-12
                  ">
                  News
                </a>
              </li>
              <li class="relative group">
                <a href="/contact" class="
                    ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-dark
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0 lg:ml-7
                    xl:ml-12
                  ">
                  Contact
                </a>
              </li>
              <li class="relative group">
                <a href="/about" class="
                    ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-dark
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0 lg:ml-7
                    xl:ml-12
                  ">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
        <form method="" id="form-search">
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button class="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="text" id="searchValue" name="q" class="py-2 text-sm text-white border border-solid  border-yellow-300 rounded-md pl-10 focus:outline-none focus:bg-[#fcaf17]  focus:text-gray-900" placeholder="Search..." autocomplete="off">
        </div>
      </form>
        </div>
        <div class="sm:flex justify-end hidden pr-16 lg:pr-0">
        ${
          localStorage.getItem("user")
            ? `
            <li class="relative group submenu-item list-none  " >
            <a href="javascript:void(0)" class="
                text-base text-dark
                lg:text-dark-400
                font-bold
                lg:group-hover:opacity-70
                lg:group-hover:text-dark
                group-hover:text-primary
                py-2
                lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                flex
                mx-8
                lg:mr-0 lg:ml-8
                xl:ml-12
                relative
                after:absolute
                after:w-2
                after:h-2
                after:border-b-2
                after:border-r-2
                after:border-current
                after:rotate-45
                lg:after:right-0
                after:right-1
                after:top-1/2
                after:-translate-y-1/2
                after:mt-[-2px]
              ">
              ${JSON.parse(localStorage.getItem("user")).fullname}
            </a>
            <div class="box-acount submenu relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
            <a href="/admin"  class="
            block
            text-sm text-body-color
            rounded
            hover:text-primary
            py-[10px]
            px-4
          ">
        Admin
        </a>
            <a href="/updateProfile/${JSON.parse(localStorage.getItem("user")).id}"  class="btn-updateProfile
            block
            text-sm text-body-color
            rounded
            hover:text-primary
            py-[10px]
            px-4
          ">
        Update Profile
        </a>
        <a href="#"  class="logout
        block
        text-sm text-body-color
        rounded
        hover:text-primary
        py-[10px]
        px-4
      ">
    Logout
    </a>
            </div>
          </li>
        `
            : `

          <a href="/signin" class="
              text-base
              font-medium
              text-dark-400
              hover:opacity-70
              py-3
              px-7
              loginBtn
            ">
            Sign In
          </a>
          <a href="/signup" class="
              text-base
              font-medium
              text-white
              bg-[#fcaf17]
              rounded-lg
              py-3
              px-6
              hover:bg-opacity-90 hover:text-dark
              signUpBtn
              duration-300
              ease-in-out
            ">
            Sign Up
          </a>
          `
        }
        </div>
      </div>
    </div>
  </div>
</div></header>
        `;
  },
  async afterRender() {
    // const formSearch = document.querySelector(".form-search");
    // formSearch.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   console.log(document.querySelector("#searchValue").value);
    // });
    const { data } = await getAllCates();
    const boxCategory = document.querySelector(".box-category");
    boxCategory.innerHTML = data
      .map((val, ind) => {
        return `
      <a href="/category/${val.id}" data-id=${val.id} class="
                    block
                    text-sm text-body-color
                    rounded
                    hover:text-primary
                    py-[10px]
                    px-4
                  ">
                ${val.cate_name}
                </a>
      `;
      })
      .join("");
    const logout = document.querySelector(".logout");
    if (logout) {
      logout.addEventListener("click", () => {
        localStorage.removeItem("user");
        reRender(header, "header");
      });
    }
  },
};

export default header;
