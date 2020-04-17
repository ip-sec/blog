<template>
    <layout-main>
        <transition name="bottomY" tag="div" mode="out-in" appear  v-if="$store.state.home_get.diary">
            <div class="time-item">
                <div class="diary-left">
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <central-slot :num="dataNum"></central-slot>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" v-loading="loading">
                            {{ message }}
                        </el-col>
                    </el-row>
                </div>
                <div ref="refScroll" class="diary-right hidden-sm-and-down">
                    <el-row>
                        <el-col ref="refScrollCol" :xs="24" :sm="24" :md="24" :lg="24">
                            <transition name="bottomDelY" mode="out-in" appear>
                                <central-sort></central-sort>
                            </transition>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </transition>
        <div v-else v-loading="true" style="min-height: 400px"></div>
    </layout-main>
</template>

<script>
import layoutMain from '@/layout/components/layoutMain'
import CentralSlot from './components/about'
import CentralSort from './components/sort'
import getPageScroll from '@/utils/mixins/getPageScroll'
import getDomScroll from '@/utils/mixins/getDomScroll'
export default {
    name: 'diary',
    data () {
        return {
            loading: false,
            dataNum: 10,
            time: null,
            message: ''
        }
    },
    created (){
        this.$store.state.home_get.diary == null 
        ? this.$store.dispatch('home_get/diary', '').then(()=>{}).catch(()=>{}) 
        : ''
    },
    components:{
        CentralSlot,
        layoutMain,
        CentralSort
    },
    mixins:[getPageScroll,getDomScroll],
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
        morePhoto () {
            if(this.$store.state.home_get.diary.length > this.dataNum){
                this.loading = true
                this.message = ''
                this.time = setTimeout(() => {
                    this.dataNum += 10
                    this.loading = false
                },1000)
            }else{
                this.message = '到底了哟~'
                this.time = setTimeout(() => {
                    this.message = ''
                },1000)
            }
        }
    },
    beforeDestroy(){
        clearTimeout(this.time)
    }
}
</script>
    
<style lang="scss">
    .time-item{
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        .diary-left{
            width: 100%;
            .el-row{
                &:first-child{
                    .el-col{
                        height: auto; 
                        transition: all .6s;
                    }
                }
                &:last-child{
                    .el-col{
                        height: 60px;
                        text-align: center;
                        line-height: 60px;
                        font-size: 18px;
                        .el-loading-mask{
                            background: none;
                            .path{
                                stroke: #E36049;
                            }
                        }
                    }
                }
            }
        }
        .diary-right{
            min-width: 300px;
            margin-left: 30px;
            .el-row{
                .el-col{
                    transition: all 0.6s;
                    width: 300px;
                }
            }
        }
    }
</style>