<template>
    <layout-main>
        <div class="content-page">
            <div class="content-left">
                <transition name="bottomY" mode="out-in" appear>
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <slot name="content"></slot>
                        </el-col>
                    </el-row>
                </transition>
            </div>
            <div ref="refScroll" class="content-right hidden-sm-and-down">
                    <el-row>
                        <el-col ref="refScrollCol" :xs="24" :sm="24" :md="22" :lg="22">
                            
                <transition name="bottomDelY" mode="out-in" appear>
                            <slot name="card"></slot>
                </transition>
                        </el-col>
                    </el-row>
            </div>
        </div>
    </layout-main>
</template>

<script>
import layoutMain from './layoutMain'
import getDomScroll from '@/utils/mixins/getDomScroll'
export default {
    name: 'layoutChildren',
    data() {
        return {
        }
    },
    destroyed() {
        this.$store.dispatch('home_get/delChildren')
    },
    components:{
        layoutMain
    },
    mixins:[getDomScroll],
    methods:{
        getDomScroll () {
            let _this = this
            if(_this.$refs.refScroll !== undefined){
                let domTop = _this.$refs.refScroll.getBoundingClientRect().top
                domTop < 0 ? _this.isFixed = true : _this.isFixed = false
            }else{
                return false
            }
        },
    }
}
</script>

<style lang="scss">
    @import 'github-markdown-css/github-markdown.css';
    @import '../../style/children.scss';
</style>