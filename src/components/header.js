const header = {
  render() {
    return /*html*/ `
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">Workflow</span>
          <img class="h-8 w-auto sm:h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAACsCAMAAADhRvHiAAAAwFBMVEX////8rxcqKob8rAD82Z4lJYT6+v38rg1LS5j9vk4eHoIREX8AAHsoKIX8rQDBwNeAgLSGhrf+9uT8shj+/Pj91pH8uC/9xmzn5vAhIYPv7/UaGoGiocfR0OMUFID8vlNbW6Dc3Os0NI1wcKw+PpJpaaeYmMH83q5ERJSTk7+vr893d6/IyN63t9Snp8phYaNTU5z96cX+8NfV1eb9xWH9vEL++e79zXj+8tz92ZgJCX/+36f90IT+5br8uDf8xmhybuaFAAAOgklEQVR4nO2daWOiPBeGHShgIYhbLZtUEHdBra1t7fb//9VLWCSBoMyM0nl8c3+YsZjEcBkOyTknWKtRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH9d9VN9dNd+YfVbhzE3vx0Z/5dtTu/ElFMxaKYSoliKiWKqZQoplKimEqJYioliqmUKKZSophKiWIqJYqplCimUqKYSoliKiWKqZQoplKimEqJYioliqmU/h8w8arij2ezsa+ofLka3d3m/e3u7m3yuosO/POYePUgnVxCT0uohPrLpru3DEMUDcOS3KZymtTm45lN1PmewMBcDlM71Y7cyu5kiXNKAVIs0CSXWBxK7N0sA33sSiLHJJI5UXLHBJipupOAkXCA8qvBdu52OUzdzgEk+0Fu6Ckt8fz7p/27UqTkHMUWuURTTEpwdRwT7ztGyigpZDBm8Yj6/EIZxWA6kxym3qEUe0du6b6RlBBu//Dcf0N/gckeSHIWUjimpLVNbmp3n4cEz5N9uF5Mc04jQYLStDmppcceS4AUnikytq4L05g8lJIBNcs3tGmQhlJW14VpdowSkdNGKEPpujCZxylBTibezGM5SleFSbFOUAo4WQrayu6rHKVrwqTLuXlAXpyMTqBeiqz3FWMaijgRWeY0jeMyI0wcpY1scpSEBks06deDaYkbJlk03MFwMXANET9uLZM2us84EYHt3d6/3N92CJPNq8G0xi45UW5uw+P8tiVjw4yrJ21MsMEkNG430Tps93mbBXU1mJao/ZatEWKC1CFm2w9WHLPfbO8TaX7SEa4T0widfRtjvLRpIW9qsXXCLBN7i6/o28/sNWJSEVMtW+NscR8ZT7IWjbSXRoqh8ZxNae7iY+1KMM2R8SIuCOUN5KoL13a7HsKh087VeG1cISbkmpMZgitPd1ILH111j8hVxb4TPuKNvTpMvJtSMExSBT8dTpwLOSIUhC/SLgKEyrVgstPJUWJ6MtKZtIQFS6RnVOTpvmOvDdPyUIHRVuQayGUZzjBvkbGSt0xQj1eHyUstuEFwKkGNgRVLAnN4zqnbukfeubPrXRsmM7U8BtFHGUwZPCWRF1x03c/JQZ/kGrV0MXMlmMbpekRakmv8gW6vDRMymiSFXOMP9B/CVBCnG2oYJuR2b/gFba5XiQZecM5PDwd9F3Tj67cxPQk/g0kbkUsMOAyTkprwovHXsrRY3B5i+mKFWI0OOUKbi9OltqpBJouUqBaT7BCjkLojY5i26YQgG95MhDharG0N/eJ/sY/EGpvMhKD2kEIgTkhr7bTNajExFtEiI6MnxKKmk0dGIoYtt0ZmAoo4eNkXYi+eMrNwdLHcIJJFPFgVYyJfdSsNx1SrI0s2wsoXtflxjU9kySaQ5pdtZO0bYbo5Rfa52tFkIwtZ0nBCYyjRSSMUZNKUoJ8Opvi2gFEgnfR3DhO6WiYNp3eUfAWYashKlpvmFvw68naMCVmtxEtbvMYUqRFjRD3h7CTXhXfMaxdi2nUQDDkPVWDykRYrwdRC3NfiIGOT9TXqqYwwoS4CRltnOPEDpL2EIuoo+dXYZHrwmfdeZgbYQ6YGHvSrBFMf9V6LeC6JXc+EAEKKM8Tvxoh1rIa6RmsY8YwB87sJDXw83aBvHjDhfuEHzKI94qHRSjDhcRKN8Q/DQ/dlPOckxqRicSZONtMaJl7DSBA+YSga96/pKT9lIngxJtQFFdTovB8uvO5dJr5XDSYPdfIHdnw666u6rvZnbjYCnsyTUDcurOG0FFtV7WUrUyN1AT9mRkzjafK62+0eJw8N/J3UI3WD42O/7h7bu11785HL/qkGE4+H3RhOlDjH4dBkwQwmVcP5yaIUgDMkMXOYS71295lzE9hGp9dhCVlhCSZ8OMEarNDrCYQq1WDCrVN0goGyjBBMNV/KvkWqYSEu4F3JRAvEv5mPpxeoIky1lpE9Q7LSxclIPF1axHybk99KtQj1XbJKVZj4emF6YAEmbDpVUDgzpSqbkpJiKpvrUxWmYJ1WIhEHW+puT9XguG3mQx7KcUKCCq+lshCrw1TbamU4oR6B/vEUJ07rZz+je1uKExp7KZeHWB2mYHQUXnfZNV0s2xGLM+ZENzuWatA9V4YTFqIqxalCTMH02SAneWsM7m9Ka4yKMgtla0XeafBRcBUJjawjJdHrVwHaRrroqxJTjW9ZhAElS7MF7uRF5GukASWLGjEYDLXpkfLn2c7mCXfypuq+kGoI7Nt3pd5LRNuBlJs3cvMjmzFqalPM7sbgDG1xZNNK9y6bICewwscOmSTl4sKbXKYY3L5RccgA03KkWdphnsgZFjzjI5gCUOOpZGgcnFzCBExDms4KNmIk2t3AvT3RiQvBpLp3F7rHg4Pw+XvER/B9PjXY1EgFE/iXdtWRlYxUc+RalhHIEuut8IyPYoKphLPRNCAqWfJ0NOuX2VH3+vb0Bbc4Cb2Hjzi7sLa5f4mV9bNENR6S0LHw/BEunKvFZM8OiqeDurqc+77XT/YQnsAUVVFtu3BDHkndExvh3u4Oil0Du9fN5H0y2bTjv7+rjdMBIxYouFqQON265O7LvxaSdtAgJ2egcbqs1+4CSkMG5MAK6o/iCjJQzi8kClcQskIyEYWny3cIifqS80uQbCVSCuGFVDhBSISEIYr2b55TKaY0ixsvgCTq5PJRL6aPwwShwPK8ZwOglxVCwSJmTiBxujOmVpwSSoF060ODNeQC5xWSvszldjwHUpAQrvUbt7K/FOIVJsSfcPdVQV7CeYWE1Yy87VGRtNzqbnSZpNW87WlXHaarjRHXpZFNMdFRh12Fpgn34uVyd7BEc2IK9dllI/5a2Rpi67EtFqczTixDziosFsPeY9fV5gt9s5JrDp0+wnu+Yx5AqTPMWVeU/3Qh3aLrXbZzc4DR/sCcUAU5LmdXH9sdJ1vMyl/2+0tzwBn4Gzl/5EX1mYnTCU/vm8fHzdtzI/PG6+m2zqLMXktZC5a9omVkNluKw4q6k+g24z4RoA8hF6arajDlo5MQVf4Id/TRJxfQYxmXsFCRZYLKRyfzsgpywC+otxKc2KJE80toeDKeSZhSXV6nQwzVXXJQWFISkVI28akS7b6yeRhZShX4BlDp66OcjGyyV0XaFcVVYkoPVf92jT4ofk6FbAx+hlLA6fkIJ/ap+l/44VtSQRiXs1o/ccVF6n4Tn/j0C84PCrYfXFhKLu0rGkqO9yPdSTTpkAaUwH5V4D4hSh/LmTmlzBnM7KcuuES7DyE7ogS28/aDP6mlmnULRt2Y6LEnhlU3q55UktS+6x1Ce/DZKuzzTXWTSqJ42xy6hgR3VrpDc/tzRglXd/P2FAVbGr37m6pWccfF8zDqpv8riBJ1u+3Xxx39/ToqKioqKqoLiD82yf6LSUFhVbVf+Il/9HF8JTMXRSvmpLsFe+5Pyy7afD80QMEjQ2qqU/TOMXkaIWn47FLAEUzyH4cJbEBOU1XAYlkU7lP3BRv2j2oOqoj4HMXEnB3TDBQvElWJYorVkv7jmHjEEibPlCVgQovVePLx4HUxJj1fIX6VwcQXt47WrBSTMnLXsWeJ99fuIAw3hZj41jDthz6ru8Otvwh7Oh+4Az89Poqzn5ZBU+MtEZMyrHOjIazsrZz6LDpfBb6EH41hshfTaUttjqPW14fW4fFFbN1gR5UqMc0AN5gCB14Q/Bq4KwfAcQQx8SOQdl6fwvcsl4N1RsAZuGAVPuPRBdMBE93CfGAM1tKU+Ng5z3Xk6RQ+3QgMzMU+TAQag/W4uQ+fl4Fg6hv7+kB0wmzPoPX6QI5aVyRrvbaiffsjwASdXhuVYVqCUfDvXILJFDMwhkMI+BGmIXr/bgE4AmaWE5Q2AXSRz8K3V/CJMfoKLOG5wl09W8cquOgMSLgfolfgiNuGP8gRvkQw8XUDtjgwYI9Gaes644Stw+/JizptiZVhGkWGdSTZQUem8GX4X4CpuUco8U6UT+fC5zi60ZNnpsF/9j60YTZYwMEUXq9+kW0y4Cc1JZvXddVZQfLwpT4d8CgmO/o1ky384sJm4UxseGh9DrxDp4eVpICEmKbRKftAqdlSNKUcyHpNdxwJzZhX43SLYfCeGu9RXRh20EZoonimHpz2PpztkW1TgmmlOVBGQH0kuuFLGcPkRTh0ZwSHetSUE3xxzSh5vQ9/AqAed3pfHSYmfD0OxnX4pQVaM3wwmhYtxDLV1PjRhKtgNOncIHw91NTkRHhxHVyFUa/7RzGNNNM0fd+fQ8xj34d/YBdd3KLOjGBToR3nHfglgG3U+hjmq0edrg5TC4T3kSlcuExD+2xbq8g2rQCSSlgPE+ZsDtqmQfhaFYPO60aYK+1BO+VFXFsIJh2ZmUWYZtHdCR43QWiO4VEEk26F5n2+DzDpXNq6krS+hCMLdjqwYpVhUhnGs/vDkIgH1ktVceF3BDHpdTBHCrte33M1iKkP6oq6XO+V8LSHfdvT4FP5+ak1tu2ZlZpwfi2ny5MIk8o5nq62ICydY+BLaYnf6VpgpfRNLczQG4PR1p5zTHi5Atj6flCD3yQzt/urCk14re8AYx9ba98CBuDg2evwRqMyII1nzjWwB4th+CheTwzKxSvcFtgbINq4ak+BJUnIaNItZGbTjBYrSxloBliEH80AUQRD+GUhFzjf2gMAxtMwkXGWth7c8CwJrMLxGXbAbVYyb1KjnwDjvbGffOfq3JyH/eAV2DXbQzaz6N68XxtyYR19bvrJ0sM2TS+ZznvBYd5LFyVbJOt+6/FxO6Yfn17QjLmNPg5dFNveXOWdyFDavuklt5KlaSb9UefjOa96yDX9jyjqqzOt6IO2+z9xrfy4zGnwtestUOBLOqNGcF+out5XmWN9NjVBsIRgwOUz54IVkxgsSvaX/z4uon5zXR9VscGH94brdbMKvyQVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRXV/6/+B+LqZzYLbdCeAAAAAElFTkSuQmCC" alt="">
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
       
        <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900"> Home </a>
        <a href="/products" class="text-base font-medium text-gray-500 hover:text-gray-900"> Products </a>
        <a href="/contact" class="text-base font-medium text-gray-500 hover:text-gray-900"> Contact </a>
        <a href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900"> About </a>
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a href="/signin" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
        <a href="/signup" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#f29e00] hover:bg-[#f28e10]"> Sign up </a>
      </div>
    </div>
  </div>

  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
          </div>
          <div class="-mr-2">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              <!-- Heroicon name: outline/chart-bar -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900"> Analytics </span>
            </a>

            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              <!-- Heroicon name: outline/cursor-click -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900"> Engagement </span>
            </a>

            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              <!-- Heroicon name: outline/shield-check -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900"> Security </span>
            </a>

            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              <!-- Heroicon name: outline/view-grid -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900"> Integrations </span>
            </a>

            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              <!-- Heroicon name: outline/refresh -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900"> Automations </span>
            </a>
          </nav>
        </div>
      </div>
      <div class="py-6 px-5 space-y-6">
        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Help Center </a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
        </div>
        <div>
          <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
          <p class="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <a href="#" class="text-indigo-600 hover:text-indigo-500"> Sign in </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        `;
  },
};

export default header;