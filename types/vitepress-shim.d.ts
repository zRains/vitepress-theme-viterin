import type { Content } from 'vitepress'

declare module 'vue' {
  export interface GlobalComponents {
    Content: typeof Content
  }
}
