import listPosts from "../components/listPosts";
import header from "../components/header";
import footer from "../components/footer";

const news = {
  async render() {
    return /*html*/ `
    ${header.render()}
        ${await listPosts.render()}
    ${footer.render()}

        `;
  },
};
export default news;
