<template>
  <div class="RelativeTime">{{ getRelativeTime(time, compareTime) }}</div>
</template>

<script setup lang="ts">
import { getRelativeTime } from '../../utils/helper'

defineProps<{
  time: number
  compareTime?: number
}>()
</script>
