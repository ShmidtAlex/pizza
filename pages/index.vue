<template>
  <div class="container">
    <NavBar/>
    <div class="goods">
      <PizzasList @getCartState="collapsPizzasList"/>
      <Combos />
    </div>

    <div class="hidden" :class="{'order-widget': pizzasListCollapsed }">
      <OrderWidget />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import OrderWidget from '~/components/OrderWidget/OrderWidget.vue'
import PizzasList from '~/components/PizzasList/PizzasList.vue'
import NavBar from '~/components/NavBar/NavBar.vue'
import Combos from '~/components/Combos/Combos.vue'


export default {
  components: {
    Logo,
    OrderWidget,
    PizzasList,
    NavBar,
    Combos,
  },
  data() {
    return {
      pizzasListCollapsed: false
    }
  },
  methods: {
    collapsPizzasList: function (value) {
        this.pizzasListCollapsed = true;
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  text-align: center;
  background: #f8f8f8;
}
.hidden {
  display: none;
}
.order-widget {
  position: relative;
  width: 22%;
  min-width: 380px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid;
  margin: 110px 0 0 0;
  padding-top: 50px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.goods {
  width: fit-content;
  height: fit-content;
}
@media(min-width:1585px) {
  .goods {
    width: 1300px;
  }
}
@media(max-width:1634px) {
  .goods {
     width: 970px;
  }
   
}
@media(max-width:1310px) {
  .goods {
     width: 670px;
  }
   
}
@media(max-width:1000px) {
  .goods {
     width: 300px;
  }
   
}
</style>
