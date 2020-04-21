<template>
  <div class="nav-bar-container">
    <div class="logo">
      <img src="../daddy-jones.svg" alt="daddy jones logo" class="logo-daddy-jones">
    </div>
    <div v-if="showMenu" class="menu-list">
      <ul>
        <a href=""><li>Pizza</li></a>
        <a href=""><li>Combo</li></a>
        <a href=""><li>Snakes</li></a>
        <a href=""><li>Salads</li></a>
        <a href=""><li>Desserts</li></a>
        <a href=""><li>Beverages</li></a>
        <a href=""><li>Sauces</li></a>
        <a href=""><li>Hot meals</li></a>
      </ul>
    </div>
    <div v-else class="main-view">
      <div class="city_block">
        <label for="city-option">{{ City }}</label>
        <select v-model="City" name="city" id="city-option" class="region">
          <option value="Munich">Munich</option>
          <option value="Berlin">Berlin</option>
          <option value="Frankfurt">Frankfurt</option>
        </select>
      </div>

      <div class="menu-list">
        <ul>
          <a href=""><li>Menu</li></a> <!-- what anchor if we are in the other component???-->
          <a href=""><li>Promotions</li></a>
          <a href=""><li>Bonuses</li></a>
          <a href=""><li>Contact us</li></a>
        </ul>
      </div>
      <div class="phone-number">015 99-1234567</div>
    </div>
    <button @click="showMainView" class="change-navbar-appearance">Change View</button>
    <div class="language-option">
      <select name="" id="languages">
        <option value="GR">GR</option>
        <option value="ENG">ENG</option>
      </select>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showMenu: false,
        City: "Munich",
      }
    },
    methods: {
      showMainView: function() {
        this.showMenu = !this.showMenu;
        console.log("showed");
      },
      // showOptedCity: function() {
      //   console.log('worked')
      //   let selectVal = document.querySelector('city-option');
      //   console.log(selectVal.value);
      // }
    }
  }
</script>
<style scoped>
  .nav-bar-container {
    display: flex;
    width: 100%;
    height: 80px;
    border: 1px solid cornflowerblue;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: #fff;
    border-bottom: 1px solid #ededed;
  }
  .logo img {
    width: 100px;
    height: 40px;
  }
  .menu-list,
  .main-view {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #city-option {
    margin: 0 40px 0 10px;
  }
  .menu-list ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .menu-list a {
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
  }
  .menu-list li {
    list-style: none;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 700;
    color: #70544f;
    line-height: 1.33;
    height: 100%;
  }

  .language-option {
    margin: 0 35px 0 0;
  }

  .menu-list li:visited {

  }
  .change-navbar-appearance {

  }
  .phone-number {
    display: flex;
    align-items: center;
    min-width: fit-content;
    text-transform: uppercase;
    font-weight: 700;
    color: #70544f;
    line-height: 1.33;
    height: 100%;
    margin: 0 30px;
  }
</style>
