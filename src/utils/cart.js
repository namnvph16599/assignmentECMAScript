let cart = []; //mangr chứa sản phẩm
if (localStorage.getItem("cartEcma")) {
  cart = JSON.parse(localStorage.getItem("cartEcma"));
}

const Productprice = (quantity, price) => {
  return Number(quantity) * Number(price);
};

export const addToCart = (newProduct, next) => {
  const existProduct = cart.find((item) => item.id === newProduct.id); //kiểm tra xem có id của phẩm đã thêm hay chưa
  // nếu mà chưa có thì push vào mảng cart
  if (!existProduct) {
    cart.push(newProduct);
  } else {
    // nếu có rồi cộng quantity thêm 1
    existProduct.quantity += newProduct.quantity++;
    existProduct.priceTotal = Productprice(
      existProduct.quantity,
      existProduct.price
    );
  }
  localStorage.setItem("cartEcma", JSON.stringify(cart));
  next();
};

// hàm tăng quantity
export const increaseQuantity = (id, callback) => {
  const cartNew = cart.find((item) => item.id == id);
  cartNew.quantity++;
  cartNew.priceTotal = Number(cartNew.quantity) * Number(cartNew.price);
  localStorage.setItem("cartEcma", JSON.stringify(cart));
  callback();
};

// hàm giảm quantity
export const decreaseQuantity = (id, callback) => {
  const currentQuantity = cart.find((item) => item.id == id);
  currentQuantity.quantity--;
  currentQuantity.priceTotal =
    Number(currentQuantity.quantity) * Number(currentQuantity.price);
  if (currentQuantity.quantity < 1) {
    const confirm = window.confirm("Are you sure delete product!");
    if (confirm) {
      cart = cart.filter((item) => item.id != id);
    } else {
      currentQuantity.quantity = 1;
    }
  }
  localStorage.setItem("cartEcma", JSON.stringify(cart));
  callback();
};

// hafm delete produc

export const deleteProCart = (id, callback) => {
  const confirm = window.confirm("Are you sure delete product!");
  if (confirm) {
    cart = cart.filter((item) => item.id != id);
    console.log(cart);
  }
  localStorage.setItem("cartEcma", JSON.stringify(cart));
  callback();
};
