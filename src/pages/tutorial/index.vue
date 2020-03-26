<template>
    <layout-main>
        <div class="trans-top" v-if="$store.state.home.tutorial">
            <el-row  style="min-height:400px">
                <central-slot></central-slot>
            </el-row>
            <el-row>
                <el-col :span="24" :style="{textAlign: 'center'}">
                    <el-pagination 
                    @current-change="getData(page)"
                    @prev-click="getData(page-1)"
                    @next-click="getData(page+1)"
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
export default {
    name: 'tutorial',
    data () {
        return {
            size: 6,
            total: 6,
            page: 1
        }
    },
    created (){
        this.$store.dispatch('home/tutorial', '').then(()=>{
            this.size = this.$store.state.home.tutorial.per_page
            this.total = this.$store.state.home.tutorial.total
            this.count = Math.ceil(this.total/this.size)
        }).catch(()=>{})
    },
    components: {
        CentralSlot,
        layoutMain
    },
    methods: {
        getData(num) {
            this.$store.commit('home/DEL_TUTORIAL')
            this.$store.dispatch('home/tutorial', '?page='+num).then(()=>{}).catch(()=>{})
        },
    }
}
</script>
    
<style lang="scss">
    .trans-top{
        transform: translateY(-4%);
        transition: all .6s;
        &:last-child{
            .el-pagination{
                .btn-prev,.btn-next,li.number{
                    &:hover{
                        color: #E36049;
                    }
                }
                .active{
                    color: #E36049;
                }
            }
        }
    }
</style>