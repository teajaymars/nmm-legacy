<script setup>
const urlMap = ref(
  "https://www.google.co.uk/maps/place/West+Oxford+Community+Centre/@51.7531613,-1.2758741,17.55z/data=!4m6!3m5!1s0x4876c69aff5db361:0xa8addbae62bb67cc!8m2!3d51.7528669!4d-1.2751845!16s%2Fg%2F1v3hzh5f"
);
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
  <div class="columns mt-6">
    <div class="column">
      <div class="title is-2 mb-6">Get In Touch</div>
      <div class="contact-block">
        <WebpIcon class="contact-icon" icon="instagram" />
        <div>
          <a
            :href="'https://www.instagram.com/' + insta"
            class="magic-underline magic-underline--white"
          >
            @{{ insta }}
          </a>
        </div>
      </div>
      <div class="contact-block">
        <WebpIcon class="contact-icon" icon="phone" />
        <div>
          <a
            :href="'tel:' + tel"
            class="magic-underline magic-underline--white"
            >{{ tel }}</a
          >
        </div>
      </div>
      <div class="contact-block">
        <WebpIcon class="contact-icon" icon="envelope" />
        <div>
          <a
            href="mailto:hello@nenamagermassage.co.uk"
            target="_blank"
            class="magic-underline magic-underline--white"
          >
            hello@nenamagermassage.co.uk
          </a>
        </div>
      </div>
      <div class="contact-block">
        <WebpIcon class="contact-icon" icon="pin" />
        <div>
          <a :href="urlMap" target="_blank">
            <address class="postal-address">
              <template v-for="line of address"> {{ line }}<br /> </template>
            </address>
          </a>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div
        class="instagram--wrapper"
        v-html="useRuntimeConfig().instagramEmbedCode"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

.postal-address {
  font-style: normal;
  color: var(--body-color);
}

.contact-block {
  display: flex;
  max-width: 22rem;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  .contact-icon {
    margin-right: 1rem;
    height: auto;
    flex-grow: 0;
    padding-top: 1px;
  }
}

.contact-block + .contact-block {
  border-top: 2px solid white;
}

a {
  color: white;
}

.instagram--wrapper {
  border-radius: 4px;
  display: flex;
  background: white;
  width: 28rem;
  overflow: hidden;
  box-shadow: 0 0 0 2px #dbdbdb;
  @include desktop {
    margin-top: -3rem;
  }
}
</style>
