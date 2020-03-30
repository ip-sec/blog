<template>
    <el-col :xs="20" :sm="20" :md="20" :lg="20">
        <el-tabs v-if="data" tab-position="top">
            <el-tab-pane ref="setHeight" v-for="(item, index) in $store.state.home_get.photo_class" :key="item.id" :label="item.name">
                <transition-group ref="getHeight" class="getDom" tag="div" name="photoList" mode="out-in" appear>
                    <div class="image-preview" 
                    v-for="value in $store.state.home_get.photo[index]" 
                    :key="value.id"
                    :style="{height: value.height+'px',width: value.width+'px',top: value.top+'px',left: value.left+'px'}">
                        <el-image
                        :src="value.url"
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
            data: null,
            name: 'left'
        }
    },
    created() {
        this.$store.state.home_get.photo == null 
        ? this.$store.dispatch('home_get/photo').then(()=>{
            console.log(this.$store.state.home_get.photo)
        }).catch(()=>{})
        : ''
    },
    mounted(){
        window.onresize = () => {
            this.site()
        }
    },
    methods:{
        watchPage:debounce(function(){
            this.site()
        },300),
        site(){
            this.$store.state.home_get.photo.forEach((item,index)=>{
                photoLayout(item)
            })
        }
    }
}
</script>

<style lang="scss">
    .el-tabs{
        @include vue-trans(photoList,scale(0),0.6s);
        .el-tab-pane{
            .getDom{
                position: relative;
                width: 100%;
                min-height: 2000px;
                overflow: hidden;
                .image-preview{
                    position: absolute;
                    transition: all 0.6s;
                }
            }
        }
    } 
</style>