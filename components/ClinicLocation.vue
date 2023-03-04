<script setup>
import oxford640z14 from "~/assets/images/oxford640.z14.png";
import oxford640z12 from "~/assets/images/oxford640.z12.png";
const urlMap = useRuntimeConfig().urlMap;

const address = ref([
  "West Oxford Community Centre",
  "Botley Road",
  "Oxford",
  "OX2 0BT",
]);
</script>

<template>
  <div class="mt-6 is-flex-desktop clinic-location-wrapper">
    <div class="clinic-location-text">
      <div class="title is-2 mb-6">Getting Here</div>

      <div class="contact-block">
        <WebpIcon class="contact-icon" icon="car" />
        <div class="content">
          <p>
            Limited parking is available at the Community Centre or the nearby
            Waitrose.
          </p>
        </div>
      </div>

      <div class="contact-block">
        <WebpIcon class="contact-icon" icon="signpost" />
        <div class="content">
          <p>
            Follow the signpost to the treatment room. It's through a door on
            the right hand side of the building.
          </p>
        </div>
      </div>

      <div class="contact-block">
        <WebpIcon class="contact-icon" icon="calendarClock" />
        <div>
          Clinic Hours: <br />
          Thursdays 13:30 - 17:30<br />
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

    <a :href="urlMap" target="_blank" class="oxford-img">
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
  </div>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

.clinic-location-wrapper {
  // display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.clinic-location-text {
  min-width: 400px;
  // max-width: 50%;
  flex-grow: 1;
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

.postal-address {
  font-style: normal;
  color: var(--body-color);
}

.contact-block + .contact-block {
  border-top: 2px solid white;
  min-width: 400px;
}

.oxford-img {
  border: 2px solid #828c67;
  display: block;
  border-radius: 4px;
  margin-left: 2rem;
  max-width: 640px;
  overflow: hidden;
  position: relative;
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
