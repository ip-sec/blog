<template>
    <el-tabs tab-position="top" style="height: auto;">
        <el-tab-pane label="头像集">
            <div class="image-preview" v-for="item in imgData" :key="item.id">
                <el-image 
                style="width: 147px"
                :src="item.url"  
                :preview-src-list="item.srcList"
                >
                </el-image>
            </div>
        </el-tab-pane>
        <el-tab-pane label="背景集">
            <div class="image-preview" v-for="item in imgData" :key="item.id">
                <el-image 
                style="width: 147px"
                :src="item.url"  
                :preview-src-list="item.srcList"
                >
                </el-image>
            </div>
        </el-tab-pane>
        <el-tab-pane label="壁纸集">
            <div class="image-preview" v-for="item in imgData" :key="item.id">
                <el-image 
                style="width: 147px"
                :src="item.url"  
                :preview-src-list="item.srcList"
                >
                </el-image>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    data () {
        return {
            imgData: this.$store.state.imgData,
            name: 'left'
        }
    }
}
</script>

<style lang="scss">
    @import '@/style/photo.scss';
</style>