<template>
  <div class="container">
    <NavBar/>
    <OrderWidget/>
    <PizzasList/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import OrderWidget from '~/components/OrderWidget/OrderWidget.vue'
import PizzasList from '~/components/PizzasList/PizzasList.vue'
import NavBar from '~/components/NavBar/NavBar.vue'



export default {
  components: {
    Logo,
    OrderWidget,
    PizzasList,
    NavBar,
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
</style>
