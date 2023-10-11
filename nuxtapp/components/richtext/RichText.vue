<script setup lang="ts">
import RichTextEntry from './RichTextEntry.vue';
defineProps<{
  json: any;
}>();
</script>
<template>
  <RichTextEntry v-for="object in json" :object="object" />
</template>
