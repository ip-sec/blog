<template>
    <el-timeline>
        <transition-group name="list" tag="ul" class="el-timeline">
            <el-timeline-item v-for="item in timeData" :key="item.id" :timestamp="item.dateTime" placement="top">
                <el-card>
                    <h4><router-link :to="'/tutorial/pages/'+item.id" tag="span" :style="{cursor: 'pointer'}">{{ item.title }}</router-link></h4>
                    <p><span>介绍: </span> {{ item.context }}</p>
                    <span class="span-right">
                        <i class="el-icon-view">&nbsp;111</i>
                        <i class="el-icon-thumb">&nbsp;222</i>
                    </span>
                </el-card>
            </el-timeline-item>
        </transition-group>
    </el-timeline>
</template>

<script>
export default {
    data () {
        return {
            timeData: this.$store.state.timeData
        }
    }
}
</script>

<style lang="scss">
.el-timeline{
    .list-enter,
    .list-leave-to{
        opacity: 0;
        transform: translateX(150px);
    }
    .list-enter-active,
    .list-leave-active{
        transition: all 2s;
    }
    .el-timeline-item{
        .span-right{
            float: right;
            i{
                font-size: 13px;
                color: #444444;
            }
        }
        .el-timeline-item__tail{
            border-left-color: #E36049;
        }
        .el-timeline-item__node{
            background: #E36049;
        }
    }
}
</style>