<template>
    <el-drawer title="前方总会有惊喜在等待，不论好坏" :visible.sync="$store.state.drawer" :direction="direction">
        <div class="nav">
            <transition-group name="navTrans" tag="div" appear>
                <el-button v-for="(value, index) in $store.state.menu" :key="value.key" :class="`trans-${index+1}`" circle ><router-link :to="value.linkto" tag="span" :style="{display:'block'}">{{value.name}}</router-link></el-button>
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
        z-index: 3000 !important;
        background: none;
        box-shadow: none;
        height: 100% !important;
        .el-drawer__header{
            color: white;
            .el-drawer__close-btn{
                transition: all 0.6s;
                &:hover{
                    transform: rotateZ(-180deg);
                }
            }
        }
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