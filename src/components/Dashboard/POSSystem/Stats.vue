<template>
  <v-row class="mb-4">
    <v-col xl="3" lg="3" sm="6">
      <v-card
        class="trezo-card custom-shadow for-dark-rounded-bg rounded-3 p-0"
        style="
          background: linear-gradient(102deg, #4936f5 3.78%, #757dff 70.84%);
        "
      >
        <div class="v-card-header mb-0" style="padding: 14.5px 25px">
          <h3 class="mb-0 fs-16 fw-normal text-white">Total Sales</h3>

          <div class="dropdown action-opt right-for-rtl" style="right: -8px">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="position-relative dot-btn p-0 bg-transparent border-none"
                >
                  <i class="material-symbols-outlined"> more_vert </i>
                </button>
              </template>
              <v-list class="menu-content">
                <button type="button" class="bg-transparent border-none">
                  Today
                </button>
                <button type="button" class="bg-transparent border-none">
                  Last 7 Days
                </button>
                <button type="button" class="bg-transparent border-none">
                  Last Month
                </button>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="bg-white p-4 rounded-2">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="fs-24 fw-semibold mb-0">$75,000</h3>
            <div
              class="d-flex align-items-center justify-content-center rounded-circle"
              style="
                background-color: #ecf0ff;
                width: 51px;
                height: 51px;
                line-height: 51px;
              "
            >
              <v-img
                src="@/assets/images/total-sales-icon.svg"
                alt="total-sales-icon"
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-20 text-success me-2">
              trending_up
            </span>
            <span class="text-body">
              <span class="fw-semibold">+15%</span>
              from last month
            </span>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col xl="3" lg="3" sm="6">
      <v-card
        class="trezo-card custom-shadow for-dark-rounded-bg rounded-3 p-0"
        style="
          background: linear-gradient(103deg, #9135e8 9.27%, #bf85fb 83.62%);
        "
      >
        <div class="v-card-header mb-0" style="padding: 14.5px 25px">
          <h3 class="mb-0 fs-16 fw-normal text-white">Total Transactions</h3>

          <div class="dropdown action-opt right-for-rtl" style="right: -8px">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="position-relative dot-btn p-0 bg-transparent border-none"
                >
                  <i class="material-symbols-outlined"> more_vert </i>
                </button>
              </template>
              <v-list class="menu-content">
                <button type="button" class="bg-transparent border-none">
                  Today
                </button>
                <button type="button" class="bg-transparent border-none">
                  Last 7 Days
                </button>
                <button type="button" class="bg-transparent border-none">
                  Last Month
                </button>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="bg-white p-4 rounded-2">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="fs-24 fw-semibold mb-0">1200</h3>
            <div
              class="d-flex align-items-center justify-content-center rounded-circle"
              style="
                background-color: #f3e8ff;
                width: 51px;
                height: 51px;
                line-height: 51px;
              "
            >
              <v-img
                src="@/assets/images/total-transactions-icon.svg"
                alt="total-transactions-icon"
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-20 text-success me-2">
              trending_up
            </span>
            <span class="text-body"
              ><span class="fw-semibold">+10%</span> from last month</span
            >
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col xl="3" lg="3" sm="6">
      <v-card
        class="trezo-card custom-shadow for-dark-rounded-bg rounded-3 p-0"
        style="
          background: linear-gradient(104deg, #25b003 7.79%, #37d80a 83.18%);
        "
      >
        <div class="v-card-header mb-0" style="padding: 14.5px 25px">
          <h3 class="mb-0 fs-16 fw-normal text-white">Average Order Value</h3>

          <div class="dropdown action-opt right-for-rtl" style="right: -8px">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="position-relative dot-btn p-0 bg-transparent border-none"
                >
                  <i class="material-symbols-outlined"> more_vert </i>
                </button>
              </template>
              <v-list class="menu-content">
                <button type="button" class="bg-transparent border-none">
                  Today
                </button>
                <button type="button" class="bg-transparent border-none">
                  Last 7 Days
                </button>
                <button type="button" class="bg-transparent border-none">
                  Last Month
                </button>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="bg-white p-4 rounded-2">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="fs-24 fw-semibold mb-0">$40</h3>
            <div
              class="d-flex align-items-center justify-content-center rounded-circle"
              style="
                background-color: #d8ffc8;
                width: 51px;
                height: 51px;
                line-height: 51px;
              "
            >
              <v-img
                src="@/assets/images/average-order-value-icon.svg"
                alt="average-order-value-icon"
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-20 text-danger me-2">
              trending_down
            </span>
            <span class="text-body">
              <span class="fw-semibold">-5%</span>
              from last month
            </span>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col xl="3" lg="3" sm="6">
      <v-card
        class="trezo-card custom-shadow for-dark-rounded-bg rounded-3 p-0"
        style="
          background: linear-gradient(106deg, #ee3e08 9.72%, #fd5812 79.69%);
        "
      >
        <div class="v-card-header mb-0" style="padding: 14.5px 25px">
          <h3 class="mb-0 fs-16 fw-normal text-white">Total Discount</h3>

          <div class="dropdown action-opt right-for-rtl" style="right: -8px">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="position-relative dot-btn p-0 bg-transparent border-none"
                >
                  <i class="material-symbols-outlined"> more_vert </i>
                </button>
              </template>
              <v-list class="menu-content">
                <button type="button" class="bg-transparent border-none">
                  Today
                </button>
                <button type="button" class="bg-transparent border-none">
                  Last 7 Days
                </button>
                <button type="button" class="bg-transparent border-none">
                  Last Month
                </button>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="bg-white p-4 rounded-2">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="fs-24 fw-semibold mb-0">$5,200</h3>
            <div
              class="d-flex align-items-center justify-content-center rounded-circle"
              style="
                background-color: #ffe8d4;
                width: 51px;
                height: 51px;
                line-height: 51px;
              "
            >
              <v-img
                src="@/assets/images/total-discount-icon.svg"
                alt="total-discount-icon"
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-20 text-success me-2">
              trending_up
            </span>
            <span class="text-body">
              <span class="fw-semibold">+8%</span>
              from last month
            </span>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stats",
});
</script>

<style lang="scss" scoped>
.v-card {
  &.trezo-card {
    border: 1px solid var(--borderColor) !important;
    .v-card-header {
      .dot-btn {
        i {
          color: #ffffff !important;
        }
      }
    }
  }
}
</style>
