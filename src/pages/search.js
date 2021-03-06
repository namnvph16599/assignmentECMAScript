import header from "../components/header";
import footer from "../components/footer";
import { getProductsbySeacch } from "../instance/products";

const searchPages = {
  async render(id) {
    let params = new URLSearchParams(document.location.search);
    let dataSearch = params.get("q");
    const { data } = await getProductsbySeacch(dataSearch);
    console.log(typeof(data));
    return /*html */ `
    ${await header.render()}
    <div class="2xl:container 2xl:mx-auto">
    <div class="bg-gray-50 dark:bg-gray-900 text-center lg:py-10 md:py-8 py-6">
        <p class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 dark:text-white leading-9 text-center text-gray-800">Products Search</p>
    </div>
    <div class="py-6 lg:px-20 md:px-6 px-4">
        </div>
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            ${data
              .map((val, ind) => {
                return /*html*/ `
                   <a href="/details/${val.id}" class="group">
                     <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                     <img src="${val.image}" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                     </div>
                       <h3 class="mt-4 text-sm text-gray-700">${val.title}</h3>
                       <p class="mt-1 text-lg font-medium text-gray-900">${val.price} $</p>
                   </a>
            
                `;
              })
              .join("") }
        </div>
            <div class="flex justify-center items-center">
            <button class="hover:bg-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
            </div>
        </div>
        
    </div>
</div>


    ${footer.render()}
    `;
  },
  afterRender() {
    if (header.afterRender) header.afterRender();
  },
};

export default searchPages;
