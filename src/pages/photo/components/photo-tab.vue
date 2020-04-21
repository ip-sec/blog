<template>
    <el-col ref="getHeightCol" :xs="24" :sm="24" :md="24" :lg="24">
        <el-tabs v-if="this.$store.state.home_get.photo" tab-position="top" @tab-click="watchPage">
            <el-tab-pane v-for="(item, index) in $store.state.home_get.photo_class" :key="item.id" :label="item.name">
                <transition-group ref="getHeight" class="getDom" tag="div" name="scaleC" mode="out-in" appear>
                    <div class="image-preview" 
                    v-for="value in $store.state.home_get.photo[index]" 
                    :key="value.id"
                    :style="{height: value.height+'px',left: value.left+'px',top: value.top+'px',}">
                        <el-image
                        :src="value.url"
                        :preview-src-list="[value.url]"
                        ></el-image>
                    </div>
                </transition-group>
            </el-tab-pane>
        </el-tabs>
        <div v-else v-loading="true"></div>
    </el-col>
</template>

<script>
import {photoLayout} from '../../../utils/photoLayout'
import {debounce} from '../../../utils/common'
export default {
    data () {
        return {
            clickTab: false,
            dialogVisible: false,
            showImage: ''
        }
    },
    created() {
        this.$store.state.home_get.photo == null 
        ? this.$store.dispatch('home_get/photo').then(()=>{
            this.watchPage()
        }).catch(()=>{})
        : ''
    },
    mounted() {
        this.$store.state.home_get.photo != null ? this.watchPage() : ''
        window.addEventListener('resize',this.watchPage(), true)
    },
    beforeDestroy(){
        window.removeEventListener('resize',this.watchPage(), true)
    },
    methods: {
        watchPage: debounce(function(){
            if(this.$store.state.home_get.photo){
                this.$store.state.home_get.photo.forEach((item,index)=>{
                    if(this.$refs.getHeight[index] != undefined){
                        photoLayout(
                            item,
                            this.$refs.getHeight[index].$children,
                            this.$refs.getHeight[index],
                            this.$refs.getHeightCol.$el.offsetWidth-30
                        )
                    }
                })
            }
        },400)
    }
}
</script>

<style lang="scss">
    .el-tabs{
        .el-tab-pane{
            .getDom{
                position: relative;
                width: 100%;
                min-height: 400px;
                overflow: hidden;
                transition: all 1s;
                .image-preview{
                    position: absolute;
                    transition: all 0.6s;
                }
            }
        }
    } 
</style>