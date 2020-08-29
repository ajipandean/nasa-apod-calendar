<template lang="html">
  <q-card flat>
    <q-img
      style="border-radius:8px;"
      :src="picture.url"
      :ratio="16/9"
    />
    <q-card-section class="q-px-none">
      <h6 class="text-weight-bold q-mt-none q-mb-sm">
        {{picture.title}}
      </h6>
      <p class="text-grey-8 q-my-none">
        {{picture.explanation}}
      </p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    picture: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>
