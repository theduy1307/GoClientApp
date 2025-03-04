<template>
  <v-card
    class="debit-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Card</h5>
      <AddCardDetailModal />
    </div>

    <div class="row">
      <div class="col-sm-6">
        <v-card
          class="bg-img trezo-card border-radius d-block border-0 shadow-none"
          :style="{
            backgroundImage: `url(${image})`,
          }"
        >
          <div class="d-flex align-content-center justify-content-between mb-4">
            <span class="text-white fs-12 fw-medium">Debit Card</span>
            <v-img src="@/assets/images/debit.svg" alt="debit" />
          </div>
          <v-img class="mb-4" src="@/assets/images/board-1.png" alt="board" />
          <h5 class="fw-semibold text-white mb-5 pb-md-4 d-flex ga-3">
            <span>5322</span><span>0520</span><span>0744</span><span>1794</span>
          </h5>
          <div class="d-flex align-content-center justify-content-between">
            <span class="text-white">David Farrior</span>
            <span class="text-white fs-12 fw-medium">EXP : 12/30</span>
          </div>
        </v-card>
      </div>
      <div class="col-sm-6">
        <v-card
          class="bg-img trezo-card border-radius d-block border-0 shadow-none"
          :style="{
            backgroundImage: `url(${image2})`,
          }"
        >
          <div class="d-flex align-content-center justify-content-between mb-4">
            <span class="text-white fs-12 fw-medium">Debit Card</span>
            <v-img src="@/assets/images/virtual.svg" alt="debit" />
          </div>
          <v-img class="mb-4" src="@/assets/images/board-1.png" alt="board" />
          <h5 class="fw-semibold text-white mb-5 pb-md-4 d-flex ga-3">
            <span>....</span><span>....</span><span>....</span>
            <span>1794</span>
          </h5>
          <div class="d-flex align-content-center justify-content-between">
            <span class="text-white">David Farrior</span>
            <span class="text-white fs-12 fw-medium">EXP : 12/30</span>
          </div>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import AddCardDetailModal from "./AddCardDetailModal.vue";
import feather from "feather-icons";

export default defineComponent({
  name: "DebitCard",
  components: {
    AddCardDetailModal,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const image = require("@/assets/images/debit-card.png");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const image2 = require("@/assets/images/virtual-card.png");

    onMounted(() => {
      feather.replace();
    });

    return {
      image,
      image2,
    };
  },
});
</script>

<style lang="scss" scoped>
.debit-card {
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
}
.mb-5 {
  margin-bottom: 3rem !important;
}
@media (min-width: 768px) {
  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }
}
</style>
