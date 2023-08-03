<script setup>
import webpEnvelope from "~/assets/images/icons/envelope.webp";
import webpInstagram from "~/assets/images/icons/instagram.webp";
import webpPhone from "~/assets/images/icons/phone.webp";
import webpPin from "~/assets/images/icons/pin.webp";
import webpCalendarClock from "~/assets/images/icons/calendar-clock.webp";
import webpCalendar from "~/assets/images/icons/calendar.webp";
import webpCar from "~/assets/images/icons/car.webp";
import webpSignpost from "~/assets/images/icons/signpost.webp";
import webpTimeline from "~/assets/images/icons/timeline.webp";
import webpWhatsapp from "~/assets/images/icons/whatsapp.webp";
const images = {
  envelope: webpEnvelope,
  instagram: webpInstagram,
  phone: webpPhone,
  pin: webpPin,
  whatsapp: webpWhatsapp,

  calendarClock: webpCalendarClock,
  calendar: webpCalendar,
  car: webpCar,
  signpost: webpSignpost,
  timeline: webpTimeline,
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
