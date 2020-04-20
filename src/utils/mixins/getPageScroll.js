import {debounce} from '@/utils/common.js'
export default {
    mounted() {
        this.loadPhoto()
    },
    beforeDestroy () {
        window.removeEventListener('scroll',this.getPageScroll,true)
    },
    methods: {
        getPageScroll: debounce(function () {
            let scrollTop = document.documentElement.scrollTop||document.body.scrollTop
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
            let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight
            Math.ceil(scrollTop + windowHeight + 1) >= scrollHeight ? this.morePhoto() : ''
        },300),
        loadPhoto () {
            window.addEventListener('scroll',this.getPageScroll,true)
        }
    }
}