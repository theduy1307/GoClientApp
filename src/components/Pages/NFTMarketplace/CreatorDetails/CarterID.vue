<template>
  <div class="card border-0 rounded-2 p-4 bg-white mb-4">
    <div class="d-flex align-items-center mb-4">
      <div class="flex-shrink-0 position-relative">
        <v-img
          src="@/assets/images/nft-21.png"
          class="rounded-circle"
          style="width: 65px; height: 65px"
          alt="nft"
        />
      </div>
      <div class="flex-grow-1 ms-3">
        <h4 class="fs-24 fw-semibold mb-1">{{ creator.name }}</h4>
        <span class="fs-12">ID: {{ creator.id }}</span>
      </div>
    </div>
    <div
      class="d-flex align-items-center justify-content-between flex-wrap ga-2 mb-4"
    >
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
          <h4 class="fs-14 fw-semibold mb-0">{{ creator.publishDate }}</h4>
        </div>
      </div>
      <button
        class="follow-btn"
        :class="{ 'btn-unfollow': creator.isFollowing }"
        @click="toggleFollow"
      >
        {{ creator.isFollowing ? "Unfollow" : "Follow" }}
      </button>
    </div>
    <div
      class="d-flex flex-wrap justify-content-between ga-3 rounded-3 bg-body-bg p-3 px-sm-4 mb-4"
    >
      <div class="text-center">
        <span class="fs-12 d-block mb-1 text-body">Total NFT</span>
        <h3 class="mb-0 fw-semibold fs-14">{{ creator.totalNFT }}</h3>
      </div>
      <div class="text-center">
        <span class="fs-12 d-block mb-1 text-body">Total Earned</span>
        <h3 class="mb-0 fw-semibold fs-14">{{ creator.totalEarned }}</h3>
      </div>
      <div class="text-center">
        <span class="fs-12 d-block mb-1 text-body">Auction</span>
        <h3 class="mb-0 fw-semibold fs-14">{{ creator.auction }}</h3>
      </div>
    </div>

    <h3 class="fs-18 mb-3">Description</h3>
    <p>{{ creator.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "CarterID",
  setup() {
    const creator = reactive({
      name: "Angela Carter",
      id: 35246,
      publishDate: "23 June 2024",
      totalNFT: 156,
      totalEarned: "1234ETH",
      auction: 45,
      description:
        "This NFT captures the essence of boundless potential, symbolized by a surreal landscape where the sky meets the earth in a dazzling fusion of colors. The intricate design features flowing lines that blend together, representing the limitless paths we can take in life.",
      isFollowing: false,
    });

    const toggleFollow = () => {
      creator.isFollowing = !creator.isFollowing;
    };

    return {
      creator,
      toggleFollow,
    };
  },
});
</script>

<style lang="scss" scoped>
.p-4 {
  padding: 1.5rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.follow-btn {
  height: auto;
  min-width: auto;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 1.5rem;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--whiteColor);
  border: 1px solid var(--primaryColor);
  background-color: var(--primaryColor);
  &.btn-unfollow {
    background-color: #6c757d !important;
    border: 1px solid #6c757d;
  }
}
</style>
