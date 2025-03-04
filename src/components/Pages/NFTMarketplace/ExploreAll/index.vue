<template>
  <div class="row justify-content-center">
    <div
      class="col-xxl-3 col-lg-4 col-sm-6"
      v-for="(item, index) in nftItems"
      :key="index"
    >
      <div class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4">
        <RouterLink
          :to="item.detailsLink"
          class="d-block mb-3 text-decoration-none position-relative"
        >
          <v-img :src="item.image" class="rounded-3" :alt="item.title" />
          <span class="place-bid-btn position-absolute"> Place Bid </span>
        </RouterLink>

        <div
          class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
        >
          <RouterLink
            :to="item.creatorLink"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                :src="item.creatorImage"
                class="rounded-circle"
                style="width: 27px; height: 27px"
                :alt="item.creatorName"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <span class="fs-12">NFT ID: {{ item.id }}</span>
              <h4 class="fw-semibold fs-14 mb-0">{{ item.title }}</h4>
            </div>
          </RouterLink>
          <v-img
            src="@/assets/images/verify.svg"
            class="cursor"
            alt="verify"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Verified"
          />
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <RouterLink
            :to="item.detailsLink"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-grow-1">
              <span class="fs-12 d-block mb-1">
                Highest Bid:
                <span class="fw-semibold">{{ item.highestBid }}</span>
              </span>
              <h4 class="fw-semibold fs-14 mb-0">{{ item.currentBid }}</h4>
            </div>
          </RouterLink>
          <button class="bg-transparent p-0 border-0">
            <i
              class="ri-heart-fill fs-20 position-relative top-2"
              :style="{ color: item.favoriteColor }"
            ></i>
            <span class="fs-12 fw-semibold">
              {{ item.rating }}
              <span class="text-body">/10</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <Pagination total="30" items="8" class="border-0 pb-0" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "ExploreAll",
  components: {
    Pagination,
  },
  setup() {
    const nftItems = [
      {
        id: "35246",
        title: "Christmas Eve",
        image: require("@/assets/images/nft-10.png"),
        detailsLink: "/nft-marketplace/nft-details",
        creatorImage: require("@/assets/images/user-76.gif"),
        creatorName: "User 76",
        creatorLink: "/nft-marketplace/creator-details",
        highestBid: "9.75 ETH",
        currentBid: "5.50 ETH",
        rating: "9.2",
        favoriteColor: "#ee3e08",
      },
      {
        id: "35247",
        title: "Humming Bird",
        image: require("@/assets/images/nft-11.png"),
        detailsLink: "/nft-marketplace/nft-details",
        creatorImage: require("@/assets/images/user-77.gif"),
        creatorName: "User 77",
        creatorLink: "/nft-marketplace/creator-details",
        highestBid: "10.75 ETH",
        currentBid: "12.50 ETH",
        rating: "9.5",
        favoriteColor: "#ee3e08",
      },
      {
        id: "35228",
        title: "Naughty Pool",
        image: require("@/assets/images/nft-12.png"),
        detailsLink: "/nft-marketplace/nft-details",
        creatorImage: require("@/assets/images/user-85.png"),
        creatorName: "User 85",
        creatorLink: "/nft-marketplace/creator-details",
        highestBid: "8.75 ETH",
        currentBid: "9.50 ETH",
        rating: "9.7",
        favoriteColor: "#ee3e08",
      },
      {
        id: "35227",
        title: "Hello Thumbs",
        image: require("@/assets/images/nft-13.png"),
        detailsLink: "/nft-marketplace/nft-details",
        creatorImage: require("@/assets/images/user-85.png"),
        creatorName: "User 85",
        creatorLink: "/nft-marketplace/creator-details",
        highestBid: "9.30 ETH",
        currentBid: "8.15 ETH",
        rating: "9.7",
        favoriteColor: "#ee3e08",
      },
      {
        id: "35248",
        title: "Pixel Watermelon",
        image: require("@/assets/images/nft-14.png"),
        detailsLink: "/nft-marketplace/nft-details",
        creatorImage: require("@/assets/images/user-76.gif"),
        creatorName: "User 76",
        creatorLink: "/nft-marketplace/creator-details",
        highestBid: "1.75 ETH",
        currentBid: "3.50 ETH",
        rating: "9.7",
        favoriteColor: "#ee3e08",
      },
      {
        id: "35258",
        title: "BDancing Cookies",
        image: require("@/assets/images/nft-3.gif"),
        detailsLink: "/nft-marketplace/nft-details",
        creatorImage: require("@/assets/images/user-77.gif"),
        creatorName: "User 77",
        creatorLink: "/nft-marketplace/creator-details",
        highestBid: "10.75 ETH",
        currentBid: "12.50 ETH",
        rating: "9.7",
        favoriteColor: "#ee3e08",
      },
      {
        id: "35158",
        title: "Rotating Flower",
        image: require("@/assets/images/nft-15.png"),
        detailsLink: "/nft-marketplace/nft-details",
        creatorImage: require("@/assets/images/user-85.png"),
        creatorName: "User 85",
        creatorLink: "/nft-marketplace/creator-details",
        highestBid: "3.95 ETH",
        currentBid: "6.50 ETH",
        rating: "9.7",
        favoriteColor: "#ee3e08",
      },
      {
        id: "35782",
        title: "Flying Bulb",
        image: require("@/assets/images/nft-16.png"),
        detailsLink: "/nft-marketplace/nft-details",
        creatorImage: require("@/assets/images/user-85.png"),
        creatorName: "User 85",
        creatorLink: "/nft-marketplace/creator-details",
        highestBid: "8.75 ETH",
        currentBid: "9.50 ETH",
        rating: "9.7",
        favoriteColor: "#ee3e08",
      },
    ];
    return {
      nftItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.place-bid {
  .place-bid-btn {
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    padding: 0.5rem 1.5rem;
    border-radius: 7px;
    display: inline-block;
    color: var(--whiteColor);
    border: 1px solid var(--primaryColor);
    background-color: var(--primaryColor);
    opacity: 0 !important;
  }
  &:hover {
    .place-bid-btn {
      opacity: 1 !important;
    }
  }
}
</style>
