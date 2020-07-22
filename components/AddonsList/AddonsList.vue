<template>
  <div class="addons-options-wrapper">
    <div class="addons-body">
      <div class="addons-list" >
        <div v-for="addon in availiableAddons" class="addons-list-elem">
          {{ addon }} 
          <div class="addons-list-price">2$</div>
        </div>       
      </div>
      <div @click="closeAddons()" class="remove-button" >
        <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14">
          <path fill="currentColor" fill-rule="evenodd"
                d="M8.41 7l4.95 4.95-1.41 1.41L7 8.41l-4.95 4.95-1.41-1.41L5.59 7 .64 2.05 2.05.64 7 5.59 11.95.64l1.41 1.41L8.41 7z"></path>
        </svg>
      </div>
    </div>
      
    <button class="apply-button">Apply</button>
  </div>
  
</template>
<script>
  export default {
    props: ["addonsList"],
    data() {
      return {
        availiableAddons: this.addonsList,
        optedAddons: []
      }
    },
    // mounted() {
    //   this.localAddons = this.addons;
    // },
    methods: {
        closeAddons: function() {
          this.$emit('closeAddonsList', false);
        }
    
    },
    computed: {
    //   removed: function () {
    //     return this.removedAddons;
    //   }
    }
  }
</script>
<style scoped>
  .addons-options-wrapper {
    width: 62%;
    height: 600px;
    background-color: white;
    box-shadow: 10px 10px 10px 10px rgba(100,100,100,.5);
    position: fixed;
    top: 20%;
    left: 19%;
    z-index: 4;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  }
 
  .addons-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }

  .addons-list {
    width: 1000px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
  
  .addons-list-elem {    
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: 40px;
  }

  .remove-button {
    margin: 20px;
    width: 30px;
    height: 30px;
    background-color: darkred;
    border-radius: 50%;
    padding: 6px;
  }

  .apply-button {

  }
</style>
