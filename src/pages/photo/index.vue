<template>
    <layout-main>
        <div class="photo-container">
            <el-row class="photo-flex">
                <transition name="bottomY" mode="out-in" appear>
                    <central-slot></central-slot>
                </transition>
            </el-row>
        </div>
    </layout-main>
</template>

<script>
import layoutMain from '@/layout/components/layoutMain'
import CentralSlot from './components/photo-tab'
export default {
    name: 'photo',
    data () {
        return {
            
        }
    },
    created(){
        this.$store.dispatch('common/photoNum')
    },
    components:{
        CentralSlot,
        layoutMain
    }
}
</script>
    
<style lang="scss"> 
.photo-container{
    .photo-flex{
        display: flex;
        justify-content: center;
        padding: 20px 10px;
        .el-col{
            background: rgba($color: #ffffff, $alpha: .7);
            transition: all .6s;
            padding: 10px;
        }
        
    }
}
</style>