<template>
  <SchoolOverview />
  <v-row>
    <v-col xl="8">
      <Stats />
    </v-col>
    <v-col xl="4">
      <UpcomingEvents />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8" md="7">
      <AttendanceAnalyticsChart />
    </v-col>
    <v-col lg="4" md="5">
      <Teachers />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="4" md="6">
      <StudentsOverviewChart />
    </v-col>
    <v-col lg="4" md="6">
      <NewAdmissionsChart />
    </v-col>
    <v-col lg="4" md="12">
      <NoticeBoard />
    </v-col>
  </v-row>

  <StudentsList />
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import SchoolOverview from "../../components/Dashboard/School/SchoolOverview.vue";
import Stats from "../../components/Dashboard/School/Stats/index.vue";
import UpcomingEvents from "../../components/Dashboard/School/UpcomingEvents.vue";
import AttendanceAnalyticsChart from "../../components/Dashboard/School/AttendanceAnalyticsChart.vue";
import Teachers from "../../components/Dashboard/School/Teachers.vue";
import StudentsOverviewChart from "../../components/Dashboard/School/StudentsOverviewChart.vue";
import NewAdmissionsChart from "../../components/Dashboard/School/NewAdmissionsChart.vue";
import NoticeBoard from "../../components/Dashboard/School/NoticeBoard.vue";
import StudentsList from "../../components/Dashboard/School/StudentsList.vue";

export default defineComponent({
  name: "SchoolPage",
  components: {
    SchoolOverview,
    Stats,
    UpcomingEvents,
    AttendanceAnalyticsChart,
    Teachers,
    StudentsOverviewChart,
    NewAdmissionsChart,
    NoticeBoard,
    StudentsList,
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white", "school-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white", "school-page");
    });
  },
});
</script>

<style lang="scss">
body {
  &.school-page {
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
