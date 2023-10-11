<script setup lang="ts">
import * as St from '~/strapi-types';

const { findOne } = useStrapi();

const { data: massages } = await useAsyncData(async () => {
  const { data } = await findOne<St.FrontPage>('front-page', {
    populate: ['Massages', 'Massages.PriceList'],
  });
  return data.attributes.Massages;
});

const oddNumber = computed(() => {
  if (massages.value !== null) {
    return massages.value.length % 2 === 1;
  }
  return false;
});
</script>

<template>
  <div class="massage-list" v-if="oddNumber && massages">
    <Massage :m="massages[0]" />
  </div>
  <div class="massage-list">
    <Massage v-for="m of massages?.slice(oddNumber ? 1 : 0)" :m="m" />
  </div>
</template>

<style lang="scss" scoped>
.massage-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.massage-list + .massage-list {
  margin-top: 2rem;
}
</style>
