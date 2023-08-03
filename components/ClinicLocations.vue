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
  <TwoColumns class="mt-6">
    <template #left>
      <div class="title is-2 mb-6">Getting Here</div>

      <IconRow icon="car">
        <p>
          Limited parking is available at the Community Centre or the nearby
          Waitrose.
        </p>
      </IconRow>

      <IconRow icon="signpost">
        <p>
          Follow the signpost to the treatment room. It's through a door on the
          right hand side of the building.
        </p>
      </IconRow>

      <IconRow icon="calendarClock">
        <p>
          Clinic Hours: <br />
          Thursdays 13:30 - 17:30<br />
        </p>
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
    </template>
  </TwoColumns>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

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
