import axios from "axios";
import { decorate, observable } from "mobx";

class CoffeeStore {
  coffeeshops = [];
  loading = true;

  fetchAllCoffeeShops = async () => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const coffeeshops = res.data;
      this.coffeeshops = coffeeshops;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();

export default coffeeStore;
