<template>
  <div class="VRMenuLink">
    <VRLink :href="item.link" :class="{ isActive: isActive(page.relativePath, item.activeMatch || item.link) }">{{ item.text }}</VRLink>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import type { NavItemWithLink, VRThemeConfig } from '../../types/theme'
import { isActive } from '../../utils/helper'
import VRLink from '../VRLink.vue'

defineProps<{
  item: NavItemWithLink
}>()

const { page } = useData<VRThemeConfig>()
</script>

<style lang="scss">
.VRMenuLink {
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;

  .VRLink {
    padding: 8px;
  }

  &:hover,
  &.isActive {
    .VRLink {
      background-color: var(--c-bg-mute);
      color: var(--c-brand);
    }
  }
}
</style>
