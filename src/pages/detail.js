import header from "../components/header";
import footer from "../components/footer";
import { getProduct } from "../instance/products";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { addToCart } from "../utils/cart";
const detailProduct = {
  async render(id) {
    const { data } = await getProduct(id);
    return /*html */ `
      ${await header.render()}
<div class="bg-white">
<div class="pt-6">
  <nav aria-label="Breadcrumb">
    <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
      <li>
        <div class="flex items-center">
          <a href="/products" class="mr-2 text-sm font-medium text-gray-900"> Products </a>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
      </li>

      <li>
        <div class="flex items-center">
          <p href="#" class="mr-2 text-sm font-medium text-gray-900"> Details </p>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
      </li>

      <li class="text-sm">
        <p href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600"> ${
          data.title
        } </p>
      </li>
    </ol>
  </nav>

  <!-- Product info -->
  <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
    <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
      <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">${
        data.title
      }</h1>
    </div>

    <!-- Options -->
    <div class="mt-4 lg:mt-0 lg:row-span-3">
      <h2 class="sr-only">Product information</h2>
      <p class="text-3xl text-gray-900">$ ${data.price}</p>

      <!-- Reviews -->
      <div class="mt-6">
        <h3 class="sr-only">Reviews</h3>
        <div class="flex items-center">
          <div class="flex items-center">
            <!--
              Heroicon name: solid/star

              Active: "text-gray-900", Default: "text-gray-200"
            -->
            <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <!-- Heroicon name: solid/star -->
            <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <!-- Heroicon name: solid/star -->
            <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <!-- Heroicon name: solid/star -->
            <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <!-- Heroicon name: solid/star -->
            <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="sr-only">4 out of 5 stars</p>
          <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
        </div>
        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Quantity</h2>
          <div class="mt-4 space-y-6">
            <input value="1" type="number" class="border-solid border border-gray-800 text-center" id="inputValQuantity"  />
          </div>
        </div>
        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Decription</h2>
          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">${data.description}</p>
          </div>
        </div>
      </div>
        <button id="addToCart" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to cart</button>
    </div>

    <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
      <!-- Description and details -->
      <div>
      <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
      <img src="${
        data.image
      }" alt="Model wearing plain white basic tee." class="w-full h-full object-center object-cover">
    </div>
      </div>



    </div>
  </div>
</div>
</div>

      
      
        ${footer.render()}
    
        `;
  },
  afterRender(id) {
    const btnAddToCart = document.getElementById("addToCart");
    const inputValueQuantity = document.getElementById("inputValQuantity");
    btnAddToCart.addEventListener("click", async () => {
      const { data } = await getProduct(id);
      addToCart(
        {
          ...data,
          quantity: inputValueQuantity.value ? +inputValueQuantity.value : 1,
          priceTotal: Number(inputValueQuantity.value) * Number(data.price),
        },
        () => {
          toastr.success("Add to cart successfully!");
        }
      );
    });
  },
};
export default detailProduct;
