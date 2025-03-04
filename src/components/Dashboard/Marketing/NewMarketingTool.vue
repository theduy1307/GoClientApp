<template>
  <v-card
    class="new-Marketing-card trezo-card border-radius d-block border-0 shadow-none"
    style="background: linear-gradient(162deg, #d7b5fd 3.82%, #9947f5 98.54%)"
  >
    <div class="text-center">
      <span class="fs-24 d-block text-black">Want To Try</span>
      <h3 class="fs-24 fw-bold">
        New Marketing <br />
        Tool?
      </h3>
      <div class="image py-5 mb-4">
        <v-img src="@/assets/images/marketing-tool.png" alt="marketing-tool" />
      </div>
      <RouterLink
        to="/contact"
        class="contact-btn d-inline-block"
        style="background-color: #6a22a7"
      >
        Contact Us
      </RouterLink>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewMarketingTool",
});
</script>

<style lang="scss" scoped>
.new-Marketing-card {
  .image {
    .v-responsive {
      justify-content: center;
    }
  }
  .contact-btn {
    background-color: #6a22a7;
    color: var(--whiteColor);
    padding: 0.5rem 1.5rem;
    border-radius: 7px;
    font-size: 0.88rem;
    font-weight: 500;
    display: inline-block;
  }
}
</style>
