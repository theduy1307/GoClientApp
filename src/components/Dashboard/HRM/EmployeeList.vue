<template>
  <v-card
    class="employee-list-card trezo-card border-radius d-block bg-white border-0 shadow-none p-0"
  >
    <div class="v-card-header mb-0 p-25">
      <h5 class="mb-0">Employee List</h5>
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
          <thead>
            <tr>
              <th
                v-for="header in headers"
                :key="header.key"
                @click="sortTable(header.key)"
                style="cursor: pointer"
                class="border-bottom bg-transparent"
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
            <tr v-for="employee in paginatedData" :key="employee.id">
              <td class="border-bottom">
                <span class="fs-14 fw-medium">
                  {{ employee.id }}
                </span>
              </td>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      :src="employee.image"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">{{ employee.name }}</h4>
                    <span class="fs-12 text-body">{{ employee.email }}</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">{{ employee.department }}</span>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">{{ employee.position }}</span>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">{{ employee.joiningDate }}</span>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">{{ employee.salary }}</span>
              </td>
              <td class="border-bottom">
                <span
                  v-if="employee.status === 'Active'"
                  class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal"
                >
                  Active
                </span>
                <span
                  v-if="employee.status === 'On Leave'"
                  class="badge bg-primary-div-60 text-primary-div-50 p-2 fs-12 fw-normal"
                >
                  On Leave
                </span>
                <span
                  v-if="employee.status === 'Resigned'"
                  class="badge bg-danger-70 text-danger-60 p-2 fs-12 fw-normal"
                >
                  Resigned
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
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap ga-2 custom-padding-30 p-25"
        >
          <span class="fs-12 fw-medium">
            Items per page: {{ rowsPerPage }}
          </span>

          <div class="d-flex align-items-center">
            <span class="fs-12 fw-medium me-2">
              {{ startItem }} - {{ endItem }} of {{ employees.length }}
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
  name: "EmployeeList",
  setup() {
    const employees = ref([
      {
        id: "EMP010",
        name: "Ethan Collins",
        email: "ethan@gmail.com",
        department: "Sales",
        position: "Sales Manager",
        joiningDate: "Apr 12, 2022",
        salary: "$90,000",
        status: "Active",
        image: require("@/assets/images/user-156.png"),
      },
      {
        id: "EMP009",
        name: "Liam Bennett",
        email: "liam@gmail.com",
        department: "Human Resources",
        position: "HR Manager",
        joiningDate: "Mar 10, 2021",
        salary: "$75,000",
        status: "On Leave",
        image: require("@/assets/images/user-157.png"),
      },
      {
        id: "EMP008",
        name: "Olivia Turner",
        email: "olivia@gmail.com",
        department: "Marketing",
        position: "Marketing Lead",
        joiningDate: "Jan 15, 2020",
        salary: "$85,000",
        status: "Active",
        image: require("@/assets/images/user-158.png"),
      },
      {
        id: "EMP007",
        name: "Isabella Reed",
        email: "isabella@gmail.com",
        department: "Finance",
        position: "Financial Analyst",
        joiningDate: "Aug 05, 2020",
        salary: "$80,000",
        status: "Resigned",
        image: require("@/assets/images/user-159.png"),
      },
      {
        id: "EMP006",
        name: "Sophia Myers",
        email: "isabella@gmail.com",
        department: "IT",
        position: "Software Engineer",
        joiningDate: "Feb 22, 2019",
        salary: "$95,000",
        status: "Active",
        image: require("@/assets/images/user-160.png"),
      },
      {
        id: "EMP005",
        name: "Isabella Reed",
        email: "ethan@gmail.com",
        department: "Finance",
        position: "Financial Analyst",
        joiningDate: "Aug 05, 2020",
        salary: "$80,000",
        status: "Resigned",
        image: require("@/assets/images/user-156.png"),
      },
      {
        id: "EMP004",
        name: "Ethan Collins",
        email: "ethan@gmail.com",
        department: "Sales",
        position: "Sales Manager",
        joiningDate: "Apr 12, 2022",
        salary: "$90,000",
        status: "Active",
        image: require("@/assets/images/user-157.png"),
      },
      {
        id: "EMP003",
        name: "Sophia Myers",
        email: "sophia@gmail.com",
        department: "IT",
        position: "Software Engineer",
        joiningDate: "Feb 22, 2019",
        salary: "$95,000",
        status: "Active",
        image: require("@/assets/images/user-158.png"),
      },
      {
        id: "EMP002",
        name: "Liam Bennett",
        email: "liam@gmail.com",
        department: "Human Resources",
        position: "HR Manager",
        joiningDate: "Mar 10, 2021",
        salary: "$75,000",
        status: "On Leave",
        image: require("@/assets/images/user-159.png"),
      },
      {
        id: "EMP006",
        name: "Olivia Turner",
        email: "olivia@gmail.com",
        department: "Marketing",
        position: "Marketing Lead",
        joiningDate: "Jan 15, 2020",
        salary: "$85,000",
        status: "Active",
        image: require("@/assets/images/user-160.png"),
      },
    ]);

    const headers = ref([
      { key: "id", label: "ID" },
      { key: "name", label: "Employee" },
      { key: "department", label: "Department" },
      { key: "position", label: "Position" },
      { key: "joiningDate", label: "Joining Date" },
      { key: "salary", label: "Salary" },
      { key: "status", label: "Status" },
      { key: "action", label: "Action" },
    ]);

    const rowsPerPage = ref(5);
    const currentPage = ref(1);
    const sortedColumn = ref<string | null>(null);
    const sortOrder = ref<"asc" | "desc">("asc");
    const searchQuery = ref("");

    const filteredEmployees = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return employees.value.filter(
        (employee: { [s: string]: unknown } | ArrayLike<unknown>) =>
          Object.values(employee).some((value) =>
            String(value).toLowerCase().includes(query)
          )
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredEmployees.value.length / rowsPerPage.value)
    );
    const startItem = computed(
      () => (currentPage.value - 1) * rowsPerPage.value + 1
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * rowsPerPage.value, employees.value.length)
    );

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * rowsPerPage.value;
      return filteredEmployees.value.slice(start, start + rowsPerPage.value);
    });

    const sortTable = (key: string) => {
      if (sortedColumn.value === key) {
        sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
      } else {
        sortedColumn.value = key;
        sortOrder.value = "asc";
      }
      employees.value.sort(
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
      filteredEmployees.value.sort(
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
      employees,
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
      filteredEmployees,
    };
  },
});
</script>

<style lang="scss" scoped>
.employee-list-card {
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
