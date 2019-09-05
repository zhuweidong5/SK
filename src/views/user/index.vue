<template>
  <div>
    <div>user公共的头部</div>
    <router-view ></router-view>
    <br>
    <br>
    <!-- link直接跳转 -->
    <!-- <router-link to="/user/foo">user/foo</router-link> -->

     <!-- link直接跳转用name -->
    <router-link :to="{name:'foo'}">user/foo(link)</router-link>

    <!-- push带参数跳转 -->
    <div @click="gofoo()">user/foo</div>
    <br>
    <br>
    <router-link to="/user/pos">user/pos</router-link>
  </div>
</template>

<script>
export default {
    name: 'user',
    data(){
        return{
            userid:'12345',
            username:'tom',
        }
    },
    methods:{

        // push带参数跳转
        gofoo(){
            this.$router.push({ name: 'foo',  params: { 
                                    userId:this.userid,
                                    username :this.username
                                }
                            })
        }
    }


}
</script>

<style>

</style>
