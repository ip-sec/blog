<template>
    <layout-children>
        <div style="min-height:500px">
            <el-header>
                <h2>{{ $store.state.home.children.title }}</h2>
            </el-header>
            <div class="basic-info">
                <p>发布时间：{{ $store.state.home.children.datetime }}</p>
                <p>
                    <i class="el-icon-view">&nbsp;{{ $store.state.home.children.view_num }}</i>
                    <i class="el-icon-thumb">&nbsp;{{ $store.state.home.children.like_num }}</i>
                </p>
            </div>
            <div class="content" v-html="$store.state.home.children.content">
            </div>
            <div class="like">
                <el-button icon="el-icon-thumb" circle ></el-button>
            </div>
        </div>
    </layout-children>
</template>

<script>
import layoutChildren from '@/layout/components/layoutChildren'
export default {
    name: 'diaryChildren',
    data() {
        return {
            
        }
    },
    mounted() {
        document.title = this.$store.state.home.children.title
    },
    components:{
        layoutChildren
    }
}
</script>

<style>

</style>