<template>
  <PageTitle pageTitle="Property Overview" subTitle="Real Estate" />

  <PropertyOverview />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import PropertyOverview from "@/components/Pages/RealEstate/PropertyOverview/index.vue";

export default defineComponent({
  name: "PropertyOverviewPage",
  components: {
    PageTitle,
    PropertyOverview,
  },
});
</script>
