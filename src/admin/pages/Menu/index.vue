<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" active-text-color="#E36049" :collapse="isCollapse">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <router-link to="/systemTina" tag="span">首页</router-link>
            <span slot="title" :style="{display: isDisplay}">
                首页
            </span>
        </el-menu-item>
        <el-submenu v-for="(item,index) in $store.state.admin_get.menu" :key="item.id" :index="index + 2 + ''">
            <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.name }}</span>
            </template>
            <el-menu-item-group title="基础操作">
                <el-menu-item v-for="(value,i) in $store.state.admin_get.menu[index].child" :key="value.id" :index="(index+2)+'-'+(i+1)">
                    <router-link :to="value.url" tag="span">{{ value.name }}</router-link>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    data(){
        return{
            isDisplay: 'none'
        }
    },
    created(){
        this.isCollapse ? this.isDisplay = 'initial' : this.isDisplay = 'none'
    },
    props:{
        isCollapse:{
            type: Boolean
        }
    },
    watch:{
        'isCollapse':function(to,from){
            to ? this.isDisplay = 'initial' : this.isDisplay = 'none'
        }
    }
}
</script>

<style lang="scss">
    .el-menu{
        border-right: 0px;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>