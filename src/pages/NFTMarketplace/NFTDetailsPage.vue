<template>
  <PageTitle pageTitle="NFT Details" subTitle="NFT Marketplace" />

  <NFTDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import NFTDetails from "@/components/Pages/NFTMarketplace/NFTDetails/index.vue";

export default defineComponent({
  name: "NFTDetailsPage",
  components: {
    PageTitle,
    NFTDetails,
  },
});
</script>
