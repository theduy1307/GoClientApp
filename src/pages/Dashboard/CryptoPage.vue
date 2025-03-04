<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-content">
      <CryptocurrencyWatchlist />

      <v-row>
        <v-col lg="8">
          <MarketPriceStatisticsChart />
        </v-col>
        <v-col lg="4">
          <ExchangeCoin />
        </v-col>
      </v-row>
    </div>
  </v-card>

  <v-row>
    <v-col lg="7">
      <TransactionHistory />
    </v-col>
    <v-col lg="5">
      <Portfolio />
    </v-col>
  </v-row>

  <CryptoRankings />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CryptocurrencyWatchlist from "../../components/Dashboard/Crypto/CryptocurrencyWatchlist.vue";
import MarketPriceStatisticsChart from "../../components/Dashboard/Crypto/MarketPriceStatisticsChart.vue";
import ExchangeCoin from "../../components/Dashboard/Crypto/ExchangeCoin.vue";
import TransactionHistory from "../../components/Dashboard/Crypto/TransactionHistory.vue";
import Portfolio from "../../components/Dashboard/Crypto/Portfolio.vue";
import CryptoRankings from "../../components/Dashboard/Crypto/CryptoRankings.vue";

export default defineComponent({
  name: "CryptoPage",
  components: {
    CryptocurrencyWatchlist,
    MarketPriceStatisticsChart,
    ExchangeCoin,
    TransactionHistory,
    Portfolio,
    CryptoRankings,
  },
});
</script>
