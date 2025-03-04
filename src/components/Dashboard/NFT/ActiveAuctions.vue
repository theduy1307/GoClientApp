<template>
  <v-card
    class="active-auctions-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Active Auctions</h5>
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

    <div class="default-table-area style-two campaigns-table">
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
                <span class="fs-12">ITEM</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">OPEN PRICE</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">YOUR OFFER</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">RECENT OFFER</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">TIME LEFT</span>
              </th>
              <th
                class="text-end bg-transparent border-bottom text-body fw-medium"
              >
                <span class="fs-12">VIEW</span>
              </th>
            </tr>
          </thead>
          <tbody>
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
              <td class="fs-12 border-bottom fw-semibold text-body">
                11.75 ETH
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                10.00 ETH
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/user-80.png"
                    style="width: 22px"
                    class="border border-1 box-shadow border-color-white rounded-circle"
                    alt="user"
                  />
                  <span class="text-body fs-12 fw-semibold ms-2">
                    10.08 ETH
                  </span>
                </div>
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                2h : 43m : 21s
              </td>
              <td class="text-end border-bottom">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line"></i>
                </a>
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
              <td class="fs-12 border-bottom fw-semibold text-body">
                9.25 ETH
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                6.10 ETH
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/user-81.png"
                    style="width: 22px"
                    class="border border-1 box-shadow border-color-white rounded-circle"
                    alt="user"
                  />
                  <span class="text-body fs-12 fw-semibold ms-2">
                    7.15 ETH
                  </span>
                </div>
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                1h : 21m : 12s
              </td>
              <td class="text-end border-bottom">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line"></i>
                </a>
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
              <td class="fs-12 border-bottom fw-semibold text-body">
                17.24 ETH
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                11.75 ETH
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/user-82.png"
                    style="width: 22px"
                    class="border border-1 box-shadow border-color-white rounded-circle"
                    alt="user"
                  />
                  <span class="text-body fs-12 fw-semibold ms-2">
                    14.11 ETH
                  </span>
                </div>
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                43m : 21s
              </td>
              <td class="text-end border-bottom">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line"></i>
                </a>
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
                    <h4 class="fs-14 fw-semibold mb-1">3D Logo</h4>
                    <span class="fs-12">by Hater</span>
                  </div>
                </div>
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                12.12 ETH
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                10.24 ETH
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/user-83.png"
                    style="width: 22px"
                    class="border border-1 box-shadow border-color-white rounded-circle"
                    alt="user"
                  />
                  <span class="text-body fs-12 fw-semibold ms-2">
                    12.08 ETH
                  </span>
                </div>
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                1h : 23m : 17s
              </td>
              <td class="text-end border-bottom">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line"></i>
                </a>
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
                    <h4 class="fs-14 fw-semibold mb-1">Awesome Bird</h4>
                    <span class="fs-12">by Liveslong</span>
                  </div>
                </div>
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                8.15 ETH
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                7.15 ETH
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/user-84.png"
                    style="width: 22px"
                    class="border border-1 box-shadow border-color-white rounded-circle"
                    alt="user"
                  />
                  <span class="text-body fs-12 fw-semibold ms-2">
                    8.08 ETH
                  </span>
                </div>
              </td>
              <td class="fs-12 border-bottom fw-semibold text-body">
                4h : 14m : 54s
              </td>
              <td class="text-end border-bottom">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination items="05" total="30" class="pb-0 pl-0 pr-0 border-none" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "../../Common/Pagination.vue";

export default defineComponent({
  name: "ActiveAuctions",
  components: {
    Pagination,
  },
});
</script>
