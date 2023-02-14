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
      <div class="title is-4 massage__title">{{ massageTitle }}</div>
      <slot />
      <div v-for="{ duration, price } of options" class="massage__price">
        {{ duration }} mins <span class="bullet">&bullet;</span>
        <span class="pounds">&pound;</span>{{ price }}
      </div>
    </div>
  </a>
</template>

<style>
.massage {
  display: block;
  width: 28rem;
  padding: 2rem;
  margin: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 2px var(--palette-linen);
  transition: transform 100ms ease-in-out;
  color: #4a4a4a;
}
.massage:hover {
  transform: scale(1.03);
}

.massage__title {
  color: var(--palette-brown);
  text-align: center;
}
.massage__title:hover {
  color: var(--palette-black);
}

.massage__price {
  color: var(--palette-brown);
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
}
.massage__price:hover {
  color: var(--palette-black);
}
.massage__price .pounds {
  font-size: 0.6em;
  margin-right: 0.1rem;
}
.massage__price .bullet {
  margin: 0 1rem;
  opacity: 0.3;
}
</style>
