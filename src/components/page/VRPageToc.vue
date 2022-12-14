<template>
  <div class="VRPageToc">
    <ul>
      <li
        v-for="header in headers"
        :key="header.slug"
        :style="{ '--header-level': header.level }"
        :class="{ active: '#' + header.slug === currentActiveAnchor }"
      >
        <a
          :class="{ tocLink: true }"
          :href="'#' + header.slug"
          @click="
            () => {
              currentActiveAnchor = '#' + header.slug
              isClickInvoke = true
            }
          "
          >{{ header.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import type { VRThemeConfig } from '../../types/theme'
import { debounce } from '../../utils/helper'

const { page } = useData<VRThemeConfig>()
const headers = computed(() => {
  const minHeaderLevel = Math.min(...page.value.headers.map((h) => h.level))

  return page.value.headers.map((h) => ({ ...h, level: h.level - minHeaderLevel }))
})
const currentActiveAnchor = ref(headers.value[0].slug)
const isClickInvoke = ref(false)

const activeAnchor = debounce(() => {
  const specificAnchors = Array.from(document.querySelectorAll('.VRPage.VRMarkdown :is(h1, h2, h3, h4, h5, h6)')) as HTMLAnchorElement[]
  const fromTop = window.scrollY || window.pageYOffset

  if (isClickInvoke.value) {
    isClickInvoke.value = false
    return
  }

  for (let index = 0; index < specificAnchors.length; index++) {
    const anchors = specificAnchors[index]
    if (Math.abs(window.innerHeight + window.scrollY - document.body.offsetHeight) < 1) {
      currentActiveAnchor.value = specificAnchors[specificAnchors.length - 1].querySelector('a.header-anchor')!.getAttribute('href')!
      break
    } else if (anchors.offsetTop >= fromTop) {
      currentActiveAnchor.value = specificAnchors[index === 0 ? 0 : index - 1].querySelector('a.header-anchor')!.getAttribute('href')!
      break
    }
  }
}, 200)

onMounted(() => {
  activeAnchor()
  window.addEventListener('scroll', activeAnchor)
})

onUnmounted(() => window.removeEventListener('scroll', activeAnchor))
</script>

<style lang="scss">
@import '../../styles/vars.scss';

.VRPageToc {
  font-size: 15px;
  transition: color $u-duration ease;

  ul {
    margin: 0;
    padding: 0;

    li {
      padding: 5px 0;
      list-style: none;
      padding-left: calc(var(--header-level) * 15px);

      .tocLink {
        color: var(--c-text-1);
        text-decoration: none;
        transition: color $u-duration ease;
      }

      &.active .tocLink,
      .tocLink:hover {
        color: var(--c-brand);
        text-decoration: underline;
        text-underline-offset: 1px;
      }
    }
  }
}
</style>
