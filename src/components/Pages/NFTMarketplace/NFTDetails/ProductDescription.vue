<template>
  <div class="card bg-white border-0 rounded-3">
    <h5 class="mb-4">Product Description</h5>

    <ul
      class="nav nav-tabs bg-transparent border-bottom ga-3 ga-sm-5 pb-4 live-auction"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item">
        <button
          class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body active"
          :class="['tab', { active: activeTab === 'placeBids' }]"
          @click="setActiveTab('placeBids')"
        >
          PLACE BIDS
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
          :class="['tab', { active: activeTab === 'additionalInformation' }]"
          @click="setActiveTab('additionalInformation')"
        >
          ADDITIONAL INFORMATION
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
          :class="['tab', { active: activeTab === 'details' }]"
          @click="setActiveTab('details')"
        >
          DETAILS
        </button>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane" v-show="activeTab === 'placeBids'">
        <div
          class="default-table-area style-two campaigns-table only-for-responsive-table"
        >
          <div class="table-responsive">
            <table
              class="table align-middle border-0 w-100"
              border="0"
              cellspacing="0"
              cellpadding="0"
            >
              <tbody>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-17.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                        <span class="fs-12">by John Lira</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    11.75 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    10.00 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    30 mins ago
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-18.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Rotating Flower</h4>
                        <span class="fs-12">by WalterW.</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    9.25 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    6.10 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    1 hr ago
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-19.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Windows Art</h4>
                        <span class="fs-12">by Christino</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    17.24 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    11.75 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    1.30 hr ago
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-20.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                        <span class="fs-12">by John Lira</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    12.12 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    10.24 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    35 mins ago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="tab-pane" v-show="activeTab === 'additionalInformation'">
        <div
          class="default-table-area style-two campaigns-table only-for-responsive-table"
        >
          <div class="table-responsive">
            <table
              class="table align-middle border-0 w-100"
              border="0"
              cellspacing="0"
              cellpadding="0"
            >
              <tbody>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-19.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Windows Art</h4>
                        <span class="fs-12">by Christino</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    17.24 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    11.75 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    1.30 hr ago
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-20.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                        <span class="fs-12">by John Lira</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    12.12 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    10.24 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    35 mins ago
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-17.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                        <span class="fs-12">by John Lira</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    11.75 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    10.00 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    30 mins ago
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-18.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Rotating Flower</h4>
                        <span class="fs-12">by WalterW.</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    9.25 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    6.10 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    1 hr ago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="tab-pane" v-show="activeTab === 'details'">
        <div
          class="default-table-area style-two campaigns-table only-for-responsive-table"
        >
          <div class="table-responsive">
            <table
              class="table align-middle border-0 w-100"
              border="0"
              cellspacing="0"
              cellpadding="0"
            >
              <tbody>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-17.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                        <span class="fs-12">by John Lira</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    11.75 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    10.00 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    30 mins ago
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-18.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Rotating Flower</h4>
                        <span class="fs-12">by WalterW.</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    9.25 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    6.10 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    1 hr ago
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-19.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Windows Art</h4>
                        <span class="fs-12">by Christino</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    17.24 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    11.75 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    1.30 hr ago
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/nft-20.png"
                          class="rounded-3"
                          style="width: 50px; height: 50px"
                          alt="nft"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                        <span class="fs-12">by John Lira</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    12.12 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    10.24 ETH
                  </td>
                  <td class="border-bottom fs-12 fw-semibold text-body">
                    35 mins ago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductDescription",
  setup() {
    const activeTab = ref("placeBids");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
});
</script>

<style lang="scss" scoped>
.ga-3 {
  gap: 1rem !important;
}
@media (min-width: 576px) {
  .ga-sm-5 {
    gap: 3rem !important;
  }
}
</style>
