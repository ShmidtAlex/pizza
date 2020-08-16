// export const strict = false;
export const  state = () => ({
  orderList: [],
})

//one order layout:
/*
order: {
  orderId: number, //should be unic for each user
  pizzasList: [
      {//equal to finalObject
        pizzaName: 'brusketta',
        pizzaSize: 'default/mid/midPlus/large',
        pizzaType: 'default(traditional)/thin',
        extraAddons: 'none/[array of different for each pizza?]',
        exludedAddons: 'none/[array of excluded],
        number: '1 and more',
        totalPrice: 'pizza and all extraAddons'
      },
      {...},
      {...},
      extraGoods: 'none/ [array of extra: juses, doilys, sauses, etc],
      totalSumm: 'All pizzas and extraGoods',
      bonuses: 'some numbers for future discount'
  ]
}
 */

export const mutations = {

  add (state, text) {
      state.orderList.push({
        text,
        // done: false
      })

  },
  addChangedIngredients  (state, text) {
    state.orderList.push({
      text,
      // done: false
    })
  },
  remove (state, index) {
    state.orderList.splice(index, 1)
  },
  clearCart (state) {
    state.orderList.splice(0)
  },
  increaseNumber (state, index) {
    state.orderList[index].text.quantity++
  },
  decreaseNumber (state, index) {
    if (state.orderList[index].text.quantity > 0 ) {
      state.orderList[index].text.quantity--
    } else {
      state.orderList.splice(index, 1)
    }
  }
}
