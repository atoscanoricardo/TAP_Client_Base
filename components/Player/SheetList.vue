<template>
  <v-bottom-sheet v-model="sheet">
    <template v-slot:activator="{ props }">
      <div class="text-center">
        <v-btn
          v-bind="props"
          color="purple"
          icon="mdi-format-list-text"
        ></v-btn>
      </div>
    </template>    
    <v-btn to="/catalog">Ver Catalogo</v-btn>
    <PlayerList v-model:sheet="sheet" />    
  </v-bottom-sheet>
</template>
<script setup>
  const sheet = ref(false);
</script>