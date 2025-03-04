<template>
  <WelcomeBack />
  <v-row>
    <v-col lg="4" md="6">
      <TotalEmployees />
    </v-col>
    <v-col lg="4" md="6">
      <ResignedEmployees />
    </v-col>
    <v-col lg="4" md="12">
      <NewEmployees />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <EmployeeAttendanceTrendsChart />
    </v-col>
    <v-col lg="4">
      <EmployeeWorkFormatChart />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="4">
      <EmployeeSalaryChart />
    </v-col>
    <v-col lg="8">
      <EmployeeLeaveRequest />
    </v-col>
  </v-row>

  <EmployeeList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeBack from "../../components/Dashboard/HRM/WelcomeBack.vue";
import TotalEmployees from "../../components/Dashboard/HRM/TotalEmployees.vue";
import ResignedEmployees from "../../components/Dashboard/HRM/ResignedEmployees.vue";
import NewEmployees from "../../components/Dashboard/HRM/NewEmployees.vue";
import EmployeeAttendanceTrendsChart from "../../components/Dashboard/HRM/EmployeeAttendanceTrendsChart.vue";
import EmployeeWorkFormatChart from "../../components/Dashboard/HRM/EmployeeWorkFormatChart.vue";
import EmployeeSalaryChart from "../../components/Dashboard/HRM/EmployeeSalaryChart.vue";
import EmployeeLeaveRequest from "../../components/Dashboard/HRM/EmployeeLeaveRequest.vue";
import EmployeeList from "../../components/Dashboard/HRM/EmployeeList.vue";

export default defineComponent({
  name: "HRMPage",
  components: {
    WelcomeBack,
    TotalEmployees,
    ResignedEmployees,
    NewEmployees,
    EmployeeAttendanceTrendsChart,
    EmployeeWorkFormatChart,
    EmployeeSalaryChart,
    EmployeeLeaveRequest,
    EmployeeList,
  },
});
</script>
