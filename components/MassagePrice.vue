<script lang="ts" setup>
defineProps<{ price: string; duration: string }>();
</script>

<template>
  <div class="massage__price">
    {{ duration }} mins <span class="bullet">&bullet;</span>
    <span class="pounds">&pound;</span>{{ price }}
  </div>
</template>

<style lang="scss" scoped>
.massage__price {
  color: var(--palette-brown);
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
  &:hover {
    color: var(--text);
  }
  .pounds {
    font-size: 0.7em;
    margin-right: 0.2rem;
    opacity: 0.8;
  }
  .bullet {
    margin: 0 1rem;
    opacity: 0.3;
  }
}
</style>
