<template>
  <v-card
    class="upgrade-plans-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Active Users</h5>
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

    <div
      class="d-flex align-items-center border-bottom border-top pt-4 pb-4 mb-4"
    >
      <div class="flex-shrink-0">
        <div class="position-relative">
          <v-img
            src="@/assets/images/user-92.png"
            class="rounded-circle"
            style="width: 33px; height: 33px"
            alt="user"
          />
          <div
            class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2 bottom-0"
          ></div>
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <h4 class="fs-14 fw-semibold mb-0">Johhna Loren</h4>
        <span class="fs-12">Admin</span>
      </div>
    </div>
    <div class="d-flex align-items-center border-bottom pb-4 mb-4">
      <div class="flex-shrink-0">
        <div class="position-relative">
          <v-img
            src="@/assets/images/user-93.png"
            class="rounded-circle"
            style="width: 33px; height: 33px"
            alt="user"
          />
          <div
            class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2 bottom-0"
          ></div>
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <h4 class="fs-14 fw-semibold mb-0">Zinia Watson Loren</h4>
        <span class="fs-12">Moderator</span>
      </div>
    </div>
    <div class="d-flex align-items-center border-bottom pb-4 mb-4">
      <div class="flex-shrink-0">
        <div class="position-relative">
          <v-img
            src="@/assets/images/user-94.png"
            class="rounded-circle"
            style="width: 33px; height: 33px"
            alt="user"
          />
          <div
            class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2 bottom-0"
          ></div>
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <h4 class="fs-14 fw-semibold mb-0">Angela Carter</h4>
        <span class="fs-12">Editor</span>
      </div>
    </div>
    <div class="d-flex align-items-center border-bottom pb-4 mb-4">
      <div class="flex-shrink-0">
        <div class="position-relative">
          <v-img
            src="@/assets/images/user-95.png"
            class="rounded-circle"
            style="width: 33px; height: 33px"
            alt="user"
          />
          <div
            class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2 bottom-0"
          ></div>
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <h4 class="fs-14 fw-semibold mb-0">Skyler White</h4>
        <span class="fs-12">Admin</span>
      </div>
    </div>
    <div class="d-flex align-items-center border-bottom pb-4 mb-4">
      <div class="flex-shrink-0">
        <div class="position-relative">
          <v-img
            src="@/assets/images/user-96.png"
            class="rounded-circle"
            style="width: 33px; height: 33px"
            alt="user"
          />
          <div
            class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2 bottom-0"
          ></div>
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <h4 class="fs-14 fw-semibold mb-0">Jane Ronan</h4>
        <span class="fs-12">Editor</span>
      </div>
    </div>
    <div class="d-flex align-items-center border-bottom pb-4">
      <div class="flex-shrink-0">
        <div class="position-relative">
          <v-img
            src="@/assets/images/user-97.png"
            class="rounded-circle"
            style="width: 33px; height: 33px"
            alt="user"
          />
          <div
            class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2 bottom-0"
          ></div>
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <h4 class="fs-14 fw-semibold mb-0">Viktor James</h4>
        <span class="fs-12">Editor</span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "ActiveUsers",
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>
