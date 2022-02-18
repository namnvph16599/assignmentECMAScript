let cart = []; //mangr chứa sản phẩm
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct, next) => {
  const existProduct = cart.find((item) => item.id === newProduct.id); //kiểm tra xem có id của phẩm đã thêm hay chưa
  // nếu mà chưa có thì push vào mảng cart
  if (!existProduct) {
    cart.push(newProduct);
  } else {
    // nếu có rồi cộng quantity thêm 1
    existProduct.quantity += newProduct.quantity++;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};

// hàm tăng quantity
export const increaseQuantity = (id, callback) => {
  cart.find((item) => item.id == id).quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  callback();
};

// hàm giảm quantity
export const decreaseQuantity = (id, callback) => {
  const currentQuantity = cart.find((item) => item.id == id);
  currentQuantity.quantity--;
  
  if (currentQuantity.quantity < 1) {
    const confirm = window.confirm("Are you sure delete product!");
    if (confirm) {
      cart = cart.filter((item) => item.id != id);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  callback();
};

// hafm delete produc

export const deleteProCart = (id, callback) => {
  const confirm = window.confirm("Are you sure delete product!");
  if (confirm) {
    cart = cart.filter((item) => item.id != id);
    console.log(cart);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  callback();
};
