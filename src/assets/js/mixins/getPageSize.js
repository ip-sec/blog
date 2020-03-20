import {throttle} from '../common.js'
export default {
    data () {
        return {
            pageWidth: '',
            pageHeight: ''
        }
    },
    mounted () {
        this.getPageSize()
        this.getPageResize()
    },
    methods:{
        getPageSize () {
            let width = window.innerWidth
            let height = window.innerHeight
            this.pageWidth = width + 'px'
            this.pageHeight = height + 'px'
        },
        getPageResize () {
            window.onresize = throttle(this.getPageSize,600)
        }
    }
}