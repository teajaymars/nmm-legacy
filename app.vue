<script setup>
useHead({
  title: "Nena Mager Massage Therapy in Oxford",
  meta: {
    description: "Massage therapy in West Oxford, UK",
  },
});
</script>

<template>
  <div class="app-wrapper">
    <WebsiteHeader />
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

.app-wrapper {
  /* Make room for the navbar */
  padding-top: 8rem;
}
</style>
