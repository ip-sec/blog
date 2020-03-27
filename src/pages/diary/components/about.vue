<template>
    <el-timeline>
        <transition-group name="list" tag="ul" class="el-timeline">
            <el-timeline-item v-for="item in $store.state.home_get.diary" :key="item.id" :timestamp="item.datetime" placement="top">
                <router-link :to="'/diary/pages/'+item.id" tag="div" :style="{cursor: 'pointer'}">
                    <el-card>
                        <h4>{{ item.title }}</h4>
                        <p><span>介绍: </span> {{ item.introduction }}</p>
                        <span class="span-right">
                            <i class="el-icon-view">&nbsp;{{ item.view_num }}</i>
                            <i class="el-icon-thumb">&nbsp;{{ item.like_num }}</i>
                        </span>
                    </el-card>
                </router-link>
            </el-timeline-item>
        </transition-group>
    </el-timeline>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    created (){
        this.$store.state.home_get.diary == null 
        ? this.$store.dispatch('home_get/diary', '').then(()=>{}).catch(()=>{}) 
        : ''
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