<template>
        <transition-group 
        name="cardItem" 
        tag="div" 
        class="el-col el-col-24 el-col-offset-1 el-col-xs-22 el-col-sm-22 el-col-md-22 el-col-lg-22"
        appear
        mode="out-in">
            <el-card :body-style="{ padding: '0px' }"  v-for="item in $store.state.home_get.tutorial.data" :key="item.id"  shadow="hover">
                <div slot="header">
                    <el-image :src="item.url" fit="fill">
                        <div slot="placeholder" class="image-slot">
                            <img :src="loadingImg" alt="">
                        </div>
                    </el-image>
                    <span class="span-right">
                        <i class="el-icon-view">&nbsp;{{ item.view_num }}</i>
                        <i class="el-icon-thumb">&nbsp;{{ item.like_num }}</i>
                    </span>
                    <div class="tag_li" :style="{background: item.bg}">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
                <router-link :to="'/tutorial/pages/'+item.id" tag="div">
                    <div class="imgInfo">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.datetime }}</p>
                        <div class="item-font">
                            <p>{{ item.introduction }}</p>
                        </div>
                    </div>
                </router-link>
            </el-card>
        </transition-group>
</template>

<script>
export default {
    data() {
        return {
            loadingImg: require('@/assets/img/loading.gif')
        }
    }
}
</script>

<style lang="scss">
    @import '@/style/tutorial.scss';
</style>