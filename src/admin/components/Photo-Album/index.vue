<template>
    <el-row class="tab-contain">
        <el-col :sm="24" :xs="24" :md="24" :lg="24">
            <el-tabs v-if="$store.state.admin_get.photo_class" :tab-position="$store.state.common.isTop" @tab-click="changePage">
                <el-tab-pane v-for="(item, index) in $store.state.admin_get.photo_class" :key="item.id" :label="item.name">
                    <transition-group ref="setHeight" class="setDom" tag="div" name="photoItem" mode="out-in" appear>
                        <div class="image-preview" 
                        v-for="value in $store.state.admin_get.photo[index]" 
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
    </el-row>
</template>

<script>
import {photoLayout} from '../../../utils/photoLayout'
import {debounce} from '../../../utils/common'
export default {
    name: 'photoAlbum',
    data(){
        return {
            
        }
    },
    created() {
        this.$store.state.admin_get.photo == null 
        ? this.$store.dispatch('admin_get/photo').then(()=>{
            this.changePage()
        }).catch(()=>{})
        : ''
    },
    mounted() {
        this.$store.state.admin_get.photo != null ? this.changePage() : ''
        window.addEventListener('resize',() => this.changePage(),false)
    },
    methods: {
        changePage: debounce(function(){
            this.$store.state.admin_get.photo.forEach((item,index)=>{
                photoLayout(item,this.$refs.setHeight[index].$children,this.$refs.setHeight[index],0.5)
            })
        },400)
    }
}
</script>

<style lang="scss">
    .tab-contain{
        padding-top: 30px;
        .el-tab-pane{
            @include vue-trans(photoItem,scale(0),0.6s);
            .setDom{
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