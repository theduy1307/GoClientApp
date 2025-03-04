<template>
  <v-card
    class="trezo-card custom-shadow for-dark-rounded-bg rounded-3 border bg-body-bg p-0"
  >
    <div class="v-card-header mb-0" style="padding: 14.5px 25px">
      <h3 class="mb-0 fs-16 fw-normal">Sales Analytics</h3>

      <div
        class="dropdown select-dropdown without-border position-relative"
        style="right: -5px"
      >
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu border-none d-inline-block border-radius"
            >
              Last Month
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Last Day
            </button>
            <button type="button" class="bg-transparent border-none">
              Last Week
            </button>
            <button type="button" class="bg-transparent border-none">
              Last Month
            </button>
            <button type="button" class="bg-transparent border-none">
              Last Year
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="bg-white p-4 rounded-top-3 border-top">
      <SalesOverTime />
    </div>
    <div
      class="bg-white px-4 rounded-bottom-3 border-top"
      style="padding-top: 40px; padding-bottom: 42px"
    >
      <SalesByCategory />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SalesOverTime from "./SalesOverTime.vue";
import SalesByCategory from "./SalesByCategory.vue";

export default defineComponent({
  name: "SalesAnalytics",
  components: {
    SalesOverTime,
    SalesByCategory,
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  &.trezo-card {
    border: 1px solid var(--borderColor) !important;
  }
}
</style>
