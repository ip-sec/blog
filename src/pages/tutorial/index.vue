<template>
    <layout-main>
        <transition name="bottomY" tag="div" mode="out-in" appear v-if="$store.state.home_get.tutorial">
            <div class="trans-top">
                <div class="tutorial-left">
                    <el-row style="min-height:400px;">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <central-slot></central-slot>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :style="{textAlign: 'center'}">
                            <el-pagination 
                            @current-change="getData(page)"
                            @prev-click="page-1"
                            @next-click="page+1"
                            :page-size="size" 
                            :current-page.sync="page"
                            layout="prev, pager, next" 
                            :total="total"></el-pagination>
                        </el-col>
                    </el-row>
                </div>
                <div class="tutorial-right hidden-sm-and-down">
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <transition name="bottomDelY" mode="out-in" appear>
                                <central-sort></central-sort>
                            </transition>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </transition>
        <div style="min-height:400px" v-else v-loading="true"></div>
    </layout-main>
</template>

<script>
import layoutMain from '@/layout/components/layoutMain'
import CentralSlot from './components/Card'
import CentralSort from './components/Sort'
export default {
    name: 'tutorial',
    data () {
        return {
            size: this.$store.state.home_get.size,
            total: this.$store.state.home_get.total,
            page: this.$store.state.home_get.page
        }
    },
    created (){
        this.$store.state.home_get.tutorial == null 
        ? this.$store.dispatch('home_get/tutorial', '').then(()=>{
            this.$nextTick(()=>{
                this.size = this.$store.state.home_get.size,
                this.total = this.$store.state.home_get.total
            })
        }).catch(()=>{}) 
        : ''
    },
    components: {
        CentralSlot,
        layoutMain,
        CentralSort
    },
    methods: {
        getData(num) {
            this.$store.dispatch('home_get/delTutorial')
            this.$store.dispatch('home_get/tutorial', '?page='+num).then(()=>{}).catch(()=>{})
        },
    }
}
</script>
    
<style lang="scss">
    .trans-top{
        transition: all .6s;
        display: flex;
        justify-content: space-between;
        .tutorial-left{
            width: 100%;
        }
        .tutorial-right{
            transition: all 0.6s;
            min-width: 270px;
            margin-left: 30px;
        }
    }
    @media screen and (max-width: 1100px){
        .tutorial-right{
            min-width: 200px !important;
        }
    }
</style>