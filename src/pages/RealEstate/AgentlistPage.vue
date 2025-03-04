<template>
  <PageTitle pageTitle="Agent List" subTitle="Real Estate" />

  <AgentList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import AgentList from "@/components/Pages/RealEstate/AgentList/index.vue";

export default defineComponent({
  name: "AgentlistPage",
  components: {
    PageTitle,
    AgentList,
  },
});
</script>
