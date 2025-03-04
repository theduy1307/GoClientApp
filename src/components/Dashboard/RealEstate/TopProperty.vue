<template>
  <v-card
    class="customer-reviews-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Top Property</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="d-flex align-items-center mb-4">
      <div class="flex-shrink-0">
        <v-img
          src="@/assets/images/property-1.png"
          class="rounded-3"
          style="width: 40px; height: 40px"
          alt="property"
        />
      </div>
      <div class="flex-grow-1 ms-2">
        <h4 class="fs-16 mb-0">Industrial</h4>
        <span>36 Clay Street Indianapolis</span>
      </div>
    </div>
    <div class="d-flex align-items-center mb-4">
      <div class="flex-shrink-0">
        <v-img
          src="@/assets/images/property-2.png"
          class="rounded-3"
          style="width: 40px; height: 40px"
          alt="property"
        />
      </div>
      <div class="flex-grow-1 ms-2">
        <h4 class="fs-16 mb-0">Office</h4>
        <span>07 Maple Street Los Angeles</span>
      </div>
    </div>
    <div class="d-flex align-items-center mb-4">
      <div class="flex-shrink-0">
        <v-img
          src="@/assets/images/property-3.png"
          class="rounded-3"
          style="width: 40px; height: 40px"
          alt="property"
        />
      </div>
      <div class="flex-grow-1 ms-2">
        <h4 class="fs-16 mb-0">Multi-Family</h4>
        <span>94 Brooke Street Houston</span>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <div class="flex-shrink-0">
        <v-img
          src="@/assets/images/property-4.png"
          class="rounded-3"
          style="width: 40px; height: 40px"
          alt="property"
        />
      </div>
      <div class="flex-grow-1 ms-2">
        <h4 class="fs-16 mb-0">Retail</h4>
        <span>84 Pick Street Centennial</span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopProperty",
});
</script>

<style lang="scss" scoped>
.customer-reviews-card {
  .mb-4 {
    margin-bottom: 1.4rem !important;
  }
}
</style>
