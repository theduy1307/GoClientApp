<template>
  <v-card
    class="recently-played-card trezo-card custom-shadow rounded-3 bg-white border p-0"
    style="padding-bottom: 16px"
  >
    <div class="v-card-header mb-0" style="padding: 20px 25px">
      <h3 class="mb-0 fs-18 fw-semibold">Recently Played</h3>
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

    <div class="default-table-area style-three recently-played pb-20">
      <div class="table-responsive">
        <table class="table align-middle border-0">
          <tbody>
            <tr v-for="(item, index) in recentlyPlayed" :key="index">
              <td class="border-bottom">
                <div class="d-flex">
                  <button
                    class="p-0 border-0 bg-transparent me-3"
                    @click="togglePlayback(index)"
                  >
                    <audio
                      ref="audioRefs"
                      class="track"
                      :src="item.audioSrc"
                      type="audio/mpeg"
                    />
                    <div class="player-container">
                      <div
                        :class="{
                          'play-pause': true,
                          pause: isPlaying === index,
                          play: isPlaying !== index,
                        }"
                      >
                        {{ isPlaying === index ? "Pause" : "Play" }}
                      </div>
                    </div>
                  </button>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <v-img
                        :src="item.imageSrc"
                        style="width: 34px; height: 34px"
                        class="rounded-1"
                        :alt="item.title"
                      />
                    </div>
                    <div class="flex-grow-1 ms-10">
                      <h4 class="fs-14 fw-medium mb-0">{{ item.title }}</h4>
                      <span class="fs-12 text-body fw-normal">
                        {{ item.artist }}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td class="border-bottom">
                <span class="d-block fs-14 fw-normal text-body">
                  {{ item.timePlayed }}
                </span>
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <i class="ri-customer-service-line fs-18"></i>
                  <span class="d-block fs-14 fw-normal text-body ms-10">
                    {{ item.playCount.toLocaleString() }}
                  </span>
                </div>
              </td>
              <td class="border-bottom">
                <button
                  class="favorite-button border-0 text-body-color-60 fs-14 bg-transparent p-0"
                >
                  <span class="favorite-icon position-relative">
                    <i class="ri-heart-line fs-20"></i>
                    <i
                      class="ri-heart-fill fs-20 position-absolute top-50 start-50 translate-middle text-primary"
                    ></i>
                  </span>
                </button>
              </td>
              <td class="border-bottom">
                <span class="text-body">{{ item.duration }}</span>
              </td>
              <td class="border-bottom">
                <div class="dropdown action-opt">
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <button
                        type="button"
                        v-bind="props"
                        class="position-relative dot-btn p-0 bg-transparent text-body border-none"
                      >
                        <i data-feather="more-horizontal"></i>
                      </button>
                    </template>
                    <v-list class="menu-content">
                      <button type="button" class="bg-transparent border-none">
                        Add To Playlist
                      </button>
                      <button type="button" class="bg-transparent border-none">
                        Go To Album
                      </button>
                      <button type="button" class="bg-transparent border-none">
                        View Credits
                      </button>
                    </v-list>
                  </v-menu>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "RecentlyPlayed",
  data() {
    return {
      recentlyPlayed: [
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: require("@/assets/images/played-1.jpg"),
          title: "Mastering Digital Marketing",
          artist: "Sarah Johnson",
          timePlayed: "Played 40 min. ago",
          playCount: 8200,
          duration: "45:30",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: require("@/assets/images/played-2.jpg"),
          title: "Content Marketing Essentials",
          artist: "Tom Richards",
          timePlayed: "Played 1 h. ago",
          playCount: 9500,
          duration: "25:50",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: require("@/assets/images/played-3.jpg"),
          title: "Social Media Trends for 2024",
          artist: "David Chen",
          timePlayed: "Played 1 day ago",
          playCount: 7400,
          duration: "30:20",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: require("@/assets/images/played-4.jpg"),
          title: "Building Brand Loyalty",
          artist: "Michael Young",
          timePlayed: "Played 2 days ago",
          playCount: 10200,
          duration: "15:35",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: require("@/assets/images/played-5.jpg"),
          title: "Content Creation Techniques",
          artist: "Lisa Kim",
          timePlayed: "Played 3 days ago",
          playCount: 9300,
          duration: "20:10",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: require("@/assets/images/played-6.jpg"),
          title: "The Future of AI in Marketing",
          artist: "Tom Richards",
          timePlayed: "Played 4 days ago",
          playCount: 6300,
          duration: "22:15",
        },
      ],
    };
  },

  setup() {
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

    onMounted(() => {
      feather.replace();
    });

    return {
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
.ri-customer-service-line {
  color: var(--secondaryColor) !important;
}
</style>
