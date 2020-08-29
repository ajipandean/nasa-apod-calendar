<template>
  <layouts-default>
    <q-page class="row justify-center">
      <div class="col-12 col-sm-4">
        <div class="q-pa-md">
          <q-date
            flat
            bordered
            minimal
            class="full-width"
            mask="YYYY-MM-DD"
            :options="options"
            v-model="date"
          />
        </div>
      </div>
      <div class="col-12 col-sm-8">
        <pictures-library
          :date="date"
          :picture="picture"
        />
      </div>
    </q-page>
  </layouts-default>
</template>

<script>
import moment from 'moment';
import keys from '../keys';

const today = new Date();
const formattedToday = moment(today).format('YYYY-MM-DD');

export default {
  components: {
    LayoutsDefault: () => import('layouts/Default.vue'),
    PicturesLibrary: () => import('components/PicturesLibrary.vue'),
  },
  data() {
    return {
      picture: {},
      date: formattedToday,
    };
  },
  methods: {
    async fetch(date) {
      this.$q.loading.show();
      try {
        const { data } = await this.$axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${keys.NASA_API_KEY}`);
        this.picture = data;
      } catch (e) {
        console.error(e);
      } finally {
        this.$q.loading.hide();
      }
    },
    options(date) {
      return date <= moment(today).format('YYYY/MM/DD');
    },
  },
  watch: {
    date() {
      this.fetch(this.date);
    },
  },
  created() {
    this.fetch(this.date);
  },
};
</script>
