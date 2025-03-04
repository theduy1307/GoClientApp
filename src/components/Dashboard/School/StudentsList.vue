<template>
  <v-card
    class="students-list-card trezo-card border border-radius d-block bg-white custom-shadow p-0"
  >
    <div class="v-card-header mb-0 p-25">
      <h5 class="mb-0">Students List</h5>
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

    <div class="default-table-area style-three employee-list for-data-table">
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
            <tr v-for="student in paginatedData" :key="student.id">
              <td class="border-bottom">
                <span class="fs-14 fw-medium"> #{{ student.id }} </span>
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      :src="student.image"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">
                      {{ student.name }}
                    </h4>
                    <span class="fs-12 text-body">
                      {{ student.email }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">
                  {{ student.subjects }}
                </span>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">
                  {{ student.class }}
                </span>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">
                  {{ student.contact }}
                </span>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">
                  {{ student.results }}
                </span>
              </td>
              <td class="border-bottom">
                <span
                  v-if="student.status === 'Passed'"
                  class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal"
                >
                  Passed
                </span>
                <span
                  v-if="student.status === 'Fail'"
                  class="badge bg-danger-70 text-danger-60 p-2 fs-12 fw-normal"
                >
                  Fail
                </span>
                <span
                  v-if="student.status === 'Dropped'"
                  class="badge bg-primary-70 text-primary-50 p-2 fs-12 fw-normal"
                >
                  Dropped
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

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap ga-2 custom-padding-30 pt-4"
        >
          <span class="fs-12 fw-medium">
            Items per page: {{ rowsPerPage }}
          </span>

          <div class="d-flex align-items-center">
            <span class="fs-12 fw-medium me-2">
              {{ startItem }} - {{ endItem }} of {{ students.length }}
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
  name: "StudentsList",
  setup() {
    const students = ref([
      {
        id: "101",
        name: "Emily Johnson",
        email: "emily@gmail.com",
        subjects: "Math",
        class: "5A",
        contact: "(555) 123-4567",
        results: "89% Overall (A)",
        status: "Passed",
        image: require("@/assets/images/user-175.png"),
      },
      {
        id: "102",
        name: "Michael Thompson",
        email: "lmichael@gmail.com",
        subjects: "English",
        class: "8B",
        contact: "(555) 234-5678",
        results: "32% Overall (F)",
        status: "Fail",
        image: require("@/assets/images/user-176.png"),
      },
      {
        id: "103",
        name: "Sarah Williams",
        email: "sarah@gmail.com",
        subjects: "Geography",
        class: "4C",
        contact: "(555) 345-6789",
        results: "92% Overall (A+)",
        status: "Dropped",
        image: require("@/assets/images/user-177.png"),
      },
      {
        id: "104",
        name: "David Anderson",
        email: "david@gmail.com",
        subjects: "Physics",
        class: "6A",
        contact: "(555) 456-7890",
        results: "85% Overall (B+)",
        status: "Passed",
        image: require("@/assets/images/user-178.png"),
      },
      {
        id: "105",
        name: "Jessica Martinez",
        email: "jessica@gmail.com",
        subjects: "History",
        class: "7B",
        contact: "(555) 567-8901",
        results: "25% Overall (F)",
        status: "Fail",
        image: require("@/assets/images/user-179.png"),
      },
      {
        id: "106",
        name: "James Lee",
        email: "james@gmail.com",
        subjects: "Biology",
        class: "5B",
        contact: "(555) 678-9012",
        results: "88% Overall (A)",
        status: "Passed",
        image: require("@/assets/images/user-180.png"),
      },
      {
        id: "107",
        name: "Ethan Clark",
        email: "ethan@gmail.com",
        subjects: "Music",
        class: "8A",
        contact: "(555) 789-0123",
        results: "93% Overall (A+)",
        status: "Dropped",
        image: require("@/assets/images/user-181.png"),
      },
    ]);

    const headers = ref([
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "subjects", label: "Subjects" },
      { key: "class", label: "Class" },
      { key: "contact", label: "Contact" },
      { key: "results", label: "Results" },
      { key: "status", label: "Status" },
      { key: "action", label: "Action" },
    ]);

    const rowsPerPage = ref(5);
    const currentPage = ref(1);
    const sortedColumn = ref<string | null>(null);
    const sortOrder = ref<"asc" | "desc">("asc");
    const searchQuery = ref("");

    const filteredStudents = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return students.value.filter(
        (employee: { [s: string]: unknown } | ArrayLike<unknown>) =>
          Object.values(employee).some((value) =>
            String(value).toLowerCase().includes(query)
          )
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredStudents.value.length / rowsPerPage.value)
    );
    const startItem = computed(
      () => (currentPage.value - 1) * rowsPerPage.value + 1
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * rowsPerPage.value, students.value.length)
    );

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * rowsPerPage.value;
      return filteredStudents.value.slice(start, start + rowsPerPage.value);
    });

    const sortTable = (key: string) => {
      if (sortedColumn.value === key) {
        sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
      } else {
        sortedColumn.value = key;
        sortOrder.value = "asc";
      }
      students.value.sort(
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
      filteredStudents.value.sort(
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
      students,
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
      filteredStudents,
    };
  },
});
</script>

<style lang="scss" scoped>
.students-list-card {
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
  .bg-primary-70 {
    background-color: rgb(221 228 255) !important;
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
  .text-primary-50 {
    color: rgb(73 54 245) !important;
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
