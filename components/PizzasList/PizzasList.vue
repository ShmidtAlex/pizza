<template>
  <div id="pizzas" class="pizzas-list-container" :class="{'pizzas-list-container_collapsed': collapsed}">
    <div @click="initializePizzaUnitStore(pizza.name)" class="pizza-sort" v-for="(pizza, indexPizza) in pizzaList">
      <PizzaUnit :name="pizza.name"
                 :addons="pizza.addons"
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
  let pizzasData = [
    {
      name: 'Italian with mozzarella and pepperoni',
      addons: [
        { name: 'mushrooms', price: 0.5 },
        { name: 'pepperoni', price: 1 },
        { name: 'mozzarella', price: 0.75 } 
      ],
      description: 'Traditional Italian recipe with two types of cheese: grated Mozzarella and classic chillegini; spicy pepperoni, mushrooms and blend of seasonings',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 13, fats: 9, carbohydrates: 37, energy: [280, 1170]
      },
      types: { default: 'Traditional', thin: 'Thin'},
      sizes: { default: 23, mid: 30, midPlus: 35, large: 40 },
      prices: { default: 5, mid: 7, midPlus: 8.5, large: 10.5 },
      imgSrc: '/italian-mozzarela-pepperoni.jpg'
    },
    {
      name: 'Lent Bruschetta',
      addons: '',
      description: 'Large bruschetta with fresh vegetables: tomatoes, sweet peppers, olives, onions, garlic and green basil on a crispy dough',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 13, fats: 9, carbohydrates: 37, energy: [280, 1170]
      },
      types: { default: 'Thin' },
      sizes: { default: 35 },
      prices: { default: 7.5 },
      imgSrc: '/brusketa.jpg'
    },
    {
      name: 'Pizza with red fish',
      addons: [
        { name: 'tomatoes', price: 0.5 },
        { name: 'mozzarella', price: 0.75 } 
      ],
      description: 'The long-awaited pizza! Fresh taste! Bold mix of salmon fish with mozzarella cheese, cream cheese and tomatoes',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 14, fats: 10, carbohydrates: 42, energy: [310, 1300]
      },
      types: { default: 'Traditional', thin: 'Thin'},
      sizes: { default: 30, midPlus: 35 },
      prices: { default:  10, large: 12 },
      imgSrc: '/red-fish.jpg'
    },
    {
      name: 'Chicken blue cheese',
      addons: [
        { name: 'chicken breast', price: 1 }
      ],
      description: 'Perfect combination: tender chicken fillet with blue cheese crumbles, Parmeggiano sauce, mix of Italian cheeses and Mozzarella cheese.',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 13, fats: 13, carbohydrates: 36, energy: [310, 1300]
      },
      types: { default: 'Traditional', thin: 'Thin'},
      sizes: { default: 23, mid: 30, midPlus: 35, large: 40 },
      prices: { default:  5, mid: 7, midPlus: 9, large: 11 },
      imgSrc: '/chicken-blue-cheese.png'
    },
    {
      name: 'Favorite Carbonara',
      addons: ['tomatoes', 'onion', 'bacon', 'mozzarella'],
      addons: [
        { name: 'tomatoes', price: 0.5 },
        { name: 'onion', price: 0.5 },
        { name: 'bacon', price: 1 },
        { name: 'mozzarella', price: 0.75 } 
      ],
      description: 'Classic favorite recipe: crispy bacon, cream cheese, juicy tomatoes, onions, Mozzarella and Italian herbs blend.\n',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 11, fats: 8, carbohydrates: 35, energy: [260, 1090]
      },
      types: { default: 'Traditional', thin: 'Thin'},
      sizes: { default: 23, mid: 30, midPlus: 35, large: 40 },
      prices: { default:  5, mid: 7, midPlus: 9, large: 11 },
      imgSrc: '/carbonara.png'
    },
    {
      name: 'Chicken BBQ',
      addons: [
        { name: 'chicken breast', price: 1 },
        { name: 'onion', price: 0.5 },
        { name: 'bacon', price: 1 },
        { name: 'mozzarella', price: 0.75 } 
      ],
      description: 'Juicy chicken fillet and crispy bacon combined with signature tomato sauce, Mozzarella and onion.',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 11, fats: 7, carbohydrates: 37, energy: [260, 1090]
      },      types: { default: 'Traditional', thin: 'Thin'},
      sizes: { default: 23, mid: 30, midPlus: 35, large: 40 },
      prices: { default:  5, mid: 7, midPlus: 9, large: 11 },
      imgSrc: '/Chicken-BBQ-traditional.jpg'
    },
    {
      name: 'Pepperoni',
      addons: [
        { name: 'pepperoni', price: 1 },
        { name: 'mozzarella', price: 0.75 } 
      ],
      description: 'American classic with spicy pepperoni, Mozzarella and signature tomato sauce.',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 15, fats: 12, carbohydrates: 43, energy: [340, 1470]
      },
      types: { default: 'Traditional', thin: 'Thin'},
      sizes: { default: 23, mid: 30, midPlus: 35, large: 40 },
      prices: { default:  5, mid: 7, midPlus: 9, large: 11 },
      imgSrc: '/Pepperoni-traditional.jpg'
    },
    {
      name: 'Margherita',
      addons: ['oregano', 'tomatoes', 'mozzarella'],
      addons: [
        { name: 'oregano', price: 0.5 },
        { name: 'tomatoes', price: 0.5 },
        { name: 'mozzarella', price: 0.75 } 
      ],
      description: 'Traditional recipe with signature tomato sauce, Mozzarella, oregano and juicy tomatoes.',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 13, fats: 9, carbohydrates: 37, energy: [280, 1170]
      },
      types: { default: 'Traditional', thin: 'Thin'},
      sizes: { default: 23, mid: 30, midPlus: 35, large: 40 },
      prices: { default:  4.5, mid: 6, midPlus: 8, large: 10.5 },
      imgSrc: '/Margherita-traditional.jpg'
    },
    {
      name: 'Hawaiian',
      addons: ['ham', 'pineapples', 'mozzarella'],
      addons: [
        { name: 'ham', price: 1 },
        { name: 'pineapples', price: 1 },
        { name: 'mozzarella', price: 0.75 } 
      ],
      description: 'Tropical classic with flavorful ham, tomato sauce and Mozzarella combined with pineapple bits.',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 11, fats: 6, carbohydrates: 39, energy: [250, 1070]
      },
      types: { default: 'Traditional', thin: 'Thin'},
      sizes: { default: 23, mid: 30, midPlus: 35, large: 40 },
      prices: { default:  5, mid: 7, midPlus: 9, large: 11 },
      imgSrc: '/Hawai-traditional.jpg'
    }
  ]

  import PizzaUnit from '../PizzaUnit/PizzaUnit.vue';
  import { mapMutations } from 'vuex';
  export default {
    components: {
      PizzaUnit,
    },

    data() {
      return {
        pizzaList: pizzasData,
        collapsed: false,
      }
    },
    
    methods: {
      collapsePizzasListSection: function(value) {
        this.collapsed = value;
        this.$emit('getCartState', true)
      },
      initializePizzaUnitStore: function(name) {
        let runningName = this.$store.state.pizzaUnit.pizzaUnit.pizzaName;
        this.$refs.PizzaUnit.forEach(elem => {
          if (elem.defaultObject.pizzaName === name && runningName !== name) {
             elem.initializePizzaUnit();
          } else {
            return;
          }         
        })
      }
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
