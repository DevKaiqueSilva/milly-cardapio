<template>
    <v-flex xs12>
        <OverlayInit :visible="showOverlay" @onClose="showOverlay=false"/>
        <Cabecalho />
        <div class="borderMandala"/>
        <Cardapio />
    </v-flex>
</template>

<script>
import Cabecalho from "@/components/Cabecalho.vue";
import OverlayInit from "@/components/OverlayInit.vue";
import Cardapio from "@/components/Cardapio.vue";

export default {
    components:{
        Cabecalho,
        OverlayInit,
        Cardapio
    },
    data(){
        return{
            showOverlay: true
        }
    }
}
</script>

<style scoped>
.borderMandala{
    width: 100vw;
    height: 60px;
    background-image: url('../assets/border.png');
    background-size: contain;
    background-repeat: repeat-x;
    margin-top: -15px;
    background-position: center;
}
</style>