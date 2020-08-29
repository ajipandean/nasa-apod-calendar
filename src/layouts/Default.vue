<template lang="html">
  <q-layout view="hHh lpR lfr">
    <q-header elevated>
      <q-toolbar style="height:64px;">
        <q-toolbar-title>
          NASA Astronomy Picture of the Day
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <slot/>
    </q-page-container>
  </q-layout>
</template>
