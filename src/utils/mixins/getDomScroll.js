export default {
    data() {
        return {
            isFixed: false
        }
    },
    mounted() {
        window.addEventListener('scroll',this.getDomScroll,true)
    },
    beforeDestroy () {
        window.removeEventListener('scroll',this.getDomScroll,true)
    },
    watch: {
        'isFixed':function(to,from){
            let _this = this
            let domStyle =  _this.$refs['refScrollCol'].$el.style
            if(to){
                domStyle.position = 'fixed'
                domStyle.top = '20px'
            }else{
                domStyle.position = ''
                domStyle.top = ''
            }
        }
    }
}