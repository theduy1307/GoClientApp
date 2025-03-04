<template>
  <v-row>
    <v-col xxl="9" lg="9">
      <PaymentChart />
    </v-col>
    <v-col xxl="3" lg="3">
      <ActiveUserChart />

      <RevenueChart />

      <ConversionChart />
    </v-col>
  </v-row>

  <v-row>
    <v-col lg="4">
      <TopRefers />
    </v-col>
    <v-col lg="8">
      <ActiveUsersChart />
    </v-col>
  </v-row>

  <v-row>
    <v-col lg="8">
      <LatestTransaction />
    </v-col>
    <v-col lg="4">
      <UpgradePlans />
    </v-col>
  </v-row>

  <v-row>
    <v-col lg="4">
      <ActiveUsers />
    </v-col>
    <v-col lg="8">
      <ProductTradeConditionChart />
    </v-col>
  </v-row>

  <v-row>
    <v-col lg="8">
      <GrossRevenueChart />
    </v-col>
    <v-col lg="4">
      <SalesByCountry />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaymentChart from "../../components/Dashboard/SaaS/PaymentChart.vue";
import ActiveUserChart from "../../components/Dashboard/SaaS/ActiveUserChart.vue";
import RevenueChart from "../../components/Dashboard/SaaS/RevenueChart.vue";
import ConversionChart from "../../components/Dashboard/SaaS/ConversionChart.vue";
import TopRefers from "../../components/Dashboard/SaaS/TopRefers.vue";
import ActiveUsersChart from "../../components/Dashboard/SaaS/ActiveUsersChart.vue";
import LatestTransaction from "../../components/Dashboard/SaaS/LatestTransaction.vue";
import UpgradePlans from "../../components/Dashboard/SaaS/UpgradePlans.vue";
import ActiveUsers from "../../components/Dashboard/SaaS/ActiveUsers.vue";
import ProductTradeConditionChart from "../../components/Dashboard/SaaS/ProductTradeConditionChart.vue";
import GrossRevenueChart from "../../components/Dashboard/SaaS/GrossRevenueChart.vue";
import SalesByCountry from "../../components/Dashboard/SaaS/SalesByCountry.vue";

export default defineComponent({
  name: "SaaSPage",
  components: {
    PaymentChart,
    ActiveUserChart,
    RevenueChart,
    ConversionChart,
    TopRefers,
    ActiveUsersChart,
    LatestTransaction,
    UpgradePlans,
    ActiveUsers,
    ProductTradeConditionChart,
    GrossRevenueChart,
    SalesByCountry,
  },
});
</script>
