<template>
  <v-card
    class="new-mobile-app-card trezo-card mb-25 border-radius d-block border-0 shadow-none text-center"
    style="background: linear-gradient(153deg, #fad2d2 0%, #6fa3ec 100%)"
  >
    <div class="py-2">
      <h3 class="fs-20 fw-normal">Have You Tried Our</h3>
      <h3 class="fs-20 mb-1">New Mobile App?</h3>
      <div class="image py-4 py-xxl-5">
        <v-img src="@/assets/images/app-2.png" alt="app" />
      </div>
      <a href="#" class="download-app-btn"> Download App </a>
    </div>
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
    .v-responsive {
      justify-content: center;
    }
  }
  .download-app-btn {
    background-color: var(--primaryColor);
    color: var(--whiteColor);
    padding: 0.5rem 1rem;
    border-radius: 7px;
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
  }
}
</style>
