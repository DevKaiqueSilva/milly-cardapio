<template>
    <v-flex xs12 class="px-4">
        <v-flex xs12 v-for="(c,i) in cardapio" :key="`c${i}`" class="text-center white--text mb-2">
            <div class="titleM">== {{c.title}} ==</div>
            <v-flex xs12 v-for="(s,i) in c.sector" :key="`sub${i}`" class="my-1">
                <div v-if="!!s.title" class="subtitleM">● ● {{s.title}} ● ●</div>
                <v-flex xs12 v-for="(opc,i) in s.opc" :key="`opc${i}`" class="my-1">
                    <div class="optionM">{{opc.name}}</div>
                    <div v-if="!!opc.obs" class="suboptionM">( {{opc.obs}} )</div>
                </v-flex>
            </v-flex>
        </v-flex>
        <v-img :src="require('@/assets/mandala.png')" class="mandalaFinal" contain=""/>
    </v-flex>
</template>

<script>
import cardapio from "@/assets/cardapio.js"
export default {
    data(){
        return{
            cardapio:[]
        }
    },
    created(){
        this.cardapio = cardapio;
    }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

$font-family-menu:'Amatic SC', cursive;

.titleM{
    font-size: 40px;
    font-family: $font-family-menu;
    color:#88ccd5
}

.subtitleM{
    font-size: 35px;
    font-family: $font-family-menu;
    font-weight: bold;
}

.optionM{
    font-size: 30px;
    font-family: $font-family-menu;
}

.suboptionM{
    font-size: 25px;
    font-family: $font-family-menu;
}

.mandalaFinal{
    width:350px;
    height:160px;
    margin: auto;
    transform: rotate(180deg);
}
</style>