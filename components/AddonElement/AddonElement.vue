<template>
  <div class="addon-element-wrapper">
    
    <div class="addons-list-elem">
      <div class="button-wrapper">
        <button @click="decrease" class="decrease-but">
          <div class="minus">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="16px" height="16px"><g><g><g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H128.043    c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#009471"/>
                </g></g></g> 
              </svg>
          </div>        
      </button>
      <img class="addon-photo" :alt="availiableAddons.name" :src="`/${availiableAddons.name}.jpg`" />
      <div class="addon-name">{{ availiableAddons.name }}</div>
      <div class="addons-list-price"> {{availiableAddons.price}}$</div>
      <div class="summ-for-one-addon-type"></div>
      <button @click="increase" class="increase-but">
        <div class="plus">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve" width="16px" height="16px" class=""><g><path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2  s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2  S39.604,28,38.5,28z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#009471"/></g> </svg>
          </div>
        </button> 
      </div>
      <div class="total-number">{{ optedAddons.number }} position<span v-if="optedAddons.number > 1">s</span></div>
      
    </div>    
  </div>
  
</template>
<script>
export default {
    props: ["availiableAddons"],
    data() {
      return {
        optedAddons: { name: null, number: 0, price: this.availiableAddons.price },
        totalNumber: 0,
      }
    },
   
    methods: {

       decrease: function(){
        if (this.optedAddons.number > 0) {
           this.optedAddons.name = this.availiableAddons.name;
           this.optedAddons.number--;
           let optedAddons = Object.assign({}, this.optedAddons);
           console.log(optedAddons);
           this.$emit('decreaseNumbers', optedAddons);
        }          
       },
       
       increase: function () {
        if (this.optedAddons.number < 3){
          this.optedAddons.name = this.availiableAddons.name;
          this.optedAddons.number++;
          let optedAddons = Object.assign({}, this.optedAddons);
           console.log(optedAddons);
          this.$emit('increaseNumbers', optedAddons);
        } else {
          //we need to show user some message about limit of addons in proper way, not with alert();
          alert('maximum addons opted');
        }
          
       },
       //it controls reset of properties from parent element
       resetValue: function() {
        this.optedAddons = { name: null, number: 0, price: this.availiableAddons.price };
        this.$emit('resetOptedAddons', this.availiableAddons);
       }

    },
    //we don't need it
    computed: {
      // computedTotalNumber: function() {
      //   return this.availiableAddons.price * this.totalNumber;
      // }
    }
  }

</script>
<style scoped>
  
  .addon-element-wrapper {
    width: 70%;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .addon-photo {
    width: 60px;
    height: 60px;
    margin-left: -15px;
  }

  .addons-list-elem,
  .button-wrapper {    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    min-width: fit-content;
    width: 300px;
    min-height: fit-content;
    height: 65px;
    margin: 0 0 0 30px;
    border: 2px solid rgba(200,200,200,0.5);
    border-radius: 5px;
  }

  .addons-list-elem {
    border: none;
    width: 100%;
  }
  .button-wrapper:active {
    border: 2px solid rgba(100,100,100, 0.5);
    border-radius: 5px;
    background-color: rgba(200,200,200,0.5);   
  }

  .decrease-but,
  .increase-but {
    border: none;
    outline: none;
    height: 98%;
  }

  
  
</style>