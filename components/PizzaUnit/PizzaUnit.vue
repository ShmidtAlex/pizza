<template>
  <div class="pizza-unit" >
    <div v-if="showAddons" class="appeared-addons">
      <Addons
              :objectForIngredientManipulations="defaultObject"
              :isShown="showAddons"
              :addons="addons"
              @updateShowAddonsStatus="updateShowAddons"
              @collapsePizzasList="collapsWithoutAdding"
              @showAddonsList="showFeature"/>
    </div>
    <div class="pizza-picture" :style="`background-image: url(${img})`">
        <img :alt="name" :src="img">
        <div v-if="addons.length"class="addon-list-wrapper">
          <button @click="showAddonInUnit" class="addon-list">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12">
              <path fill="currentColor" fill-rule="evenodd" d="M1 0h14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm2 5h10a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm2 5h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>

      </div>
    <div class="information-block">
      <div class="up-block">
        <div class="name">{{ name }}</div>
        <button @click="showNutritions" class="nutritions" ><span class="nutrition-button"><i>i</i></span></button>
      </div>


      <div class="description">{{ description }}</div>
      <div class="nutrition" :class="{'nutrition-shown': isNutritionsShown }">
        <div class="nut-title"><h4>{{ nutrition.title }}</h4></div>
        <div class="nut-protein"><span>protein: </span><span>{{ nutrition.protein }}</span></div>
        <div class="nut-fats"><span>fats:</span> <span>{{ nutrition.fats }}</span></div>
        <div class="nut-carbo"><span>carbohydrates:</span> <span>{{ nutrition.carbohydrates }}</span></div>
        <div class="nut-energy"><span>energy:</span> <span>{{ nutrition.energy[0] }}/{{ nutrition.energy[1] }}</span></div>
      </div>
      <div class="down-block">
    <!--  it would be better to create as a separate component -->
        <div class="pastry-type">
          <div @click="changeType(type)" v-for="type in pastryType" class="pastry-type-next"
               :class="{'pastry-type-only': Object.keys(pastryType).length === 1,
               'pastry-type-default': type === optedType && Object.keys(pastryType).length > 1}">
            {{ type }}
          </div>
        </div>
        <!--   it would be better to create as a separate component -->
        <div class="sizes">
          <div @click="changeSize(Object.keys(sizes).indexOf(index),size)" class="pastry-type-next" v-for="(size, index) in sizes"
               :class="{'pastry-type-only': Object.keys(sizes).length === 1,
               'pastry-type-default': Object.keys(sizes).indexOf(index) === sizeIndexValue &&  Object.keys(sizes).length > 1}" >
            {{ size }} cm
          </div>
        </div>
        <!--   it would be better to create as a separate component -->
        <div class="price-block">
          <button @click="collapsePizzasList" class="add-to-cart">Add to cart</button>
          <div class="price">
            <div class="" v-for="(price, index) in prices">
              <div v-if="Object.keys(prices).indexOf(index) === priceIndexValue">
                {{ price }} &euro;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="addonOptions" :class="{showedAddons: showAddonOptions}">
      <AddonsList :addonsList="addons" @summaryOptedAddons="nestOptedAddons" @closeAddonsList="showFeature"/>
    </div>
     
  </div>
</template>
<script>
  import Addons from '~/components/Addons/Addons.vue';
  import { mapMutations } from 'vuex';  
  import AddonsList from '~/components/AddonsList/AddonsList.vue'

export default {
  components: {
    Addons,
    AddonsList
  },
  props: ['name', 'addons', 'description', 'nutrition', 'pastryType', 'sizes', 'prices', 'img', 'index'],
  data() {
    return {
      showAddons: false,
      showAddonOptions: false,
      isNutritionsShown: false,
      sizeIndexValue: 0,
      priceIndexValue: 0,
      optedType: 'Traditional',
      finalObject: {
        pizzaName: this.name,
        pizzaSize: this.sizes.default,
        pizzaType: this.pastryType.default,
        extraAddons: [],
        excludedIngridients: [],
        quantity: 1,
        totalPrice: this.prices.default,
        smallImg: this.img
      },
      defaultObject: {
        pizzaName: this.name,
        pizzaSize: this.sizes.default,
        pizzaType: this.pastryType.default,
        extraAddons: [],
        excludedIngridients: [],
        quantity: 1,
        totalPrice: this.prices.default,
        smallImg: this.img
      }
    }
  },
  methods: {
    showAddonInUnit: function () {
        this.showAddons = true;
    },

    updateShowAddons: function (value) {
        this.showAddons = value;
    },

    changeType: function (value) {
      this.optedType = value;
      this.finalObject.pizzaType = value;
    },

    changeSize: function(value, size) {
      this.sizeIndexValue = value;
      this.priceIndexValue = value;
      this.finalObject.pizzaSize = size;
      this.changePrice(value);
    },

    changePrice: function(index) {
      let localKey = Object.keys(this.prices)[index];
      this.finalObject.totalPrice = this.prices[localKey];
    },

    showNutritions: function() {
      this.isNutritionsShown = true;
      setTimeout(() => {
        this.isNutritionsShown = false;
      },4000)
    },

    collapsePizzasList: function() {
      this.$emit('collapseSection', true);
      this.addPizzaToCart();
    },

    collapsWithoutAdding: function() {
      this.$emit('collapseSection', true);
    },

    addPizzaToCart: function() {
      this.$store.commit('order/add', this.mainObject);
    },

    showFeature: function(value) {
      this.showAddonOptions = value;
    },

    nestOptedAddons: function(value) {
      this.finalObject.extraAddons = value;   
    }
  },
  computed: {
    mainObject: function() {
      return this.finalObject;
    }
  }
}
</script>
<style scoped>
  button {
    outline: none;
  }
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
  .appeared-addons {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .information-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    height: 266px;
    position: relative;
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
    width: 100%;
    margin: 0 0 20px 0;
  }
  .price-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
  }
  .price {
    color: #70544f;
    position: relative;
    display: inline-block;
    font-family: Gotham Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-weight: 500;
    line-height: 1;
    font-size: 24px;
  }
  .add-to-cart {
    position: relative;
    display: inline-block;
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
  }
  .pastry-type, .sizes {
    height: 30px;
    margin: 3px;
  }
  .pastry-type,
  .sizes {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 36px;
    border-radius: 100px;
    border: 1px solid #ededed;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }
  .pastry-type-next {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100%;
    align-items: center;
    color: #a69895;
    cursor: pointer;
  }
  .pastry-type-only {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ededed;
    color: #70544f;
    border-radius: 30px;
    cursor: pointer;
  }
  .pastry-type-default {
    background-color: #ededed;
    color: #70544f;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    cursor: pointer;
  }
  .up-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
  }
  .nutritions {
    position: absolute;
    right: 5px;
    top: 5px;
    border: none;
    background: lightgray;
    height: 18px;
    border-radius: 15px;
  }
  .nutritions:active {
    background-color: rgba(255,255,255, 0);
  }
  .nutrition {
    position: absolute;
    bottom: 100%;
    left: -13px;
    width: 248px;
    height: 200px;
    padding: 16px;
    margin-bottom: 13px;
    border-radius: 6px;
    background-color: #70544f;
    color: #fff;
    z-index: 2;
    opacity: 0;
    -webkit-transition: opacity .175s;
    transition: opacity .175s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
  .nutrition-shown {
    opacity: 1;
  }
  .nut-title {
    margin: 0 0 15px 0;
  }
  .nut-title,
  .nut-carbo,
  .nut-energy,
  .nut-fats,
  .nut-protein {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .addonOptions {
    display: none;
  }
  .showedAddons {
    display: flex;
  }


</style>
