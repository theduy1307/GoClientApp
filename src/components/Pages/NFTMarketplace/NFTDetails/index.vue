<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="mb-4">
        <div class="tab-content mb-3 card border-0 bg-white p-3 rounded-2">
          <div class="tab-pane" v-show="activeTab === 'imageOne'">
            <v-img
              src="@/assets/images/nft-details-1.png"
              class="rounded-2"
              alt="nft-details"
            />
          </div>
          <div class="tab-pane" v-show="activeTab === 'imageTwo'">
            <v-img
              src="@/assets/images/nft-details-2.png"
              class="rounded-2"
              alt="nft-details"
            />
          </div>
          <div class="tab-pane" v-show="activeTab === 'imageThree'">
            <v-img
              src="@/assets/images/nft-details-3.png"
              class="rounded-2"
              alt="nft-details"
            />
          </div>
          <div class="tab-pane" v-show="activeTab === 'imageFour'">
            <v-img
              src="@/assets/images/nft-details-4.png"
              class="rounded-2"
              alt="nft-details"
            />
          </div>
        </div>

        <ul
          class="nav nav-tabs ga-3 nft-detail-tabs border-0 justify-content-center"
        >
          <li
            class="nav-item"
            :class="['tab', { active: activeTab === 'imageOne' }]"
            @click="setActiveTab('imageOne')"
          >
            <button class="nav-link p-0 border-0">
              <v-img
                src="@/assets/images/nft-details-1.png"
                class="rounded-2"
                style="width: 110px"
                alt="nft-details"
              />
            </button>
          </li>
          <li
            class="nav-item"
            :class="['tab', { active: activeTab === 'imageTwo' }]"
            @click="setActiveTab('imageTwo')"
          >
            <button class="nav-link p-0 border-0">
              <v-img
                src="@/assets/images/nft-details-2.png"
                class="rounded-2"
                style="width: 110px"
                alt="nft-details"
              />
            </button>
          </li>
          <li
            class="nav-item"
            :class="['tab', { active: activeTab === 'imageThree' }]"
            @click="setActiveTab('imageThree')"
          >
            <button class="nav-link p-0 border-0">
              <v-img
                src="@/assets/images/nft-details-3.png"
                class="rounded-2"
                style="width: 110px"
                alt="nft-details"
              />
            </button>
          </li>
          <li
            class="nav-item"
            :class="['tab', { active: activeTab === 'imageFour' }]"
            @click="setActiveTab('imageFour')"
          >
            <button class="nav-link p-0 border-0">
              <v-img
                src="@/assets/images/nft-details-4.png"
                class="rounded-2"
                style="width: 110px"
                alt="nft-details"
              />
            </button>
          </li>
        </ul>
      </div>
      <button class="place-bid-btn">Place Bid</button>
    </div>

    <div class="col-lg-8">
      <div class="card border-0 rounded-2 p-4 bg-white">
        <div class="border-bottom mb-3 pb-3">
          <span class="fs-12 d-block mb-1">NFT ID: 35246</span>
          <h3 class="fs-24 mb-0">Christmas Eve</h3>
        </div>
        <div class="d-flex flex-wrap ga-2 ga-sm-5 mb-4">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <v-img
                src="@/assets/images/user-76.gif"
                class="rounded-circle"
                style="width: 30px; height: 30px"
                alt="user"
              />
              <v-img
                src="@/assets/images/verify.svg"
                class="position-absolute top-100 start-100 translate-middle"
                style="width: 18px; height: 18px"
                alt="verify"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <span class="fs-12">Creator</span>
              <h4 class="fs-14 fw-semibold">Anan Loren</h4>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <v-img
                src="@/assets/images/schedule2.png"
                style="width: 30px; height: 30px"
                alt="schedule2"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <span class="fs-12">Published</span>
              <h4 class="fs-14 fw-semibold">23 June 2024</h4>
            </div>
          </div>
        </div>

        <div
          class="d-flex flex-wrap justify-content-between ga-3 rounded-3 bg-body-bg p-3 mb-5"
        >
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Price:</span>
            <h3 class="mb-0 fw-semibold fs-14">5.50 ETH</h3>
          </div>
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Highest Bid:</span>
            <h3 class="mb-0 fw-semibold fs-14">4.95 ETH</h3>
          </div>
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Stock:</span>
            <h3 class="mb-0 fw-semibold fs-14">130/450</h3>
          </div>
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Price:</span>
            <h3 class="mb-0 fw-semibold fs-14">5.50 ETH</h3>
          </div>
          <div class="text-center">
            <span class="fs-12 d-block mb-1 text-body">Auction End In:</span>
            <CountdownTimer endDate="December 14, 2026 21:14:01" />
          </div>
        </div>

        <h3 class="fs-18 mb-3">Description</h3>
        <p class="mb-5">
          This NFT captures the essence of boundless potential, symbolized by a
          surreal landscape where the sky meets the earth in a dazzling fusion
          of colors. The intricate design features flowing lines that blend
          together, representing the limitless paths we can take in life.
        </p>

        <ProductDescription />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CountdownTimer from "./CountdownTimer.vue";
import ProductDescription from "./ProductDescription.vue";

export default defineComponent({
  name: "NFTDetails",
  components: {
    CountdownTimer,
    ProductDescription,
  },
  setup() {
    const activeTab = ref("imageOne");

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
.mb-3 {
  margin-bottom: 1rem !important;
}
.p-4 {
  padding: 1.5rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.place-bid-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 7px;
  display: inline-block;
  color: var(--whiteColor);
  border: 1px solid var(--primaryColor);
  background-color: var(--primaryColor);
  width: 100%;
}
</style>
