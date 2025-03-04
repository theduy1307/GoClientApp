<template>
  <v-row>
    <v-col lg="6">
      <v-row>
        <v-col sm="6">
          <TotalIncome />
        </v-col>
        <v-col sm="6">
          <TotalShipment />
        </v-col>
        <v-col sm="6">
          <TotalCustomer />
        </v-col>
        <v-col sm="6">
          <TotalOrder />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="6">
      <ShipmentDeliveredChart />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <v-row>
        <v-col sm="6">
          <AverageDeliveryTimeChart />
        </v-col>
        <v-col sm="6">
          <LiveShipmentStatusChart class="mb-25" />
        </v-col>
      </v-row>

      <TrackingOrder />
    </v-col>
    <v-col lg="4">
      <v-row>
        <v-col lg="12" sm="6">
          <ShipmentToTopCountries />
        </v-col>
        <v-col lg="12" sm="6">
          <ChatContent />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row class="justify-content-center">
    <v-col lg="4" sm="12">
      <TopShippingMethodsChart />
    </v-col>
    <v-col lg="4" sm="12">
      <TodaysShipmentsChart />
    </v-col>
    <v-col lg="4" sm="12">
      <OnTimeDeliveryChart />
    </v-col>
  </v-row>

  <ShipmentList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalIncome from "../../components/Dashboard/Shipment/TotalIncome.vue";
import TotalShipment from "../../components/Dashboard/Shipment/TotalShipment.vue";
import TotalCustomer from "../../components/Dashboard/Shipment/TotalCustomer.vue";
import TotalOrder from "../../components/Dashboard/Shipment/TotalOrder.vue";
import ShipmentDeliveredChart from "../../components/Dashboard/Shipment/ShipmentDeliveredChart.vue";
import AverageDeliveryTimeChart from "../../components/Dashboard/Shipment/AverageDeliveryTimeChart.vue";
import LiveShipmentStatusChart from "../../components/Dashboard/Shipment/LiveShipmentStatusChart.vue";
import ShipmentToTopCountries from "../../components/Dashboard/Shipment/ShipmentToTopCountries.vue";
import TrackingOrder from "../../components/Dashboard/Shipment/TrackingOrder.vue";
import ChatContent from "../../components/Dashboard/Shipment/ChatContent.vue";
import TopShippingMethodsChart from "../../components/Dashboard/Shipment/TopShippingMethodsChart.vue";
import TodaysShipmentsChart from "../../components/Dashboard/Shipment/TodaysShipmentsChart.vue";
import OnTimeDeliveryChart from "../../components/Dashboard/Shipment/OnTimeDeliveryChart.vue";
import ShipmentList from "../../components/Dashboard/Shipment/ShipmentList.vue";

export default defineComponent({
  name: "ShipmentPage",
  components: {
    TotalIncome,
    TotalShipment,
    TotalCustomer,
    TotalOrder,
    ShipmentDeliveredChart,
    AverageDeliveryTimeChart,
    LiveShipmentStatusChart,
    ShipmentToTopCountries,
    TrackingOrder,
    ChatContent,
    TopShippingMethodsChart,
    TodaysShipmentsChart,
    OnTimeDeliveryChart,
    ShipmentList,
  },
});
</script>
