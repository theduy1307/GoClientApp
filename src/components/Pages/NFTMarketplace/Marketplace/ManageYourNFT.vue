<template>
  <div
    class="rounded-3 position-relative z-1 mb-4"
    style="
      background: linear-gradient(92deg, #23272e 7.31%, #3f5272 97.89%);
      padding: 60px 40px;
    "
  >
    <v-img
      src="@/assets/images/shape-8.png"
      class="position-absolute top-0 end-0"
      alt="shape"
    />
    <div
      class="d-flex flex-wrap ga-2 align-items-center justify-content-between"
    >
      <div>
        <h3 class="fs-28 text-white">Manage Your NFT From One Place</h3>
        <p style="color: #b1bbc8">
          The world’s first and largest digital marketplace for discover,
          collect, sell and create your own NFTs.
        </p>
      </div>

      <CreateNFT />
    </div>
  </div>
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
.mb-4 {
  margin-bottom: 16px !important;
}
</style>
