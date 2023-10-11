<script setup lang="ts">
import type { Massage } from '~/strapi-types';
import RichText from '~/components/richtext/RichText.vue';

defineProps<{
  m: Massage;
}>();
</script>

<template>
  <a
    class="massage"
    href="https://nena-mager-massage-therapy.uk2.cliniko.com/bookings?embedded=true"
    target="_blank"
  >
    <h4 class="title is-4 massage-title">
      <span class="magic-underline">
        {{ m.Title }}
      </span>
    </h4>

    <div class="content">
      <RichText :json="m.Description" />
    </div>
    <div v-for="price in m.PriceList" class="massage-price">
      <span class="price-left">{{ price.Time }}</span>
      <span class="bullet">&bullet;</span>
      <span class="price-right">
        <span class="pounds">&pound;</span>
        {{ price.Price }}</span
      >
      <div
        v-if="price.AdditionalNotes"
        class="is-size-7 has-text-grey-dark has-text-centered"
      >
        {{ price.AdditionalNotes }}
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.massage {
  flex-grow: 0;
  flex-shrink: 0;
  display: block;
  max-width: 28rem;
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 2px var(--palette-linen);
  transition: transform 100ms ease-in-out, box-shadow 100ms ease-in-out;
  color: #4a4a4a;
  &:hover {
    box-shadow: 0px 0px 0px 2px #cbc2b7;
  }
  .massage-title {
    color: var(--palette-brown);
    text-align: center;
    &:hover {
      color: var(--text);
    }
  }

  .massage-price {
    color: var(--palette-brown);
    margin-top: 1rem;
    text-align: center;
    .price-left,
    .price-right,
    .bullet {
      font-size: 1.2rem;
      font-weight: bold;
    }
    &:hover {
      color: var(--text);
    }
    .pounds {
      font-size: 0.7em;
      margin-right: 0.1rem;
      opacity: 0.8;
      line-height: 10px;
    }
    .bullet {
      margin: 0 1rem;
      opacity: 0.3;
    }
  }
}
</style>
