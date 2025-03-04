<template>
  <v-card
    class="chat-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Chat</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <ul class="ps-0 mb-0 list-unstyled hover-scroll-bar" style="height: 240px">
      <li class="mb-3">
        <div class="d-flex align-items-center mb-2">
          <div class="flex-shrink-0">
            <v-img
              src="@/assets/images/user-62.jpg"
              class="rounded-circle"
              style="width: 40px; height: 40px"
              alt="user"
            />
          </div>
          <div class="flex-grow-1 ms-2">
            <h4 class="fw-medium fs-16 mb-0">Irene George</h4>
            <span class="fs-12">05:30PM</span>
          </div>
        </div>
        <p style="max-width: 310px">
          Hey, have you finished the report for the project yet?
        </p>
      </li>
      <li class="text-end">
        <div class="d-flex align-items-center mb-3">
          <div class="flex-grow-1 me-2">
            <h4 class="fw-medium fs-16 mb-0">Virgil Martin</h4>
            <span class="fs-12">05:30PM</span>
          </div>
          <div class="flex-shrink-0">
            <v-img
              src="@/assets/images/user-63.jpg"
              class="rounded-circle"
              style="width: 40px; height: 40px"
              alt="user"
            />
          </div>
        </div>
        <p
          class="bg-danger bg-opacity-10 p-2 rounded-2 ms-auto"
          style="max-width: 310px"
        >
          Almost! I just need to double-check some data. I’ll send it over in
          about an hour.
        </p>
      </li>
      <li class="mb-3">
        <div class="d-flex align-items-center mb-2">
          <div class="flex-shrink-0">
            <v-img
              src="@/assets/images/user-64.jpg"
              class="rounded-circle"
              style="width: 40px; height: 40px"
              alt="user"
            />
          </div>
          <div class="flex-grow-1 ms-2">
            <h4 class="fw-medium fs-16 mb-0">Alex Dew</h4>
            <span class="fs-12">05:30PM</span>
          </div>
        </div>
        <p style="max-width: 310px">
          Hey, have you finished the report for the project yet?
        </p>
      </li>
      <li class="text-end">
        <div class="d-flex align-items-center mb-3">
          <div class="flex-grow-1 me-2">
            <h4 class="fw-medium fs-16 mb-0">Heriy Smith</h4>
            <span class="fs-12">05:30PM</span>
          </div>
          <div class="flex-shrink-0">
            <v-img
              src="@/assets/images/user-65.jpg"
              class="rounded-circle"
              style="width: 40px; height: 40px"
              alt="user"
            />
          </div>
        </div>
        <p
          class="bg-danger bg-opacity-10 p-2 rounded-2 ms-auto"
          style="max-width: 310px"
        >
          Almost! I just need to double-check some data. I’ll send it over in
          about an hour.
        </p>
      </li>
    </ul>

    <form class="position-relative mt-3">
      <input
        type="text"
        class="form-control bg-body-bg border-0"
        style="height: 35px; padding-left: 40px"
        placeholder="Write your message..."
      />
      <div
        class="d-flex ga-2 align-items-center position-absolute top-50 end-0 translate-middle-y pe-3 bg-body-bg"
      >
        <button class="border-0 p-0 bg-transparent">
          <i class="ri-emotion-happy-line fs-16 text-body"></i>
        </button>
        <button type="submit" class="border-0 p-0 bg-transparent">
          <i class="ri-send-plane-2-line fs-16 text-body"></i>
        </button>
      </div>
      <i
        class="ri-attachment-2 fs-16 position-absolute top-50 start-0 translate-middle-y ps-3"
      ></i>
    </form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "ChatContent",
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>

<style lang="scss" scoped>
.chat-card {
  .bg-danger {
    background-color: rgb(253 88 18 / 10%) !important;
  }
  .form-control {
    background-color: rgb(246 247 249) !important;
    color: #3a4252 !important;
    font-size: 15px;
    padding: 14px 16px;
    width: 100%;
    transition: all ease 0.5s;
    border-radius: 7px;
  }
}
</style>
