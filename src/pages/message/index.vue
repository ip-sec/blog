<template>
    <layout-main>
        <central-slot></central-slot>
    </layout-main>
</template>

<script>
import layoutMain from '@/components/layout/layoutMain'
import CentralSlot from './components/main'
export default {
    name: 'message',
    data () {
        return {
            
        }
    },
    components:{
        CentralSlot,
        layoutMain
    }
}
</script>
    
<style>

</style>