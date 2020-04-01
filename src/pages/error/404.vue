<template>
    <div ref="errHeight" class="err-container" :style="{width: pageWidth,height: pageHeight}">
        <el-row>
            <transition name="left" appear>
                <el-col :xs="20" :sm="10" :md="10" :lg="10" :offset="1" >
                    <div class="errorImg">
                        <img src="@/assets/img/404.png" alt="">
                    </div>
                </el-col>
            </transition>
            <transition name="right" appear>
                <el-col :xs="20" :sm="10" :md="10" :lg="10" :offset="1" >
                    <div class="errorFont">
                        <h1>sorry</h1>
                        <el-divider></el-divider>
                        <h3>The page you visited does not exist</h3>
                        <h4>You can use the following :</h4>
                        <div class="pad-top">
                            <el-button @click="pageRefresh">Refresh</el-button>
                            <el-button @click="home_getBack">return to home_get page</el-button>
                        </div>
                    </div>
                </el-col>
            </transition>
        </el-row>
    </div>
</template>

<script>
import getPageSize from '@/utils/mixins/getPageSize'
export default {
    name: 'error-404',
    mixins: [getPageSize],
    methods: {
        pageRefresh () {
            window.location.reload();
        },
        home_getBack () {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
    .err-container{
        @include flex-center;
        @include vue-trans(left,translateX(-100px),2s);
        @include vue-trans(right,translateX(100px),2s);
        .errorImg{
            img{
                max-width: 100%;
            }
        }
        .errorFont{
            .pad-top{
                padding-top: 20px;
            }
        }
    }
    
    
</style>