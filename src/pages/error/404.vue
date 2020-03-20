<template>
    <div ref="errHeight" class="err-container" :style="{width: pageWidth,height: pageHeight}">
        <el-row>
            <transition
            appear
            appear-class="left-appear-class"
            appear-to-class="left-appear-to-class"
            appear-active-class="left-appear-active-class"
            >
                <el-col :xs="20" :sm="10" :md="10" :lg="10" :offset="1" >
                    <div class="errorImg">
                        <img src="@/assets/img/404.png" alt="">
                    </div>
                </el-col>
            </transition>
            <transition
            appear
            appear-class="right-appear-class"
            appear-to-class="right-appear-to-class"
            appear-active-class="right-appear-active-class"
            >
                <el-col :xs="20" :sm="10" :md="10" :lg="10" :offset="1" >
                    <div class="errorFont">
                        <h1>sorry</h1>
                        <el-divider></el-divider>
                        <h3>The page you visited does not exist</h3>
                        <h4>You can use the following :</h4>
                        <div class="pad-top">
                            <el-button @click="pageRefresh">Refresh</el-button>
                            <el-button @click="homeBack">return to home page</el-button>
                        </div>
                    </div>
                </el-col>
            </transition>
        </el-row>
    </div>
</template>

<script>
import getPageSize from '@/assets/js/mixins/getPageSize'
export default {
    name: 'error-404',
    mixins: [getPageSize],
    methods: {
        pageRefresh () {
            window.location.reload();
        },
        homeBack () {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
    .err-container{
        @include flex-center;
        .left-appear-class{
            opacity: 0;
            transform: translateX(-100px);
        }
        .left-appear-active-class{
            transition: all 2s;
        }
        .left-appear-to-class{
            opacity: 1;
            transform: translateY(0px);
        }
        .right-appear-class{
            opacity: 0;
            transform: translateX(100px);
        }
        .right-appear-active-class{
            transition: all 2s;
        }
        .right-appear-to-class{
            opacity: 1;
            transform: translateY(0px);
        }
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