<template>
  <v-card
    class="latest-transaction-card trezo-card border-radius d-block border-0 shadow-none p-0"
  >
    <div class="v-card-header mb-0 p-25">
      <h5 class="mb-0">Latest Transaction</h5>
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

    <div class="default-table-area style-two latest-transaction">
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
                  <span class="ms-1">Customer ID</span>
                </div>
              </th>
              <th>Customer Name</th>
              <th>Property</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
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
                  <span class="ms-1">#TRE0015</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user1.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Sarah Johnson</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Industrial</td>
              <td class="border-bottom">2024-10-01</td>
              <td class="border-bottom">$500,000</td>
              <td class="border-bottom">
                <span
                  class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
                >
                  Completed
                </span>
              </td>
              <td class="border-bottom">Master Card</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
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
                      id="flexCheckDefault3"
                    />
                  </div>
                  <span class="ms-1">#TRE0099</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user2.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Michael Smith</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Office</td>
              <td class="border-bottom">2024-09-28</td>
              <td class="border-bottom">$1,200,000</td>
              <td class="border-bottom">
                <span
                  class="badge bg-warning bg-opacity-10 text-warning p-2 fs-12 fw-normal"
                >
                  Pending
                </span>
              </td>
              <td class="border-bottom">Paypal</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
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
                      id="flexCheckDefault4"
                    />
                  </div>
                  <span class="ms-1">#TRE0145</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user3.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Emily Brown</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Multi-Family</td>
              <td class="border-bottom">2024-09-25</td>
              <td class="border-bottom">$350,000</td>
              <td class="border-bottom">
                <span
                  class="badge bg-danger bg-opacity-25 text-danger p-2 fs-12 fw-normal"
                  >Cancel</span
                >
              </td>
              <td class="border-bottom">Wise</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
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
                      id="flexCheckDefault5"
                    />
                  </div>
                  <span class="ms-1">#TRE0247</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user4.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Jason Lee</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Residential</td>
              <td class="border-bottom">2024-09-22</td>
              <td class="border-bottom">$220,000</td>
              <td class="border-bottom">
                <span
                  class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
                >
                  Completed
                </span>
              </td>
              <td class="border-bottom">Payoneer</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
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
                      id="flexCheckDefault6"
                    />
                  </div>
                  <span class="ms-1">#TRE0299</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user5.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Ashley Davis</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Commercial</td>
              <td class="border-bottom">2024-09-20</td>
              <td class="border-bottom">$1,500,000</td>
              <td class="border-bottom">
                <span
                  class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
                >
                  Rejected
                </span>
              </td>
              <td class="border-bottom">Credit Card</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
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
  name: "LatestTransaction",
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
  .bg-warning {
    background-color: rgb(255 188 43 / 10%) !important;
  }
  .bg-danger {
    background-color: rgb(253 88 18 / 25%) !important;
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
