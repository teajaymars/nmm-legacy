<script setup lang="ts">
import oxford640z14 from '~/assets/images/oxford640.z14.png';
import oxford640z12 from '~/assets/images/oxford640.z12.png';
import RichText from '~/components/richtext/RichText.vue';
import * as St from '~/strapi-types';

const { findOne } = useStrapi();

const { data: zone } = await useAsyncData(async () => {
  const { data } = await findOne<St.FrontPage>('front-page', {
    populate: ['LocationZone', 'LocationZone.LocationList'],
  });
  return data.attributes.LocationZone;
});

const { data: settings } = await useAsyncData(async () => {
  const { data } = await findOne<St.GlobalSettings>('global-settings');
  return data.attributes;
});
</script>

<template>
  <div class="mt-6 mb-6" v-if="zone && settings">
    <TwoColumns>
      <template #left>
        <div class="title is-2 mb-6">{{ zone.Title }}</div>
        <div class="content">
          <RichText :json="zone.Blurb" />
        </div>
      </template>
      <template #right>
        <a :href="settings.GoogleMapsURL" target="_blank" class="oxford-img">
          <img
            :src="oxford640z12"
            alt="Location of Nena Mager Massage Clinic: West Oxtord Community Centre"
          />
          <div
            class="oxford-img-overlay"
            :style="{
              backgroundImage: `url('${oxford640z14}')`,
            }"
          />
        </a>
      </template>
    </TwoColumns>

    <div class="clinic-locations mt-6">
      <div v-for="l of zone.LocationList">
        <div class="title is-3">{{ l.Title }}</div>

        <IconRow icon="pin" v-if="l.Address && l.Address.length">
          <RichText :json="l.Address" />
        </IconRow>

        <IconRow icon="calendarClock" v-if="l.Times && l.Times.length">
          <RichText :json="l.Times" />
        </IconRow>

        <IconRow icon="car" v-if="l.Parking && l.Parking.length">
          <RichText :json="l.Parking" />
        </IconRow>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/node_modules/bulma/sass/utilities/mixins.sass';

strong {
  color: white;
}

.clinic-locations {
  display: flex;
  gap: 4rem;
  flex-direction: column;
  align-items: center;
  @include desktop {
    justify-content: space-around;
    flex-direction: row;
    gap: 0rem;
    align-items: flex-start;
  }
  > div {
    padding: 2rem;
    flex-grow: 1;
    max-width: 28rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }
}

.postal-address {
  font-style: normal;
  color: var(--body-color);
}

.oxford-img {
  border: 2px solid #828c67;
  display: block;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  max-width: 40rem;
  img {
    display: block;
    max-width: 100%;
  }

  .oxford-img-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
  }

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s;
    .oxford-img-overlay {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
}
</style>
