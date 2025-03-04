<template>
  <v-card
    class="manage-nft-card trezo-card mb-25 border-radius d-block border-0 shadow-none position-relative z-1"
    style="background: linear-gradient(92deg, #23272e 7.31%, #3f5272 97.89%)"
  >
    <div class="d-flex flex-wrap ga-2 align-items-center">
      <div class="flex-grow-1 me-3">
        <v-img
          src="@/assets/images/shape-8.png"
          class="position-absolute top-0 end-0"
          alt="shape"
        />
        <h3 class="fs-28 text-white">Manage Your NFT From One Place</h3>
        <p style="color: #b1bbc8">
          The world’s first and largest digital marketplace for discover,
          collect, sell and create your own NFTs.
        </p>
      </div>
      <div class="flex-shrink-0">
        <CreateNFT />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateNFT from "./CreateNFT.vue";

export default defineComponent({
  name: "ManageYourNFT",
  components: {
    CreateNFT,
  },
});
</script>

<style lang="scss" scoped>
.manage-nft-card {
  padding: 60px 40px 150px !important;
}
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .manage-nft {
    padding: 20px !important;
    padding-bottom: 120px !important;
  }
}
</style>
