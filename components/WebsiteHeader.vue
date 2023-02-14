<script setup>
import brandLogo from "~/assets/images/brand-logo.webp";

const active = ref(false);
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
          <a class="navbar-item" href="#philosophy"> Philosophy </a>

          <a class="navbar-item" href="#services"> Services </a>

          <a
            class="navbar-item"
            :href="useRuntimeConfig().bookings"
            target="_blank"
          >
            Bookings
          </a>

          <a class="navbar-item"> Contact </a>

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
