import {debounce} from '@/utils/common.js'
export default {
    mounted() {
        this.loadPhoto()
    },
    beforeDestroy () {
        window.onresize = null
    },
    methods: {
        getDomScroll () {
            let scrollTop = document.documentElement.scrollTop||document.body.scrollTop
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
            let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight
            Math.ceil(scrollTop + windowHeight + 1) >= scrollHeight ? this.morePhoto() : ''
        },
        loadPhoto () {
            window.onscroll = debounce(this.getDomScroll,300)
        }
    }
}