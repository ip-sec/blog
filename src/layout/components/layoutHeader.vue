<template>
    <div class="layout-page">
        <el-row>
            <el-col :xs="14" :sm="12" :md="5" :lg="5">
                <router-link to="/tutorial" tag="div"><span class="logo">Tina Blog</span></router-link>
            </el-col>
            <el-col :xs="1" :sm="1" :md="14" :lg="14" class="hidden-sm-and-down">
                <el-menu :default-active="$route.meta.index+''" active-text-color="rgba(13,13,13)" mode="horizontal">
                    <el-menu-item v-for="(value, index) in $store.state.home.menu" :key="index" :index="value.id+''"><router-link :to="value.url" tag="span" :style="{display:'block'}"><i :class="value.icon"></i>{{value.name}}</router-link></el-menu-item>
                </el-menu>
            </el-col>
            <el-col :xs="10" :sm="12" :md="5" :lg="5">
                <div class="hidden-sm-and-down">
                    <el-button icon="el-icon-full-screen" @click="maxPage" circle></el-button>
                    <el-button icon="el-icon-date" @click="setDialogTableVisible" circle></el-button>
                    <el-button icon="el-icon-headset" @click="openAutio" circle></el-button>
                    <el-switch v-model="openPage" active-color="rgb(225,238,220)" :style="{paddingLeft:'15px'}" @change="reverseFun"></el-switch>
                </div>
                <div class="hidden-md-and-up">
                    <el-button @click="switchDrawer"><i class="el-icon-more-outline"></i></el-button>
                </div>
            </el-col>
        </el-row>
        <audio ref="myAutio">
            <source src="http://localhost:80/0/4/1.mp3" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
import {launchFullscreen,exitFullscreen} from '@/utils/common'
export default {
    name: 'layoutHeader',
    data() {
        return {
            switchAutio: false,
            openPage: this.$store.state.common.openPage,
            max: false
        }
    },
    methods:{
        setDialogTableVisible () {
            this.$store.state.common.dialogTableVisible = true
        },
        reverseFun () {
            this.$store.dispatch('common/reverseFun')
        },
        switchDrawer () {
            this.$store.state.common.drawer = !this.$store.state.common.drawer
        },
        openAutio() {
            this.switchAutio = !this.switchAutio
            this.switchAutio ? this.$refs.myAutio.play() : this.$refs.myAutio.pause()
        },
        maxPage(){
            this.max = !this.max
            this.max ? launchFullscreen() :  exitFullscreen() || ''
        }
    }
}
</script>

<style lang="scss">
.layout-page{
    .el-col{
        height: 60px;
        &:first-child{
            .logo{
                padding-left: 15px;
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                line-height: 60px;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
            }
        }
        &:last-child{
            .hidden-sm-and-down{
                @include flex-center;
                height: 100%;
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