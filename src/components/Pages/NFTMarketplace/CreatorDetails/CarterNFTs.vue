<template>
  <v-card
    class="angelas-nft-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Angela’s NFTs</h5>
    </div>

    <ul
      class="nav nav-tabs bg-transparent border-bottom ga-3 ga-sm-5 pb-4 live-auction"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item">
        <button
          class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
          :class="['tab', { active: activeTab === 'all' }]"
          @click="setActiveTab('all')"
        >
          All
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
          :class="['tab', { active: activeTab === 'inAuction' }]"
          @click="setActiveTab('inAuction')"
        >
          IN AUCTION
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
          :class="['tab', { active: activeTab === 'sold' }]"
          @click="setActiveTab('sold')"
        >
          SOLD
        </button>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane" v-show="activeTab === 'all'">
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
                          src="@/assets/images/nft-9.png"
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
                          src="@/assets/images/nft-5.gif"
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
                          src="@/assets/images/nft-6.gif"
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
                          src="@/assets/images/nft-7.png"
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
                          src="@/assets/images/nft-8.png"
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
                          src="@/assets/images/nft-9.png"
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

          <Pagination total="30" items="10" class="p-0 pt-4 border-0" />
        </div>
      </div>
      <div class="tab-pane" v-show="activeTab === 'inAuction'">
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
          <Pagination total="30" items="10" class="p-0 pt-4 border-0" />
        </div>
      </div>
      <div class="tab-pane" v-show="activeTab === 'sold'">
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
          <Pagination total="30" items="10" class="p-0 pt-4 border-0" />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "CarterNFTs",
  components: {
    Pagination,
  },
  setup() {
    const activeTab = ref("all");

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
.pt-4 {
  padding-top: 1rem !important;
}
.ga-3 {
  gap: 1rem !important;
}
@media (min-width: 576px) {
  .ga-sm-5 {
    gap: 3rem !important;
  }
}
</style>
