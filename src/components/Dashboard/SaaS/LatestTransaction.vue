<template>
  <v-card
    class="latest-transaction-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Latest Transaction</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius"
            >
              Monthly
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Monthly
            </button>
            <button type="button" class="bg-transparent border-none">
              Yearly
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div
      class="default-table-area style-two campaigns-table latest-transaction-table"
    >
      <div class="table-responsive">
        <table
          class="table align-middle border-0"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <thead>
            <tr>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">ID</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">CLIENT</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">AMOUNT</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">SUBSCRIPTION PLAN</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">PAYMENT METHOD</span>
              </th>
              <th
                class="text-end bg-transparent border-bottom text-body fw-medium"
              >
                <span class="fs-12">STATUS</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-bottom fs-12 fw-semibold text-body">#001</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-81.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Johhna Loren</h4>
                    <span class="fs-12">loren123@gmail.com</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">$6240</td>
              <td class="border-bottom fs-12 fw-semibold text-body">Pro</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <v-img src="@/assets/images/paypal.png" alt="paypal" />
                  <span class="ms-2">Paypal</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <span
                  class="d-inline-block px-2 bg-success bg-opacity-10 text-success border border-success rounded-pill fs-12 fw-medium"
                >
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom fs-12 fw-semibold text-body">#002</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-82.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Skyler White</h4>
                    <span class="fs-12">skyqueen@gmail.com</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">$5135</td>
              <td class="border-bottom fs-12 fw-semibold text-body">
                Enterprise
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <v-img src="@/assets/images/wise.png" alt="paypal" />
                  <span class="ms-2">Wise</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <span
                  class="d-inline-block px-2 bg-primary-div bg-opacity-10 text-primary-div border border-primary-div rounded-pill fs-12 fw-medium"
                >
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom fs-12 fw-semibold text-body">#003</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-83.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Jonathon Watson</h4>
                    <span class="fs-12">jona2134@gmail.com</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">$4321</td>
              <td class="border-bottom fs-12 fw-semibold text-body">Startup</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <v-img src="@/assets/images/bank.png" alt="bank" />
                  <span class="ms-2">Bank</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <span
                  class="d-inline-block px-2 bg-danger bg-opacity-10 text-danger border border-danger rounded-pill fs-12 fw-medium"
                >
                  Failed
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom fs-12 fw-semibold text-body">#004</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-84.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Walter White</h4>
                    <span class="fs-12">Puzzleworld</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">$3124</td>
              <td class="border-bottom fs-12 fw-semibold text-body">Pro</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <v-img src="@/assets/images/skrill.png" alt="skrill" />
                  <span class="ms-2">Skrill</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <span
                  class="d-inline-block px-2 bg-success bg-opacity-10 text-success border border-success rounded-pill fs-12 fw-medium"
                >
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom fs-12 fw-semibold text-body">#005</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-85.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">David Carlen</h4>
                    <span class="fs-12">Liveslong</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">$2137</td>
              <td class="border-bottom fs-12 fw-semibold text-body">Basic</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <v-img src="@/assets/images/paypal.png" alt="paypal" />
                  <span class="ms-2">Paypal</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <span
                  class="d-inline-block px-2 bg-primary-div bg-opacity-10 text-primary-div border border-primary-div rounded-pill fs-12 fw-medium"
                >
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <PaginationTwo items="05" total="30" class="pb-0 pt-3 border-none" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationTwo from "../../Common/PaginationTwo.vue";

export default defineComponent({
  name: "LatestTransaction",
  components: {
    PaginationTwo,
  },
});
</script>

<style lang="scss" scoped>
.latest-transaction-card {
  .bg-success {
    background-color: rgba(55, 216, 10, 0.1) !important;
  }
  .bg-primary-div {
    background-color: rgba(173, 99, 246, 0.1) !important;
  }
  .text-primary-div {
    color: rgb(173 99 246) !important;
  }
  .bg-danger {
    background-color: rgba(253, 88, 18, 0.1) !important;
  }
}
</style>
