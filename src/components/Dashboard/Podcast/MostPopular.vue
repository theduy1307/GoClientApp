<template>
  <v-card
    class="most-popular-card trezo-card custom-shadow rounded-3 bg-white border custom-padding-30"
    style="padding-bottom: 18px"
  >
    <div class="v-card-header" style="top: -5px">
      <h3 class="mb-0 fs-18 fw-semibold">Most Popular</h3>
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

    <ul
      class="nav nav-tabs ga-2 most-popular-tabs border-0 mb-20"
      id="myTab"
      role="tablist"
    >
      <li
        class="nav-item"
        role="presentation"
        v-for="tab in tabs"
        :key="tab.id"
      >
        <button
          class="nav-link bg-border-color rounded-pill fs-12 fw-medium text-body border-0"
          :class="{ active: activeTab === tab.id }"
          @click="setActiveTab(tab.id)"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade"
        v-show="activeTab === tab.id"
        v-for="tab in tabs"
        :key="tab.id"
      >
        <div class="row">
          <div
            class="col-sm-6 col-md-4"
            v-for="(item, index) in tab.items"
            :key="index"
          >
            <div class="position-relative single-play mb-4">
              <div
                class="position-relative bg-img rounded-3"
                :style="{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }"
                style="height: 183px"
              >
                <div class="position-absolute bottom-0 start-0 ps-3 pb-3">
                  <button
                    class="p-0 border-0 bg-primary rounded-circle audio-play-btn"
                    style="width: 44px; height: 44px; line-height: 29px"
                    @click="togglePlayback(index)"
                  >
                    <audio class="track" ref="audioRefs">
                      <source :src="item.audio" type="audio/mpeg" />
                    </audio>
                    <div class="player-container style-two">
                      <div
                        :class="{
                          'play-pause': true,
                          pause: isPlaying === index,
                          play: isPlaying !== index,
                        }"
                      >
                        Play
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <h3 class="fs-14 fw-medium mt-3 mb-2">{{ item.title }}</h3>
              <div class="d-flex flex-wrap">
                <span class="fs-12">By: {{ item.author }}</span>
                <div class="d-flex align-items-center ms-4">
                  <i
                    class="ri-customer-service-line text-primary fs-15 lh-1"
                  ></i>
                  <span class="d-block fs-12 fw-normal text-body ms-10">
                    {{ item.plays }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MostPopular",

  setup() {
    const activeTab = ref("marketing");

    const tabs = [
      {
        id: "marketing",
        label: "Marketing",
        items: [
          {
            id: 1,
            title: "Influencer Marketing",
            author: "Amanda Garcia",
            plays: 6300,
            image: require("@/assets/images/played-7.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 2,
            title: "Data for Better Ads",
            author: "David Chen",
            plays: 8500,
            image: require("@/assets/images/played-8.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 3,
            title: "Boosting Engagement",
            author: "Lisa Kim",
            plays: 9300,
            image: require("@/assets/images/played-9.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 4,
            title: "Real Engagement Metrics",
            author: "Sarah Johnson",
            plays: 8700,
            image: require("@/assets/images/played-10.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 5,
            title: "SEO for E-Commerce",
            author: "Johnson",
            plays: 8900,
            image: require("@/assets/images/played-11.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 6,
            title: "Podcast Marketing 101",
            author: "Amanda",
            plays: 9400,
            image: require("@/assets/images/played-12.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
        ],
      },
      {
        id: "content",
        label: "Content",
        items: [
          {
            id: 1,
            title: "Real Engagement Metrics",
            author: "Sarah Johnson",
            plays: 8700,
            image: require("@/assets/images/played-10.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 2,
            title: "SEO for E-Commerce",
            author: "Johnson",
            plays: 8900,
            image: require("@/assets/images/played-11.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 3,
            title: "Podcast Marketing 101",
            author: "Amanda",
            plays: 9400,
            image: require("@/assets/images/played-12.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 4,
            title: "Influencer Marketing",
            author: "Amanda Garcia",
            plays: 6300,
            image: require("@/assets/images/played-7.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 5,
            title: "Data for Better Ads",
            author: "David Chen",
            plays: 8500,
            image: require("@/assets/images/played-8.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 6,
            title: "Boosting Engagement",
            author: "Lisa Kim",
            plays: 9300,
            image: require("@/assets/images/played-9.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
        ],
      },
      {
        id: "social",
        label: "Social",
        items: [
          {
            id: 1,
            title: "Influencer Marketing",
            author: "Amanda Garcia",
            plays: 6300,
            image: require("@/assets/images/played-7.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 2,
            title: "Data for Better Ads",
            author: "David Chen",
            plays: 8500,
            image: require("@/assets/images/played-8.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 3,
            title: "Boosting Engagement",
            author: "Lisa Kim",
            plays: 9300,
            image: require("@/assets/images/played-9.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 4,
            title: "Real Engagement Metrics",
            author: "Sarah Johnson",
            plays: 8700,
            image: require("@/assets/images/played-10.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 5,
            title: "SEO for E-Commerce",
            author: "Johnson",
            plays: 8900,
            image: require("@/assets/images/played-11.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 6,
            title: "Podcast Marketing 101",
            author: "Amanda",
            plays: 9400,
            image: require("@/assets/images/played-12.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
        ],
      },
      {
        id: "analytics",
        label: "Analytics",
        items: [
          {
            id: 1,
            title: "Real Engagement Metrics",
            author: "Sarah Johnson",
            plays: 8700,
            image: require("@/assets/images/played-10.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 2,
            title: "SEO for E-Commerce",
            author: "Johnson",
            plays: 8900,
            image: require("@/assets/images/played-11.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 3,
            title: "Podcast Marketing 101",
            author: "Amanda",
            plays: 9400,
            image: require("@/assets/images/played-12.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 4,
            title: "Influencer Marketing",
            author: "Amanda Garcia",
            plays: 6300,
            image: require("@/assets/images/played-7.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 5,
            title: "Data for Better Ads",
            author: "David Chen",
            plays: 8500,
            image: require("@/assets/images/played-8.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 6,
            title: "Boosting Engagement",
            author: "Lisa Kim",
            plays: 9300,
            image: require("@/assets/images/played-9.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
        ],
      },
      {
        id: "customer",
        label: "Customer",
        items: [
          {
            id: 1,
            title: "Influencer Marketing",
            author: "Amanda Garcia",
            plays: 6300,
            image: require("@/assets/images/played-7.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 2,
            title: "Data for Better Ads",
            author: "David Chen",
            plays: 8500,
            image: require("@/assets/images/played-8.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 3,
            title: "Boosting Engagement",
            author: "Lisa Kim",
            plays: 9300,
            image: require("@/assets/images/played-9.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 4,
            title: "Real Engagement Metrics",
            author: "Sarah Johnson",
            plays: 8700,
            image: require("@/assets/images/played-10.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 5,
            title: "SEO for E-Commerce",
            author: "Johnson",
            plays: 8900,
            image: require("@/assets/images/played-11.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 6,
            title: "Podcast Marketing 101",
            author: "Amanda",
            plays: 9400,
            image: require("@/assets/images/played-12.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
        ],
      },
      {
        id: "trends",
        label: "Trends",
        items: [
          {
            id: 1,
            title: "Real Engagement Metrics",
            author: "Sarah Johnson",
            plays: 8700,
            image: require("@/assets/images/played-10.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 2,
            title: "SEO for E-Commerce",
            author: "Johnson",
            plays: 8900,
            image: require("@/assets/images/played-11.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 3,
            title: "Podcast Marketing 101",
            author: "Amanda",
            plays: 9400,
            image: require("@/assets/images/played-12.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 4,
            title: "Influencer Marketing",
            author: "Amanda Garcia",
            plays: 6300,
            image: require("@/assets/images/played-7.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 5,
            title: "Data for Better Ads",
            author: "David Chen",
            plays: 8500,
            image: require("@/assets/images/played-8.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
          {
            id: 6,
            title: "Boosting Engagement",
            author: "Lisa Kim",
            plays: 9300,
            image: require("@/assets/images/played-9.jpg"),
            audio: "https://cldup.com/qR72ozoaiQ.mp3",
          },
        ],
      },
    ];

    const setActiveTab = (tabId: string) => {
      activeTab.value = tabId;
    };

    const audioRefs = ref<HTMLAudioElement[]>([]);
    const isPlaying = ref<number | null>(null);

    const togglePlayback = (index: number) => {
      const audio = audioRefs.value[index];
      if (!audio) return;

      if (isPlaying.value === index) {
        audio.pause();
        isPlaying.value = null;
      } else {
        audioRefs.value.forEach((otherAudio, otherIndex) => {
          if (otherIndex !== index) {
            otherAudio.pause();
            otherAudio
              .closest("button")
              ?.querySelector(".play-pause")
              ?.classList.add("play");
          }
        });
        audio.play();
        isPlaying.value = index;
      }
    };

    return {
      tabs,
      activeTab,
      setActiveTab,
      audioRefs,
      isPlaying,
      togglePlayback,
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
</style>
