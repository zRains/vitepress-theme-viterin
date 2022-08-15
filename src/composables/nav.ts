// https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/composables/nav.ts

import { ref } from 'vue'

export const isScreenOpen = ref(false)

/**
 * Close screen when the user resizes the window wider than tablet size.
 */
function closeScreenOnTabletWindow() {
  // eslint-disable-next-line no-unused-expressions, no-use-before-define
  window.outerWidth >= 768 && closeScreen()
}

export function openScreen() {
  isScreenOpen.value = true
  window.addEventListener('resize', closeScreenOnTabletWindow)
}

export function closeScreen() {
  isScreenOpen.value = false
  window.removeEventListener('resize', closeScreenOnTabletWindow)
}

export function toggleScreen() {
  // eslint-disable-next-line no-unused-expressions
  isScreenOpen.value ? closeScreen() : openScreen()
}
