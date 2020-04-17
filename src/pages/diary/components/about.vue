<template>
    <el-timeline>
        <transition-group name="bottomY" mode="out-in" tag="ul" class="el-timeline">
            <el-timeline-item v-for="item in sortDate" :key="item.id" :timestamp="item.datetime" placement="top">
                <router-link :to="'/diary/pages/'+item.id" tag="div" :style="{cursor: 'pointer'}">
                    <el-card shadow="hover">
                        <div class="tag_sapn"></div>
                        <div class="info">
                            <h4 style="paddingTop:5px">{{ item.title }}</h4>
                            <p><span>介绍: </span> {{ item.introduction }}</p>
                            <span class="span-right">
                                <i class="el-icon-view">&nbsp;{{ item.view_num }}</i>
                                <i class="el-icon-thumb">&nbsp;{{ item.like_num }}</i>
                            </span>
                        </div>
                    </el-card>
                </router-link>
            </el-timeline-item>
        </transition-group>
    </el-timeline>
</template>

<script>
export default {
    data () {
        return {
            handleData: this.$store.state.home_get.diary.concat()
        }
    },
    props:{
        'num':{
            type: Number
        }
    },
    computed:{
        sortDate:function(){
            return this.handleData.filter((item)=>{
                return item['datetime'].indexOf(this.$store.state.common.siteDiary) !== -1
            }).slice(0,this.num)
        }
    },
}

</script>

<style lang="scss">
.el-timeline{
    .el-timeline-item{
        .el-card{
            background: rgba($color: #ffffff, $alpha: .7);
            &:hover{
                .el-card__body .tag_sapn{
                    height: 55px !important;
                }
            }
            .el-card__body{
                display: flex;
                .tag_sapn{
                    width: 4px;
                    height: 0px;
                    background-color: #E36049;
                    margin-right: 10px;
                    transition: all 0.6s;
                }
                .info{
                    width: 97%;
                    p{
                        padding-top: 5px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .span-right{
                        float: right;
                        text-align: right;
                        i{
                            font-size: 13px;
                            color: #444444;
                        }
                    }
                }
            }
        }
        .el-timeline-item__tail{
            border-left-color: #E36049;
        }
        .el-timeline-item__node{
            background: #E36049;
        }
    }
}
</style>