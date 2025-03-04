<template>
  <v-card
    class="transaction-history-card trezo-card border-radius d-block border-0 shadow-none p-0"
  >
    <div class="v-card-header mb-0 p-25">
      <h5 class="mb-0">Transaction History</h5>
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

    <div class="default-table-area style-two transaction-history">
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
                  <span class="ms-1">
                    <span class="fs-12 fw-bold">Transaction</span> ID
                  </span>
                </div>
              </th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
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
                  <span class="ms-1">#TID0015</span>
                </div>
              </td>
              <td class="border-bottom">2024-10-01</td>
              <td class="border-bottom">Payment from Client</td>
              <td class="text-primary border-bottom">$5,000</td>
              <td class="border-bottom">Income</td>
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
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TID0099</span>
                </div>
              </td>
              <td class="border-bottom">2024-09-28</td>
              <td class="border-bottom">Office Supplies</td>
              <td class="text-primary border-bottom">$10,000</td>
              <td class="border-bottom">Expense</td>
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
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TID0145</span>
                </div>
              </td>
              <td class="border-bottom">2024-09-25</td>
              <td class="border-bottom">Website Maintenance</td>
              <td class="text-primary border-bottom">$35,000</td>
              <td class="border-bottom">Expense</td>
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
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TID0247</span>
                </div>
              </td>
              <td class="border-bottom">2024-09-22</td>
              <td class="border-bottom">Payment from Client</td>
              <td class="text-primary border-bottom">$2,000</td>
              <td class="border-bottom">Income</td>
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
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TID0299</span>
                </div>
              </td>
              <td class="border-bottom">2024-09-20</td>
              <td class="border-bottom">Advertising Campaign</td>
              <td class="text-primary border-bottom">$15,500</td>
              <td class="border-bottom">Expense</td>
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
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TID0015</span>
                </div>
              </td>
              <td class="border-bottom">2024-10-01</td>
              <td class="border-bottom">Payment from Client</td>
              <td class="text-primary border-bottom">$5,000</td>
              <td class="border-bottom">Income</td>
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

      <Pagination items="05" total="30" class="p-14 border-0" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "TransactionHistory",
  components: {
    Pagination,
  },
});
</script>

<style lang="scss" scoped>
.transaction-history-card {
  .form-check {
    .form-check-input {
      width: 16px;
      height: 16px;
      cursor: pointer;
      position: relative;
      top: 3px;
    }
  }
}
.p-14 {
  padding: 14px;
}
.ms-1 {
  margin-left: 0.25rem !important;
}
.text-primary {
  color: var(--primaryColor) !important;
}
</style>
