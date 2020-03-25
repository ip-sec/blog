<template>
    <layout-main>
        <div class="content-contain">
            <el-row>
                <el-col :xs="22" :sm="22" :md="16" :lg="16">
                    <slot></slot>
                </el-col>
            </el-row>
        </div>
    </layout-main>
</template>

<script>
import layoutMain from './layoutMain'
export default {
    name: 'layoutChildren',
    data() {
        return {
        }
    },
    components:{
        layoutMain
    }
}
</script>

<style lang="scss">
    .content-contain{
        transform: translateY(-4%);
        .el-row{
            @include flex-center;
            .el-col{
                position: relative;
                transition: all .6s;
                min-height: 500px;
                padding: 20px;
                border-radius: 4px;
                background: rgba($color: #ffffff, $alpha: .7);
                box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
                .el-header{
                    line-height: 60px;
                    text-align: center;
                }
                .basic-info{
                    text-align: center;
                    i{
                        font-size: 13px;
                    }
                }
                .content{
                    padding: 20px 50px;
                    word-break: break-all;
                    font-size: 14px;
                    p{
                        text-indent: 2em;
                    }
                    .img-content{
                        text-align: center;
                        max-width: 100%;
                        max-height: 400px;
                        img{ 
                            max-width: 100%;
                            object-fit: cover;
                        }
                    }
                }
                .like{
                    position: absolute;
                    top: 50%;
                    right: 20px;
                    .el-button{
                        width: 50px;
                        height: 50px;
                        background: rgba($color: #ffffff, $alpha: .7);
                        font-size: 17px;
                        &:hover,&:focus{
                            background: rgba($color: #ffffff, $alpha: .7);
                            border-color: #E36049;
                            color: #E36049;
                        }
                    }
                }
            }
        }
    }
</style>