<template>
  <v-card
    class="recent-calls-card trezo-card border border-radius d-block bg-white custom-shadow p-0"
  >
    <div class="v-card-header mb-0 p-25">
      <h5 class="mb-0">Recent Calls</h5>
      <div class="d-flex align-items-center">
        <form class="position-relative table-src-form">
          <input
            type="text"
            id="SearchControl"
            class="form-control border-0"
            style="width: 265px"
            placeholder="Search for a name...."
            v-model="searchQuery"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
          >
            search
          </i>
        </form>
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="position-relative dot-btn p-0 bg-transparent border-none"
            >
              <i data-feather="more-vertical"></i>
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

    <div class="default-table-area style-three recent-calls for-data-table">
      <div class="table-responsive">
        <table
          class="table align-middle border-0"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <thead class="border-bottom">
            <tr>
              <th
                v-for="header in headers"
                :key="header.key"
                @click="sortTable(header.key)"
                style="cursor: pointer"
                class="bg-transparent"
              >
                {{ header.label }}
                <span class="up-down-arrow">
                  <i
                    v-if="sortedColumn === header.key && sortOrder === 'asc'"
                    class="material-symbols-outlined"
                  >
                    arrow_upward
                  </i>
                  <i
                    v-if="sortedColumn === header.key && sortOrder === 'desc'"
                    class="material-symbols-outlined"
                  >
                    arrow_downward
                  </i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="call in paginatedData" :key="call.id">
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      :src="call.image"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">
                      {{ call.name }}
                    </h4>
                    <span class="fs-12 text-body">
                      {{ call.number }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="border-bottom">
                <span
                  v-if="call.type === 'Inbound'"
                  class="text-primary fw-medium"
                >
                  Inbound
                </span>
                <span
                  v-if="call.type === 'Outbound'"
                  class="text-danger-50 fw-medium"
                >
                  Outbound
                </span>
              </td>
              <td class="border-bottom">
                <span class="fw-medium">
                  {{ call.duration }}
                </span>
              </td>
              <td class="border-bottom">
                <span
                  v-if="call.status === 'Resolved'"
                  class="text-success-50 fw-medium"
                >
                  Resolved
                </span>
                <span
                  v-if="call.status === 'Pending'"
                  class="text-danger-50 fw-medium"
                >
                  Pending
                </span>
                <span
                  v-if="call.status === 'Dropped'"
                  class="text-primary-div-50 fw-medium"
                >
                  Dropped
                </span>
              </td>
              <td class="border-bottom">
                <span class="fw-medium">
                  {{ call.time }}
                </span>
              </td>
              <td class="border-bottom">
                <span class="fw-medium">
                  {{ call.csat }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap ga-2 p-20"
        >
          <span class="fs-12 fw-medium">
            Items per page: {{ rowsPerPage }}
          </span>

          <div class="d-flex align-items-center">
            <span class="fs-12 fw-medium me-2">
              {{ startItem }} - {{ endItem }} of {{ calls.length }}
            </span>
            <nav aria-label="Page navigation example">
              <ul class="pagination mb-0 justify-content-center">
                <li :class="['page-item', { disabled: currentPage === 1 }]">
                  <button
                    class="page-link icon"
                    @click="prevPage"
                    :disabled="currentPage === 1"
                  >
                    <i class="material-symbols-outlined">
                      keyboard_arrow_left
                    </i>
                  </button>
                </li>
                <li
                  :class="[
                    'page-item',
                    { disabled: currentPage === totalPages },
                  ]"
                >
                  <button
                    class="page-link icon"
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                  >
                    <i class="material-symbols-outlined">
                      keyboard_arrow_right
                    </i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "RecentCalls",
  setup() {
    const calls = ref([
      {
        id: "1",
        image: require("@/assets/images/user-166.png"),
        name: "Emily Johnson",
        number: "+1 555-123-4567",
        type: "Inbound",
        duration: "5 mins",
        status: "Resolved",
        time: "10:30 AM",
        csat: "90%",
      },
      {
        id: "2",
        image: require("@/assets/images/user-167.png"),
        name: "Sarah Green",
        number: "+44 20 7946 0958",
        type: "Outbound",
        duration: "3 mins",
        status: "Pending",
        time: "10:35 AM",
        csat: "85%",
      },
      {
        id: "3",
        image: require("@/assets/images/user-168.png"),
        name: "Adam Smith",
        number: "+1 555-234-5678",
        type: "Inbound",
        duration: "7 mins",
        status: "Resolved",
        time: "10:40 AM",
        csat: "83%",
      },
      {
        id: "4",
        image: require("@/assets/images/user-169.png"),
        name: "Laura Martin",
        number: "+61 2 1234 5678",
        type: "Inbound",
        duration: "4 mins",
        status: "Dropped",
        time: "10:45 AM",
        csat: "87%",
      },
      {
        id: "5",
        image: require("@/assets/images/user-166.png"),
        name: "Laura Martin",
        number: "+61 2 1234 5678",
        type: "Inbound",
        duration: "4 mins",
        status: "Dropped",
        time: "10:45 AM",
        csat: "87%",
      },
      {
        id: "6",
        image: require("@/assets/images/user-167.png"),
        name: "Adam Smith",
        number: "+1 555-234-5678",
        type: "Inbound",
        duration: "7 mins",
        status: "Resolved",
        time: "10:40 AM",
        csat: "83%",
      },
      {
        id: "7",
        image: require("@/assets/images/user-168.png"),
        name: "Sarah Green",
        number: "+44 20 7946 0958",
        type: "Outbound",
        duration: "3 mins",
        status: "Pending",
        time: "10:35 AM",
        csat: "85%",
      },
    ]);

    const headers = ref([
      { key: "name", label: "Caller Name" },
      { key: "type", label: "Call Type" },
      { key: "duration", label: "Duration" },
      { key: "status", label: "Status" },
      { key: "time", label: "Time" },
      { key: "csat", label: "CSAT" },
    ]);

    const rowsPerPage = ref(4);
    const currentPage = ref(1);
    const sortedColumn = ref<string | null>(null);
    const sortOrder = ref<"asc" | "desc">("asc");
    const searchQuery = ref("");

    const filteredCalls = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return calls.value.filter(
        (employee: { [s: string]: unknown } | ArrayLike<unknown>) =>
          Object.values(employee).some((value) =>
            String(value).toLowerCase().includes(query)
          )
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredCalls.value.length / rowsPerPage.value)
    );
    const startItem = computed(
      () => (currentPage.value - 1) * rowsPerPage.value + 1
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * rowsPerPage.value, calls.value.length)
    );

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * rowsPerPage.value;
      return filteredCalls.value.slice(start, start + rowsPerPage.value);
    });

    const sortTable = (key: string) => {
      if (sortedColumn.value === key) {
        sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
      } else {
        sortedColumn.value = key;
        sortOrder.value = "asc";
      }
      calls.value.sort(
        (a: { [x: string]: unknown }, b: { [x: string]: unknown }) => {
          const collator = new Intl.Collator("en", {
            numeric: true,
            sensitivity: "base",
          });
          return sortOrder.value === "asc"
            ? collator.compare(String(a[key]), String(b[key]))
            : collator.compare(String(b[key]), String(a[key]));
        }
      );
      filteredCalls.value.sort(
        (a: { [x: string]: string }, b: { [x: string]: string }) => {
          const collator = new Intl.Collator("en", { numeric: true });
          return sortOrder.value === "asc"
            ? collator.compare(a[key], b[key])
            : collator.compare(b[key], a[key]);
        }
      );
    };

    const prevPage = () => currentPage.value > 1 && currentPage.value--;
    const nextPage = () =>
      currentPage.value < totalPages.value && currentPage.value++;

    onMounted(() => {
      feather.replace();
    });

    return {
      calls,
      headers,
      rowsPerPage,
      currentPage,
      sortedColumn,
      sortOrder,
      paginatedData,
      startItem,
      endItem,
      totalPages,
      sortTable,
      prevPage,
      nextPage,
      searchQuery,
      filteredCalls,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-calls-card {
  &.border {
    border: 1px solid #edeff5 !important;
  }
  .bg-danger-70 {
    background-color: rgb(255 225 221) !important;
  }
  .bg-success-80 {
    background-color: rgb(216 255 200) !important;
  }
  .bg-primary-div-60 {
    background-color: rgb(243 232 255) !important;
  }
  .text-danger-60 {
    color: rgb(236 31 0) !important;
  }
  .text-success-50 {
    color: rgb(30 131 8) !important;
  }
  .text-primary-div-50 {
    color: rgb(145 53 232) !important;
  }
}
.up-down-arrow {
  i {
    font-size: 14px;
    position: relative;
    top: 2px;
  }
}
@media (min-width: 576px) {
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
}
</style>
