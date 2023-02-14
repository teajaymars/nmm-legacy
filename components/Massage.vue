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
      <div v-for="{ duration, price } of options" class="massage__price">
        {{ duration }} mins <span class="bullet">&bullet;</span>
        <span class="pounds">&pound;</span>{{ price }}
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.massage {
  display: block;
  max-width: 28rem;
  padding: 2rem;
  margin: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 2px var(--palette-linen);
  transition: transform 100ms ease-in-out;
  color: #4a4a4a;
  &:hover {
    transform: scale(1.03);
  }
}

.massage__title {
  color: var(--palette-brown);
  text-align: center;
  &:hover {
    color: var(--text);
  }
}

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
