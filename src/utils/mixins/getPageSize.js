import {throttleTwo} from '../common.js'
export default {
    data () {
        return {
            pageWidth: '',
            pageHeight: '',
        }
    },
    mounted () {
        this.getPageSize()
        this.getPageResize()
    },
    beforeDestroy () {
        window.removeEventListener('resize',this.getPageSize,true)
    },
    methods:{
        getPageSize: throttleTwo(function () {
            let width = window.innerWidth
            let height = window.innerHeight
            this.pageWidth = width + 'px'
            this.pageHeight = height + 'px'
        },300),
        getPageResize () {
            window.addEventListener('resize',this.getPageSize,true)
        }
    }
}