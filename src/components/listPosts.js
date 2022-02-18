import {getAllPosts} from "../instance/posts"

const listPosts = {
   async render () {
       const {data} = await getAllPosts();
        return /*html*/ `
        <div class="bg-white">
        <div class="bg-gray-50 dark:bg-gray-900 text-center lg:py-10 md:py-8 py-6">
        <p class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 dark:text-white leading-9 text-center text-gray-800">News</p>
    </div>
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
         
      
          <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
           ${data.map((val,ind) => {
               return /*html*/`
               <a href="/news/${val.id}" class="group">
               <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                 <img src="${val.img}" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75">
               </div>
               <h3 class="mt-4 text-sm text-gray-700">${val.title}</h3>
               <p class="mt-1 text-lg font-medium text-gray-900">${val.desc}</p>
             </a>
               `
           }).join("")}
      
        
      
            <!-- More products... -->
          </div>
        </div>
      </div>
        `
    }
}

export default listPosts;