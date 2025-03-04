<template>
  <v-card
    class="new-mobile-app-card trezo-card border-radius d-block bg-white border-0 shadow-none text-center"
    style="background: linear-gradient(150deg, #827cd8 0.57%, #2d2761 95.93%)"
  >
    <span class="fs-24 d-block text-white">Have You Tried Our</span>
    <h3 class="fs-24 text-white">New Mobile App?</h3>
    <div class="image">
      <v-img src="@/assets/images/app.png" alt="app" />
    </div>
    <a href="#" class="download-app-btn"> Download Mobile App </a>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewMobileApp",
});
</script>

<style lang="scss" scoped>
.new-mobile-app-card {
  .image {
    padding-top: 1.3rem !important;
    padding-bottom: 1.4rem !important;
    margin-bottom: 1rem !important;
    .v-responsive {
      justify-content: center;
    }
  }
  .download-app-btn {
    background-color: var(--primaryColor);
    color: var(--whiteColor);
    padding: 0.5rem 1rem;
    border-radius: 7px;
    font-size: 0.88rem;
    font-weight: 500;
    display: inline-block;
  }
}
</style>
