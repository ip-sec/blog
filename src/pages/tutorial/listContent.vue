<template>
    <layout-children>
        <div slot="content" style="min-height:500px">
            <div v-if="$store.state.home_get.children">
                <el-header>
                    <h2>{{ $store.state.home_get.children.title }}</h2>
                </el-header>
                <div class="basic-info">
                    <p>发布时间：{{ $store.state.home_get.children.datetime }}</p>
                    <p>
                        <i class="el-icon-view">&nbsp;{{ view_num }}</i>
                        <i class="el-icon-thumb">&nbsp;{{ like_num }}</i>
                    </p>
                </div>
                <article v-html="$store.state.home_get.children.html" class="markdown-body"></article>
                <div class="like">
                    <el-button @click="saveLike" icon="el-icon-thumb" circle ></el-button>
                </div>
            </div>
            <div v-else style="min-height:500px" v-loading="true"></div>
        </div>
        <div slot="card">
            <el-card shadow="hover" v-if="$store.state.home_get.tutorialAbout">
                <div slot="header" class="clearfix">
                    <span>最新发布</span>
                </div>
                <div class="sort_li">
                    <ul class="item">
                        <li v-for="value in sortTimeData" :key="value.id" >
                            <router-link :to="'/tutorial/pages/'+value.id" tag="span" @click.native="resetPage(value.id)">
                                &nbsp;<i class="el-icon-time"></i>&nbsp;{{ value.datetime }}&nbsp;{{ value.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </el-card>
        </div>
    </layout-children>
</template>

<script>
import layoutChildren from '@/layout/components/layoutChildren'
import {throttleTwo} from '@/utils/common'
export default {
    name: 'tutorialChildren',
    data() {
        return {
            view_num: 0,
            like_num: 0,
            timeData: null,
        }
    },
    created() {
        let _this = this
        _this.$store.state.home_get.tutorial == null 
        ? _this.$store.dispatch('home_get/tutorial', '').then(()=>{
            _this.timeData = _this.$store.state.home_get.tutorialAbout.concat()
        }).catch(()=>{}) 
        : ''
        _this.$store.dispatch('home_get/tutorial', '/'+_this.$route.params.id ).then(()=>{
            document.title = _this.$store.state.home_get.children.title
            _this.timeData = _this.$store.state.home_get.tutorialAbout.concat()
            _this.view_num = _this.$store.state.home_get.children.view_num + 1
            _this.like_num = _this.$store.state.home_get.children.like_num
        }).catch(()=>{})
        _this.$store.dispatch('home_post/updateTutorial', { id: '/'+_this.$route.params.id , view_num: '0' } ).then(()=>{}).catch(()=>{})
    },
    components:{
        layoutChildren
    },
    computed:{
        sortTimeData:function(){
            if(this.timeData != null){
                return this.timeData.sort((a,b)=>{
                    return new Date(b['datetime']).getTime() - new Date(a['datetime']).getTime()
                }).slice(0,10)
            }
        },
    },
    methods: {
        resetPage(data){
            let _this = this
            _this.$store.dispatch('home_get/delChildren').then(()=>{
                _this.$store.dispatch('home_get/tutorial', '/'+data ).then(()=>{
                    document.title = _this.$store.state.home_get.children.title
                    _this.view_num = _this.$store.state.home_get.children.view_num + 1
                    _this.like_num = _this.$store.state.home_get.children.like_num
                }).catch(()=>{})
                _this.$store.dispatch('home_post/updateTutorial', { id: '/'+_this.$route.params.id , view_num: '0' } ).then(()=>{}).catch(()=>{})
            }).catch(()=>{})
        },
        saveLike:throttleTwo(function() {
            this.$store.dispatch('home_post/updateTutorial', { id: '/'+this.$route.params.id , like_num: '0' } ).then(()=>{
                this.like_num ++
            }).catch(()=>{})},1000)
            
    }
}
</script>

<style lang='scss'>

</style>