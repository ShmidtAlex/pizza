<template>
  <div class="addons-options-wrapper">
    <div class="addons-up-block">
      <div class="addons-header">
        <h4>Here you may opt some extra addons</h4>
      </div>
      <div class="remove-button-wrapper">
        <div @click="closeAddonsWithoutSaving()" class="remove-button" >
          <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14">
            <path fill="white" fill-rule="evenodd"
                  d="M8.41 7l4.95 4.95-1.41 1.41L7 8.41l-4.95 4.95-1.41-1.41L5.59 7 .64 2.05 2.05.64 7 5.59 11.95.64l1.41 1.41L8.41 7z"></path>
          </svg>
        </div>
      </div>
    </div>
          
    <div class="addons-body">      
      <div class="addons-list" >
        <div class="addons-element-container" v-for="addon in availiableAddons">
          <AddonElement 
            @decreaseNumbers="decreaseNumbers" 
            @increaseNumbers="increaseNumbers"
            @resetOptedAddons="fillOptedAddonsDefaultState" 
            :availiableAddons="addon" 
            ref="AddonElement"/>
        </div>
        
      </div>
      
    </div>
      <div class="total-price"> 
        <div class="text">Total price for all addons:</div>
        <div class="price">{{ totalPrice }} $</div>
      </div>
    <button @click="applyAddons" class="apply-button">Apply</button>
  </div>
  
</template>
<script>
  import AddonElement from '~/components/AddonElement/AddonElement.vue'
  export default {
    props: ["addonsList"],
    components: {
      AddonElement
    },
    data() {
      return {
        availiableAddons: this.addonsList,
        optedAddons: {},
        addonPrice: 1,
        totalPrice: 0,
        totalAddonNumbers: 0
      }
    },
    mounted() {
      this.fillOptedAddonsDefaultState();
    },
    methods: {
      closeAddons: function() {        
        this.$emit('closeAddonsList', false);        
      },

      closeAddonsWithoutSaving: function(){
        this.$emit('discardAddonsPrice', this.totalPrice);
        
        this.$refs.AddonElement.forEach(function(elem) {
          elem.resetValue();
        })
        this.totalAddonNumbers = 0;
        this.totalPrice = 0;
        this.$emit('closeAddonsList', false);
      },

      decreaseNumbers: function(value) {
        if (value.number >= 0) {
          this.optedAddons[value.name] -= 1;
          this.countAddonPrice(-value.price);
          this.$emit('subtractFromPrice', -value.price);
        }  
      },

      increaseNumbers: function(value) {
        this.optedAddons = value;//should get it from store
        this.countAddonPrice(value.price);
        this.$emit('addToPrice', value.price);
      },

      countAddonPrice: function(addonsCost) {
        this.totalPrice += addonsCost;
      },

      fillOptedAddonsDefaultState: function(value){
        let self = this;
        if(!value) {
          Array.from(this.availiableAddons).forEach(function(element){
            if (typeof element === 'string'){
              self.optedAddons[element] = 0;
            }
          });
        } else {
          if (typeof value === 'string'){
            self.optedAddons[value] = 0;
          }
        }        
      },

      applyAddons: function() {
        this.$emit('summaryOptedAddons', this.optedAddons);
        this.closeAddons();
      }   

    },
    computed: {

    }
  }
</script>
<style scoped>
  .addons-options-wrapper {
    width: 62%;
    height: 600px;
    background-color: white;
    box-shadow: 10px 10px 10px 10px rgba(100,100,100,.5);
    position: fixed;
    top: 20%;
    left: 19%;
    z-index: 4;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  }
  .addons-up-block {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  
  .addons-header {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-items: flex-start;
    margin: 10px 0 0 40px;
  }
  
  .addons-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 70%;
  }

  .addons-list {
    width: 100%;
    height: 422px;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0 20px 20px 20px;
  }

  .addons-element-container {
    width: 70%;
  }

  .remove-button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 40%;
  }

  .remove-button {
    margin: 20px;
    width: 30px;
    height: 30px;
    background-color: darkred;
    border-radius: 50%;
    padding: 6px;
  }

  .apply-button {
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
  .total-price {    
    display: flex;
    justify-content: flex-start;
    width: 95%;
    margin: 0 0 0 20px;
  }
  .text {
    margin: 0 10px 0 40px;
  }
</style>
