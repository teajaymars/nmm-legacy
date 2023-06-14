<script lang="ts" setup>
defineProps<{
  icon: string;
}>();
</script>

<template>
  <div class="icon-row">
    <WebpIcon class="icon-row__icon" :icon="icon" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.icon-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  word-break: break-word;
  .icon-row__icon {
    margin-right: 1rem;
    height: auto;
    flex-grow: 0;
    padding-top: 1px;
  }
}

.icon-row + .icon-row {
  border-top: 2px solid white;
}
</style>
