<template>
  <div
    class="card border-0 rounded-3 bg-white mb-4 text-center position-relative z-1 overflow-hidden"
  >
    <span
      class="bg-danger rounded-top-3 position-absolute z-n1 top-0 d-block w-100"
      style="height: 120px"
    ></span>
    <v-img
      src="@/assets/images/shape-9.png"
      class="position-absolute top-0 start-0"
      alt="shape"
    />
    <div class="px-4 pb-4" style="padding-top: 35px">
      <div class="d-flex align-items-center justify-content-center">
        <v-img
          src="@/assets/images/user-70.png"
          class="rounded-circle mb-4"
          style="width: 160px; height: 160px"
          alt="user"
        />
      </div>

      <h3 class="fs-16 mb-0">Harold Cook</h3>
      <span class="fs-13 text-body">Owner</span>

      <ul
        class="ps-0 my-4 list-unstyled d-flex flex-wrap justify-content-center ga-3"
      >
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="d-inline-block text-center rounded-circle text-decoration-none text-white"
            style="
              width: 30px;
              height: 30px;
              line-height: 30px;
              background-color: #3a559f;
            "
          >
            <i class="ri-facebook-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            class="d-inline-block text-center rounded-circle text-decoration-none text-white"
            style="
              width: 30px;
              height: 30px;
              line-height: 30px;
              background-color: #03a9f4;
            "
          >
            <i class="ri-twitter-x-line"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="d-inline-block text-center rounded-circle text-decoration-none text-white"
            style="
              width: 30px;
              height: 30px;
              line-height: 30px;
              background-color: #007ab9;
            "
          >
            <i class="ri-linkedin-fill"></i>
          </a>
        </li>
      </ul>

      <ul class="ps-0 mb-0 list-unstyled">
        <li class="d-flex justify-content-between align-items-center mb-3">
          <span>Property ID:</span>
          <span class="text-body">P1001</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <span>Year Built:</span>
          <span class="text-body">2010</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <span>Property Type:</span>
          <span class="text-body">Residential</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-0">
          <span>Listing Date:</span>
          <span class="text-body">Sep 15, 2024</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Profile",
});
</script>

<style lang="scss" scoped>
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.pb-4 {
  padding-bottom: 1.5rem !important;
}
.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
</style>
