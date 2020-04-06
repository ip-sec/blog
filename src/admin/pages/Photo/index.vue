<template>
    <el-row class="photo-contain">
        <el-col :sm="24" :xs="24" :md="24" :lg="24">
            <el-tabs v-if="$store.state.admin_get.photo_class" :tab-position="$store.state.common.isTop" @tab-click="changePage">
                <el-tab-pane v-for="(item, index) in $store.state.admin_get.photo_class" :key="item.id" :label="item.name">
                    <transition-group ref="setHeight" class="setDom" tag="div" name="scaleC" mode="out-in" appear>
                        <div class="image-preview" 
                        v-for="(value,i) in $store.state.admin_get.photo[index]" 
                        @contextmenu.prevent="updateImg(value.id,$store.state.admin_get.photo[index],i)"
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
        },400),
        updateImg(id,data,index){
            let _this = this
            _this.$confirm('把它丢入回收站', '😱', {
                confirmButtonText: '丢他~',
                cancelButtonText: '留下',
                center: true
            }).then(()=>{
                _this.$store.dispatch('admin_get/delPhoto','/'+id).then(()=>{
                    data.splice(index,1)
                    _this.changePage()
                }).catch(()=>{})
            }).catch(()=>{
                _this.$message({
                    type: 'success',
                    message: '成功救下~'
                });
            })
        }
    }
}
</script>

<style lang="scss">
    .photo-contain{
        padding-top: 30px;
        .el-tab-pane{
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