<template>
  <div id="pizzas" class="pizzas-list-container" :class="{'pizzas-list-container_collapsed': collapsed}">
    <!-- @click="initializePizzaUnitStore(pizza.name)" -->
    <div  class="pizza-sort" v-for="(pizza, indexPizza) in pizzaList">
      <PizzaUnit :name="pizza.name"
                 :possibleAddons="pizza.addons"
                 :description="pizza.description"
                 :nutrition="pizza.nutrition"
                 :pastryType="pizza.types"
                 :sizes="pizza.sizes"
                 :prices="pizza.prices"
                 :img="pizza.imgSrc"
                 :index="indexPizza"
                 ref="PizzaUnit"
                 @collapseSection="collapsePizzasListSection"
      />
    </div>
    
  </div>
</template>
<script>
  
  import PizzaUnit from '../PizzaUnit/PizzaUnit.vue';
  import { mapMutations } from 'vuex';
  import { mapGetters } from 'vuex';
  export default {
    components: {
      PizzaUnit,
    },
    data() {
      return {
        collapsed: false
      }
    },
    
   mounted() {
    this.$store.dispatch('pizzaUnit/getAvailablePizzas');
   },

    methods: {
      collapsePizzasListSection: function(value) {
        this.collapsed = value;
        this.$emit('getCartState', true)
      },
    },
    computed: {
        ...mapGetters({
        pizzaList: 'pizzaUnit/availablePizzasList'
      })
    }
  }
</script>
<style scoped>
  .pizzas-list-container {
    width: 100%;
    height: 100%;
    min-height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-top: 100px;
  }
  .pizzas-list-container_collapsed {
      max-width: 1795px;
  }
  .pizza-sort {
    margin: 10px 10px 0 10px;
  }
  @media(max-width:1585px) {
    .pizza-sort {
      margin: 10px 10px 0 0;
    }
    .pizzas-list-container_collapsed {
      max-width: 1295px;
    }
  }
 
</style>
