<template>
    <div class="layout-head">
        <el-row>
            <el-col :xs="14" :sm="12" :md="5" :lg="5">
                <router-link to="/tutorial" tag="div"><span class="logo">Tina Blog</span></router-link>
            </el-col>
            <el-col :xs="1" :sm="1" :md="14" :lg="14" class="hidden-sm-and-down">
                <el-menu :default-active="$route.meta.index+''" active-text-color="rgba(13,13,13)" mode="horizontal">
                    <el-menu-item v-for="(value, index) in $store.state.home_get.menu" :key="index" :index="value.id+''"><router-link :to="value.url" tag="span" :style="{display:'block'}"><i :class="value.icon"></i>{{value.name}}</router-link></el-menu-item>
                </el-menu>
            </el-col>
            <el-col :xs="10" :sm="12" :md="5" :lg="5">
                <div class="hidden-sm-and-down">
                    <el-button icon="el-icon-full-screen" @click="maxPage" circle></el-button>
                    <el-button icon="el-icon-date" @click="setDialogTableVisible" circle></el-button>
                    <el-popover
                        placement="bottom-start"
                        width="362">
                        <music :color="black"></music>
                        <el-button icon="el-icon-headset" slot="reference" circle></el-button>
                    </el-popover>
                    <el-switch v-model="openPage" active-color="rgb(225,238,220)" :style="{paddingLeft:'15px'}" @change="reverse"></el-switch>
                </div>
                <div class="hidden-md-and-up">
                    <el-button @click="switchDrawer"><i class="el-icon-more-outline"></i></el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {launchFullscreen,exitFullscreen} from '@/utils/common'
import Music from '@/components/Music/index'
export default {
    name: 'layoutHeader',
    data() {
        return {
            switchAutio: false,
            openPage: this.$store.state.common.openPage,
            max: false,
            black: 'black'
        }
    },
    components:{
        Music
    },
    methods:{
        setDialogTableVisible () {
            this.$store.dispatch('common/dialog')
        },
        reverse () {
            this.$store.dispatch('common/openPage')
        },
        switchDrawer () {
            this.$store.dispatch('common/drawer',true)
            this.$store.dispatch('common/music',true)
        },
        maxPage(){
            this.max = !this.max
            this.max ? launchFullscreen() :  exitFullscreen() || ''
        }
    }
}
</script>

<style lang="scss">
.layout-head{
    .el-col{
        height: 65px;
        .el-menu-item{
            height: 64px !important;
        }
        &:first-child{
            .logo{
                padding-left: 15px;
                @include logo($weight:bold,$line:65px)
            }
        }
        &:last-child{
            .hidden-sm-and-down{
                @include flex-center;
                height: 100%;
                >span{
                    margin-left: 10px;
                }
            }
        }
        &:last-child{
            .hidden-md-and-up{
                @include flex-box(center,flex-end);
                height: 100%;
                .el-button{
                    border-width: 0px;
                    span{
                        i{
                            font-size: 30px;
                        }
                    }
                }
            }
        }  
    }
}
</style>