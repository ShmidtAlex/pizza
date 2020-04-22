<template>
  <div class="cart-snippet-wrapper">
    <div class="cart-snippet-block">
      <div class="cart-snippet-stripe"></div>
      <div class="cart-snippet-circle-element">
        <div class="cart-img">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2 23.2a2.4 2.4 0 0 0-2.4 2.4 2.4 2.4 0 0 0 2.4 2.4 2.4 2.4 0 0 0 2.4-2.4 2.4 2.4 0 0 0-2.4-2.4zM4 4v2.4h2.4l4.32 9.12-1.68 2.88c-.12.36-.24.84-.24 1.2a2.4 2.4 0 0 0 2.4 2.4h14.4v-2.4H11.68a.26.26 0 0 1-.24-.24v-.12l1.08-2.04h8.88c.96 0 1.68-.48 2.04-1.2l4.32-7.8c.24-.24.24-.36.24-.6 0-.72-.48-1.2-1.2-1.2H9.04L7.96 4H4zm19.2 19.2a2.4 2.4 0 0 0-2.4 2.4 2.4 2.4 0 0 0 2.4 2.4 2.4 2.4 0 0 0 2.4-2.4 2.4 2.4 0 0 0-2.4-2.4z" fill="currentColor" fill-rule="nonzero"></path>
          </svg>
        </div>
      </div>
      <div class="cart-snippet-body">
        <div class="cart-number">
          <div class="cart-info-line">
            <h3>Cart</h3>
            <div class="positions-number">({{order.length}})</div>
            <button @click="showDetails" class="expand-list"></button>
          </div>
          <button class="clear">Clear</button>
        </div>
        <div v-show="isDetailsShown" class="cart-details-block">
          <div class="cart-details">
            <div class="small-pizza-pic"></div>
            <div class="pizza-info">
              <div class="pizza-name">Name</div>
              <div class="pizza-details">details</div>
            </div>
            <div class="remove-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14">
                <path fill="currentColor" fill-rule="evenodd"
                      d="M8.41 7l4.95 4.95-1.41 1.41L7 8.41l-4.95 4.95-1.41-1.41L5.59 7 .64 2.05 2.05.64 7 5.59 11.95.64l1.41 1.41L8.41 7z"></path>
              </svg>
            </div>
          </div>
          <div class="cart-details">
            <div class="change-number-pizzatype">
              <div class="change">
                <button class="decrease"></button>
                <div class="running-number">1</div>
                <button class="increase"></button>
              </div>
              <div class="totally-pizzatype">359 &euro;</div>
            </div>
          </div>

        </div>
        <div class="total-amount-block">
          <div class="total-text">Total:</div>
          <div class="total-amount">{{totalAmount}} &euro;</div>
        </div>
        <div class="order-now-section">
          <button class="order-now">Order Now</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        order: ['some order'],
        isDetailsShown: false,
        totalAmount: 'some number of TA'
      }
    },
    methods: {
      showDetails: function () {
        console.log('click!!');
        this.isDetailsShown = !this.isDetailsShown;
      }
    }
  }
</script>
<style>
  .cart-snippet-wrapper {
    width: 300px;
    height: 400px;
    position: fixed;
    top: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .cart-snippet-block {
    width: 100%;
    height: 90%;
    position: relative;
  }

  .cart-snippet-stripe {
    width: 100%;
    height: 3px;
    background-color: #c21313;
    border-radius: 2px;
  }
  .cart-snippet-circle-element {
    position: absolute;
    box-sizing: border-box;
    top: -48px;
    left: 100px;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: #fff;
    border: 3px solid #c21313;
    color: #c21313;
  }
  .cart-img {
    position: absolute;
    top: 15px;
    left: 27px;
  }
  .cart-snippet-body {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(255,255,255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
  }
  .cart-number {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  h3 {
    padding: 0;
    margin: 0 0 0 0;
    position: relative;
    font-family: Gotham Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-weight: 700;
    color: #70544f;
    line-height: 1.33;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .positions-number,
  .expand-list,
  .clear {
    color: #70544f;
    margin: 0 0 10px 0;
    border: none;
    outline: none;
  }
  .expand-list {
    border-radius: 10px;
    position: relative;
    color: #fff;
    border-style: solid;
    cursor: pointer;
  }
  .expand-list:after {
    content: '';
    position: absolute;
    border: 7px solid transparent;
    border-top: 7px solid #70544f;
    top: -2px;
    left: 1px;
  }
  .cart-info-line {
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 30%;
    height: 100%;
    align-items: center;
  }
  .cart-details-block {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
    justify-content: space-around;
  }
  .cart-details,
  .change-number-pizzatype {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .small-pizza-pic {
    width: 30px;
    height: 20px;
    border: 1px solid gray;
  }
  .change {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%
  }
  .pizza-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .total-amount-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .order-now-section {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    height: 50%;
    align-items: flex-end;
  }
  .order-now {
    position: relative;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    height: 48px;
    padding: 15px 25px;
    border-radius: 24px;
    background-color: #009471;
    border: none;
    color: #fff;
    font-family: Gotham Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    margin: 20px;
    font-size: 16px;
    outline: none;
  }

</style>
