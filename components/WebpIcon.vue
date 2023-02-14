<script setup>
import webpEnvelope from "~/assets/images/icons/envelope.webp";
import webpInstagram from "~/assets/images/icons/instagram.webp";
import webpPhone from "~/assets/images/icons/phone.webp";
import webpPin from "~/assets/images/icons/pin.webp";
const images = {
  envelope: webpEnvelope,
  instagram: webpInstagram,
  phone: webpPhone,
  pin: webpPin,
};

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const icon = computed(() => images[props.icon]);
</script>

<template>
  <img :src="icon" width="28" height="28" />
</template>
