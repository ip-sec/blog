<template>
    <ul class="infinite-list" style="overflow:auto">
        <transition-group name="el-zoom-in-top" appear>
            <li v-for="item in $store.state.home_get.message" :key="item.id" class="infinite-list-item">
                <el-avatar :src="item.avatar"></el-avatar>
                <div class="info">
                    {{ item.message }}
                </div>
                <div class="dateTime">{{ item.datetime }}</div>
            </li>
        </transition-group>
    </ul>
</template>

<script>
export default {
    name: 'messageCentral',
    data() {
        return {

        }
    },
    created () {
        this.$store.dispatch('home_get/message').then(() => {}).catch(() => {})
    }
}
</script>

<style lang="scss" scoped>
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
            color: white;
            background: #688cec;
            letter-spacing: normal;
            &::before{
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
        .dateTime{
            position: relative;
            bottom: 0;
            padding: 10px 0px 0px 5px;
            font-size: 12px;
            color: #868686;
        }
    }
</style>