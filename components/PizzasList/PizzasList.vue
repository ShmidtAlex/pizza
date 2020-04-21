<template>
  <div class="pizzas-list-container" :class="{'pizzas-list-container_collapsed': collapsed}">
    <div class="pizza-sort" v-for="pizza in pizzaList">
      <PizzaUnit :name="pizza.name"
                 :addons="pizza.addons"
                 :description="pizza.description"
                 :nutrition="pizza.nutrition"
                 :pastryType="pizza.types"
                 :sizes="pizza.sizes"
                 :prices="pizza.prices"
                 :img="pizza.imgSrc"
                 @collapseSection="collapsePizzasListSection"
      />
    </div>
  </div>
</template>
<script>
  let pizzasData = [
    {
      name: 'Italian with mozzarella and pepperoni',
      addons: ['mushrooms', 'pepperoni', 'mozzarella'],
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
      addons: ['tomatoes', 'mozzarella'],
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
      addons: ['chicken breast'],
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
      description: 'Classic favorite recipe: crispy bacon, cream cheese, juicy tomatoes, onions, Mozzarella and Italian herbs blend.\n',
      nutrition: {
        title: 'Nutrition information per 100g', protein: 11, fats: 8, carbohydrates: 35, energy: [260, 1090]
      },      types: { default: 'Traditional', thin: 'Thin'},
      sizes: { default: 23, mid: 30, midPlus: 35, large: 40 },
      prices: { default:  5, mid: 7, midPlus: 9, large: 11 },
      imgSrc: '/carbonara.png'
    },
    {
      name: 'Chicken BBQ',
      addons: ['onions', 'bacon', 'mozzarella', 'chicken breast'],
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
      addons: ['pepperoni', 'mozzarella'],
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
        console.log(value);
        this.collapsed = value;
      }
    }
  }
</script>
<style scoped>
  .pizzas-list-container {
    width: 100%;
    height: 100%;
    min-height: fit-content;
    border: 1px solid pink;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 100px;
  }
  .pizzas-list-container_collapsed {
      width: 60%;
  }
  .pizza-sort {
    margin: 10px 0 0 0;
  }
</style>
