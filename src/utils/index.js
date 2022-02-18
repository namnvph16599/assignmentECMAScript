export const reRender = async (components, domElmRender) => {
  if (components) {
    document.querySelector(domElmRender).innerHTML = await components.render();
    if (components.afterRender) components.afterRender();
  }
};
