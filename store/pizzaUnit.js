export const  state = () => ({
  availablePizzasList: [],
  // unit: {
  //   pizzaName: "",
  //   pizzaSize: "",
  //   pizzaType: "",
  //   extraAddons: [],
  //   excludedIngredients: [],
  //   quantity: 1,
  //   totalPrice: 0,
  //   smallImg: ""
  // },
})

export const actions = {
  async getAvailablePizzas(context) {
    fetch('http://localhost:3004/pizzasList')
      .then(response => {
      response.json().then(list => {
        context.commit('setPizzas', list);
      })
    })    
  }
}
export const getters = {
  availablePizzasList(state) {
    return state.availablePizzasList;
  }
}

export const mutations = {
  setPizzas (state, text) {
    state.availablePizzasList = text;
  },
  //this one should initialize object pizzaUnit while user clicks on any part of pizzaUnit and reinitialize, when he clicks any other pizzas
  // fillStorePizzaUnit (state, text) {
  //     state.unit = text;
  // },
  // changePizzaSize (state, text) {
  //   state.unit.pizzaSize = text;
  // },
  // changePizzaType (state, text) {
  //   state.unit.pizzaType = text;
  // },
  // changePizzaExtraAddons (state, text) {
  //   state.unit.extraAddons = text;
  // },
  // changePizzaExtraAddonsQuantity(state, text) {
  //   // when user desidet to increase number of addons after pressing button "apply"???
  // },
  // changePizzaExcludedIngredients (state, text) {

  //   // console.log(text)
  //   state.unit.excludedIngredients = text;
  // },
  // increaseQuantity (state, text) {
  //   state.unit.quantity++;
  // },
  // decreaseQuantity (state, text) {
  //   state.unit.quantity--;
  // },
  // //while opting other pizza size
  // changePizzaPrice (state, text) {
  //   state.unit.totalPrice = text;
  // },
  // //while impact on pizza cost with additional ingredients
  // addToTotalPrice (state, text) {
  //   state.unit.totalPrice +=text;
  // },
  // //actually, we don't need substract from stored value, because of adding happened only if user press button 'apply' after choosing addons.
  // // otherwise, only local addons object are changing, and they no casue any changes in store
  // subtractFromTotalPrice (state, text) {
  //   state.unit.totalPrice -=text;
  // },
  // discardAddonsPrice (state, text) {
  //   console.log(text);
  //   state.unit.totalPrice -= text;
  // },
  // decreaseAddonsNumber (state, text) {
  //   state.unit.extraAddons.forEach(function(elem){
  //       if (elem.name === text.name) {
  //           elem.number--;
  //       }
  //   })
  // },
  // increaseAddonsNumber (state, text) {
  //   state.unit.extraAddons.forEach(function(elem){
  //       console.log(text);
  //       if (elem.name = text) {
  //           elem.number++;
  //       }
  //   })
  // }
}