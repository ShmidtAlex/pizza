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
    state.pizzaUnit.extraAddons = text;
  },
  changePizzaExtraAddonsQuantity(state, text) {
    // when user desidet to increase number of addons after pressing button "apply"???
  },
  changePizzaExcludedIngredients (state, text) {

    // console.log(text)
    state.pizzaUnit.excludedIngredients = text;
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
  addToTotalPrice (state, text) {
    state.pizzaUnit.totalPrice +=text;
  },
  //actually, we don't need substract from stored value, because of adding happened only if user press button 'apply' after choosing addons.
  // otherwise, only local addons object are changing, and they no casue any changes in store
  subtractFromTotalPrice (state, text) {
    state.pizzaUnit.totalPrice -=text;
  },
  discardAddonsPrice (state, text) {
    console.log(text);
    state.pizzaUnit.totalPrice -= text;
  },
  decreaseAddonsNumber (state, text) {
    state.pizzaUnit.extraAddons.forEach(function(elem){
        if (elem.name === text.name) {
            elem.number--;
        }
    })
  },
  increaseAddonsNumber (state, text) {
    state.pizzaUnit.extraAddons.forEach(function(elem){
        console.log(text);
        if (elem.name = text) {
            elem.number++;
        }
    })
  }
}