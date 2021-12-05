const totalCart = (cart: number[]): number => {
  return cart.reduce((curr, item) => curr + item, 0);
};
export default totalCart;
