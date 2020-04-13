<template>
    <layout-children>
        <div style="min-height:500px">
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
        }
    },
    created() {
        this.$store.dispatch('home_get/tutorial', '/'+this.$route.params.id ).then(()=>{
            document.title = this.$store.state.home_get.children.title
        }).catch(()=>{})
        this.$store.dispatch('home_post/updateTutorial', { id: '/'+this.$route.params.id , view_num: '0' } ).then(()=>{
            this.view_num = this.$store.state.home_get.children.view_num + 1
            this.like_num = this.$store.state.home_get.children.like_num
        }).catch(()=>{})
    },
    components:{
        layoutChildren
    },
    methods: {
        saveLike:throttleTwo(function() {
            this.$store.dispatch('home_post/updateTutorial', { id: '/'+this.$route.params.id , like_num: '0' } ).then(()=>{
                this.like_num ++
            }).catch(()=>{})},1000)
            
    }
}
</script>

<style lang='scss'>
    @import 'github-markdown-css/github-markdown.css';
</style>