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
  const { data } = await findOne<St.Faq>('faq', { populate: '*' });
  return data.attributes;
});

const { data: settings } = await useAsyncData(async () => {
  const { data } = await findOne<St.GlobalSettings>('global-settings');
  return data.attributes;
});

const whatsappLink = computed<string>(() => {
  if (settings.value === null) {
    return '';
  }
  const tel = settings.value.PhoneNumber;
  const waText = settings.value.WhatsAppMessage;
  const waNum = tel.replace(/\s/g, '').replace(/^0/, '44');
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

      <div v-for="b of bookingsList" class="bookings-group">
        <div class="title is-4 mb-5">
          <span style="font-weight: 400">{{ b.Title }}</span>
        </div>
        <div class="subtitle is-6">{{ b.Subtitle }}</div>

        <div class="booking-buttons">
          <a :href="whatsappLink" target="_blank" class="button is-success">
            <WebpIcon icon="whatsapp" class="mr-3" />

            Book on WhatsApp
          </a>
          <a
            :href="settings!.ClinikoURL"
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

      <div class="bookings-faq" v-if="faq && faq.Enabled">
        <div class="title is-4 mb-5">
          <span style="font-weight: 400">Frequently Asked Questions</span>
        </div>
        <div class="content">
          <dl>
            <template v-for="q in faq.Entries">
              <dt>{{ q.Question }}</dt>
              <dd><RichText :json="q.Answer" /></dd>
            </template>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/node_modules/bulma/sass/utilities/mixins.sass';

.bookings-group,
.bookings-faq {
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
