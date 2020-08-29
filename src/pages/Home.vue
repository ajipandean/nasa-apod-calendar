<template>
  <layouts-default>
    <q-page>
      Homepage
    </q-page>
  </layouts-default>
</template>

<script>
export default {
  components: {
    LayoutsDefault: () => import('layouts/Default.vue'),
  },
};
</script>
