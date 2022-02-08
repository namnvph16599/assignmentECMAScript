import headerAdmin from "../../components/admin/header";

const adminHome = {
  render() {
    return /*html*/ `
        ${headerAdmin.render()}
        <h1>Dashboard</h1>
        `;
  },
};
export default adminHome;
