export const  state = () => ({
  pizzaUnit: {
        pizzaName: this.name,
        pizzaSize: this.sizes.default,
        pizzaType: this.pastryType.default,
        extraAddons: [],
        excludedIngredients: [],
        quantity: 1,
        totalPrice: this.prices.default,
        smallImg: this.img
      }
})