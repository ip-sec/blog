export default {
    data() {
        return {
            counts: this.$store.state.common.counts,
            postStr: ''
        }
    },
    mounted() {
        window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
    },
    updated() {
        this.postStr = this.pushString()
    },
    destroyed() {
        window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e))
    },
    methods: {
        pushString(){
            let str = ''
            for (const key in this.counts) {
                let data = key + '=' + this.counts[key] + '&'
                str += data
            }
            return str
        },
        beforeunloadHandler(e){
            var request = new XMLHttpRequest();
            request.open('POST', 'http://localhost:80/api/home/base/saveCounts',true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded")
            var send_data = this.postStr
            request.send(send_data)
            request.onload = function(e){
                if (request.status === 200) {

                }
                else{

                }
            }
            request.onerror = function(e){

            }
        }
    }
}