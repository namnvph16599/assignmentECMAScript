import header from "../components/header";
import footer from "../components/footer";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
const contact = {
  render() {
    return /*html*/ `
        ${header.render()}
        
        <div class="container mx-auto pt-16">
        <div class="lg:flex">
            <div class="xl:w-2/5 lg:w-2/5 bg-[#fcaf17] py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                <div class="xl:w-5/6 xl:px-0 px-8 mx-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.350696692048!2d105.79032271476314!3d21.018649286003814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab69c0cac6d3%3A0x200669ed389bb5c2!2zWU9EWSBZw6puIEjDsmE!5e0!3m2!1svi!2s!4v1645349880799!5m2!1svi!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div class="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                <form id="contact" class="bg-white py-4 px-8 rounded-tr rounded-br">
                    <h1 class="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                    <div class="block xl:flex w-full flex-wrap justify-between mb-6">
                        <div class="w-2/4 max-w-xs mb-6 xl:mb-0">
                            <div class="flex flex-col">
                                <label for="full_name" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Full Name</label>
                                <input required id="full_name" name="full_name" type="text" class="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Full Name" aria-label="enter your full name input" />
                            </div>
                        </div>
                        <div class="w-2/4 max-w-xs xl:flex xl:justify-end">
                            <div class="flex flex-col">
                                <label for="email" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Email</label>
                                <input required id="email" name="email" type="email" class="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="example@email.com" aria-label="enter your email input" />
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full flex-wrap">
                        <div class="w-2/4 max-w-xs">
                            <div class="flex flex-col">
                                <label for="phone" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Phone</label>
                                <input required id="phone" name="phone" type="tel" class="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10      flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Phone" aria-label="enter your phone number input" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-6">
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold text-gray-800 mb-2" for="message">Message</label>
                            <textarea placeholder="" name="message" id="message" class="border-gray-300 border rounded  text-sm outline-none resize-none pl-3 pt-3 focus:border focus:border-indigo-700 h-40" id="message" aria-label="enter your message input" ></textarea>
                        </div>
                        <br />
                        <button type="submit" class="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

        ${footer.render()}
        `;
  },
  afterRender() {
    $("#contact").validate({
      rules: {
        full_name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        message: {
          required: true,
        },
      },
      submitHandler: async (form) => {
        await axios({
          url: "http://localhost:3001/contacts",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            fullname: $("#full_name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            message: $("#message").val(),
          },
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => console.log(err));
        form.submit();
      },
    });
    // document
    //   .querySelector("#contact")
    //   .addEventListener("submit", async function (e) {
    //     e.preventDefault();
    //     await axios({
    //       url: "http://localhost:3001/contacts",
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       data: {
    //         fullname: $("#full_name").val(),
    //         email: $("#email").val(),
    //         phone: $("#phone").val(),
    //         // message: $("#message").val(),
    //       },
    //     })
    //       .then((response) => {
    //         console.log(response);
    //       })
    //       .catch((err) => console.log(err));
    //   });
  },
};

export default contact;
