export const  state = () => ({
  pizzaUnit: {
        pizzaName: "",
        pizzaSize: "",
        pizzaType: "",
        extraAddons: [],
        excludedIngredients: [],
        quantity: 1,
        totalPrice: 0,
        smallImg: ""
      }
})
export const mutations = {
    //this one should initialize object pizzaUnit while user clicks on any part of pizzaUnit and reinitialize, when he clicks any other pizzas
  fillStorePizzaUnit (state, text) {
      state.pizzaUnit = text;
  },
  changePizzaSize (state, text) {
    state.pizzaUnit.pizzaSize = text;
  },
  changePizzaType (state, text) {
    state.pizzaUnit.pizzaType = text;
  },
  changePizzaExtraAddons (state, text) {
    state.pizzaUnit.extraAddons.push({
        text
    })
  },
  changePizzaExcludedIngredients (state, text) {
    state.pizzaUnit.excludedIngredients.push({
        text
    })
  },
  increaseQuantity (state, text) {
    state.pizzaUnit.quantity++;
  },
  decreaseQuantity (state, text) {
    state.pizzaUnit.quantity--;
  },
  //while opting other pizza size
  changePizzaPrice (state, text) {
    state.pizzaUnit.totalPrice = text;
  },
  //while impact on pizza cost with additional ingredients
  changeTotalPrice (state, text) {
    state.pizzaUnit.totalPrice +=text;
  }
}