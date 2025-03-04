<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-6">
      <PropertiesForSaleChart />
    </div>
    <div class="col-lg-6 col-md-6">
      <PropertiesForRentChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PropertiesForSaleChart from "./PropertiesForSaleChart.vue";
import PropertiesForRentChart from "./PropertiesForRentChart.vue";

export default defineComponent({
  name: "PropertyStatus",
  components: {
    PropertiesForSaleChart,
    PropertiesForRentChart,
  },
});
</script>
