<template>
    <layout-main>
        <div v-html="data[0].context"></div>
    </layout-main>
</template>

<script>
import layoutMain from '@/components/layout/layoutMain'
export default {
    name: 'tutorialChildren',
    data() {
        return {
            data:[
                { id:1, context: '<div>123</div>'}
                ]
        }
    },
    components:{
        layoutMain
    }
}
</script>

<style>

</style>