import {throttle} from '@/utils/common.js'
export default {
    data() {
        return {
            isFixed: false
        }
    },
    mounted() {
        window.addEventListener('scroll',throttle(this.getDomScroll,100),false)
    },
    beforeDestroy () {
        window.removeEventListener('scroll',throttle(this.getDomScroll,100),false)
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