import {throttle} from '../common.js'
export default {
    data() {
        return {
            isFixed: false,
            setStyle: false,
        }
    },
    mounted () {
        window.addEventListener('scroll',this.watchScroll,true)
    },
    beforeDestroy(){
        window.removeEventListener('scroll',this.watchScroll,true) 
    },
    watch: {
        'isFixed':function(to,from){
            let headStyle = this.$refs.refHead.$el.style
            if(to){
                headStyle.transform = 'translateY(-101%)'
                window.addEventListener('mousewheel',this.watchMouse,true)
                || window.addEventListener("DOMMouseScroll",this.watchMouse,true)
            }else{
                headStyle.transform = 'translateY(0)'
                window.removeEventListener('mousewheel',this.watchMouse,true)
                || window.removeEventListener("DOMMouseScroll",this.watchMouse,true)
            }
        },
        'setStyle':function(to,from){
            let headStyle = this.$refs.refHead.$el.style
            if(to){
                headStyle.transform = 'translateY(0)'
            }else{
                headStyle.transform = 'translateY(-101%)'
            }
        }
    },
    methods: {
        watchScroll: throttle(function(){
            let _this = this
            if(_this.$refs.refMain){
                let domTop = _this.$refs.refMain.$el.getBoundingClientRect().top
                domTop < 0 ? _this.isFixed = true : _this.isFixed = false
            }else{
                return false
            }
        },300),
        watchMouse: throttle(function(event) {
            event = event || window.event;
            if (event.wheelDelta) { //判断浏览器IE，谷歌滑轮事件             
                if (event.wheelDelta > 0) {
                    this.setStyle = true//鼠标向上滚动
                }
                if (event.wheelDelta < 0) {
                    this.setStyle = false //鼠标向下滚动
                }
            } else if (event.detail) { //Firefox滑轮事件
                if (event.detail > 0) {
                    this.setStyle = true //鼠标向下滚动
                }
                if (event.detail < 0) {
                    this.setStyle = false //鼠标向上滚动
                }
            }
        },300)
    },
}