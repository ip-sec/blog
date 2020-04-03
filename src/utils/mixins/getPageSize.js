import {debounce} from '../common.js'
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
        window.onresize = null
    },
    methods:{
        getPageSize () {
            let width = window.innerWidth
            let height = window.innerHeight
            this.pageWidth = width + 'px'
            this.pageHeight = height + 'px'
            parseInt(this.pageWidth)  < 992 ? this.isCollapse = true : this.isCollapse = false
            parseInt(this.pageWidth)  < 992 ? this.headLogo = 'small-logo' : this.headLogo = 'logo'
            this.isCollapse ? this.$store.dispatch('common/isTop','top') : this.$store.dispatch('common/isTop','right')
        },
        getPageResize () {
            window.onresize = debounce(this.getPageSize,300)
        }
    }
}