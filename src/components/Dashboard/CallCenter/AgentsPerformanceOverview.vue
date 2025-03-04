<template>
  <v-card
    class="agents-performance-overview-card trezo-card mb-25 border border-radius d-block bg-white custom-shadow"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Agents Performance Overview</h5>
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
            Today
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

    <div class="row mb-4 pb-2">
      <div class="col-lg-12">
        <span class="d-block mb-3 fw-normal">Top Performing Agent</span>
      </div>
      <div class="col-sm-4">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0 position-relative z-1">
            <v-img
              src="@/assets/images/user-161.png"
              class="rounded-2"
              alt="user"
            />
            <span
              class="bg-success rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
              style="width: 8px; height: 8px"
            ></span>
          </div>
          <div class="flex-grow-1 ms-10">
            <h4 class="fs-14 fw-semibold mb-0">John Smith</h4>
            <span>380 Calls</span>
          </div>
        </div>
      </div>
      <div class="col-sm-8 mt-2 mt-sm-0">
        <div class="ms-sm-4 ps-sm-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span>Customer Satisfaction (CSAT)</span>
            <span>92%</span>
          </div>
          <div
            class="progress bg-border-color"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="92"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 6px"
          >
            <div
              class="progress-bar bg-success-60 rounded-pill"
              style="width: 92%; height: 6px"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="default-table-area style-three agents-performance-overview">
      <div class="table-responsive">
        <table
          class="table align-middle border-0"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tbody>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 position-relative z-1">
                    <v-img
                      src="@/assets/images/user-162.png"
                      class="rounded-2"
                      alt="user"
                    />
                    <span
                      class="bg-success rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
                      style="width: 8px; height: 8px"
                    ></span>
                  </div>
                  <div class="flex-grow-1 ms-10">
                    <h4 class="fs-14 fw-medium mb-0">Sarah Davis</h4>
                    <span>65 Calls</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-body">Avg. Call Duration</span>
                <span class="fw-medium d-block">4 mins 10 secs</span>
              </td>
              <td>
                <span class="text-body">FCR</span>
                <span class="fw-medium d-block">85%</span>
              </td>
              <td>
                <span class="text-body">CSAT</span>
                <span class="fw-medium d-block">90%</span>
              </td>
            </tr>
            <tr>
              <td class="bg-white" style="padding: 5px !important"></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 position-relative z-1">
                    <v-img
                      src="@/assets/images/user-163.png"
                      class="rounded-2"
                      alt="user"
                    />
                    <span
                      class="bg-danger rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
                      style="width: 8px; height: 8px"
                    ></span>
                  </div>
                  <div class="flex-grow-1 ms-10">
                    <h4 class="fs-14 fw-medium mb-0">Michael Brown</h4>
                    <span>58 Calls</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-body">Avg. Call Duration</span>
                <span class="fw-medium d-block">5 mins 20 secs</span>
              </td>
              <td>
                <span class="text-body">FCR</span>
                <span class="fw-medium d-block">82%</span>
              </td>
              <td>
                <span class="text-body">CSAT</span>
                <span class="fw-medium d-block">87%</span>
              </td>
            </tr>
            <tr>
              <td class="bg-white" style="padding: 5px !important"></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 position-relative z-1">
                    <v-img
                      src="@/assets/images/user-164.png"
                      class="rounded-2"
                      alt="user"
                    />
                    <span
                      class="bg-success rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
                      style="width: 8px; height: 8px"
                    ></span>
                  </div>
                  <div class="flex-grow-1 ms-10">
                    <h4 class="fs-14 fw-medium mb-0">Emily Johnson</h4>
                    <span>72 Calls</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-body">Avg. Call Duration</span>
                <span class="fw-medium d-block">4 mins 30 secs</span>
              </td>
              <td>
                <span class="text-body">FCR</span>
                <span class="fw-medium d-block">88%</span>
              </td>
              <td>
                <span class="text-body">CSAT</span>
                <span class="fw-medium d-block">90%</span>
              </td>
            </tr>
            <tr>
              <td class="bg-white" style="padding: 5px !important"></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 position-relative z-1">
                    <v-img
                      src="@/assets/images/user-165.png"
                      class="rounded-2"
                      alt="user"
                    />
                    <span
                      class="bg-danger rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
                      style="width: 8px; height: 8px"
                    ></span>
                  </div>
                  <div class="flex-grow-1 ms-10">
                    <h4 class="fs-14 fw-medium mb-0">David Lee</h4>
                    <span>53 Calls</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-body">Avg. Call Duration</span>
                <span class="fw-medium d-block">3 mins 50 secs</span>
              </td>
              <td>
                <span class="text-body">FCR</span>
                <span class="fw-medium d-block">80%</span>
              </td>
              <td>
                <span class="text-body">CSAT</span>
                <span class="fw-medium d-block">85%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AgentsPerformanceOverview",
});
</script>

<style lang="scss" scoped>
.agents-performance-overview-card {
  &.border {
    border: 1px solid #edeff5 !important;
  }
  .progress {
    display: flex;
    background-color: #e9ecef !important;

    .bg-success {
      background-color: var(--successColor) !important;
    }
    .bg-success-60 {
      background-color: rgb(37 176 3) !important;
    }
  }
  .mb-4 {
    margin-bottom: 1.3rem !important;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
}
</style>
