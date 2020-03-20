<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {

        }
    },
    // created () {
    //     if(document.getElementById('loading')){
    //         document.body.removeChild(document.getElementById('loading'))
    //     }
    // },
    watch:{
        '$route' : function(to, from) {
            let that = this
            that.$store.state.isPageNum = from.meta.index
            that.$store.state.activeIndex = to.meta.index + ''
            that.$store.state.isPageNum > that.$store.state.activeIndex ? that.$store.state.trans = 'left' : that.$store.state.trans = 'right'
            !that.$store.state.isPageNum || !that.$store.state.activeIndex  ? that.$store.state.trans = 'left' : ''
        }
    }
}
</script>

<style lang="scss">
    @import './style/body.scss';
</style>