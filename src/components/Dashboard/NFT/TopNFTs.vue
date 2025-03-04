<template>
  <v-card
    class="top-collections-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Top NFTs</h5>
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

    <div class="default-table-area style-two top-nfts-table">
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
                <span class="fs-12">SELLERS</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">VOLUME</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">FLOW PRICE</span>
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
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/sellers-1.gif"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                    <span class="fs-12">Queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">6240</td>
              <td class="border-bottom fs-12 fw-semibold text-body">624 ETH</td>
              <td class="border-bottom text-end">
                <span
                  class="bg-success text-success py-1 px-3 border border-success rounded-pill bg-opacity-10 fs-12"
                >
                  +5.4%
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/sellers-2.gif"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">Walking Brain</h4>
                    <span class="fs-12">@neverdies</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">5135</td>
              <td class="border-bottom fs-12 fw-semibold text-body">597 ETH</td>
              <td class="border-bottom text-end">
                <span
                  class="bg-danger text-danger py-1 px-3 border border-danger rounded-pill bg-opacity-10 fs-12"
                >
                  -3.2%
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/sellers-3.gif"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">Flying Flower</h4>
                    <span class="fs-12">@emoticons</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">4321</td>
              <td class="border-bottom fs-12 fw-semibold text-body">413 ETH</td>
              <td class="border-bottom text-end">
                <span
                  class="bg-success text-success py-1 px-3 border border-success rounded-pill bg-opacity-10 fs-12"
                >
                  +2.5%
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/sellers-4.gif"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">Living Robot</h4>
                    <span class="fs-12">@puzzleworld</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">3124</td>
              <td class="border-bottom fs-12 fw-semibold text-body">321 ETH</td>
              <td class="border-bottom text-end">
                <span
                  class="bg-danger text-danger py-1 px-3 border border-danger rounded-pill bg-opacity-10 fs-12"
                >
                  -1.5%
                </span>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/sellers-5.gif"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">Thumbs Up</h4>
                    <span class="fs-12">@liveslong</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">2137</td>
              <td class="border-bottom fs-12 fw-semibold text-body">246 ETH</td>
              <td class="border-bottom text-end">
                <span
                  class="bg-success text-success py-1 px-3 border border-success rounded-pill bg-opacity-10 fs-12"
                >
                  +5.4%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <PaginationTwo items="05" total="30" class="pb-0 border-none" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationTwo from "../../Common/PaginationTwo.vue";

export default defineComponent({
  name: "TopNFTs",
  components: {
    PaginationTwo,
  },
});
</script>

<style lang="scss" scoped>
.top-collections-card {
  .bg-success {
    background-color: rgb(55 216 10 / 10%) !important;
  }
  .bg-danger {
    background-color: rgb(253 88 18 / 10%) !important;
  }
  .default-table-area {
    &.top-nfts-table {
      &.style-two {
        .table-responsive {
          .table {
            tbody {
              tr {
                td {
                  padding-top: 12px;
                  padding-bottom: 13px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
