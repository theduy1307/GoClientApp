<template>
  <v-card
    class="active-total-property-card trezo-card border-radius d-block border-0 shadow-none p-0"
    style="background: linear-gradient(101deg, #fe7a36 0%, #fd5812 100%)"
  >
    <div class="row">
      <div class="col-sm-7">
        <div class="p-4 pe-0">
          <span class="text-white d-block mb-2">Active Total Property</span>
          <h3 class="fs-20 text-white">507,020</h3>
        </div>
      </div>
      <div class="col-sm-5 mt-md-3 mt-xxl-0">
        <div class="pt-sm-4 mt-sm-3 text-end">
          <v-img
            src="@/assets/images/real-property.png"
            style="width: 188px; height: 125px"
            alt="real-property"
          />
          <v-img
            src="@/assets/images/shape-9.png"
            class="position-absolute bottom-0 start-0"
            alt="shape"
          />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActiveTotalProperty",
});
</script>

<style lang="scss" scoped>
.active-total-property-card {
  .bottom-0 {
    bottom: 0;
  }
  .start-0 {
    left: 0;
  }
  .pe-0 {
    padding-right: 0 !important;
  }
  .p-4 {
    padding: 1.5rem !important;
  }
}
</style>
