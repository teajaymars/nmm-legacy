<script setup lang="ts">
import * as St from '~/strapi-types';

const { findOne } = useStrapi();

const { data: instaCode } = await useAsyncData(async () => {
  const { data } = await findOne<St.FrontPage>('front-page');
  return data.attributes.InstagramEmbedCode;
});

const { data: settings } = await useAsyncData(async () => {
  const { data } = await findOne<St.GlobalSettings>('global-settings');
  return data.attributes;
});

// const urlMap = useRuntimeConfig().urlMap;

const whatsappLink = computed<string>(() => {
  const tel = settings.value.PhoneNumber;
  const waText = settings.value.WhatsAppMessage;
  const waNum = tel.replace(/\s/g, '').replace(/^0/, '44');
  return `https://wa.me/${waNum}?text=${encodeURIComponent(waText)}`;
});

const insta = computed<string>(() => {
  const raw = settings.value.InstagramAccount;
  return raw.replace(/^@/, '');
});
</script>

<template>
  <TwoColumns class="mt-6">
    <template #left>
      <div class="title is-2 mb-6">Get In Touch</div>
      <IconRow class="is-justify-content-center">
        <a
          :href="whatsappLink"
          target="_blank"
          class="button is-large is-success"
        >
          <WebpIcon icon="whatsapp" class="mr-3" />

          Book on WhatsApp
        </a>
      </IconRow>

      <IconRow icon="instagram">
        <a
          :href="'https://www.instagram.com/' + insta"
          class="magic-underline magic-underline--white"
          target="_blank"
        >
          @{{ insta }}
        </a>
      </IconRow>

      <IconRow icon="whatsapp">
        <a
          :href="whatsappLink"
          class="magic-underline magic-underline--white"
          target="_blank"
          >{{ settings.PhoneNumber }}</a
        >
      </IconRow>

      <IconRow icon="envelope">
        <a
          :href="'mailto:' + settings.EmailAddress"
          target="_blank"
          class="magic-underline magic-underline--white"
        >
          {{ settings.EmailAddress }}
        </a>
      </IconRow>
    </template>

    <template #right v-if="instaCode">
      <div class="instagram-wrapper">
        <div class="instagram-html" v-html="instaCode" />
      </div>
    </template>
  </TwoColumns>
</template>

<style lang="scss" scoped>
@import '~/node_modules/bulma/sass/utilities/mixins.sass';

.postal-address {
  font-style: normal;
  color: var(--body-color);
}
.instagram-html {
  @include mobile {
    display: none;
  }
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  background: white;
  width: 28rem;
  box-shadow: 0 0 0 2px #dbdbdb;
}
</style>
