<template>
    <div>
        <div>foo页面</div>
    </div>
</template>

<script>
export default {
    name: '',
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

<style scoped>

</style>
