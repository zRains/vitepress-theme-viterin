<template>
  <div class="VRPageAside">
    <slot name="aside-top" />
    <slot name="aside-toc-before" />
    <VRPageToc v-if="page.headers.length" />
    <slot name="aside-toc-after" />
    <div class="spacer" />
    <slot name="aside-ads-before" />
    <slot name="aside-ads-after" />
    <slot name="aside-bottom" />
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import type { VRThemeConfig } from '../../types/theme'
import VRPageToc from './VRPageToc.vue'

const { page } = useData<VRThemeConfig>()
</script>

<style lang="scss">
@import '../../styles/vars.scss';

.VRPageAside {
  position: sticky;
  top: 0;
  margin-top: calc(#{$nav-height-desktop} * -1 - 40px);
  padding-top: calc(#{$nav-height-desktop} + 40px);
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
}
</style>
