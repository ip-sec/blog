import {throttle} from '../common.js'
export default {
    data () {
        return {
            pageWidth: '',
            pageHeight: '',
            isCollapse: false,
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
            parseInt(this.pageWidth)  < 992 ? this.isCollapse = true : this.isCollapse = false
            parseInt(this.pageWidth)  < 992 ? this.headLogo = 'small-logo' : this.headLogo = 'logo'
        },
        getPageResize () {
            window.onresize = throttle(this.getPageSize,300)
        }
    }
}