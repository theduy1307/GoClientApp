<template>
  <v-card
    class="latest-transaction-card trezo-card border-radius d-block border-0 shadow-none p-0"
  >
    <div class="v-card-header mb-0 p-25">
      <h5 class="mb-0">Tracking Order</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="bg-white card-header-menu d-inline-block border-radius"
            >
              Last 30 days
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Last 30 days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last 90 days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last 1 year
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div
      class="default-table-area style-two transaction-history tracking-order"
    >
      <div class="table-responsive">
        <table
          class="table align-middle"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <thead>
            <tr>
              <th>
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  <span class="ms-2">Order ID</span>
                </div>
              </th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Current Location</th>
              <th>Tracking Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-2">#OR045</span>
                </div>
              </td>
              <td class="border-bottom">Mark Blake</td>
              <td class="border-bottom">2024-09-05</td>
              <td class="border-bottom">Chicago, IL</td>
              <td class="border-bottom">TRK001</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                >
                  Delivered
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-2">#OR085</span>
                </div>
              </td>
              <td class="border-bottom">Cheryl Myers</td>
              <td class="border-bottom">2024-09-06</td>
              <td class="border-bottom">London, UK</td>
              <td class="border-bottom">TRK002</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-1"
                >
                  In Transit
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-2">#OR099</span>
                </div>
              </td>
              <td class="border-bottom">Marc Bradley</td>
              <td class="border-bottom">2024-09-10</td>
              <td class="border-bottom">Paris, France</td>
              <td class="border-bottom">TRK003</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-danger bg-opacity-10 text-danger px-2 py-1 rounded-1"
                >
                  On The Way
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-2">#OR125</span>
                </div>
              </td>
              <td class="border-bottom">Ryan Vasquez</td>
              <td class="border-bottom">N/A</td>
              <td class="border-bottom">N/A</td>
              <td class="border-bottom">N/A</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-danger bg-opacity-25 text-danger px-2 py-1 rounded-1"
                >
                  Canceled
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-2">#OR245</span>
                </div>
              </td>
              <td class="border-bottom">Donald Ness</td>
              <td class="border-bottom">2024-09-12</td>
              <td class="border-bottom">Tokyo, Japan</td>
              <td class="border-bottom">TRK004</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-1"
                >
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination items="05" total="30" class="p-4 border-0" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "../../Common/Pagination.vue";

export default defineComponent({
  name: "TrackingOrder",
  components: {
    Pagination,
  },
});
</script>

<style lang="scss" scoped>
.latest-transaction-card {
  .bg-success {
    background-color: rgb(55 216 10 / 10%) !important;
  }
  .bg-primary {
    background-color: rgb(96 93 255 / 10%) !important;
  }
  .bg-danger {
    background-color: rgb(253 88 18 / 10%) !important;
  }
  .bg-warning {
    background-color: rgb(255 188 43 / 10%) !important;
  }
  .rounded-1 {
    border-radius: 0.25rem;
  }
  .form-check {
    .form-check-input {
      width: 16px;
      height: 16px;
      cursor: pointer;
      position: relative;
      top: 2px;
    }
  }
}
</style>
