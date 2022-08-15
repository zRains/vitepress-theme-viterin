import { ref, computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import type { VRThemeConfig } from '../types/theme'
import { getSidebar } from '../utils/helper'

const isOpen = ref(false)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function toggle() {
  // eslint-disable-next-line no-unused-expressions
  isOpen.value ? close() : open()
}

export default function useSidebar() {
  const route = useRoute()
  const { theme, frontmatter } = useData<VRThemeConfig>()
  const sidebar = computed(() => {
    const sidebarConfig = theme.value.sidebar
    const { relativePath } = route.data

    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : []
  })
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0
  })

  return {
    isOpen,
    sidebar,
    hasSidebar,
    open,
    close,
    toggle
  }
}
