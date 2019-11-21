import { decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemToCart = item => {
    const inCart = this.items.find(
      obj => item.option === obj.option && item.drink === obj.drink
    );
    if (inCart) inCart.quantity += item.quantity;
    else this.items.push(item);
  };

  removeItemFromCart = item =>
    (this.items = this.items.filter(itemobj => item !== itemobj));

  checkoutCart = () => (this.items = []);
}

decorate(CartStore, {
  items: observable
});

const cartStore = new CartStore();

export default cartStore;
