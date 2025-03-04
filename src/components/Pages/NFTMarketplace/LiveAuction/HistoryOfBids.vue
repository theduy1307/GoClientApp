<template>
  <v-card
    class="top-collections-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header mb-2">
      <h5 class="mb-0">History Of Bids</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="material-symbols-outlined fw-bold">more_vert</i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Daily
          </button>
          <button type="button" class="bg-transparent border-none">
            Weekly
          </button>
          <button type="button" class="bg-transparent border-none">
            Monthly
          </button>
          <button type="button" class="bg-transparent border-none">
            Yearly
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="default-table-area style-two history-of-bids">
      <div class="table-responsive hover-scroll-bar">
        <table
          class="table align-middle border-0"
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
                      src="@/assets/images/user-86.png"
                      class="rounded-circle"
                      style="width: 32px; height: 32px"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Johhna Loren</h4>
                    <span class="fs-12">@queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body text-end">
                624 ETH
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-87.png"
                      class="rounded-circle"
                      style="width: 32px; height: 32px"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Zara Loren</h4>
                    <span class="fs-12">@queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body text-end">
                121.1 ETH
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-88.png"
                      class="rounded-circle"
                      style="width: 32px; height: 32px"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Walter White</h4>
                    <span class="fs-12">@queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body text-end">
                24.78 ETH
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-89.png"
                      class="rounded-circle"
                      style="width: 32px; height: 32px"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Viktor James</h4>
                    <span class="fs-12">@queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body text-end">
                72.8 ETH
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-90.png"
                      class="rounded-circle"
                      style="width: 32px; height: 32px"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Zinia Loren</h4>
                    <span class="fs-12">@queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body text-end">
                986 ETH
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-60.jpg"
                      class="rounded-circle"
                      style="width: 32px; height: 32px"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">ALex Dew</h4>
                    <span class="fs-12">@queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body text-end">
                4857 ETH
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-61.jpg"
                      class="rounded-circle"
                      style="width: 32px; height: 32px"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Juhon Smith</h4>
                    <span class="fs-12">@queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body text-end">
                7854 ETH
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-62.jpg"
                      class="rounded-circle"
                      style="width: 32px; height: 32px"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-0">Kilva Dew</h4>
                    <span class="fs-12">@queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body text-end">
                9864 ETH
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
  name: "HistoryOfBids",
});
</script>
