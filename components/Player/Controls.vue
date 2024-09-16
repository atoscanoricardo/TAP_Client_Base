<template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn color="grey" icon="mdi-step-backward" @click="backwards"></v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn color="orange" icon="mdi-pause" @click="pause"></v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn color="blue" icon="mdi-play" @click="play"></v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn color="black"  icon="mdi-stop" @click="stop"></v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn color="grey" icon="mdi-step-forward" @click="forward"></v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="grey" icon="mdi-repeat" @click="repeat"></v-btn>
        </v-col>            
        <v-col cols="auto">
          <PlayerSheetList />
        </v-col>        
      </v-row>
    </v-container>
  </template>

<script setup>

const emit = defineEmits(['backwards', 'pause', 'play', 'stop', 'forward', 'repeat' ])

const backwards = () =>{
  emit('backwards')
}

const pause = () =>{
  emit('pause')
}

const play = () =>{
  emit('play')
}

const stop = () =>{
  emit('stop')
}

const forward = () =>{
  emit('forward')
}

const repeat = () =>{
  emit('repeat')
}

</script>