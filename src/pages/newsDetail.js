import { getPost } from "../instance/posts";

const newsDetail = {
   async render (id) {
        const {data} = await getPost(id);
        
        return /*html*/ `
        <img src="${data.img}"/>
        `
    }
}
export default newsDetail