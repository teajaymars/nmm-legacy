<script setup>
import backMassage from "~/assets/images/backMassage.webp";
import legMassage from "~/assets/images/legMassage.webp";
import nenaProfilePic from "~/assets/images/nenaProfilePic.webp";

useHead({
  title: "Nena Mager Massage Therapy in Oxford",
  meta: {
    description: "Massage therapy in West Oxford, UK",
  },
});
</script>

<template>
  <div class="app-wrapper">
    <WebsiteHeader />

    <HeroImage :image="backMassage">
      <div class="hero-text">A 360&#176;<br />approach to massage therapy</div>
    </HeroImage>

    <section class="section section-1">
      <div class="anchor" id="philosophy"></div>
      <div class="container mt-6" style="max-width: 44rem">
        <div class="title is-2" style="max-width: 20rem">
          Holistic Massage Philosophy
        </div>

        <div class="columns mt-6">
          <div class="column is-one-third">
            <figure class="image nena-profile-pic">
              <img class="is-rounded" :src="nenaProfilePic" />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <p>
                Based in West Oxford, I'm passionate about providing quality
                massage therapy. Whether it's a full body restoring massage to
                help unwind aching muscles and a tired mind; or a deep tissue
                sports massage, to target specific areas of pain and
                dysfunction. Whatever your ailment, it's my pleasure to help
                you. I take a 360&#176; holistic approach - not just treating
                the areas that hurt, but working with you to find the root
                cause.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HeroImage :image="legMassage" />

    <section class="section section-2">
      <div class="anchor" id="services"></div>
      <div class="container">
        <Massages />
      </div>
    </section>

    <section class="section section-3">
      <div class="anchor" id="location"></div>
      <div class="container">
        <ClinicLocation />
      </div>
    </section>

    <section class="section section-4">
      <div class="anchor" id="contact"></div>
      <div class="container">
        <ContactInfo />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

.app-wrapper {
  /* Make room for the navbar */
  padding-top: 8rem;
}

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
