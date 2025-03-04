<template>
  <div
    class="border-0 rounded-3 border position-relative z-1 play-for-rtl"
    style="background: linear-gradient(84deg, #23272e 3.5%, #526077 94.93%)"
  >
    <div class="swiper-pagination-mastering-digital-marketing"></div>
    <Swiper
      :slidesPerView="1"
      :spaceBetween="25"
      :centeredSlides="false"
      :preventClicks="true"
      :loop="false"
      :autoplay="{
        delay: 15000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }"
      :pagination="{
        el: '.swiper-pagination-mastering-digital-marketing',
        clickable: true,
      }"
      :modules="modules"
      class="mastering-digital-marketing-slide"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="px-4" style="padding-top: 37px; padding-bottom: 24px">
          <span
            class="bg-body-color-50 d-inline-block text-white fd-12 fw-medium rounded-pill mb-2"
            style="padding: 0 11px"
          >
            {{ slide.tag }}
          </span>
          <h3 class="fs-28 fw-medium text-white mb-1">
            {{ slide.title }}
          </h3>
          <p class="text-light" style="max-width: 370px; margin-bottom: 18px">
            {{ slide.description }}
          </p>
          <div class="d-flex flex-wrap ga-2 align-items-center">
            <div
              class="d-flex align-items-center rounded-pill"
              style="border: 1px solid #64748b; padding: 3.5px 12px"
            >
              <span class="fs-14 fw-semibold text-white">Host:</span>
              <span class="ms-2 text-white">{{ slide.host }}</span>
            </div>
            <div
              class="d-flex align-items-center rounded-pill"
              style="border: 1px solid #64748b; padding: 3.5px 12px"
            >
              <span class="fs-14 fw-semibold text-white">Guest:</span>
              <span class="ms-2 text-white">{{ slide.guest }}</span>
            </div>
          </div>

          <div class="audio-player-for-wave" style="padding: 47px 0">
            <div class="d-sm-flex align-items-center">
              <button
                class="play-button border-0 rounded-circle d-inline-block"
                style="
                  background-color: #c2cdff;
                  width: 44px;
                  height: 44px;
                  line-height: 43px;
                "
                @click="togglePlayPause(index)"
              >
                <i
                  class="play-icon text-primary fs-28 position-relative"
                  style="left: 2px"
                  :class="{
                    'ri-pause-fill': slide.isPlaying,
                    'ri-play-fill': !slide.isPlaying,
                  }"
                ></i>
              </button>
              <div class="ms-sm-3 mt-3 mt-sm-0">
                <div
                  class="d-flex align-items-center justify-content-between width-form-mobile"
                  style="width: 325px"
                >
                  <div class="wave-container d-flex align-items-end">
                    <span
                      v-for="(bar, barIndex) in 70"
                      :key="barIndex"
                      class="wave-bar"
                      :class="{ 'wave-animation': slide.isPlaying }"
                    ></span>
                  </div>
                  <span class="duration text-white">
                    {{ formatTime(slide.currentTime) }}
                  </span>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Audio Progress"
                  style="height: 4px; background-color: #8695aa"
                >
                  <div
                    class="progress-bar"
                    :style="{ width: `${slide.progress}%`, height: '4px' }"
                  ></div>
                </div>
              </div>
            </div>
            <audio
              :ref="`audioElement${index}`"
              class="audio-element"
              :src="slide.audioSrc"
              @timeupdate="updateProgress(index)"
              @ended="onAudioEnded(index)"
            ></audio>
          </div>

          <div class="d-flex flex-wrap ga-4 align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i
                  class="ri-customer-service-line fs-28 text-primary lh-1 position-relative top-2"
                ></i>
              </div>
              <div class="flex-grow-1 ms-10">
                <span class="text-light fs-12 fw-semibold lh-1">Listens</span>
                <span class="d-block text-white fs-14 fw-medium lh-1">
                  {{ slide.listens }}
                </span>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i
                  class="ri-thumb-up-line fs-28 text-primary lh-1 position-relative top-2"
                ></i>
              </div>
              <div class="flex-grow-1 ms-10">
                <span class="text-light fs-12 fw-semibold lh-1">Likes</span>
                <span class="d-block text-white fs-14 fw-medium lh-1">
                  {{ slide.likes }}
                </span>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i
                  class="ri-share-line fs-28 text-primary lh-1 position-relative top-2"
                ></i>
              </div>
              <div class="flex-grow-1 ms-10">
                <span class="text-light fs-12 fw-semibold lh-1">Shares</span>
                <span class="d-block text-white fs-14 fw-medium lh-1">
                  {{ slide.shares }}
                </span>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i
                  class="ri-bookmark-line fs-28 text-primary lh-1 position-relative top-2"
                ></i>
              </div>
              <div class="flex-grow-1 ms-10">
                <span class="text-light fs-12 fw-semibold lh-1">Save for</span>
                <span class="d-block text-white fs-14 fw-medium lh-1">
                  Later
                </span>
              </div>
            </div>
          </div>
        </div>
        <v-img
          :src="slide.imageSrc"
          class="position-absolute bottom-0 end-0 z-n1 for-rtl-shape d-none d-md-block"
          alt="shape"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Featured",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = ref([
      {
        tag: "Featured",
        title: "Mastering Digital Marketing",
        description:
          "Learn the latest digital marketing strategies with insights from SEO expert James Lee.",
        host: "Sarah J.",
        guest: "James Lee, SEO Expert",
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        imageSrc: require("@/assets/images/shape-15.png"),
        listens: 8200,
        likes: 1500,
        shares: 350,
        isPlaying: false,
        currentTime: 0,
        progress: 0,
      },
      {
        tag: "Featured",
        title: "Content Marketing Essentials",
        description:
          "This episode covers creating impactful content that resonates with audiences.",
        host: "Tom R.",
        guest: "Lisa Kim",
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        imageSrc: require("@/assets/images/shape-16.png"),
        listens: 8200,
        likes: 1500,
        shares: 350,
        isPlaying: false,
        currentTime: 0,
        progress: 0,
      },
      {
        tag: "Featured",
        title: "Social Media Trends",
        description:
          "Learn the latest digital marketing strategies with insights from SEO expert James Lee.",
        host: "Amanda G.",
        guest: "David Chen",
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        imageSrc: require("@/assets/images/shape-17.png"),
        listens: 8200,
        likes: 1500,
        shares: 350,
        isPlaying: false,
        currentTime: 0,
        progress: 0,
      },
    ]);

    const togglePlayPause = (index: number) => {
      const audioElement = document.querySelectorAll("audio")[
        index
      ] as HTMLAudioElement;
      if (audioElement) {
        slides.value.forEach((slide, i) => {
          if (i !== index) slide.isPlaying = false;
        });

        if (audioElement.paused) {
          audioElement.play();
          slides.value[index].isPlaying = true;
        } else {
          audioElement.pause();
          slides.value[index].isPlaying = false;
        }
      }
    };

    const updateProgress = (index: number) => {
      const audioElement = document.querySelectorAll("audio")[
        index
      ] as HTMLAudioElement;
      if (audioElement) {
        slides.value[index].progress =
          (audioElement.currentTime / audioElement.duration) * 100;
        slides.value[index].currentTime = audioElement.currentTime;
      }
    };

    const onAudioEnded = (index: number) => {
      slides.value[index].isPlaying = false;
      slides.value[index].progress = 0;
      slides.value[index].currentTime = 0;
    };

    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    return {
      slides,
      togglePlayPause,
      updateProgress,
      onAudioEnded,
      formatTime,
      modules: [Autoplay, Pagination],
    };
  },
});
</script>

<style scoped>
.wave-bar {
  width: 2px;
  height: 25px;
  background-color: #c2cdff;
  margin-left: 2px;
  animation: wave-animation 1s infinite ease-in-out;
  animation-play-state: paused;
}
.wave-bar:nth-child(odd) {
  animation-delay: 0.2s;
}
.wave-bar:nth-child(even) {
  animation-delay: 0.4s;
}
@keyframes wave-animation {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
}
.wave-animation {
  animation-play-state: running;
}
.text-primary {
  color: #605dff !important;
}
.text-light {
  --bs-text-opacity: 1;
  color: #d5d9e2 !important;
}
.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  background-color: #0d6efd;
  transition: var(--transition);
}
</style>
