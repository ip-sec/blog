<template>
    <div class="mess-contain">
        <el-row>
            <el-col :xs="23" :sm="20" :md="14" :lg="14">
                <ul class="infinite-list"
                infinite-scroll-delay = "200ms"
                style="overflow:auto">
                    <li v-for="(item, index) in data" :key="index" class="infinite-list-item">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        <div class="info">
                            {{ item.context }}
                        </div>
                    </li>
                </ul>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="23" :sm="20" :md="14" :lg="14">
                <div class="push-info">
                    <el-form label-position="top" @submit.native.prevent="setInfo" label-width="80px" :model="formLabelAlign">
                        <el-form-item label="发送小星星⭐⭐⭐">
                            <el-input 
                            v-model="formLabelAlign.info"
                            maxlength="50"
                            show-word-limit
                            placeholder="留言（￣︶￣）↗　" 
                            clearable >
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="push-right" @click="setInfo">哔呦~</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {throttleTwo} from '@/utils/common'
export default {
    name: 'messageCentral',
    data() {
        return {
            data: [
                { id: 1, imgUrl: '', context: '我是美食家sssssssss' },
                { id: 2, imgUrl: '', context: '我是美食家' },
                { id: 3, imgUrl: '', context: '我是美食家' },
                { id: 4, imgUrl: '', context: '我是美食家' },
                { id: 5, imgUrl: '', context: '我是美食家' },
                { id: 6, imgUrl: '', context: '我是美食家' },
                { id: 7, imgUrl: '', context: '我是美食家' },
                { id: 8, imgUrl: '', context: '我是美食家' },
                { id: 9, imgUrl: '', context: '我是美食家我是美食家我是美食家我是美食家我是美食家我是美食家我是美食家' },
                { id: 10, imgUrl: '', context: '我是美食家' },
                { id: 11, imgUrl: '', context: '我是美食家' },
                { id: 12, imgUrl: '', context: '我是美食家' },
                { id: 13, imgUrl: '', context: '我是美食家' },
                { id: 14, imgUrl: '', context: '我是美食家' },
                { id: 15, imgUrl: '', context: '我是美食家' },
                { id: 16, imgUrl: '', context: '我是美食家' },
            ],
            formLabelAlign: {
                info: ''
            }
        }
    },
    methods: {
        loads() {
            this.data.push({ id: this.data.length, imgUrl: '', context: '我是美食家' })
        },
        setInfo:throttleTwo(function(e){
            console.log(1)
        },2000)
    }
    
}
</script>

<style lang="scss" scoped>
    .mess-contain{
        transform: translateY(-4%);
        .el-row{
            @include flex-center;
            &:first-child .el-col{
                position: relative;
                height: 500px;
                padding: 20px;
                overflow-y: scroll;
                border-radius: 4px;
                background: rgba($color: #ffffff, $alpha: .7);
                box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
                &::-webkit-scrollbar{
                width: 5px;
                }
                &::-webkit-scrollbar-thumb{
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                    background: rgba(0, 0, 0, 0.2);
                }
                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                    border-radius: 0;
                    background: rgba(145, 145, 145, 0.2);
                }
                .infinite-list-item{
                    display: flex;
                    align-items: center;
                    margin-top: 20px;
                    .info{
                        position: relative;
                        display: inline-block;
                        margin-left: 20px;
                        padding: 3px 6px;
                        max-width: 50%;
                        border-radius: 5px;
                        color: white;
                        background: #688cec;
                        letter-spacing: normal;
                        &::after{
                            content: '';
                            position: absolute;
                            left: -4px;
                            top: 30%;
                            display: block;
                            transform: rotateZ(50deg);
                            background: #688cec;
                            border-top: 4px solid #688cec;
                            border-right: 4px solid #688cec;
                            border-left: 4px solid #688cec;
                            border-bottom: 4px solid #688cec;
                        }
                    }
                }
            }
            &:last-child .el-col{
                margin-top: 20px;
                border-radius: 4px;
                background: rgba($color: #ffffff, $alpha: .7);
                box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
                .push-info{
                    width: 100%;
                    .el-form{
                        padding: 20px;
                        .push-right{
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>