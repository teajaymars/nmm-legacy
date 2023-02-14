<template>
  <div class="massages-wrapper">
    <div class="massages-block">
      <Massage
        massage-title="First Appointment"
        :options="[{ duration: 60, price: 60 }]"
      >
        <p>
          An initial consultation is essential if you haven't seen me before.
        </p>
        <p>
          We will do a head-to-toe postural assessment, joint assessment and any
          special tests as required, to allow us to create a plan tailored to
          your specific needs.
        </p>
        <p>We will also begin treatment in your first session.</p>
        <p>The first step to a more flexible, relaxed and revitalised you!</p>
      </Massage>
    </div>
  </div>

  <div class="massages-wrapper">
    <div class="massages-block">
      <Massage
        massage-title="Sports/Deep Tissue Massage"
        :options="[
          { duration: 30, price: 35 },
          { duration: 60, price: 60 },
        ]"
      >
        <p>
          For those seeking treatment for anything from sports injury, soft
          tissue dysfunction, or everyday aches and pains from the stresses of
          the day. Includes consultation, assessment and treatment.
        </p>

        <p>
          The aim is to address the root cause of your pain; this will be done
          through the assessment process. Treatment will seek out knots and
          areas of tightness, aid joint mobility and restore your range of
          movement.
        </p>
        <p>
          Along with massage, I use a combination of techniques targeted to suit
          your specific needs. These include Soft Tissue and Myofascial Release,
          Muscle Energy and Neuromuscular Techniques.
        </p>
      </Massage>

      <Massage
        massage-title="Relaxing Massage"
        :options="[{ duration: 60, price: 60 }]"
      >
        <p>
          For those who just want to unwind.<br />After a short consultation,
          you can choose from either:
        </p>
        <ul>
          <li>Full body</li>
          <li>Back, neck and shoulders</li>
          <li>Full legs and lower back</li>
        </ul>
        <p>
          Each massage is tailored to suit you, with more detailed focus on a
          specific area if required.<br />
          I use a range of therapeutic massage strokes to relax sore and aching
          muscles, boost circulation and cruicially, help you achieve some
          quality &lsquo;you&rsquo; time. You will leave feeling thoroughly
          refreshed, and ready to take on the world!
        </p>
      </Massage>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bulma/sass/utilities/mixins.sass";
.massages-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

@include desktop {
  .massages-block {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
  }
}
</style>
