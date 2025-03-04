<template>
  <div
    class="d-flex justify-content-between align-items-center flex-wrap ga-3 mb-3"
  >
    <h5 class="mb-0">Featured NFT Artworks</h5>
    <div class="nft-controller">
      <div
        class="controller-icon prev position-static me-1"
        style="transform: unset"
      >
        <i class="ri-arrow-left-line"></i>
      </div>
      <div
        class="controller-icon next position-static"
        style="transform: unset"
      >
        <i class="ri-arrow-right-line"></i>
      </div>
    </div>
  </div>

  <Swiper
    :slidesPerView="1"
    :spaceBetween="25"
    :centeredSlides="false"
    :preventClicks="true"
    :loop="false"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :navigation="{
      prevEl: '.prev',
      nextEl: '.next',
    }"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    }"
    :modules="modules"
    class="nft-slide-two"
  >
    <SwiperSlide v-for="nft in nftItem" :key="nft.id">
      <div class="nft-card bg-white rounded-3 border-0 p-3">
        <RouterLink
          to="/nft-marketplace/nft-details"
          class="d-block mb-3 text-decoration-none position-relative"
        >
          <v-img :src="nft.image" class="rounded-3" alt="nft" />
          <span class="place-bid-btn position-absolute"> Place Bid </span>
        </RouterLink>

        <div
          class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
        >
          <RouterLink
            to="/nft-marketplace/creator-details"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                :src="nft.creator.image"
                class="rounded-circle"
                style="width: 27px; height: 27px"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <span class="fs-12">NFT ID: {{ nft.creator.id }}</span>
              <h4 class="fw-semibold fs-14 mb-0">
                {{ nft.creator.name }}
              </h4>
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
            to="/nft-marketplace/nft-details"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-grow-1 ms-2">
              <span class="fs-12 d-block mb-1">
                Highest Bid:
                <span class="fw-semibold"> {{ nft.highestBid }} ETH </span>
              </span>
              <h4 class="fw-semibold fs-14 mb-0">{{ nft.bid }} ETH</h4>
            </div>
          </RouterLink>
          <button class="bg-transparent p-0 border-0">
            <i
              class="ri-heart-fill fs-20 position-relative top-2"
              style="color: #ee3e08"
            ></i>
            <span class="fs-12 fw-semibold">
              {{ nft.rating }}
              <span class="text-body">/10</span>
            </span>
          </button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

export default defineComponent({
  name: "FeaturedNFTArtworks",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const nftItem = ref([
      {
        id: 1,
        image: require("@/assets/images/nft-10.png"),
        creator: {
          image: require("@/assets/images/user-76.gif"),
          id: "35246",
          name: "Christmas Eve",
        },
        highestBid: "9.75",
        bid: "5.50",
        rating: "9.2",
      },
      {
        id: 2,
        image: require("@/assets/images/nft-11.png"),
        creator: {
          image: require("@/assets/images/user-77.gif"),
          id: "35247",
          name: "Humming Bird",
        },
        highestBid: "10.75",
        bid: "12.50",
        rating: "9.5",
      },
      {
        id: 3,
        image: require("@/assets/images/nft-12.png"),
        creator: {
          image: require("@/assets/images/user-85.png"),
          id: "35249",
          name: "Cookies Live",
        },
        highestBid: "17.75",
        bid: "20.50",
        rating: "9.3",
      },
      {
        id: 4,
        image: require("@/assets/images/nft-10.png"),
        creator: {
          image: require("@/assets/images/user-76.gif"),
          id: "35246",
          name: "Christmas Eve",
        },
        highestBid: "9.75",
        bid: "5.50",
        rating: "9.2",
      },
      {
        id: 5,
        image: require("@/assets/images/nft-11.png"),
        creator: {
          image: require("@/assets/images/user-77.gif"),
          id: "35247",
          name: "Humming Bird",
        },
        highestBid: "10.75",
        bid: "12.50",
        rating: "9.5",
      },
      {
        id: 6,
        image: require("@/assets/images/nft-12.png"),
        creator: {
          image: require("@/assets/images/user-85.png"),
          id: "35249",
          name: "Cookies Live",
        },
        highestBid: "17.75",
        bid: "20.50",
        rating: "9.3",
      },
    ]);
    return {
      modules: [Autoplay, Navigation],
      nftItem,
    };
  },
});
</script>

<style lang="scss" scoped>
.nft-card {
  background-color: rgb(255 255 255);
  padding: 1rem !important;
  border-radius: 0.5rem;
  .v-img__img {
    border-radius: 0.5rem;
  }
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
