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
            from.meta.index > to.meta.index ? this.$store.dispatch('common/trans','left') : this.$store.dispatch('common/trans','right')
            !from.meta.index || !to.meta.index  ? this.$store.dispatch('common/trans','left') : ''
            to.meta.title != undefined ? document.title = to.meta.title : ''
        }
    }
}
</script>

<style lang="scss">
    @import './style/body.scss';
    @import './style/vue-transition.scss';
    @import './style/element-ui.scss';
</style>