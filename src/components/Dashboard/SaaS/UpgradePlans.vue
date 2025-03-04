<template>
  <v-card
    class="upgrade-plans-card trezo-card border-radius d-block border-0 shadow-none text-center"
    style="background: linear-gradient(164deg, #b95232 3.1%, #eb6d5c 99.22%)"
  >
    <h2
      class="fs-24 text-white mx-auto mb-5"
      style="max-width: 300px; line-height: 1.4"
    >
      Have A Team More Than 10 Members?
    </h2>
    <a href="#" class="upgrade-btn"> Upgrade Plans </a>
    <div class="image">
      <v-img src="@/assets/images/saas.png" alt="saas" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UpgradePlans",
});
</script>

<style lang="scss" scoped>
.upgrade-plans-card {
  .image {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
    margin-top: 1.8rem !important;
    .v-responsive {
      justify-content: center;
    }
  }
  .upgrade-btn {
    background-color: var(--darkColor);
    color: var(--whiteColor);
    padding: 0.5rem 1rem;
    border-radius: 7px;
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
  }
}
</style>
