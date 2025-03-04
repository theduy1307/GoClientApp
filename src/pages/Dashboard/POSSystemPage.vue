<template>
  <div class="mt-4">
    <Stats />
  </div>

  <v-row>
    <v-col lg="8">
      <SalesAnalytics />
    </v-col>
    <v-col lg="4">
      <CustomerSegmentation />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <CategoriesTab />
    </v-col>
    <v-col lg="4">
      <OrderDetails />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import Stats from "../../components/Dashboard/POSSystem/Stats.vue";
import SalesAnalytics from "../../components/Dashboard/POSSystem/SalesAnalytics/index.vue";
import CustomerSegmentation from "../../components/Dashboard/POSSystem/CustomerSegmentation.vue";
import CategoriesTab from "../../components/Dashboard/POSSystem/CategoriesTab.vue";
import OrderDetails from "../../components/Dashboard/POSSystem/OrderDetails.vue";

export default defineComponent({
  name: "POSSystemPage",
  components: {
    Stats,
    SalesAnalytics,
    CustomerSegmentation,
    CategoriesTab,
    OrderDetails,
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white", "pos-system-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white", "pos-system-page");
    });
  },
});
</script>

<style lang="scss">
body {
  &.pos-system-page {
    .sidebar-area {
      background-color: #f6f7f9 !important;
      .logo {
        &.bg-white {
          background-color: #f6f7f9 !important;
        }
      }
    }
    .header-area {
      padding: 12px 0 !important;
      &.sticky {
        padding-left: 25px !important;
        padding-right: 25px !important;
      }
    }
    .footer-area {
      border: 1px solid #eceef2 !important;
    }
  }
}
</style>
