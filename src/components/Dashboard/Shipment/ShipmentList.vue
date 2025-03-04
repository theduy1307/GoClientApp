<template>
  <v-card
    class="shipment-list-card trezo-card border-radius d-block border-0 shadow-none p-0"
  >
    <div class="v-card-header mb-0 p-25">
      <h5 class="mb-0">Shipment List</h5>
      <div class="d-flex align-items-center">
        <form class="search-box position-relative">
          <input
            type="text"
            class="input-search d-block"
            placeholder="Search here.."
          />
          <button type="submit">
            <i class="material-symbols-outlined">search</i>
          </button>
        </form>
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

    <div class="default-table-area style-two shipment-list">
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
                  <span class="ms-2">Shipment ID</span>
                </div>
              </th>
              <th>Customer Name</th>
              <th>Products</th>
              <th>Cost</th>
              <th>Ship Date</th>
              <th>Origin</th>
              <th>Shipment Method</th>
              <th>Status</th>
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
                  <span class="ms-2">#0015</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user1.jpg"
                    class="wh-30 rounded-circle"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">David Farrior</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Toys</td>
              <td class="border-bottom text-danger">$50,000</td>
              <td class="border-bottom">2024-10-01</td>
              <td class="border-bottom">New York, USA</td>
              <td class="border-bottom">Air</td>
              <td class="border-bottom">
                <span
                  class="rounded-1 bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
                >
                  Delivered
                </span>
              </td>
              <td class="border-bottom">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      type="button"
                      v-bind="props"
                      class="position-relative dot-btn p-0 bg-transparent border-none"
                    >
                      <i data-feather="more-horizontal"></i>
                    </button>
                  </template>
                  <v-list class="menu-content">
                    <button type="button" class="bg-transparent border-none">
                      Edit
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      View
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      Delete
                    </button>
                  </v-list>
                </v-menu>
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
                  <span class="ms-2">#0099</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user2.jpg"
                    class="wh-30 rounded-circle"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Leslie Yawn</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Sports</td>
              <td class="border-bottom text-danger">$1,20,000</td>
              <td class="border-bottom">2024-09-28</td>
              <td class="border-bottom">Shanghai, China</td>
              <td class="border-bottom">Sea</td>
              <td class="border-bottom">
                <span
                  class="rounded-1 bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
                >
                  In Transit
                </span>
              </td>
              <td class="border-bottom">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      type="button"
                      v-bind="props"
                      class="position-relative dot-btn p-0 bg-transparent border-none"
                    >
                      <i data-feather="more-horizontal"></i>
                    </button>
                  </template>
                  <v-list class="menu-content">
                    <button type="button" class="bg-transparent border-none">
                      Edit
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      View
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      Delete
                    </button>
                  </v-list>
                </v-menu>
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
                  <span class="ms-2">#0145</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user3.jpg"
                    class="wh-30 rounded-circle"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Willie Wood</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Fashion</td>
              <td class="border-bottom text-danger">$50,000</td>
              <td class="border-bottom">2024-09-25</td>
              <td class="border-bottom">Berlin, Germany</td>
              <td class="border-bottom">Road</td>
              <td class="border-bottom">
                <span
                  class="rounded-1 bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
                >
                  On The Way
                </span>
              </td>
              <td class="border-bottom">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      type="button"
                      v-bind="props"
                      class="position-relative dot-btn p-0 bg-transparent border-none"
                    >
                      <i data-feather="more-horizontal"></i>
                    </button>
                  </template>
                  <v-list class="menu-content">
                    <button type="button" class="bg-transparent border-none">
                      Edit
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      View
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      Delete
                    </button>
                  </v-list>
                </v-menu>
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
                  <span class="ms-2">#0247</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user4.jpg"
                    class="wh-30 rounded-circle"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Jill Caldera</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Food</td>
              <td class="border-bottom text-danger">$80,000</td>
              <td class="border-bottom">2024-09-22</td>
              <td class="border-bottom">Tokyo, Japan</td>
              <td class="border-bottom">Air</td>
              <td class="border-bottom">
                <span
                  class="rounded-1 bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
                  >Delivered</span
                >
              </td>
              <td class="border-bottom">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      type="button"
                      v-bind="props"
                      class="position-relative dot-btn p-0 bg-transparent border-none"
                    >
                      <i data-feather="more-horizontal"></i>
                    </button>
                  </template>
                  <v-list class="menu-content">
                    <button type="button" class="bg-transparent border-none">
                      Edit
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      View
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      Delete
                    </button>
                  </v-list>
                </v-menu>
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
                  <span class="ms-2">#0299</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user5.jpg"
                    class="wh-30 rounded-circle"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Bill Mitchell</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Electronics</td>
              <td class="border-bottom text-danger">$1,50,000</td>
              <td class="border-bottom">2024-09-20</td>
              <td class="border-bottom">Madrid, Spain</td>
              <td class="border-bottom">Sea</td>
              <td class="border-bottom">
                <span
                  class="rounded-1 bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
                >
                  Pending
                </span>
              </td>
              <td class="border-bottom">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      type="button"
                      v-bind="props"
                      class="position-relative dot-btn p-0 bg-transparent border-none"
                    >
                      <i data-feather="more-horizontal"></i>
                    </button>
                  </template>
                  <v-list class="menu-content">
                    <button type="button" class="bg-transparent border-none">
                      Edit
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      View
                    </button>
                    <button type="button" class="bg-transparent border-none">
                      Delete
                    </button>
                  </v-list>
                </v-menu>
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
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";
import Pagination from "../../Common/Pagination.vue";

export default defineComponent({
  name: "ShipmentList",
  components: {
    Pagination,
  },
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>

<style lang="scss" scoped>
.shipment-list-card {
  &.v-card {
    &.trezo-card {
      .v-card-header {
        .search-box {
          width: 240px;
          margin-right: 20px;
        }
      }
    }
  }
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
  .p-4 {
    padding: 1.3rem !important;
  }
}
</style>
