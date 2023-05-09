<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { property: "og:title", content: "Tachibana Shin (橘芯)" },
    {
      property: "og:image",
      content: "https://shin.is-a.dev/avatar-flat.jpg",
    },
    {
      name: "description",
      content: "Tachibana Shin (橘芯)'s Portfolio",
    },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:creator", content: "@tachib_shin" },
  ],
});
</script>
