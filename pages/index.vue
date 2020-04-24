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
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background: #f8f8f8;
}
.hidden {
  display: none;
}
.order-widget {
  position: relative;
  width: 40%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
</style>
