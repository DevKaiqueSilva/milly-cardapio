<template>
    <v-app style="background-color:#363435" class="overflow-hidden">
        <v-app-bar app color="milly" inverted-scroll :scroll-threshold="200" dark height="50" class="px-0">
            <v-layout>
                <v-flex xs2>
                </v-flex>
                <v-flex xs8>
                    <v-img :src="require('@/assets/camilly.png')" contain style="width:120px;height:50px" class="mx-auto" />
                </v-flex>
                <v-flex xs2 style="text-align:end">
                    <v-btn icon @click="scrollTop" color="#363435">
                        <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-app-bar>
        <v-main>
            <Main/>
        </v-main>
    </v-app>
</template>

<script>
import Main from './pages/index.vue';

export default {
    components: {
        Main,
    },
    methods:{
        scrollTop(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }
};
</script>
