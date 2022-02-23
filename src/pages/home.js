import header from "../components/header";
import footer from "../components/footer";
import cart from "../components/cart";
import banner from "../components/banner";
import listPosts from "../components/listPosts";
import listProducts from "../components/listProducts";

const home = {
  async render() {
    return /*html*/ `
        ${await  header.render()}
        ${banner.render()}
        ${await listProducts.render()}
        ${await listPosts.render()}
        ${footer.render()}
        `;
  },
  afterRender() {
    if (header.afterRender) header.afterRender();
  },
};

export default home;
