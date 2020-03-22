<template>
    <div class="time-item">
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="14" :lg="14">
                <el-timeline>
                    <transition-group name="list" tag="ul" class="el-timeline">
                        <el-timeline-item v-for="item in timeData" :key="item.id" :timestamp="item.dateTime" placement="top">
                            <el-card>
                                <h4><router-link :to="'/tutorial/pages/'+item.id" tag="span" :style="{cursor: 'pointer'}">{{ item.title }}</router-link></h4>
                                <p><span>介绍: </span> {{ item.context }}</p>
                                <span class="span-right">
                                    <i class="el-icon-view">111</i>
                                    <i class="el-icon-thumb">222</i>
                                    <i class="el-icon-chat-line-square">333</i>
                                </span>
                            </el-card>
                        </el-timeline-item>
                    </transition-group>
                </el-timeline>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" v-loading="loading">
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {throttle} from '@/utils/common.js'
export default {
    name: 'tutorialCentral',
    data () {
        return {
            timeData: this.$store.state.timeData,
            loading: false
        }
    },
    mounted () {
        this.loadPhoto()
    },
    methods:{
        morePhoto () {
            this.loading = true
            const pushPhoto = { id: this.$store.state.timeData.length+1, dateTime: new Date().toLocaleDateString(), title: '发布说说', context: '这是一篇文章'}
            setTimeout(() => {
                this.loading = false
                this.timeData.push(pushPhoto)
            },1000)
        },
        getDomScroll () {
            let scrollTop = document.documentElement.scrollTop||document.body.scrollTop
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
            let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight
            Math.ceil(scrollTop + windowHeight + 1) >= scrollHeight ? this.morePhoto() : ''
        },
        loadPhoto () {
            window.onscroll = throttle(this.getDomScroll,600)
        }
    }
}
</script>

<style lang="scss">
    @import '@/style/tutorial.scss';
</style>