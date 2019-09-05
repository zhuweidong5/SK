<template>
  <div>
      <div>product</div>
      <router-link to="/">回到home</router-link>

  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
    }
  },
 mounted (){
     this.user()
  },
  methods:{
      user(){
          console.info(this.$route)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
