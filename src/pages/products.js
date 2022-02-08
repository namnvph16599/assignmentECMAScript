import listProducts from "../components/listProducts";
import header from "../components/header";
import footer from "../components/footer";

const products = {
 async render() {
    return /*html*/ `
         ${header.render()}
         ${await listProducts.render()}
         ${footer.render()}

         
         `;
  },
};
export default products;
