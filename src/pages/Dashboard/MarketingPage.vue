<template>
  <StatusContent />
  <v-row>
    <v-col lg="8">
      <PerformanceOverviewChart />
    </v-col>
    <v-col lg="4">
      <NewMobileApp />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="4">
      <HighlightsContent />

      <ChannelsContent />
    </v-col>
    <v-col lg="8">
      <CampaignsContent />
      <v-row>
        <v-col md="6">
          <ExternalLinks />
        </v-col>
        <v-col md="6">
          <InstagramCampaignsChart />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="3" md="4">
      <NewMarketingTool />
    </v-col>
    <v-col lg="9" md="8">
      <InstagramSubscriberChart />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatusContent from "../../components/Dashboard/Marketing/StatusContent.vue";
import PerformanceOverviewChart from "../../components/Dashboard/Marketing/PerformanceOverviewChart.vue";
import NewMobileApp from "../../components/Dashboard/Marketing/NewMobileApp.vue";
import HighlightsContent from "../../components/Dashboard/Marketing/HighlightsContent.vue";
import ChannelsContent from "../../components/Dashboard/Marketing/ChannelsContent.vue";
import CampaignsContent from "../../components/Dashboard/Marketing/CampaignsContent.vue";
import ExternalLinks from "../../components/Dashboard/Marketing/ExternalLinks.vue";
import InstagramCampaignsChart from "../../components/Dashboard/Marketing/InstagramCampaignsChart.vue";
import NewMarketingTool from "../../components/Dashboard/Marketing/NewMarketingTool.vue";
import InstagramSubscriberChart from "../../components/Dashboard/Marketing/InstagramSubscriberChart.vue";

export default defineComponent({
  name: "MarketingPage",
  components: {
    StatusContent,
    PerformanceOverviewChart,
    NewMobileApp,
    HighlightsContent,
    ChannelsContent,
    CampaignsContent,
    ExternalLinks,
    InstagramCampaignsChart,
    NewMarketingTool,
    InstagramSubscriberChart,
  },
});
</script>
