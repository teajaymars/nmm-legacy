<script lang="ts" setup>
const tel = ref("07860 639758");
const urlMap = useRuntimeConfig().urlMap;
const address = ref([
  "The Little Health Hub",
  "West Oxford Community Centre",
  "Botley Road",
  "OX2 0BT",
]);

const whatsappLink1 = computed<string>(() => {
  const waNum = tel.value.replace(/\s/g, "").replace(/^0/, "44");
  const waText =
    "Hi Nena, I'd like to book a massage at the Thursday Clinic, can we arrange a time?";
  return `https://wa.me/${waNum}?text=${encodeURIComponent(waText)}`;
});

const whatsappLink2 = computed<string>(() => {
  const waNum = tel.value.replace(/\s/g, "").replace(/^0/, "44");
  const waText =
    "Hi Nena, I'd like to book a massage at the Home Clinic, can we arrange a time?";
  return `https://wa.me/${waNum}?text=${encodeURIComponent(waText)}`;
});
</script>

<template>
  <section class="section" style="background: var(--palette-olive)">
    <div class="container" style="max-width: 40rem">
      <div
        class="title is-2 mb-6 mt-4 has-text-white"
        style="margin-left: 2rem"
      >
        Bookings
      </div>

      <div class="bookings-group">
        <div class="title is-4 mb-5">
          <span style="font-weight: 400">Thursday Clinic Appointments</span>
        </div>
        <div class="subtitle is-6">(2pm - 5:30pm)</div>

        <div class="booking-buttons">
          <a
            :href="whatsappLink1"
            target="_blank"
            class="button is-large is-success"
          >
            <WebpIcon icon="whatsapp" class="mr-3" />

            Book on WhatsApp
          </a>
          <a
            :href="useRuntimeConfig().bookings"
            target="_blank"
            class="button is-large is-primary"
          >
            Book Online
          </a>
        </div>

        <IconRow icon="pin" inverted-icon>
          <a :href="urlMap" target="_blank">
            <address class="postal-address">
              <template v-for="line of address"> {{ line }}<br /> </template>
            </address>
          </a>
        </IconRow>

        <IconRow icon="signpost" inverted-icon>
          <p>
            Follow signs for the
            <strong>Little Health Hub</strong>.
          </p>
          <p>
            The door to the clinic is to the right of the main entrance, on the
            front of the building. There is no waiting room, so please don’t
            arrive too early!
          </p>
        </IconRow>
      </div>

      <div class="bookings-group">
        <div class="title is-4 mb-5">
          <span style="font-weight: 400">Home Clinic Appointments</span>
        </div>
        <div class="subtitle is-6">(Tuesday - Friday)</div>

        <div class="booking-buttons">
          <a
            :href="whatsappLink2"
            target="_blank"
            class="button is-large is-success"
          >
            <WebpIcon icon="whatsapp" class="mr-3" />

            Book on WhatsApp
          </a>
          <a
            :href="useRuntimeConfig().bookings"
            target="_blank"
            class="button is-large is-primary"
          >
            Book Online
          </a>
        </div>

        <IconRow icon="pin" inverted-icon>
          <p>
            My home clinic is across the road from the Little Health Hub in OX2
            0BT.<br />
            Full address given upon booking.
          </p>
        </IconRow>
      </div>

      <div class="bookings-group is-hidden">
        <div class="title is-4 mb-5">
          <span style="font-weight: 400">Frequently Asked Questions</span>
        </div>
        <div class="content">
          <dl>
            <dt>What should I wear?</dt>
            <dd>
              Please wear comfortable clothing that you can move around in. For
              example, shorts and a t-shirt, or leggings and a vest top.
            </dd>

            <dt>What should I bring?</dt>
            <dd>
              Please bring a face mask, and a bottle of water. If you have a
              towel or blanket you would like to use, please bring that too.
            </dd>

            <dt>What should I expect?</dt>
            <dd>
              I will ask you to fill out a short health questionnaire, and we
              will discuss your reasons for coming to see me. I will then
              perform a postural assessment and any special tests as required,
              to allow us to create a plan tailored to your specific needs.
            </dd>

            <dt>What happens next?</dt>
            <dd>
              We will also begin treatment in your first session. The first step
              to a more flexible, relaxed and revitalised you!
            </dd>

            <dt>What is your cancellation policy?</dt>
            <dd>
              Please give at least 24 hours notice if you need to cancel or
              reschedule your appointment. If you cancel within 24 hours of your
              appointment, you will be charged the full price of the session.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

.bookings-group {
  padding: 2rem;
  border-radius: 1rem;
  background: #f7f7f7;
  margin: 2rem 0;
}
.postal-address {
  font-style: normal;
  color: black !important;
}

.icon-row + .icon-row {
  border-color: transparent;
}
dt {
  font-weight: bold;
  margin-top: 1rem;
}

.booking-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  margin: 0.75rem auto;
  > a {
    width: 100%;
  }
  @include tablet {
    flex-direction: row;
    max-width: 100%;
    justify-content: space-around;
    > a {
      width: 50%;
    }
  }
}
</style>
