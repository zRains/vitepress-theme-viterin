<template>
  <aside v-if="hasSidebar" :class="{ VRSidebar: true, isOpen }">
    <nav class="VRSidebarNav">
      <VRSidebarGroup
        v-for="group in sidebar"
        :key="group.text"
        :class="{ group: true }"
        :text="group.text"
        :items="group.items"
        :collapsible="group.collapsible"
        :is-collapsed="group.isCollapsed"
      />
    </nav>
  </aside>
</template>

<script setup lang="ts">
import useSidebar from '../../composables/sidebar'
import VRSidebarGroup from './VRSidebarGroup.vue'

const { isOpen, sidebar, hasSidebar } = useSidebar()
</script>

<style lang="scss">
@use 'sass:math';
@import '../../styles/vars.scss';

$content-full-width: $sidebar-width + $max-content-width + $aside-width + 60px;

.VRSidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: $z-index-sidebar;
  padding: $nav-height-desktop + 30px 20px 80px 20px;
  width: $sidebar-width;
  background-color: var(--c-bg);
  opacity: 0;
  transform: translateX(-100%);
  transition: background-color $u-duration ease, opacity $u-duration ease, transform $u-duration * 1.5 ease;
  overflow-y: auto;

  .VRSidebarNav {
    .group {
      padding: 10px 0;

      &:not(:first-child) {
        transition: border-color $u-duration ease;
        border-top: 1px solid var(--c-divider-light);
      }
    }
  }

  &.isOpen {
    opacity: 1;
    transform: translateX(0);
  }
}

// 移动端适配
@media only screen and (min-width: $content-full-width) {
  .VRSidebar {
    padding: 0 30px 80px calc((100% - #{$content-full-width}) / 2 + 10px);
    width: calc(#{$sidebar-width} + (100% - #{$content-full-width}) / 2);
  }
}

// 弹出侧边栏
@media only screen and (min-width: $b-md) {
  .VRSidebar {
    z-index: 1;
    margin-top: $nav-height-desktop + 30px;
    padding-top: 0;
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
