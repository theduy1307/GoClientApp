<template>
  <v-card
    class="teachers-card trezo-card border border-radius d-block bg-white custom-shadow p-0"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap ga-3 custom-padding-30 border-bottom custom-padding-30"
    >
      <h5 class="mb-0 fw-semibold">Teachers</h5>
      <RouterLink to="/lms/instructors" class="text-decoration-none">
        <span>View All</span>
        <i class="ri-arrow-right-s-line fs-18 position-relative top-2"></i>
      </RouterLink>
    </div>

    <div class="default-table-area style-three teachers teachers-table pb-25">
      <div class="table-responsive">
        <table
          class="table align-middle border-0"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <thead class="border-bottom">
            <tr>
              <th class="bg-transparent py-1 fw-normal fs-14 text-start">
                Name
              </th>
              <th class="bg-transparent py-1 fw-normal fs-14 text-end">
                Subject
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-170.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">Sarah W.</h4>
                    <span class="fs-12 text-body">sarah@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end border-bottom">Mathematics</td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-171.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">Michael T.</h4>
                    <span class="fs-12 text-body">michael@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end border-bottom">English</td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-172.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">Emily J.</h4>
                    <span class="fs-12 text-body">emily@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end border-bottom">History</td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-173.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">David A.</h4>
                    <span class="fs-12 text-body">david@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end border-bottom">Art</td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-174.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">Jessica M.</h4>
                    <span class="fs-12 text-body">jessica@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end">Music</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Teachers",
});
</script>

<style lang="scss" scoped>
.teachers-card {
  &.border {
    border: 1px solid #edeff5 !important;
  }
  .py-1 {
    padding-top: 0.35rem !important;
    padding-bottom: 0.35rem !important;
  }
  .top-2 {
    top: 2px;
  }
}
</style>
