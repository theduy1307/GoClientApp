<template>
  <div class="row justify-content-center">
    <div
      v-for="(creator, index) in creators"
      :key="index"
      class="col-lg-3 col-sm-6 col-md-4"
    >
      <div
        class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4 text-center"
      >
        <div class="position-relative">
          <v-img
            :src="creator.topCreatorImage"
            class="rounded-3"
            :alt="creator.name"
          />
          <div class="position-absolute top-100 start-50 translate-middle">
            <v-img
              :src="creator.userImage"
              class="rounded-circle"
              style="width: 64px; height: 64px"
              :alt="`${creator.name}-avatar`"
            />
            <v-img
              src="@/assets/images/verify.svg"
              class="position-absolute bottom-0 end-0"
              alt="verify"
            />
          </div>
        </div>
        <div class="mt-5 border-bottom pb-3 mb-3">
          <h4 class="fs-16 fw-semibold">{{ creator.name }}</h4>
          <span class="fs-12">ITEMS: {{ creator.items }}</span>
        </div>
        <button
          class="follow-btn"
          :class="{ 'btn-unfollow': creator.isFollowing }"
          @click="toggleFollow(index)"
        >
          {{ creator.isFollowing ? "Unfollow" : "Follow" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TopCreators",
  setup() {
    const creators = ref([
      {
        name: "Hunny Bunny",
        items: 3204,
        topCreatorImage: require("@/assets/images/top-creator-1.png"),
        userImage: require("@/assets/images/user-76.gif"),
        isFollowing: false,
      },
      {
        name: "Aristocrat",
        items: 5301,
        topCreatorImage: require("@/assets/images/top-creator-2.png"),
        userImage: require("@/assets/images/user-77.gif"),
        isFollowing: false,
      },
      {
        name: "Hooman Robotic",
        items: 4213,
        topCreatorImage: require("@/assets/images/top-creator-3.png"),
        userImage: require("@/assets/images/user-78.gif"),
        isFollowing: true,
      },
      {
        name: "Colorful Life",
        items: 2314,
        topCreatorImage: require("@/assets/images/top-creator-4.png"),
        userImage: require("@/assets/images/user-98.png"),
        isFollowing: false,
      },
    ]);

    // Toggle follow/unfollow status
    const toggleFollow = (index: number) => {
      creators.value[index].isFollowing = !creators.value[index].isFollowing;
    };

    return {
      creators,
      toggleFollow,
    };
  },
});
</script>

<style lang="scss" scoped>
.follow-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 8px 1.5rem;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--whiteColor);
  border: 1px solid var(--primaryColor);
  background-color: var(--primaryColor);
  &.btn-unfollow {
    background-color: #6c757d !important;
    border: 1px solid #6c757d;
  }
}
.pb-3 {
  padding-bottom: 1rem !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.mt-5 {
  margin-top: 3rem !important;
}
</style>
