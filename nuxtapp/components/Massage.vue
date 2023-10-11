<script setup>
const props = defineProps({
  massageTitle: String,
  options: Array,
});
const url = useRuntimeConfig().bookings;
</script>

<template>
  <a
    class="massage"
    :href="url"
    target="_blank"
    :title="'Book massage: ' + massageTitle"
  >
    <div class="content">
      <div class="title is-4 massage__title">
        <span class="magic-underline">
          {{ massageTitle }}
        </span>
      </div>
      <slot />
    </div>
  </a>
</template>

<style lang="scss" scoped>
.massage {
  display: block;
  max-width: 28rem;
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 2px var(--palette-linen);
  transition: transform 100ms ease-in-out, box-shadow 100ms ease-in-out;
  color: #4a4a4a;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 0px 2px #cbc2b7;
  }
}

.massage__title {
  color: var(--palette-brown);
  text-align: center;
  &:hover {
    color: var(--text);
  }
}
</style>
