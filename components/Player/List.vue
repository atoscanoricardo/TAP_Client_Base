<template>
    <div>
        <v-list>
            <v-list-subheader>Listado de videos</v-list-subheader>
            <v-list-item v-for="(video, i) in videos" :key="i"   
                :title="video.title"
                @click="onSelectVideo(video)"
            >
                <template v-slot:prepend>
                    <v-icon icon="mdi-movie"></v-icon>
                </template>
            </v-list-item>
        </v-list>  
    </div>
</template>
<script setup>
import { useVideoStore } from '@/stores/videoStore';
const videoStore = useVideoStore();

const emit = defineEmits(['update:sheet']);

const props = defineProps({
    sheet: {
        type: Boolean,
        default: false
    }
});

const onSelectVideo = (video) => {    
    videoStore.setVideo(video);
    emit('update:sheet', false);
};

onMounted(async () => {    
    if (videoStore.videos.length === 0)
        await videoStore.fetchVideos();
});

const { data:videos, error } = await useAsyncData(() => videoStore.fetchVideos());

</script>