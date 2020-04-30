<template>
    <div class="music" :style="{border: '1px solid ' + color}">
        <div class="title" :style="{color: color}">
            <el-avatar shape="square" icon="el-icon-headset" :size="80" :style="{border: '1px solid ' + color,color: color}" ></el-avatar>
            <span>私人FM</span>
        </div>
        <el-divider></el-divider>
        <div class="cotrol">
            <el-button ref="refPrev" @click="prev" icon="el-icon-arrow-left"  :style="{border: '1px solid ' + color,color: color}"></el-button>
            <el-button @click="play" :icon="icon"  :style="{border: '1px solid ' + color,color: color}"></el-button>
            <el-button ref="refNext" @click="next" icon="el-icon-arrow-right"  :style="{border: '1px solid ' + color,color: color}"></el-button>
        </div>
        <audio ref="refAudio" @ended="watchAudio">
            <source :src="'http://localhost:80/'+num+'.mp3'" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
import {myRandom} from '@/utils/common'
export default {
    data () {
        return {
            icon: 'el-icon-video-play',
            num: 1
        }
    },
    props: {
        color: {
            type: String ,
            default: 'white'
        }
    },
    watch: {
        'num': function(to, from){
            to == 20 ? this.$refs.refNext.$el.disabled = true : this.$refs.refNext.$el.disabled = false
            from == 1 ? this.$refs.refPrev.$el.disabled = true : this.$refs.refPrev.$el.disabled = false
        },
        '$refs.refAudio.ended': function(to, from){
            if(to){
                this.num = myRandom(1,20)
                this.$refs.refAudio.load()
                this.$refs.refAudio.play()
            }
        }
    },
    methods: {
        prev(){
            this.num == 1 ? this.$refs.refPrev.$el.disabled = true : this.num--
            this.$refs.refAudio.load()
            this.icon == 'el-icon-video-play' ?  this.icon = 'el-icon-video-pause' : ''
            this.$refs.refAudio.play()
        },
        play(){
            if(this.icon == 'el-icon-video-pause'){
                this.icon = 'el-icon-video-play'
                this.$refs.refAudio.pause()
            }else{
                this.icon = 'el-icon-video-pause'
                this.$refs.refAudio.play()
            }
        },
        next(){
            this.num == 21 ? this.$refs.refNext.$el.disabled = true : this.num++
            this.$refs.refAudio.load()
            this.icon == 'el-icon-video-play' ?  this.icon = 'el-icon-video-pause' : ''
            this.$refs.refAudio.play()
        },
        watchAudio(){
            this.num = myRandom(1,21)
            this.$refs.refAudio.load()
            this.$refs.refAudio.play()
        }
    }
}
</script>

<style lang="scss">
    .music{
        width: 95%;
        min-width: 310px;
        height: 100%;
        padding: 5px;
        margin: 5px;
        .title{
            .el-avatar{
                float: left;
                background: none !important;
            }
            span{
                &:last-child{
                    float: left;
                    display: block;
                    margin-left: 30px;
                    height: 80px;
                    line-height: 80px;
                    font-size: 22px;
                }
            }
            &::after{
                content: '';
                display: block;
                clear: both;
            }
        }
        .el-divider--horizontal{
            margin: 10px 0;
        }
        .cotrol{
            @include flex-center;
        }
    }
</style>