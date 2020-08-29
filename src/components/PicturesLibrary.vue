<template lang="html">
  <div class="q-pa-md">
    <h5 class="text-weight-bold q-mt-none q-mb-md">
      {{formattedDate}}
    </h5>
    <pictures-library-item
      :picture="picture"
      v-if="picture"
    />
    <q-banner
      color="bg-negative text-white"
      v-else
    >
      No picture for this day.
    </q-banner>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    picture: {
      type: Object,
      required: true,
    },
  },
  components: {
    PicturesLibraryItem: () => import('components/PicturesLibraryItem.vue'),
  },
  computed: {
    formattedDate() {
      return moment(this.date).format('ddd, D MMMM YYYY');
    },
  },
};
</script>
