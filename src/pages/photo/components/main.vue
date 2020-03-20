<template>
    <div class="photo-container">
        <el-row class="photo-flex">
            <el-col :xs="24" :sm="24" :md="15" :lg="15">
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
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'photoCentral',
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