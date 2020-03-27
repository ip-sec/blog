<template>
    <layout-main>
        <div class="mess-contain">
            <el-row>
                <el-col :xs="23" :sm="20" :md="14" :lg="14">
                    <central-slot></central-slot>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="23" :sm="20" :md="14" :lg="14">
                    <div class="push-info">
                        <el-form label-position="top" 
                        :rules="rules" ref="ruleForm" 
                        @submit.native.prevent="setInfo" 
                        label-width="80px" :model="messageInfo">
                            <el-form-item label="发送小星星⭐⭐⭐" prop="info">
                                <el-input 
                                v-model="messageInfo.info"
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
    </layout-main>
</template>

<script>
import layoutMain from '@/layout/components/layoutMain'
import CentralSlot from './components/message-item'
import {throttleTwo} from '@/utils/common'
export default {
    name: 'message',
    data () {
        return {
            messageInfo: {
                info: ''
            },
            rules: {
                info: [
                    { required: true, message: '输入你想说的( •̀ ω •́ )', trigger: 'blur' }
                ]
            }
        }
    },
    components:{
        CentralSlot,
        layoutMain
    },
    methods: {
        setInfo:throttleTwo(function(){
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.$store.dispatch('home_post/saveMessage',this.messageInfo.info).then(() => {
                        let data = {
                            id: this.$store.state.home_get.message.length + 1,
                            message: this.messageInfo.info,
                            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                            datetime: new Date().toLocaleDateString()
                        }
                        this.$store.state.home_get.message.push(data)
                        this.messageInfo.info = ''
                    }).catch(() => {})
                } else {
                    return false;
                }
            });
        },2000),
    }
}
</script>
    
<style lang="scss">
    .mess-contain{
        transform: translateY(-4%);
        .el-row{
            @include flex-center;
            &:first-child .el-col{
                position: relative;
                transition: all .6s;
                height: 500px;
                padding: 20px;
                overflow-y: scroll;
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
            }
            &:last-child .el-col{
                transition: all .6s;
                margin-top: 20px;
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