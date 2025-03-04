<template>
  <v-card
    class="employee-leave-request-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none p-0"
  >
    <div class="v-card-header p-25 pb-0">
      <h5 class="mb-0">Employee Leave Request</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius"
            >
              This Month
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              This Day
            </button>
            <button type="button" class="bg-transparent border-none">
              This Week
            </button>
            <button type="button" class="bg-transparent border-none">
              This Month
            </button>
            <button type="button" class="bg-transparent border-none">
              This Year
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div class="default-table-area style-three employee-leave-request">
      <div class="border-bottom"></div>
      <div class="table-responsive">
        <table
          class="table align-middle border-0"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <thead>
            <tr>
              <th class="border-bottom bg-transparent fw-normal">Employee</th>
              <th class="border-bottom bg-transparent fw-normal">Leave Type</th>
              <th class="border-bottom bg-transparent fw-normal">Days</th>
              <th class="border-bottom bg-transparent fw-normal">Status</th>
              <th class="border-bottom bg-transparent fw-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(leave, index) in leaveRequests" :key="index">
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      :src="leave.image"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">{{ leave.name }}</h4>
                    <span class="fs-12 text-body">{{ leave.department }}</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-14 fw-medium">
                {{ leave.leaveType }}
              </td>
              <td class="border-bottom fs-14 fw-medium">{{ leave.days }}</td>
              <td class="border-bottom">
                <span :class="['badge p-2 fs-12 fw-normal', leave.statusClass]">
                  {{ leave.status }}
                </span>
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-2">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-18 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i
                      class="material-symbols-outlined fs-18 text-primary-div-50"
                    >
                      border_color
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-18 text-danger">
                      delete
                    </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination class="border-0 p-20" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "EmployeeLeaveRequest",
  components: {
    Pagination,
  },
  setup() {
    const leaveRequests = ref([
      {
        image: require("@/assets/images/user-151.png"),
        name: "John Doe",
        department: "Marketing",
        leaveType: "Vacation",
        days: 3,
        status: "Approved",
        statusClass: "bg-success-80 text-success-50",
      },
      {
        image: require("@/assets/images/user-152.png"),
        name: "Jane Smith",
        department: "HR",
        leaveType: "Sick Leave",
        days: 2,
        status: "Pending",
        statusClass: "bg-primary-div-60 text-primary-div-50",
      },
      {
        image: require("@/assets/images/user-153.png"),
        name: "Alex Johnson",
        department: "Developer",
        leaveType: "Maternity Leave",
        days: 4,
        status: "Rejected",
        statusClass: "bg-danger-70 text-danger-60",
      },
      {
        image: require("@/assets/images/user-154.png"),
        name: "Emily Davis",
        department: "UX Designer",
        leaveType: "Vacation",
        days: 2,
        status: "Approved",
        statusClass: "bg-success-80 text-success-50",
      },
      {
        image: require("@/assets/images/user-155.png"),
        name: "Michael Brown",
        department: "Finance",
        leaveType: "Personal Leave",
        days: 1,
        status: "Pending",
        statusClass: "bg-primary-div-60 text-primary-div-50",
      },
    ]);

    return { leaveRequests };
  },
});
</script>

<style lang="scss" scoped>
.employee-leave-request-card {
  .text-primary {
    color: var(--primaryColor) !important;
  }
  .text-primary-div-50 {
    color: rgb(145 53 232) !important;
  }
}
</style>
