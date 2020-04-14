<template>
    <div class="item_sort">
        <el-card shadow="hover">
            <div slot="header" class="clearfix">
                <span>日期</span>
            </div>
            <div class="sort_li">
                <ul class="item">
                    <li v-for="item in sortDate" :key="item" @click="siteDate()" >
                        &nbsp;<i class="el-icon-time"></i>&nbsp;{{ item }}
                    </li>
                </ul>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sortData: this.$store.state.home_get.diary.concat(),
        }
    },
    computed:{
        sortDate:function(){
            let arr = []
            this.sortData.forEach((item)=>{
                if(!arr.includes(item.datetime.slice(0,6))){
                    arr.push(item.datetime.slice(0,6))
                }
            })
            return arr
        }
    },
    methods:{
        siteDate(){

        }
    }
}
</script>

<style lang="scss" scoped>
    .item_sort{
        .el-card{
            background: rgba($color: #ffffff, $alpha: .7);
            margin-bottom: 10px;
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
</style>