import Navigo from "navigo";
import home from "./src/pages/home.js";
import contact from "./src/pages/contact.js";
import about from "./src/pages/about.js";
import products from "./src/pages/products.js";
import news from "./src/pages/news.js";
import newsDetail from "./src/pages/newsDetail.js";
import detailProduct from "./src/pages/detail";
import adminHome from "./src/pages/admin/dashboard";
import adminProductsHome from "./src/pages/admin/products/index";
import adminPostsHome from "./src/pages/admin/posts/index";
import adminProductsAdd from "./src/pages/admin/products/add";
import adminPostsAdd from "./src/pages/admin/posts/add";
import adminProductsEdit from "./src/pages/admin/products/edit";
import adminPostsEdit from "./src/pages/admin/posts/edit";
import signinPages from "./src/pages/signin";
import signupPages from "./src/pages/signup";
import cartPages from "./src/pages/cart";
import checkoutPages from "./src/pages/checkout";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
  document.getElementById("app").innerHTML = await content.render(id);
  if (content.afterRender) {
    content.afterRender(id);
  }
};

router.on("/admin/*", () => {}, {
  before(done, match) {
    if (JSON.parse(localStorage.getItem("user"))) {
      const id = JSON.parse(localStorage.getItem("user")).id;
      if (id == 1) {
        done();
      } else {
        document.location.href = "/";
      }
    } else {
      document.location.href = "/";
    }
  },
});
router.on({
  "/": () => {
    print(home);
  },
  "/contact": () => {
    print(contact);
  },
  "/about": () => {
    print(about);
  },
  "/products": () => {
    print(products);
  },
  "/news": () => {
    print(news);
  },
  "/news/:id": ({ data }) => {
    print(newsDetail, data.id);
  },
  "/details/:id": (value) => {
    print(detailProduct, value.data.id);
  },
  "/admin": () => {
    print(adminHome);
  },
  "/admin/products": () => {
    print(adminProductsHome);
  },
  "/admin/products/add": () => {
    print(adminProductsAdd);
  },
  "/admin/products/:id/edit": ({ data }) => {
    print(adminProductsEdit, data.id);
  },
  "/admin/posts": () => {
    print(adminPostsHome);
  },
  "/admin/posts/add": () => {
    print(adminPostsAdd);
  },
  "/admin/posts/:id/edit": ({ data }) => {
    print(adminPostsEdit, data.id);
  },
  "/signin": () => {
    print(signinPages);
  },
  "/signup": () => {
    print(signupPages);
  },
  "/cart": () => {
    print(cartPages);
  },
  "/checkout": () => {
    print(checkoutPages);
  },
});

router.resolve();
