<script setup>
import backMassage from "~/assets/images/backMassage.webp";
import legMassage from "~/assets/images/legMassage.webp";
import nenaProfilePic from "~/assets/images/nenaProfilePic.webp";
</script>

<template>
  <div class="app-wrapper">
    <WebsiteHeader />

    <HeroImage :image="backMassage">
      <div class="hero-text">A 360&#176;<br />approach to massage therapy</div>
    </HeroImage>

    <section class="section section-1 mt-6">
      <div class="container" style="max-width: 44rem">
        <div class="title is-2" style="max-width: 20rem">
          Holistic Massage Philosophy
        </div>

        <div class="columns mt-6">
          <div class="column is-one-third">
            <figure class="image is-128x128 nena-profile-pic">
              <img class="is-rounded" :src="nenaProfilePic" />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <p>
                I'm passionate about providing quality massage therapy. Whether
                it's a full body restoring massage to help unwind aching muscles
                and a tired mind; or a deep tissue sports massage, to target
                specific areas of pain and dysfunction. Wheatever your ailment,
                it's my pleasure to help you. I take a 360&#176; holistic
                approach - not just treating the areas that hurt, but working
                with you to find the root cause.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HeroImage :image="legMassage" />

    <section class="section section-2">
      <div class="container">
        <div class="massages-wrapper">
          <Massage
            massage-title="First Appointment"
            :options="[{ duration: 60, price: 60 }]"
          >
            <p>
              An initial consultation is essential if you haven't seen me
              before.
            </p>
            <p>
              We will do a head-to-toe postural assessment, joint assessment and
              any special tests as required, to allow us to create a plan
              tailored to your specific needs.
            </p>
            <p>We will also begin treatment in your first session.</p>
            <p>
              The first step to a more flexible, relaxed and revitalised you!
            </p>
          </Massage>
        </div>

        <div class="massages-wrapper">
          <Massage
            massage-title="Sports/Deep Tissue Massage"
            :options="[
              { duration: 30, price: 35 },
              { duration: 60, price: 60 },
            ]"
          >
            <p>
              For those seeking treatment for anything from sports injury, soft
              tissue dysfunctoin, or everyday aches and pains from the stresses
              of the day. Includes consultation, assessment and treatment.
            </p>

            <p>
              The aim is to address the root cause of your pain; this will be
              done through the assessment process. Treatment will seke out knots
              and areas of tightness, aid joint mobility and restore your range
              of movement.
            </p>
            <p>
              Along with massage, I used a combination of techniques targeted to
              suit your specific needs. These include Soft Tissue and Myofascial
              Release, Muscle Energy and Neuromuscular Techniques.
            </p>
          </Massage>

          <Massage
            massage-title="Relaxing Massage"
            :options="[{ duration: 60, price: 60 }]"
          >
            <p>
              For those who just want to unwind.<br />After a short
              consultation, you can choose from either:
            </p>
            <ul>
              <li>Full body</li>
              <li>Back, neck and shoulders</li>
              <li>Full legs and lower back</li>
            </ul>
            <p>
              Each massage is tailored to suit you, with more detailed focus on
              a specific area if required.<br />
              I use a range of therapeutic massage strokes to relax sore and
              aching muscles, boost circulation and cruicially, help you achieve
              some quality &lsquo;you&rsquo; time. You will leave feeling
              thoroughly refreshed, and ready to take on the world!
            </p>
          </Massage>
        </div>
      </div>
    </section>
    <section class="section section-3">
      <div class="container">
        <div
          class="juicer-feed"
          data-feed-id="nenamager_massagetherapy"
          data-per="4"
        ></div>
      </div>
    </section>
  </div>
</template>

<style>
.app-wrapper {
  /* Make room for the navbar */
  padding-top: 8rem;
}
section.section {
  min-height: 70vh;
}
.massages-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  /* gap: 2rem; */
}
</style>
