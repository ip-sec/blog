<template>
    <transition-group name="scaleC" tag="div" appear mode="out-in">
        <el-card :body-style="{ padding: '0px' }" v-for="item in $store.state.home_get.tutorial.data" :key="item.id"  shadow="hover">
            <div class="el-card__left">
                <el-image :src="item.url" fit="fill">
                    <div slot="placeholder" class="image-slot">
                        <img :src="loadingImg" alt="">
                    </div>
                </el-image>
                <div class="tag_li" :style="{background: item.bg}">
                    <span>{{ item.name }}</span>
                </div>
                <span class="span-right">
                    <i class="el-icon-view">&nbsp;{{ item.view_num }}</i>
                    <i class="el-icon-thumb">&nbsp;{{ item.like_num }}</i>
                </span>
            </div>
            <div class="el-card__right">
                <div class="tag_span" :style="{background: item.bg}"></div>
                <div class="info_li">
                    <h3>{{ item.title }}</h3>
                    <span><i class="el-icon-time"></i> {{ item.datetime }}</span>
                    <p>简介：{{ item.introduction }}</p>
                    <router-link :to="'/tutorial/pages/'+item.id" tag="div">
                        <el-button class="info_button">
                            See More
                            <i class="el-icon-right"></i>
                        </el-button>
                    </router-link>
                </div>
                <div class="tag_li" :style="{background: item.bg}">
                    <span>{{ item.name }}</span>
                </div>
            </div>
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