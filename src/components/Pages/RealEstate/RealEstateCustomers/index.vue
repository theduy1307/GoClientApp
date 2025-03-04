<template>
  <div class="card bg-white border-0 rounded-3 pt-4">
    <div class="default-table-area style-two real-estate-customers">
      <div class="table-responsive">
        <table
          class="table align-middle"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <thead>
            <tr>
              <th scope="col">
                <div class="d-flex align-items-center">
                  <div class="me-1 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  <span class="ms-1">Customer ID</span>
                </div>
              </th>
              <th scope="col">Customer Name</th>
              <th scope="col">Location</th>
              <th scope="col">Join Date</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email Address</th>
              <th scope="col">Customer Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="me-1 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TRE0015</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user1.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Sarah Johnson</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">74 Grim Avenue San Diego,</td>
              <td class="border-bottom">2024-10-01</td>
              <td class="border-bottom">(123) 456-7890</td>
              <td class="border-bottom text-primary">sarah@email.com</td>
              <td class="border-bottom">Buyer</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="me-1 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TRE0099</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user2.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Michael Smith</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">9 Paul Wayne Haggerty Road</td>
              <td class="border-bottom">2024-09-28</td>
              <td class="border-bottom">(987) 654-3210</td>
              <td class="border-bottom text-primary">smith@email.com</td>
              <td>Seller</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="me-1 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TRE0145</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user3.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Emily Brown</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">61 Ottis Street Oklahoma City</td>
              <td class="border-bottom">2024-09-25</td>
              <td class="border-bottom">(555) 258-1598</td>
              <td class="border-bottom text-primary">brown@email.com</td>
              <td class="border-bottom">Commercial</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="me-1 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TRE0247</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user4.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Jason Lee</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">Residential</td>
              <td class="border-bottom">2024-09-22</td>
              <td class="border-bottom">(444) 789-0123</td>
              <td class="border-bottom text-primary">lee@email.com</td>
              <td class="border-bottom">Investor</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="me-1 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TRE0299</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/users/user5.jpg"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Ashley Davis</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">01 Lakeland Terrace Detroit</td>
              <td class="border-bottom">2024-09-20</td>
              <td class="border-bottom">(333) 456-3333</td>
              <td class="border-bottom text-primary">davis@email.com</td>
              <td>Industrial</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="me-1 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TRE0311</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/user-103.png"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Shirley Cooper</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">29 Aviation Way Los Angeles</td>
              <td class="border-bottom">2024-09-23</td>
              <td class="border-bottom">(111) 775-8890</td>
              <td class="border-bottom text-primary">cooper@email.com</td>
              <td class="border-bottom">Buyer</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="me-1 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TRE0328</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/user-104.png"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Bret Brown</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">2 Little Acres Lane Mattoon</td>
              <td class="border-bottom">2024-09-27</td>
              <td class="border-bottom">(555) 222-3365</td>
              <td class="border-bottom text-primary">bret@email.com</td>
              <td class="border-bottom">Seller</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="me-1 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                  <span class="ms-1">#TRE0333</span>
                </div>
              </td>
              <td class="border-bottom">
                <RouterLink to="/my-profile" class="d-flex align-items-center">
                  <v-img
                    src="@/assets/images/user-105.png"
                    class="wh-44 rounded-2"
                    alt="user"
                  />
                  <div class="ms-2">
                    <h6 class="fw-medium fs-14">Frances Mills</h6>
                  </div>
                </RouterLink>
              </td>
              <td class="border-bottom">47 Hope Street Portland</td>
              <td class="border-bottom">2024-09-28</td>
              <td class="border-bottom">(222) 722-8750</td>
              <td class="border-bottom text-primary">mills@email.com</td>
              <td>Commercial</td>
              <td class="border-bottom">
                <div class="d-flex align-items-center ga-1">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-body">
                      edit
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination total="30" items="08" class="p-4 border-0" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "RealEstateCustomers",
  components: {
    Pagination,
  },
});
</script>

<style lang="scss" scoped>
.p-4 {
  padding: 1.5rem !important;
}
.pt-4 {
  padding-top: 1.5rem !important;
}
.form-check {
  .form-check-input {
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: relative;
    top: 3px;
  }
}
.text-primary {
  color: var(--primaryColor) !important;
}
</style>
