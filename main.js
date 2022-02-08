import Navigo from "navigo";
import home from "./src/pages/home.js";
import contact from "./src/pages/contact.js";
import about from "./src/pages/about.js";
import products from "./src/pages/products.js";
import detailProduct from "./src/pages/detail";
import adminHome from "./src/pages/admin/dashboard";
import adminProductsHome from "./src/pages/admin/products/index";
import adminProductsAdd from "./src/pages/admin/products/add";
import adminProductsEdit from "./src/pages/admin/products/edit";
import signin from "./src/pages/signin";
import signup from "./src/pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
  document.getElementById("app").innerHTML = await content.render(id);
};

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
  "/details/:id": (value) => {
    print(detailProduct,value.data.id);
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
  "/admin/products/edit": () => {
    print(adminProductsEdit);
  },
  "/signin": () => {
    print(signin);
  },
  "/signup": () => {
    print(signup);
  },
});

router.resolve();
