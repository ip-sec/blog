<template>
    <layout-main>
        <div class="trans-top" v-if="$store.state.home_get.tutorial">
            <el-row style="min-height:400px;">
                <el-col :xs="24" :sm="24" :md="17" :lg="17">
                    <central-slot></central-slot>
                </el-col>
                <el-col :xs="24" :sm="24" :md="7" :lg="7" class="hidden-sm-and-down" style="paddingLeft:30px;float:right">
                    <central-sort></central-sort>
                </el-col>
                <el-col :xs="24" :sm="24" :md="18" :lg="18" :style="{textAlign: 'center'}">
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
        <div style="min-height:400px" v-else v-loading="true">

        </div>
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
    }
</style>