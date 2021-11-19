<template>
    <v-dialog v-model="visible"  fullscreen transition="fade-transition">
        <v-card color="rgba(80,80,80,0.8)" style="display:flex">
            <v-card color="milly" id="card">
                <v-img :src="require('@/assets/mandala.png')" contain class="mandala top"/>
                <v-img :src="require('@/assets/camilly.png')" contain class="imgName"/>
                <v-img :src="require('@/assets/mandala.png')" contain class="mandala down"/>
            </v-card>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props:{
        visible:{
            type: Boolean,
            required: true
        }
    },
    created(){
        setTimeout(() => {
            this.$emit("onClose");
        }, 4000);
    }
}
</script>

<style scoped>
#card{
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    height: 100vh;
    border-radius: 0px;
    width: 100vw;
}
.imgName{
    width: 300px;
    height: 150px;
    margin: auto;
    transition: 1;
    opacity: 1;
    animation: 3s linear fadeIn;
    z-index: 2;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.down{
    position: absolute;
    bottom: 0px;
    transform: rotate(180deg);
}
.top{
    position: absolute;
    top: 0px;
}
.mandala{
    width: 370px;
    height: 200px;
    margin: auto;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
}
</style>