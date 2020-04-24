<template>
  <div class="user-sign-in">
    <form action="" >
      <div class="phone">
        <label for="phone">Telephone</label>
        <input id="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
               required/>
      </div>
      <div class="password">
        <label for="password">Password</label>
        <input id="password" @change.stop type="password"/>
      </div>
      <div class="action-section">
        <button type="button" class="sign-out">Sign Out</button>
        <button type="submit" class="sign-in">Sign In</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {}

    },
    methods: {
      // closeMenu: function() {
      //   console.log('in user sign in')
      //   this.$emit('closeMenu', false)
      // }

    }
  }
</script>
<style scoped>
  .user-sign-in {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .phone, .password, .action-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    align-items: center;
    height: 30%;
  }
  .action-section {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 30%;
  }
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 80%;
    height: 40px;
    border-radius: 5px;
    margin: 10px 0 0 0;
    padding: 0 0 0 10px;
    outline: none;
  }
  button {
    outline: none;
  }
  button[type="submit"] {
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
  /*label {*/
  /*  color: #006d54;*/
  /*}*/
</style>
