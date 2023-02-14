<script setup>
const sectionRef = ref(null);
const relativeY = ref(0);

const parallaxY = computed(() => {
  return -relativeY.value * 0.5;
});

defineProps({
  image: {
    type: String,
    required: true,
  },
});

function updateOffset() {
  // Get the centre y of the viewport
  const viewportCentreY = window.innerHeight / 2;
  // Get the centre y of the section relative to the viewport
  const { top, height } = sectionRef.value.getBoundingClientRect();
  relativeY.value = top + height / 2 - viewportCentreY;
}

if (process.client) {
  useEventListener(window, "scroll", updateOffset);
}
onMounted(updateOffset);
</script>

<template>
  <section
    ref="sectionRef"
    class="hero is-danger is-fullheight"
    :style="{
      backgroundImage: 'url(' + image + ')',
      backgroundPosition: 'center ' + parallaxY + 'px',
    }"
  >
    <div class="hero-body is-align-items-start is-justify-content-center">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 85vh;
  background-size: cover;
  box-shadow: 0 0 15px 1px rgba(128, 128, 128, 0.2) inset;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
}
</style>
