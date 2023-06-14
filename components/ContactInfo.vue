<script setup>
const urlMap = useRuntimeConfig().urlMap;
const tel = ref("07860 639758");
const insta = ref("nenamager_massagetherapy");
const address = ref([
  "West Oxford Community Centre",
  "Botley Road",
  "Oxford",
  "OX2 0BT",
]);
</script>

<template>
  <TwoColumns class="mt-6">
    <template #left>
      <div class="title is-2 mb-6">Get In Touch</div>
      <IconRow icon="instagram">
        <a
          :href="'https://www.instagram.com/' + insta"
          class="magic-underline magic-underline--white"
          target="_blank"
        >
          @{{ insta }}
        </a>
      </IconRow>

      <IconRow icon="phone">
        <a
          :href="'tel:' + tel"
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
