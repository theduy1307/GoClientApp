<template>
  <PageTitle pageTitle="Add Property" subTitle="Real Estate" />

  <AddProperty />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AddProperty from "@/components/Pages/RealEstate/AddProperty/index.vue";

export default defineComponent({
  name: "AddPropertyPage",
  components: {
    PageTitle,
    AddProperty,
  },
});
</script>
