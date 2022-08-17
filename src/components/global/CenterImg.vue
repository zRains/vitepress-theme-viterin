<template>
  <div class="CenterImg" :style="{ filter: invert < 0 ? undefined : `invert(${invert})` }" :data-source="source">
    <img :style="{ zoom, 'image-rendering': '-webkit-optimize-contrast' }" :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: false,
    default: 'image post on zrain.fun'
  },
  source: {
    type: String,
    required: false,
    default: ''
  },
  zoom: {
    type: String,
    required: false,
    default: '100%'
  },
  invert: {
    type: Number,
    required: false,
    default: -1
  }
})
</script>

<style lang="scss">
@import '../../styles/vars.scss';

.CenterImg {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  filter: invert(0);
  transition: filter $u-duration;
}

html[data-theme='dark'] .CenterImg {
  filter: invert(1);
}
</style>
