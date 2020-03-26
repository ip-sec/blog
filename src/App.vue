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
    created () {
        // if(document.getElementById('loading')){
        //     document.body.removeChild(document.getElementById('loading'))
        // }
    },
    watch:{
        '$route' : function(to, from) {
            let that = this
            from.meta.index > to.meta.index ? that.$store.state.trans = 'left' : that.$store.state.trans = 'right'
            !from.meta.index || !to.meta.index  ? that.$store.state.trans = 'left' : ''
        }
    }
}
</script>

<style lang="scss">
    @import './style/body.scss';
    @import './style/element-ui.scss';
</style>