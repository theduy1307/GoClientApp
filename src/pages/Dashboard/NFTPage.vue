<template>
  <ManageYourNFT />

  <div class="px-2 px-sm-5 position-relative mb-4">
    <NFTSlideItem />
  </div>

  <v-row>
    <v-col xxl="4" lg="4">
      <EthereumRateTab />
    </v-col>
    <v-col xxl="8" lg="8">
      <ActiveAuctions />
    </v-col>
  </v-row>

  <v-row>
    <v-col xxl="9" lg="9">
      <FeaturedNFTArtworks />
    </v-col>
    <v-col xxl="3" lg="3">
      <NewMobileApp />
    </v-col>
  </v-row>

  <v-row>
    <v-col xxl="8" lg="8">
      <MostPopularSellers />
    </v-col>
    <v-col xxl="4" lg="4">
      <WorldwideTopCreators />
    </v-col>
  </v-row>

  <v-row>
    <v-col xxl="3" lg="3" sm="6" class="order-2 order-xxl-1">
      <TopCollections />
    </v-col>
    <v-col xxl="6" lg="6" md="12" class="order-1 order-xxl-2">
      <TopNFTs />
    </v-col>
    <v-col xxl="3" lg="3" sm="6" class="order-3 order-xxl-3">
      <HistoryOfBids />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ManageYourNFT from "../../components/Dashboard/NFT/ManageYourNFT.vue";
import NFTSlideItem from "../../components/Dashboard/NFT/NFTSlideItem.vue";
import EthereumRateTab from "../../components/Dashboard/NFT/EthereumRateTab.vue";
import ActiveAuctions from "../../components/Dashboard/NFT/ActiveAuctions.vue";
import FeaturedNFTArtworks from "../../components/Dashboard/NFT/FeaturedNFTArtworks.vue";
import NewMobileApp from "../../components/Dashboard/NFT/NewMobileApp.vue";
import MostPopularSellers from "../../components/Dashboard/NFT/MostPopularSellers.vue";
import WorldwideTopCreators from "../../components/Dashboard/NFT/WorldwideTopCreators.vue";
import TopCollections from "../../components/Dashboard/NFT/TopCollections.vue";
import TopNFTs from "../../components/Dashboard/NFT/TopNFTs.vue";
import HistoryOfBids from "../../components/Dashboard/NFT/HistoryOfBids.vue";

export default defineComponent({
  name: "NFTPage",
  components: {
    ManageYourNFT,
    NFTSlideItem,
    EthereumRateTab,
    ActiveAuctions,
    FeaturedNFTArtworks,
    NewMobileApp,
    MostPopularSellers,
    WorldwideTopCreators,
    TopCollections,
    TopNFTs,
    HistoryOfBids,
  },
});
</script>
