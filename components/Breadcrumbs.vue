<template>
    <v-breadcrumbs :items="items">
      <template v-slot:prepend>
        <v-icon icon="mdi-music-box-multiple" size="small"></v-icon>
      </template>
    </v-breadcrumbs>
  </template>
  <script>
    export default {
      data: () => ({
        items: [
          {
            title: 'Inicio',
            disabled: false,
            href: '/',
          },
          {
            title: 'Catalogo',
            disabled: false,
            href: '/catalog',
          }
        ],
      }),
    }
  </script>