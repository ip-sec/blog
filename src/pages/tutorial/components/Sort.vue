<template>
    <div ref="refScroll" class="sort-about" v-if="$store.state.home_get.tutorialAbout">
        <el-card shadow="hover">
            <div slot="header" class="clearfix">
                <span @click="siteData('view_num')" style="cursor: pointer;">查看榜</span>
                <el-divider direction="vertical"></el-divider>
                <span @click="siteData('like_num')"  style="cursor: pointer;">点击榜</span>
            </div>
            <div class="sort_li">
                <ul class="item">
                    <li v-for="item in sortViewData" :key="item.id" >
                        <router-link :to="'/tutorial/pages/'+item.id" tag="span">
                            &nbsp;<i class="el-icon-document-copy"></i>&nbsp;{{ item.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </el-card>
        <el-card ref="refScrollCol" class="fixed-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>最近更新：</span>
            </div>
            <div class="sort_li">
                <ul class="text item">
                    <li v-for="value in sortTimeData" :key="value.id" >
                        <router-link :to="'/tutorial/pages/'+value.id" tag="span">
                            &nbsp;<i class="el-icon-time"></i>&nbsp;{{ value.datetime }}&nbsp;{{ value.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </el-card>
    </div>
</template>

<script>
import getDomScroll from '@/utils/mixins/getDomScroll'
export default {
    data(){
        return {
            sortData: this.$store.state.home_get.tutorialAbout.concat(),
            timeData: this.$store.state.home_get.tutorialAbout.concat(),
            ifSort: 'view_num'
        }
    },
    mixins:[getDomScroll],
    computed:{
        sortTimeData:function(){
            return this.timeData.sort((a,b)=>{
                return new Date(b['datetime']).getTime() - new Date(a['datetime']).getTime()
            }).slice(0,10)
        },
        sortViewData:function(){
            return this.sortData.sort((a,b)=>{
                return parseInt(b[this.ifSort]) - parseInt(a[this.ifSort])
            }).slice(0,10)
        },
    },
    methods:{
        getDomScroll () {
            let _this = this
            if(_this.$refs.refScroll !== undefined){
                let domTop = _this.$refs.refScroll.getBoundingClientRect().top + _this.$refs['refScrollCol'].$el.offsetHeight
                domTop < 0 ? _this.isFixed = true : _this.isFixed = false
            }else{
                return false
            }
        },
        siteData(data){
            this.ifSort = data
        }
    }
}
</script>

<style lang="scss" scoped>
    .sort-about{
        .fixed-card{
            width: 270px;
        }
        .el-card{
            background: rgba($color: #ffffff, $alpha: .7);
            .clearfix{
                span{
                    &:hover{
                        color: #E36049;
                    }
                }
            }
            .sort_li{
                width: 100%;
                .item{
                    list-style: none;
                    li{
                        position: relative;
                        padding: 10px 0;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        cursor: pointer;
                        &:hover{
                            &::after{
                                width: 100%;
                            }
                        }
                        &::after{
                            content: '';
                            transition: all 0.6s;
                            position: absolute;
                            bottom: 0px;
                            left: 0;
                            height: 2px;
                            width: 0%;
                            background-color: #E36049;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1100px){
        .fixed-card{
            width: 200px !important;
        }
    }
</style>