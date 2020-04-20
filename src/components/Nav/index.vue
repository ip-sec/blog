<template>
    <el-drawer title="前方总会有惊喜在等待，不论好坏" :visible.sync="$store.state.common.drawer" :direction="direction">
        <div class="nav">
            <transition-group name="navTrans" tag="div" appear>
                <el-button v-for="(value, index) in $store.state.home_get.menu" :key="value.id" :class="`trans-${index+1}`" circle ><router-link :to="value.url" tag="span" :style="{display:'block'}">{{value.name}}</router-link></el-button>
            </transition-group>
        </div>
    </el-drawer>
</template>

<script>
export default {
    data () {
        return {
            direction: 'ttb',
        }
    }
}
</script>

<style lang="scss">
    $num: 5;
    .el-drawer{
        .nav{
            @include flex-center;
            height: 100%;
            .navTrans-move{
                transition: transfrom 2s;
            }
            div{
                width: 400px;
                @include flex-center;
                flex-wrap: wrap;
                @include list-item;
                .el-button{
                    width: 80px;
                    height: 80px;
                    margin: 20px;
                    border: 1.5px solid white;
                    background: none;
                    color: white;
                    &:hover{
                        border-color: none;
                        background: rgba(255,255,255,.5);
                    }
                }
            }
            
        }
    }
</style>