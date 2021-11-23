<template>
  <span>
    <carbon-logo-github class="inline-block opacity-70" />
    <a
      class="opacity-50 ml-1"
      :href="`https://github.com/${repo}`"
      target="_blank"
      >{{ repo.startsWith("tachibana-shin/") ? repo.slice(6) : repo }}</a
    >
  </span>
</template>

<script setup lang="ts">
defineProps<{ repo: string }>();
</script>
