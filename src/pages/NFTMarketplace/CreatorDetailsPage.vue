<template>
  <PageTitle pageTitle="Creator Details" subTitle="NFT Marketplace" />

  <CreatorDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreatorDetails from "@/components/Pages/NFTMarketplace/CreatorDetails/index.vue";

export default defineComponent({
  name: "CreatorDetailsPage",
  components: {
    PageTitle,
    CreatorDetails,
  },
});
</script>
