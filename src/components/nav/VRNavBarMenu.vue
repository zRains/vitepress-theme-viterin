<template>
  <nav v-if="theme.nav" class="VRNavBarMenu">
    <template v-for="item in theme.nav" :key="item.text">
      <VRNavBarMenuLink v-if="'link' in item" :item="item" />
      <VRNavBarMenuGroup v-else :item="item" />
    </template>
  </nav>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import type { VRThemeConfig } from '../../types/theme'
import VRNavBarMenuLink from './VRNavBarMenuLink.vue'
import VRNavBarMenuGroup from './VRNavBarMenuGroup.vue'

const { theme } = useData<VRThemeConfig>()
</script>

<style lang="scss">
@import '../../styles/vars.scss';

.VRNavBarMenu {
  display: none;
}

// 适配移动端
@media only screen and (min-width: $b-md) {
  .VRNavBarMenu {
    display: flex;
  }
}
</style>
