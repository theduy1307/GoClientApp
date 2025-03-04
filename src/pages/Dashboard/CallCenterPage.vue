<template>
  <div class="row">
    <div class="col-xxl-8">
      <Overview />
    </div>
    <div class="col-xxl-4">
      <div class="row">
        <div class="col-xxl-12 col-md-6">
          <InboundCallsChart />
        </div>
        <div class="col-xxl-12 col-md-6">
          <OutboundCallsChart />
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-7 col-xxl-6">
      <AgentsPerformanceOverview />
    </div>
    <div class="col-lg-5 col-xxl-6">
      <CallCenterGeography />
    </div>
  </div>
  <div class="row">
    <div class="col-xxl-4">
      <AgentAvgEarnings />
    </div>
    <div class="col-xxl-8">
      <RecentCalls />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import Overview from "../../components/Dashboard/CallCenter/Overview/index.vue";
import InboundCallsChart from "../../components/Dashboard/CallCenter/InboundCallsChart.vue";
import OutboundCallsChart from "../../components/Dashboard/CallCenter/OutboundCallsChart.vue";
import AgentsPerformanceOverview from "../../components/Dashboard/CallCenter/AgentsPerformanceOverview.vue";
import CallCenterGeography from "../../components/Dashboard/CallCenter/CallCenterGeography.vue";
import AgentAvgEarnings from "../../components/Dashboard/CallCenter/AgentAvgEarnings/index.vue";
import RecentCalls from "../../components/Dashboard/CallCenter/RecentCalls.vue";

export default defineComponent({
  name: "CallCenterPage",
  components: {
    Overview,
    InboundCallsChart,
    OutboundCallsChart,
    AgentsPerformanceOverview,
    CallCenterGeography,
    AgentAvgEarnings,
    RecentCalls,
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white", "call-center-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white", "call-center-page");
    });
  },
});
</script>

<style lang="scss">
body {
  &.call-center-page {
    .main-content {
      padding-top: 75px;
    }
    .sidebar-area {
      border-right: 1px solid #eceef2 !important;
    }
    .header-area {
      padding: 12px 0 !important;
      &.sticky {
        padding-left: 25px !important;
        padding-right: 25px !important;
      }
      &.mb-4 {
        margin-bottom: 0.5rem !important;
      }
    }
    .footer-area {
      border: 1px solid #eceef2 !important;
    }
  }
}
</style>
