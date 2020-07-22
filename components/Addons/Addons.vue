<template>
  <div v-if="isShown" class="addons-wrapper" @click.self="hideAddons">
    <div class="addons" >
      <h3>Remove ingredients</h3>
      <div class="addon" v-for="addon in addons">
        <div :class="{'removed-addons': removed.includes(addon)}">{{ addon }}</div>
        <div @click="removeIngredient(addon)" class="remove-button" :class="{'removed-addons': removed.includes(addon)}">
          <svg v-if="!removed.includes(addon)" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14">
            <path fill="currentColor" fill-rule="evenodd"
                  d="M8.41 7l4.95 4.95-1.41 1.41L7 8.41l-4.95 4.95-1.41-1.41L5.59 7 .64 2.05 2.05.64 7 5.59 11.95.64l1.41 1.41L8.41 7z"></path>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M3.74 10.3a4.5 4.5 0 1 0 .94-4.98M4.6 1.85L3.5 5.9l4.03 1.22" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></path>
          </svg>
        </div>
      </div>
      <div class="add-section">
<!--  it should redirect to another page with completed list of addons for option -->
        <a href="">
          <div class="plus">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve" width="16px" height="16px" class=""><g><path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2  s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2  S39.604,28,38.5,28z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#009471"/></g> </svg>
          </div>
          <span>Add ingredients</span>
        </a>
      </div>
      <hr/>
      <div class="action-block">
        <div class="cansel-block">
          <button @click="hideAddons">Cansel</button>
        </div>
        <div @click="addToCartWithChanges" class="add-to-cart">Add to cart</div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    props: ['isShown', 'addons', 'objectForIngredientManipulations'],
    data() {
      return {
        localAddons: null,
        removedAddons: []
      }
    },
    mounted() {
      this.localAddons = this.addons;
    },
    methods: {
      hideAddons: function() {
        this.$emit('updateShowAddonsStatus', false);
        this.canselChanges();
      },
      removeIngredient: function (value) {
        if(!this.removedAddons.includes(value)){
          this.removedAddons.push(value);
        } else {
          this.removedAddons = this.removedAddons.filter(elem => elem !== value);
        }
      },
      canselChanges: function() {
        this.removedAddons = [];
      },
      addToCartWithChanges: function () {
        this.objectForIngredientManipulations.excludedIngridients = this.removedAddons;
        this.$store.commit('order/addChangedIngredients', this.objectForIngredientManipulations);
        this.$emit('collapsePizzasList', true)
        this.$emit('updateShowAddonsStatus', false);
        this.canselChanges();
      }
    },
    computed: {
      removed: function () {
        return this.removedAddons;
      }
    }
  }

</script>
<style>
  .addons-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0, .3);
    z-index: 3;
  }
  h3  {
    margin-bottom: 10px;
  }
  .addons {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 24px 24px 16px;
    z-index: 4;
    background-color: rgba(255,255,255,1);
    width: 90%;
    height: auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #70544f;
    font-size: 18px;
  }
  .removed-addons {
    color: rgba(112, 84, 79, .5);
    text-decoration: line-through;
  }
  .addon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
  }
  .add-section {
    position: relative;
    padding: 10px 0 10px 25px;
    font-weight: 500;
    font-family: Gotham Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color: #009471;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
  }
  a {
    color: inherit;
  }
  .plus {
    position: absolute;
    top: 13px;
    left: 0;
    width: 16px;
    height: 16px;
    /*border-radius: 50%;*/
    /*background-color: #009471;*/
  }
  /*.plus:before {
    content: "";
    width: 8px;
    height: 2px;
    margin-top: -1px;
    margin-left: -4px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .plus:after {
    content: "";
    width: 2px;
    height: 8px;
    margin-top: -4px;
    margin-left: -1px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
  }*/
  .action-block {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0,0,0, .2);
    padding: 10px 0 0px 0;
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
    font-size: 14px;
    font-family: Gotham Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>
