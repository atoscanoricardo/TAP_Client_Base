<template>    
    <v-system-bar class="mb-7">
        <span class="ms-2 text-capitalize">Status {{event_control}}</span>
        <v-icon :icon="icon_event"></v-icon>        
    </v-system-bar>
</template>
<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['event_control'])
const icon_event = ref('mdi-stop');

watch(() => props.event_control, (event) => {    
    if(!event) icon_event = 'mdi-stop';

    const events = {
        backwards: 'mdi-skip-previous',
        pause: 'mdi-pause',
        play: 'mdi-play',
        stop: 'mdi-stop',
        forward: 'mdi-skip-next',
        repeat: 'mdi-repeat'
    }

    if (events[event]) {
        icon_event.value = events[event];
    }
});

</script>

