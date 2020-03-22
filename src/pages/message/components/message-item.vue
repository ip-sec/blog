<template>
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
</template>

<script>
export default {
    name: 'messageCentral',
    data() {
        return {
            data: this.$store.state.infoItem
        }
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
</style>