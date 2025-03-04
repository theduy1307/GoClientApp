<template>
  <PageTitle pageTitle="Wallet" subTitle="Finance" />

  <Wallet />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Wallet from "@/components/Pages/Finance/Wallet/index.vue";

export default defineComponent({
  name: "AddAgentPage",
  components: {
    PageTitle,
    Wallet,
  },
});
</script>
