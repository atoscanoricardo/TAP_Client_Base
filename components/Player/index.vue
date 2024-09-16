<template>
    <v-container fluid>
        <PlayerStatus :event_control="event_control" />        
        <v-row class="mt-2">
            <v-col  align="center" justify="center">
                <PlayerDisplay :event_control="event_control" :src="currentVideoSrc" />
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <PlayerControls 
                    @backwards="backwards" 
                    @pause="pause" 
                    @play="play" 
                    @stop="stop" 
                    @forward="forward"
                    @repeat="repeat"
                />
            </v-col>
        </v-row>        
    </v-container>    
</template>
<script setup>
import { useVideoStore } from '@/stores/videoStore';
const videoStore = useVideoStore();

const currentVideoSrc = computed(() => videoStore.video?.src || '');

const event_control = ref('none'); 

const backwards = () =>{
    event_control.value = 'backwards';
}

const pause = () =>{
    event_control.value = 'pause';
}

const play = () =>{
    event_control.value = 'play';
}

const stop = () =>{
    event_control.value = 'stop';
}

const forward = () =>{
    event_control.value = 'forward';
}

const repeat = () =>{
    event_control.value = 'repeat';
}

</script>