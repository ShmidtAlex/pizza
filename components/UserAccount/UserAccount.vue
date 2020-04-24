<template>
  <div class="user-account-wrapper">
    <div class="sign-in-block_hidden" :class="{'sign-in-block_visible': isActive}">
      <UserSignIn />
    </div>
    <div class="registration-form">
      <UserRegistrationForm />
    </div>
  </div>
</template>
<script>
  import UserSignIn from './UserSignIn.vue'
  import UserRegistrationForm from './UserRegistrationForm.vue'


  export default {
    props: ['isActive'],
    components: {
      UserSignIn,
      UserRegistrationForm,
    },
    methods: {
      // closeMenu: function(value) {
      //   console.log('in user account');
      //   this.$emit('closeMenu', value);
      // }
    }

  }
</script>
<style>
  .user-account-wrapper {
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 90px;
    right: 40px;
  }
  .sign-in-block_hidden {
    visibility: hidden;
    /*position: absolute;*/
    /*transition: visibility 1s ease-in-out;*/
    width: 350px;
    height: 350px;
    background-color: rgba(255,255,255, 1);
    border-radius: 5px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, .3);
  }
  .sign-in-block_visible {
    visibility: visible;
  }

</style>
