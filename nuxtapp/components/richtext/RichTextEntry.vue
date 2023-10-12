<script setup lang="ts">
import RichText from './RichText.vue';
type RichTextEntry = any;
defineProps<{
  object: RichTextEntry;
}>();

function without(object: any, key: string) {
  return Object.fromEntries(
    Object.entries(object).filter(([k, v]) => k !== key)
  );
}
</script>

<template>
  <p v-if="object.type === 'paragraph'">
    <RichText :json="object.children" />
  </p>
  <h1 v-else-if="object.type === 'heading' && object.level === 1">
    <RichText :json="object.children" />
  </h1>
  <h2 v-else-if="object.type === 'heading' && object.level === 2">
    <RichText :json="object.children" />
  </h2>
  <h3 v-else-if="object.type === 'heading' && object.level === 3">
    <RichText :json="object.children" />
  </h3>
  <h4 v-else-if="object.type === 'heading' && object.level === 4">
    <RichText :json="object.children" />
  </h4>
  <h5 v-else-if="object.type === 'heading' && object.level === 5">
    <RichText :json="object.children" />
  </h5>
  <h6 v-else-if="object.type === 'heading' && object.level === 6">
    <RichText :json="object.children" />
  </h6>
  <ol v-else-if="object.type === 'list' && object.format === 'ordered'">
    <RichText :json="object.children" />
  </ol>
  <ul v-else-if="object.type === 'list' && object.format === 'unordered'">
    <RichText :json="object.children" />
  </ul>
  <li v-else-if="object.type === 'list-item'">
    <RichText :json="object.children" />
  </li>
  <a v-else-if="object.type === 'link'" :href="object.url" target="_blank">
    <RichText :json="object.children" />
  </a>
  <b v-else-if="object.type === 'text' && object.bold">
    <RichTextEntry :object="without(object, 'bold')" />
  </b>
  <i v-else-if="object.type === 'text' && object.italic">
    <RichTextEntry :object="without(object, 'italic')" />
  </i>
  <u v-else-if="object.type === 'text' && object.underline">
    <RichTextEntry :object="without(object, 'underline')" />
  </u>
  <code v-else-if="object.type === 'text' && object.code">
    <RichTextEntry :object="without(object, 'code')" />
  </code>
  <s v-else-if="object.type === 'text' && object.strikethrough">
    <RichTextEntry :object="without(object, 'strikethrough')" />
  </s>
  <span v-else-if="object.type === 'text'">
    {{ object.text }}
  </span>
  <pre v-else>
    {{ object.type }}
  </pre>
</template>
