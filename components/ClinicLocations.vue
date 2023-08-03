<script setup>
import oxford640z14 from "~/assets/images/oxford640.z14.png";
import oxford640z12 from "~/assets/images/oxford640.z12.png";
const urlMap = useRuntimeConfig().urlMap;

const address = ref([
  "The Little Health Hub",
  "West Oxford Community Centre",
  "Botley Road",
  "OX2 0BT",
]);
</script>

<template>
  <div class="mt-6 mb-6">
    <TwoColumns>
      <template #left>
        <div class="title is-2 mb-6">Clinic Locations</div>
        <div class="content">
          <p>I work from two locations:</p>
          <ul>
            <li>The <strong>Little Health Hub</strong> on Thursdays.</li>
            <li>
              My <strong>home clinic</strong> on Tuesdays, Wednesdays, Thursdays
              and Fridays.
            </li>
          </ul>
          <p>The locations are a one-minute walk from each other.</p>
        </div>
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

    <div class="clinic-locations mt-6">
      <div>
        <div class="title is-3">Thursday Clinic</div>

        <IconRow icon="pin">
          <a :href="urlMap" target="_blank">
            <address class="postal-address">
              <template v-for="line of address"> {{ line }}<br /> </template>
            </address>
          </a>
        </IconRow>

        <IconRow icon="calendarClock">
          <p>
            Clinic Hours: <br />
            <strong>Thursday</strong> 2pm - 5:30pm<br />
          </p>
        </IconRow>

        <IconRow icon="car">
          <p>Parking available at the Community Centre.</p>
        </IconRow>
      </div>

      <div>
        <div class="title is-3">Home Clinic</div>

        <IconRow icon="pin">
          <p>
            My home clinic is across the road from the Little Health Hub in OX2
            0BT.
          </p>
          <p>Full address given upon booking.</p>
        </IconRow>

        <IconRow icon="calendarClock">
          <p>
            Clinic Hours: <br />
            <strong>Tuesday</strong> Daytime<br />
            <strong>Wednesday</strong> Daytime<br />
            <strong>Thursday</strong> Evening<br />
            <strong>Friday</strong> Daytime<br />
          </p>
        </IconRow>

        <IconRow icon="car">
          <p>
            Parking available on Bridge Street, with permits available on
            request.
          </p>
        </IconRow>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

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
