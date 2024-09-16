<template>
    <div class="ma-2 pa-2">      
        <Breadcrumbs />  
        <main>            
            <slot />
        </main>
        <v-footer class="footer" border>
            <v-row>
                <v-col cols="10">
                    <PlayerControls 
                        @backwards="backwards" 
                        @pause="pause" 
                        @play="play" 
                        @stop="stop" 
                        @forward="forward"
                        @repeat="repeat"/>
                </v-col>
                <v-col cols="2" align="center" justify="center">
                    <PlayerDisplay :event_control="event_control" :src="currentVideoSrc" width="150" height="80" />
                </v-col>
            </v-row>
        </v-footer>            
    </div>
</template>
<script setup>
import { useVideoStore } from '@/stores/videoStore';
const videoStore = useVideoStore();

const currentVideoSrc = computed(() => videoStore.video?.src || '');

const event_control = ref('none'); 

const backwards = () => event_control.value = 'backwards';

const pause = () => event_control.value = 'pause';

const play = () => event_control.value = 'play';

const stop = () => event_control.value = 'stop';

const forward = () => event_control.value = 'forward';

const repeat = () => event_control.value = 'repeat';

</script>
<style scoped>
.footer {
    bottom: 0;
    position: sticky;
    height: auto;
}
</style>