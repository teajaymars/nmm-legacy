<script lang="ts" setup>
import RichText from '~/components/richtext/RichText.vue';
import * as St from '~/strapi-types';

const { findOne } = useStrapi();

const { data: bookingsList } = await useAsyncData(async () => {
  const { data } = await findOne<St.BookingsPage>('bookings-page', {
    populate: '*',
  });
  return data.attributes.BookingsList;
});

const { data: faq } = await useAsyncData(async () => {
  const { data } = await findOne<St.BookingsPage>('faq', {});
  return data.attributes.FaqEntries;
});

const { data: settings } = await useAsyncData(async () => {
  const { data } = await findOne<St.GlobalSettings>('global-settings');
  return data.attributes;
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

      <div v-for="b of bookingsList" class="bookings-group">
        <div class="title is-4 mb-5">
          <span style="font-weight: 400">{{ b.Title }}</span>
        </div>
        <div class="subtitle is-6">{{ b.Subtitle }}</div>

        <div class="booking-buttons">
          <a :href="whatsappLink1" target="_blank" class="button is-success">
            <WebpIcon icon="whatsapp" class="mr-3" />

            Book on WhatsApp
          </a>
          <a
            :href="useRuntimeConfig().bookings"
            target="_blank"
            class="button is-primary"
          >
            Book Online
          </a>
        </div>

        <IconRow icon="pin" inverted-icon>
          <div class="content">
            <RichText :json="b.Address" />
          </div>
        </IconRow>

        <IconRow
          icon="signpost"
          inverted-icon
          v-if="b.Signposts && b.Signposts.length"
        >
          <RichText :json="b.Signposts" />
        </IconRow>
      </div>

      <div class="bookings-faq">
        <div class="title is-4 mb-5">
          <span style="font-weight: 400">Frequently Asked Questions</span>
        </div>
        <div class="content">
          <dl v-for="q of faq.Entries">
            <dt>{{ q.question }}</dt>
            <dd><RichText :json="q.answer" /></dd>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/node_modules/bulma/sass/utilities/mixins.sass';

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
      width: 42%;
    }
  }
}
</style>
