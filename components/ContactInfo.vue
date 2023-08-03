<script setup lang="ts">
const urlMap = useRuntimeConfig().urlMap;
const tel = ref("07860 639758");
const insta = ref("nenamager_massagetherapy");
const address = ref([
  "West Oxford Community Centre",
  "Botley Road",
  "Oxford",
  "OX2 0BT",
]);

const whatsappLink1 = computed<string>(() => {
  const waNum = tel.value.replace(/\s/g, "").replace(/^0/, "44");
  const waText = "Hi Nena, I'd like to book a massage";
  return `https://wa.me/${waNum}?text=${encodeURIComponent(waText)}`;
});

const whatsappLink2 = computed<string>(() => {
  const waNum = tel.value.replace(/\s/g, "").replace(/^0/, "44");
  const waText = "Hi Nena, I'd like to make an enquiry";
  return `https://wa.me/${waNum}?text=${encodeURIComponent(waText)}`;
});
</script>

<template>
  <TwoColumns class="mt-6">
    <template #left>
      <div class="title is-2 mb-6">Get In Touch</div>
      <IconRow class="is-justify-content-center">
        <a
          :href="whatsappLink1"
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
          :href="whatsappLink2"
          class="magic-underline magic-underline--white"
          target="_blank"
          >{{ tel }}</a
        >
      </IconRow>

      <IconRow icon="envelope">
        <a
          href="mailto:hello@nenamagermassage.co.uk"
          target="_blank"
          class="magic-underline magic-underline--white"
        >
          hello@nenamagermassage.co.uk
        </a>
      </IconRow>

      <IconRow icon="pin">
        <a :href="urlMap" target="_blank">
          <address class="postal-address">
            <template v-for="line of address"> {{ line }}<br /> </template>
          </address>
        </a>
      </IconRow>
    </template>

    <template #right>
      <div class="instagram-wrapper">
        <div
          class="instagram-html"
          v-html="useRuntimeConfig().instagramEmbedCode"
        />
      </div>
    </template>
  </TwoColumns>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

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
