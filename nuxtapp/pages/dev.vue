<script setup lang="ts">
import backMassage from '~/assets/images/backMassage.webp';
import legMassage from '~/assets/images/legMassage.webp';
import nenaProfilePic from '~/assets/images/nenaProfilePic.webp';
import * as St from '~/strapi-types';
import RichText from '~/components/richtext/RichText.vue';

const { find, findOne } = useStrapi();

// const gs = await useAsyncData(async () => {
//   const data = await find<St.GlobalSettings>('global-settings');
//   return data;
// });

const { data: frontPageObject } = await useAsyncData(async () => {
  const data = await findOne<St.FrontPage>('front-page', { populate: '*' });
  return data;
});

const fp = computed<St.FrontPage>(() => {
  return frontPageObject.value!.data!.attributes;
});
</script>

<template>
  <HeroImage :image="backMassage">
    <div class="hero-text">
      {{ fp?.HeroText }}
    </div>
  </HeroImage>

  <section class="section section-1">
    <div class="anchor" id="philosophy"></div>
    <div class="container mt-6" style="max-width: 44rem">
      <div class="title is-2" style="max-width: 20rem">
        {{ fp.BiographyZone.Title }}
      </div>

      <div class="columns mt-6">
        <div class="column is-one-third">
          <figure class="image nena-profile-pic">
            <img class="is-rounded" :src="nenaProfilePic" />
          </figure>
        </div>
        <div class="column">
          <div class="content">
            <RichText :json="fp.BiographyZone.Description" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <HeroImage :image="legMassage" />

  <section class="section section-2">
    <div class="anchor" id="services"></div>
    <div class="container">
      <MassageList />
    </div>
  </section>
</template>
