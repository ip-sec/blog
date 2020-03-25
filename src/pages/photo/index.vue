<template>
    <layout-main>
        <div class="photo-container">
            <el-row class="photo-flex">
                <el-col :xs="24" :sm="24" :md="15" :lg="15">
                    <central-slot></central-slot>
                </el-col>
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
        padding: 40px 10px;
        .el-col{
            transition: all .6s;
            background: white;
            padding: 10px;
        }
        
    }
}
</style>