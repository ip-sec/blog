<template>
    <el-row :gutter="10" class="fontStyle">
        <el-col :span="24">
            <p>Powered by Tina © 2020 <a href="http://www.beian.miit.gov.cn/">赣ICP备20003646号</a></p>
            <p>刻骨于雪 失落于风 | 长情意在 夜雨香</p>
            <p>故事易写 岁月难唱 | 最是此刻 不悔往</p>
        </el-col>
    </el-row>
    
</template>

<script>
export default {
    name: 'layoutFooter'
}
</script>

<style lang="scss" scoped>
    $color: #4e4e4e;
    .fontStyle{
        text-align: center;
        .el-col{
            height: 90px;
            p{
                width: 100%;
                color: $color;
                font-size: 16px;
                line-height: 24px;
                a{
                    list-style: none;
                    text-decoration: none;
                    color: $color;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>