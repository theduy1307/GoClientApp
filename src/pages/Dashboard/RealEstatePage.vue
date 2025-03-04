<template>
  <v-row>
    <v-col lg="4">
      <v-row>
        <v-col lg="12" sm="6">
          <ActiveTotalProperty />
        </v-col>
        <v-col lg="12" sm="6">
          <RevenueChart />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="8">
      <NewListingsSoldPropertiesChart />
    </v-col>
  </v-row>
  <v-row class="justify-content-center">
    <v-col lg="4" sm="6">
      <PropertiesForSaleChart />
    </v-col>
    <v-col lg="4" sm="6">
      <PropertiesForRentChart />
    </v-col>
    <v-col lg="4" sm="6">
      <NewCustomers />
    </v-col>
  </v-row>
  <v-row class="justify-content-center">
    <v-col lg="5">
      <MostSalesLocation />

      <RecentProperty />
    </v-col>
    <v-col lg="7">
      <RentalIncomeChart />
      <v-row>
        <v-col lg="6">
          <SocialSearchChart />

          <TopProperty />
        </v-col>
        <v-col lg="6">
          <CustomerReviews />
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <LatestTransaction class="mt-25" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActiveTotalProperty from "../../components/Dashboard/RealEstate/ActiveTotalProperty.vue";
import RevenueChart from "../../components/Dashboard/RealEstate/RevenueChart.vue";
import NewListingsSoldPropertiesChart from "../../components/Dashboard/RealEstate/NewListingsSoldPropertiesChart.vue";
import PropertiesForSaleChart from "../../components/Dashboard/RealEstate/PropertiesForSaleChart.vue";
import PropertiesForRentChart from "../../components/Dashboard/RealEstate/PropertiesForRentChart.vue";
import NewCustomers from "../../components/Dashboard/RealEstate/NewCustomers.vue";
import MostSalesLocation from "../../components/Dashboard/RealEstate/MostSalesLocation.vue";
import RecentProperty from "../../components/Dashboard/RealEstate/RecentProperty.vue";
import RentalIncomeChart from "../../components/Dashboard/RealEstate/RentalIncomeChart.vue";
import SocialSearchChart from "../../components/Dashboard/RealEstate/SocialSearchChart.vue";
import TopProperty from "../../components/Dashboard/RealEstate/TopProperty.vue";
import CustomerReviews from "../../components/Dashboard/RealEstate/CustomerReviews.vue";
import LatestTransaction from "../../components/Dashboard/RealEstate/LatestTransaction.vue";

export default defineComponent({
  name: "RealEstatePage",
  components: {
    ActiveTotalProperty,
    RevenueChart,
    NewListingsSoldPropertiesChart,
    PropertiesForSaleChart,
    PropertiesForRentChart,
    NewCustomers,
    MostSalesLocation,
    RecentProperty,
    RentalIncomeChart,
    SocialSearchChart,
    TopProperty,
    CustomerReviews,
    LatestTransaction,
  },
});
</script>
