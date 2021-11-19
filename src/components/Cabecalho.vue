<template>
    <v-card color="milly" tile class="pa-2 mandalaBg elevation-0" style="border-radius:0px !important">
        <v-container>
            <v-img :src="require('@/assets/camilly.png')" contain class="nameImg"/>
            <v-img :src="require('@/assets/menu.png')" contain class="menuImg"/>
        </v-container>
    </v-card>
</template>

<style scoped>
.menuImg{
    width: 200px;
    height: 70px;
    margin-top: 20px;
    margin: auto;
}
.nameImg{
    width: 300px;
    height: 150px;
    margin: auto;
}
.mandalaBg{
    background-image: url('../assets/mandala.png');
    background-position: center;
}
</style>