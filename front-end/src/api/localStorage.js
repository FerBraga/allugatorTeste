const emptyUser = {
    email: '',
    name: '',
    role: '',
  };
  
  // Usuário
  export const addUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  export const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user')) || emptyUser;
    return user;
  };

  export const addShoppingCart = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };
  
  
  export const getShoppingCart = () => {
    const shoppingCart = JSON.parse(localStorage.getItem('cart'));
    return shoppingCart;
  };
  
  export const removeFromCart = (id) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newCartItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };
  
  // limpa o localStorage
  export const clearLocalStorage = () => localStorage.clear();
  