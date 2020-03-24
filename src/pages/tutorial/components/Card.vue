<template>
    <el-col ref="col" :xs="22" :sm="22" :md="22" :lg="22" :offset="1">
        <el-card :body-style="{ padding: '0px' }"  v-for="item in itemData" :key="item.id"  shadow="hover">
            <div slot="header">
                <el-image :src="item.imgUrl" fit="fill">
                    <div slot="placeholder" class="image-slot">
                        <img :src="loadingImg" alt="">
                    </div>
                </el-image>
                <span class="span-right">
                    <i class="el-icon-view">&nbsp;111</i>
                    <i class="el-icon-thumb">&nbsp;222</i>
                </span>
            </div>
            <router-link :to="'/tutorial/pages/'+item.id" tag="div">
                <div class="imgInfo">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.upDate }}</p>
                    <div class="item-font">
                        <p>{{ item.itemFont }}</p>
                    </div>
                </div>
            </router-link>
        </el-card>
    </el-col>
</template>

<script>
export default {
    data() {
        return {
            loadingImg: require('@/assets/img/loading.gif'),
            itemData: this.$store.state.itemData
        }
    },
    // mounted () {
    //     this.setItem()
    // },
    methods:{
        // setItem () {
        //     this.watchSize()
        //     window.onresize = () => {
        //         throttle(this.watchSize(),2000)
        //     }
        // },
        // watchSize () {
        //     this.itemData = new PhotoLayout(this.$store.state.itemData)
        // }
    }
}
</script>

<style lang="scss">
    @import '@/style/tutorial.scss';
</style>