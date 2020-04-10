<template>
    <layout-main>
        <div class="mess-contain">
            <el-row>
                <el-col :xs="24" :sm="20" :md="20" :lg="20">
                    <central-slot></central-slot>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="20" :md="20" :lg="20">
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
import {throttleTwo,myRandom} from '@/utils/common'
export default {
    name: 'message',
    data () {
        return {
            messageInfo: {
                info: '',
                avatar: ''
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
                    this.$store.state.home_get.photo == null 
                    ? this.messageInfo.avatar = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                    : this.messageInfo.avatar = this.$store.state.home_get.photo[0][myRandom(0,this.$store.state.home_get.photo[0].length)].url
                    this.$store.dispatch('home_post/saveMessage',this.messageInfo).then(() => {
                        let data = {
                            id: this.$store.state.home_get.message.length + 1,
                            message: this.messageInfo.info,
                            avatar: this.messageInfo.avatar,
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
                @include page-scroll;
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