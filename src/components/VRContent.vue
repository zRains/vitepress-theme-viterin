<template>
  <div class="VRContent">
    <NotFound v-if="route.component === NotFound" />

    <VRHome v-else-if="frontmatter.layout === 'home'" />

    <VRDocContainer v-else-if="frontmatter.layout === 'doc'" />

    <VRPageContainer v-else />
  </div>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import type { VRThemeConfig } from '../types/theme'
import NotFound from '../NotFound.vue'
import VRPageContainer from './page/VRPageContainer.vue'
import VRHome from './VRHome.vue'
import VRDocContainer from './doc/VRDocContainer.vue'

const { frontmatter } = useData<VRThemeConfig>()

const route = useRoute()
</script>

<style lang="scss">
@import '../styles/vars.scss';

.VRContent {
  padding-top: $nav-height-desktop - $tool-nav-height;
}
</style>
