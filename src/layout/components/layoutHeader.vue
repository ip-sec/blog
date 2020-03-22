<template>
    <div class="layout-page">
        <el-row>
            <el-col :xs="14" :sm="12" :md="5" :lg="5">
                <router-link to="/home" tag="div"><span class="logo">Tina Blog</span></router-link>
            </el-col>
            <el-col :xs="1" :sm="1" :md="14" :lg="14" class="hidden-sm-and-down">
                <el-menu :default-active="$store.state.activeIndex" active-text-color="rgba(13,13,13)" mode="horizontal">
                    <el-menu-item v-for="(value, index) in $store.state.menu" :key="index" :index="value.key+''"><router-link :to="value.linkto" tag="span" :style="{display:'block'}">{{value.name}}</router-link></el-menu-item>
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
            <source src="@/assets/mp3/1.mp3" type="audio/mpeg">
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
            openPage: this.$store.state.openPage,
            max: false
        }
    },
    methods:{
        setDialogTableVisible () {
            this.$store.state.dialogTableVisible = true
        },
        reverseFun () {
            this.$store.dispatch('reverseFun')
        },
        switchDrawer () {
            this.$store.state.drawer = !this.$store.state.drawer
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
    @import '@/style/layout/header.scss';
</style>