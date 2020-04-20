<template>
  <div class="pizza-unit" >
    <div class="pizza-picture" :style="`background-image: url(${img})`">
        <img :alt="name" :src="img">
        <div class="addon-list-wrapper">
          <button class="addon-list">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12">
              <path fill="currentColor" fill-rule="evenodd" d="M1 0h14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm2 5h10a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm2 5h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
        <div class="addons" v-if="showAddons">{{addons}}</div>
      </div>
    <div class="information-block">
      <div class="name">{{name}}</div>

      <div class="description">{{description}}</div>
      <div class="nutrition" v-if="showNutritions">{{nutrition}}</div>
      <div class="down-block">
        <div class="pastry-type">{{pastryType}}</div>
        <div class="sizes">{{size}} cm</div>
        <div class="price-block">
          <button class="add-to-cart">Add to cart</button>
          <div class="price">{{price}} &euro;</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: ['name', 'addons', 'description', 'nutrition', 'pastryType', 'size', 'price', 'img'],
  data() {
    return {
      showAddons: false,
      showNutritions: false,
    }
  },
  mounted() {
    console.log(this.img)
  }
}
</script>
<style scoped>
  .pizza-unit {
    /*height: 300px;*/
    width: 300px;
    min-height: fit-content;
    background: rgba(255,255,255,1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  .pizza-picture {
    width: 100%;
    min-height: fit-content;
    background-size: cover;
    border: 2px solid white;
    border-radius: 5px;
  }
  .pizza-picture img {
    max-width: 100%;
    border-radius: 5px;
    position: relative;
  }
  .addon-list-wrapper {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1;
  }
  .addon-list {
    width: 32px;
    height: 32px;
    border: 1px solid rgba(0,148,113,.2);
    border-radius: 50%;
    background-color: #fff;
    color: #009471;
    -webkit-transition: border-color .35s;
    transition: b;
    padding: 2px 0 0 0;
    outline: none;
  }
  .addon-list:after {
    content: "";
    position: absolute;
    top: -16px;
    right: -16px;
    bottom: -16px;
    left: -16px;
  }
  .information-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    height: 190px;
  }
  .name {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-family: Gotham Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-weight: 700;
    color: #70544f;
    line-height: 1.33;
    text-align: left;
    font-size: 18px;
  }
  .description {
    text-align: left;
    color: #a69895;
    font-size: 13px;
  }
  .down-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid pink;
    width: 100%;
  }
  .price-block {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

</style>
