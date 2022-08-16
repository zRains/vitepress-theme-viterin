<template>
  <div class="VRMenuPop">
    <template v-if="items">
      <template v-for="item in items" :key="item.text">
        <VRMenuLink v-if="'link' in item" :class="{ group: true }" :item="item" />
        <VRMenuGroup v-else :class="{ group: true }" :text="item.text" :items="item.items" />
      </template>
    </template>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { NavItemChildren, NavItemWithLink } from '../../types/theme'
import VRMenuLink from './VRMenuLink.vue'
import VRMenuGroup from './VRMenuGroup.vue'

defineProps<{
  items?: (NavItemChildren | NavItemWithLink)[]
}>()
</script>

<style lang="scss">
@import '../../styles/vars.scss';

.VRMenuPop {
  position: absolute;
  min-width: 150px;
  border: 1px solid var(--c-divider-light);
  background-color: var(--c-bg);
  box-shadow: $shadow-3;

  .group:not(:first-child) {
    border-top: 1px solid var(--c-divider-light);
  }
}
</style>
