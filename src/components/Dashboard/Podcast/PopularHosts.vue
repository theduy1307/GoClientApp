<template>
  <v-card
    class="popular-hosts-card trezo-card custom-shadow rounded-3 bg-white p-0"
    style="padding-bottom: 24px"
  >
    <div class="v-card-header mb-0" style="padding: 20px 25px">
      <h3 class="mb-0 fs-18 fw-semibold">Popular Hosts</h3>
      <button
        class="bg-transparent border-0 p-0 d-flex align-items-center text-decoration-none position-relative right-for-rtl text-body"
        style="right: -8px"
      >
        <span>View All</span>
        <i
          class="ri-arrow-right-s-line fs-24 position-relative top-1 lh-1 text-body"
        ></i>
      </button>
    </div>

    <div class="default-table-area style-three popular-hosts pb-20">
      <div class="table-responsive">
        <table class="table align-middle border-0">
          <tbody>
            <tr v-for="host in hosts" :key="host.id">
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      :src="host.image"
                      style="width: 40px; height: 40px"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-10">
                    <h4 class="fs-14 fw-medium mb-0">{{ host.name }}</h4>
                    <span class="fs-12 text-body fw-normal">
                      {{ host.category }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="border-bottom">
                <span class="d-block fs-14 fw-medium">{{ host.hosted }}</span>
                <span class="d-block fs-12 fw-normal text-body">Hosted</span>
              </td>
              <td class="text-end border-bottom">
                <button
                  @click="toggleFollow(host)"
                  :class="[
                    'border-0 text-primary follow-button fs-14',
                    { followed: host.isFollowing },
                  ]"
                  style="
                    background-color: #ecf0ff;
                    padding: 4.5px 10px;
                    border-radius: 4px;
                  "
                >
                  <span class="follow-text position-relative" style="top: -1px">
                    {{ host.isFollowing ? "Following" : "Follow" }}
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PopularHosts",
  setup() {
    const hosts = ref([
      {
        id: 1,
        name: "Sarah W.",
        category: "Marketing",
        hosted: 25,
        image: require("@/assets/images/user-124.png"),
        isFollowing: false,
      },
      {
        id: 2,
        name: "Tom R.",
        category: "Blogging",
        hosted: 30,
        image: require("@/assets/images/user-125.png"),
        isFollowing: false,
      },
      {
        id: 3,
        name: "Amanda G.",
        category: "Branding",
        hosted: 28,
        image: require("@/assets/images/user-126.png"),
        isFollowing: true,
      },
      {
        id: 4,
        name: "Lisa Kim",
        category: "Storytelling",
        hosted: 20,
        image: require("@/assets/images/user-127.png"),
        isFollowing: false,
      },
      {
        id: 5,
        name: "David C.",
        category: "Social Media",
        hosted: 18,
        image: require("@/assets/images/user-128.png"),
        isFollowing: false,
      },
    ]);

    // Toggle Follow button state
    const toggleFollow = (host: { isFollowing: boolean }) => {
      host.isFollowing = !host.isFollowing;
    };

    return {
      hosts,
      toggleFollow,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  &.trezo-card {
    border: 1px solid var(--borderColor) !important;
  }
}
.follow-button {
  .followed {
    transition: var(--transition);
  }
  &.followed {
    background-color: var(--primaryColor) !important;
    color: var(--whiteColor) !important;
  }
}
</style>
