<template>
  <PageTitle pageTitle="Customers" subTitle="Real Estate" />

  <AddNewCustomer />
  <RealEstateCustomers />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AddNewCustomer from "@/components/Pages/RealEstate/RealEstateCustomers/AddNewCustomer.vue";
import RealEstateCustomers from "@/components/Pages/RealEstate/RealEstateCustomers/index.vue";

export default defineComponent({
  name: "RealEstateCustomersPage",
  components: {
    PageTitle,
    AddNewCustomer,
    RealEstateCustomers,
  },
});
</script>
