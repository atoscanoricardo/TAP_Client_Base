<template>
    <v-alert v-if="alert" border="top" type="warning" variant="outlined" prominent closable>
      Seleccione un video de la lista para poder reproducirlo
    </v-alert>
    <video 
        ref="videoPlayer"
        :src        
        autoplay
        poster="/video_icon.jpg"        
        :width
        :height        
    >
        Tu navegador no admite el elemento <code>video</code>.
    </video>    
      
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    event_control: String, 
    src: String,
    width:{
      type: String, 
      default: '400px',
    }, 
    height:{
      type: String, 
      default: '300px',
    },    
  });

  const videoPlayer = ref(null);
  const alert = ref(false);
  const skipTime = 10;
  
  watch(() => props.event_control, (type) => {
    if (!videoPlayer.value) return; 
  
    const actions = { 
      play: () => videoPlayer.value.play(),
      pause: () => videoPlayer.value.pause(),
      stop: () => {
        videoPlayer.value.pause();
        videoPlayer.value.currentTime = 0;
      },
      forward: () => videoPlayer.value.currentTime = Math.min(videoPlayer.value.currentTime + skipTime, videoPlayer.value.duration),
      backwards: () => videoPlayer.value.currentTime = Math.max(videoPlayer.value.currentTime - skipTime, 0),
      repeat: () => videoPlayer.value.loop = !videoPlayer.value.loop
    };
  
    // Ejecuta la acción correspondiente, si existe
    if (actions[type] && props.src!='') {
      actions[type]();
    }else{
      alert.value = true;
    }
  });
  </script>
  <style scoped>
  .responsive-video {
    width: 100%; 
    height: auto;
    aspect-ratio: 16 / 9; 
    min-width: 150px; 
    min-height: 80px;  
    background-color: black;
  }
  </style>