<script setup>
import backMassage from '~/assets/images/backMassage.webp';
import legMassage from '~/assets/images/legMassage.webp';
import nenaProfilePic from '~/assets/images/nenaProfilePic.webp';
</script>

<template>
  <section class="section section-3">
    <div class="anchor" id="locations"></div>
    <div class="container">
      <ClinicLocations />
    </div>
  </section>

  <section class="section section-4">
    <div class="anchor" id="contact"></div>
    <div class="container">
      <ContactInfo />
    </div>
  </section>
</template>

<style lang="scss">
@import '~/node_modules/bulma/sass/utilities/mixins.sass';

.hero-text {
  /* Massive white text */
  flex-grow: 1;
  font-size: 50px;
  text-align: center;
  max-width: 38rem;
  font-weight: 200;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  @include desktop {
    padding-top: 4rem;
    font-size: 60px;
  }
}

.section-2 {
  background: var(--palette-cream);
}
.section-3 {
  background: var(--palette-olive);
  color: white;
  .title,
  a,
  i {
    color: white;
  }
}
.section-4 {
  // background: var(--palette-olive);
  background: #555;
  color: white;
  .title,
  a {
    color: white;
  }
}

/* All sections are most of the screen */
section.section {
  min-height: 88vh;
  position: relative;
}

/* Clickable nav links */
.anchor {
  position: absolute;
  top: -8rem;
  left: 0;
  width: 0px;
  height: 0px;
}

.nena-profile-pic {
  width: 200px;
  height: 200px;
  margin: 0 auto;

  @include desktop {
    margin-left: -1rem;
    margin-top: -1rem;
  }
}
</style>
