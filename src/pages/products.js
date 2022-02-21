import header from "../components/header";
import footer from "../components/footer";
import listProducts from "../components/listProducts";
const products = {
  async render() {
    return /*html*/ `
         ${header.render()}
         ${await listProducts.render()}
         ${footer.render()}

         
         `;
  },
  afterRender() {
    if (header.afterRender) header.afterRender();
  }
};
export default products;
