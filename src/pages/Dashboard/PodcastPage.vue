<template>
  <v-row class="mt-2">
    <v-col lg="8">
      <Featured />
    </v-col>

    <v-col lg="4">
      <PopularHosts />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <RecentlyPlayed />
    </v-col>
    <v-col lg="4">
      <Player />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <MostPopular />
    </v-col>
    <v-col lg="4">
      <UpcomingEpisodes />

      <TodayEarningsChart />
    </v-col>
  </v-row>
  <v-row>
    <v-col xl="6" lg="5" md="5">
      <ListenerAnalyticsChart />
    </v-col>
    <v-col xl="6" lg="7" md="7">
      <TopPodcasts />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import Featured from "../../components/Dashboard/Podcast/Featured.vue";
import PopularHosts from "../../components/Dashboard/Podcast/PopularHosts.vue";
import RecentlyPlayed from "../../components/Dashboard/Podcast/RecentlyPlayed.vue";
import Player from "../../components/Dashboard/Podcast/Player.vue";
import MostPopular from "../../components/Dashboard/Podcast/MostPopular.vue";
import UpcomingEpisodes from "../../components/Dashboard/Podcast/UpcomingEpisodes.vue";
import TodayEarningsChart from "../../components/Dashboard/Podcast/TodayEarningsChart.vue";
import ListenerAnalyticsChart from "../../components/Dashboard/Podcast/ListenerAnalyticsChart.vue";
import TopPodcasts from "../../components/Dashboard/Podcast/TopPodcasts.vue";

export default defineComponent({
  name: "PodcastPage",
  components: {
    Featured,
    PopularHosts,
    RecentlyPlayed,
    Player,
    MostPopular,
    UpcomingEpisodes,
    TodayEarningsChart,
    ListenerAnalyticsChart,
    TopPodcasts,
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white", "podcast-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white", "podcast-page");
    });
  },
});
</script>

<style lang="scss">
body {
  &.podcast-page {
    .sidebar-area {
      background-color: #f6f7f9 !important;
      .logo {
        &.bg-white {
          background-color: #f6f7f9 !important;
        }
      }
    }
    .header-area {
      padding: 12px 0 !important;
      &.sticky {
        padding-left: 25px !important;
        padding-right: 25px !important;
      }
    }
    .footer-area {
      border: 1px solid #eceef2 !important;
    }
  }
}
</style>
