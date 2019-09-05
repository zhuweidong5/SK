<template>
  <div>
      <div>主页</div>
      <div></div>
      <router-link to="/product">跳到product</router-link>
      <router-link to="/user">user</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
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
