<template>
  <v-card
    class="highlights-card trezo-card mb-25 border-radius d-block border-0 shadow-none"
    style="background-color: rgb(235, 220, 213)"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Highlights</h5>
      <span class="fs-12" style="color: #82716f">Last 7 days</span>
    </div>

    <ul class="ps-0 mb-0 list-unstyled">
      <li
        class="d-flex justify-content-between border-bottom pb-4 mb-4"
        style="border-color: #e3d1c9 !important"
      >
        <div class="d-flex align-items-center">
          <i class="ri-star-fill fs-17" style="color: #fd5812"></i>
          <span class="ms-2" style="color: #82716f">
            Average Client Rating
          </span>
        </div>
        <span style="color: #463938">
          <i class="ri-arrow-up-line text-success fs-16"></i> 4.9/5.0
        </span>
      </li>
      <li
        class="d-flex justify-content-between border-bottom pb-4 mb-4"
        style="border-color: #e3d1c9 !important"
      >
        <div class="d-flex align-items-center">
          <i class="ri-instagram-fill fs-17" style="color: #fd5812"></i>
          <span class="ms-2" style="color: #82716f">Instagram Followers</span>
        </div>
        <span style="color: #463938">
          <i class="ri-arrow-down-line text-danger fs-16"></i>
          630K
        </span>
      </li>
      <li
        class="d-flex justify-content-between border-bottom pb-4 mb-4"
        style="border-color: #e3d1c9 !important"
      >
        <div class="d-flex align-items-center">
          <i class="ri-facebook-fill fs-17" style="color: #fd5812"></i>
          <span class="ms-2" style="color: #82716f">Facebook Followers</span>
        </div>
        <span style="color: #463938">
          <i class="ri-arrow-up-line text-success fs-16"></i> 630K
        </span>
      </li>
      <li class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <i class="ri-google-fill fs-17" style="color: #fd5812"></i>
          <span class="ms-2" style="color: #82716f">Google Ads CPC</span>
        </div>
        <span style="color: #463938">
          <i class="ri-arrow-up-line text-success fs-16"></i> $3.58
        </span>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HighlightsContent",
});
</script>

<style lang="scss" scoped>
.v-card {
  &.trezo-card {
    &.highlights-card {
      background-color: rgb(235, 220, 213) !important;
      .v-card-header {
        h5 {
          color: var(--blackColor) !important;
        }
      }
    }
  }
}
</style>
