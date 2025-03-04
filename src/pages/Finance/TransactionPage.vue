<template>
  <PageTitle pageTitle="Transaction" subTitle="Finance" />

  <Transaction />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import Transaction from "@/components/Pages/Finance/Transaction/index.vue";

export default defineComponent({
  name: "TransactionPage",
  components: {
    PageTitle,
    Transaction,
  },
});
</script>
