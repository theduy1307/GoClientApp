<template>
  <v-card
    class="transaction-history-card trezo-card border-radius d-block border-0 shadow-none p-0"
  >
    <div class="v-card-header mb-0 p-25">
      <h5 class="mb-0">Transaction History</h5>
      <div class="d-flex flex-wrap">
        <AddNewTransactionModal />

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

    <div class="default-table-area style-two transaction-history-large">
      <div class="table-responsive">
        <table
          class="table align-middle"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <thead>
            <tr>
              <th scope="col">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  <span class="ms-1"
                    ><span class="fs-12 fw-bold">Transaction</span> ID</span
                  >
                </div>
              </th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
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
              <td class="border-bottom text-primary">$5,000</td>
              <td class="border-bottom">Income</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                >
                  Completed
                </span>
              </td>
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
              <td class="border-bottom text-primary">$10,000</td>
              <td class="border-bottom">Expense</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-1"
                >
                  Pending
                </span>
              </td>
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
              <td class="border-bottom text-primary">$35,000</td>
              <td class="border-bottom">Expense</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-1"
                >
                  Pending
                </span>
              </td>
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
              <td class="border-bottom text-primary">$2,000</td>
              <td class="border-bottom">Income</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                >
                  Completed
                </span>
              </td>
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
              <td class="border-bottom text-primary">$15,500</td>
              <td class="border-bottom">Expense</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                >
                  Completed
                </span>
              </td>
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
                  <span class="ms-1">#TID0312</span>
                </div>
              </td>
              <td class="border-bottom">2024-09-12</td>
              <td class="border-bottom">Office Renovation</td>
              <td class="border-bottom text-primary">$4,000</td>
              <td class="border-bottom">Expense</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                >
                  Completed
                </span>
              </td>
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
                  <span class="ms-1">#TID0320</span>
                </div>
              </td>
              <td class="border-bottom">2024-09-10</td>
              <td class="border-bottom">Payment from Client</td>
              <td class="border-bottom text-primary">$3,000</td>
              <td class="border-bottom">Income</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                >
                  Completed
                </span>
              </td>
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
                  <span class="ms-1">#TID0351</span>
                </div>
              </td>
              <td class="border-bottom">2024-09-08</td>
              <td class="border-bottom">Marketing Campaign</td>
              <td class="border-bottom text-primary">$1,500</td>
              <td class="border-bottom">Expense</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-1"
                >
                  Pending
                </span>
              </td>
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
                  <span class="ms-1">#TID0360</span>
                </div>
              </td>
              <td class="border-bottom">2024-09-05</td>
              <td class="border-bottom">Payment from Client</td>
              <td class="border-bottom text-primary">$6,500</td>
              <td class="border-bottom">Income</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                >
                  Completed
                </span>
              </td>
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
                  <span class="ms-1">#TID0365</span>
                </div>
              </td>
              <td class="border-bottom">2024-09-01</td>
              <td class="border-bottom">Software Subscription</td>
              <td class="border-bottom text-primary">$400</td>
              <td class="border-bottom">Expense</td>
              <td class="border-bottom">
                <span
                  class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
                >
                  Completed
                </span>
              </td>
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

      <Pagination total="30" items="10" class="p-4 border-0" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";
import AddNewTransactionModal from "./AddNewTransactionModal.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Transaction",
  components: {
    Pagination,
    AddNewTransactionModal,
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
      top: 2px;
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
.add-transaction-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 6px 13px 6px 35px;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--primaryColor);
  border: 1px solid var(--primaryColor);

  i {
    top: 50%;
    left: 8px;
    font-size: 22px;
    position: absolute;
    transform: translateY(-50%);
  }
}
.bg-success {
  background-color: rgb(55 216 10 / 10%) !important;
}
.text-success {
  color: rgb(55 216 10);
}
.bg-warning {
  background-color: rgb(255 188 43 / 10%) !important;
}
.text-warning {
  color: rgb(255 188 43) !important;
}
</style>
