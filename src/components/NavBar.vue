<template>
  <header class="header z-40">
    <router-link
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      <img v-show="!isDark" src="/avatar.png" alt="logo" />
      <img v-show="isDark" src="/avatar.png" alt="logo" />
    </router-link>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <a href="https://shin.is-a.dev/repo" target="_blank">
          <span>Cydia</span>
        </a>
        <router-link to="/posts">
          <span class="lt-md:hidden">Blog</span>
          <ri-article-line class="md:hidden" />
        </router-link>
        <router-link to="/talks" class="lt-md:hidden"> Talks </router-link>
        <router-link to="/projects">
          <span class="lt-md:hidden">Projects</span>
          <ri-lightbulb-line class="md:hidden" />
        </router-link>
        <router-link to="/bookmarks" title="Bookmarks" class="lt-md:hidden">
          <ri-bookmark-line />
        </router-link>
        <router-link to="/notes" title="Notes">
          <ri-sticky-note-line />
        </router-link>
        <a
          href="https://twitter.com/tachib_shin"
          target="_blank"
          title="Twitter"
        >
          <feather-twitter />
        </a>
        <a
          href="https://github.com/tachibana-shin"
          target="_blank"
          title="GitHub"
        >
          <uil-github-alt />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" class="lt-md:hidden">
          <la-rss-square style="font-size: 1.25rem; margin: 0 -0.125rem" />
        </a>
        <toggle-theme />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { isDark } from "/~/logics";
</script>

<style lang="scss" scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
  > * {
    margin: auto;
  }
  img {
    margin-bottom: 0;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s ease;
    opacity: 0.6;
    outline: none;
    &:hover {
      opacity: 1;
      text-decoration-color: inherit;
    }
  }
  .right {
    display: grid;
    grid-gap: 1.2rem;
    grid-auto-flow: column;
    > * {
      margin: auto;
    }
  }
}
</style>
