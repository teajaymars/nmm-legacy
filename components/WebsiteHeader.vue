<script setup>
import brandLogo from "~/assets/images/brand-logo.webp";

const active = ref(false);

function onScrollTo(id) {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth" });
  active.value = false;
  return false;
}
</script>

<template>
  <nav
    class="navbar is-light is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <img :src="brandLogo" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': active }"
          aria-label="menu"
          :aria-expanded="active"
          data-target="burger-target"
          @click="active = !active"
          @keyup.enter="active = !active"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="burger-target"
        class="navbar-menu"
        :class="{ 'is-active': active }"
      >
        <div class="navbar-end">
          <a
            class="navbar-item"
            href="#philosophy"
            @click.prevent="onScrollTo('philosophy')"
          >
            Philosophy
          </a>

          <a
            class="navbar-item"
            href="#services"
            @click.prevent="onScrollTo('services')"
          >
            Services
          </a>

          <a
            class="navbar-item"
            href="#locations"
            @click.prevent="onScrollTo('locations')"
          >
            Locations
          </a>

          <a
            class="navbar-item"
            href="#contact"
            @click.prevent="onScrollTo('contact')"
          >
            Contact
          </a>

          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div> -->

          <div class="navbar-item is-hidden-touch">
            <div class="buttons">
              <a
                :href="useRuntimeConfig().bookings"
                class="button is-dark is-outlined"
                target="_blank"
              >
                <strong>Book Online</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

.navbar {
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
}
.navbar-item {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  @include desktop {
    font-weight: 200;
    color: black !important;
    font-size: 14px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @include touch {
    text-align: center;
  }
}
</style>
