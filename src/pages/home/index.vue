<template>
    <layout-main>
        <div class="trans-top">
            <transition name="tutorialList" appear mode="out-in">
                <el-row >
                    <central-slot></central-slot>
                </el-row>
            </transition>
            <el-row>
                <el-col :span="24" :style="{textAlign: 'center'}">
                    <el-pagination :page-size="6" :pager-count="7" layout="prev, pager, next" :total="30"></el-pagination>
                </el-col>
            </el-row>
        </div>
    </layout-main>
</template>

<script>
import layoutMain from '@/layout/components/layoutMain'
import CentralSlot from './components/Card'
export default {
    name: 'home',
    data () {
        return {
            
        }
    },
    components:{
        CentralSlot,
        layoutMain
    }
}
</script>
    
<style lang="scss">
    .trans-top{
        transform: translateY(-4%);
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