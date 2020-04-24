<template>
  <div id="combos" class="combos-list-container" :class="{'combos-list-container_collapsed': collapsed}">
    <div class="combos-sort">
     <div class="combosSection"> combos section
       <div class="comboItem" v-for="(combo, index) in 5">some combo {{index}}</div>
     </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false
      }
    }
  }
</script>
<style>
  #combos {
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .combos-sort,
  .combosSection {
    display: flex;
    width: 100%;
  }
  .comboItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }
</style>
