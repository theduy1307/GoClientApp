<template>
  <v-card
    class="customer-reviews-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Customer Reviews</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
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

    <div class="mb-4">
      <div class="d-flex align-items-center mb-2">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/user-48.jpg"
            class="rounded-circle"
            style="width: 40px; height: 40px"
            alt="user"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <div class="d-flex flex-wrap ga-2 justify-content-between">
            <div>
              <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
              <span class="fs-12">15m ago</span>
            </div>
            <div class="d-flex ga-1">
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
            </div>
          </div>
        </div>
      </div>
      <p class="fs-12" style="line-height: 1.4">
        "Great service! Found exactly what I needed for my property, and the
        process was smooth and hassle-free."
      </p>
    </div>
    <div class="mb-4">
      <div class="d-flex align-items-center mb-2">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/user-49.jpg"
            class="rounded-circle"
            style="width: 40px; height: 40px"
            alt="user"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <div class="d-flex flex-wrap ga-2 justify-content-between">
            <div>
              <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
              <span class="fs-12">15m ago</span>
            </div>
            <div class="d-flex ga-1">
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
            </div>
          </div>
        </div>
      </div>
      <p class="fs-12" style="line-height: 1.4">
        "Great service! Found exactly what I needed for my property, and the
        process was smooth and hassle-free."
      </p>
    </div>
    <div class="mb-4">
      <div class="d-flex align-items-center mb-2">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/user-50.jpg"
            class="rounded-circle"
            style="width: 40px; height: 40px"
            alt="user"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <div class="d-flex flex-wrap ga-2 justify-content-between">
            <div>
              <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
              <span class="fs-12">15m ago</span>
            </div>
            <div class="d-flex ga-1">
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
            </div>
          </div>
        </div>
      </div>
      <p class="fs-12" style="line-height: 1.4">
        "Great service! Found exactly what I needed for my property, and the
        process was smooth and hassle-free."
      </p>
    </div>
    <div class="mb-4">
      <div class="d-flex align-items-center mb-2">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/user-51.jpg"
            class="rounded-circle"
            style="width: 40px; height: 40px"
            alt="user"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <div class="d-flex flex-wrap ga-2 justify-content-between">
            <div>
              <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
              <span class="fs-12">15m ago</span>
            </div>
            <div class="d-flex ga-1">
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
            </div>
          </div>
        </div>
      </div>
      <p class="fs-12" style="line-height: 1.4">
        "Great service! Found exactly what I needed for my property, and the
        process was smooth and hassle-free."
      </p>
    </div>
    <div class="mb-4">
      <div class="d-flex align-items-center mb-2">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/user-52.jpg"
            class="rounded-circle"
            style="width: 40px; height: 40px"
            alt="user"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <div class="d-flex flex-wrap ga-2 justify-content-between">
            <div>
              <h4 class="fs-15 mb-0 fw-semibold">Irene George</h4>
              <span class="fs-12">15m ago</span>
            </div>
            <div class="d-flex ga-1">
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
              <i class="ri-star-line text-warning fs-16"></i>
            </div>
          </div>
        </div>
      </div>
      <p class="fs-12" style="line-height: 1.4">
        "Great service! Found exactly what I needed for my property, and the
        process was smooth and hassle-free."
      </p>
    </div>

    <div
      class="items-per-page d-flex text-center justify-content-center p-0 border-none"
    >
      <v-pagination :length="4"></v-pagination>
    </div>
    <!-- <nav aria-label="Page navigation example">
      <ul class="pagination mb-0 justify-content-center">
        <li class="page-item">
          <a class="page-link icon" href="#" aria-label="Previous">
            <i class="material-symbols-outlined">keyboard_arrow_left</i>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link active" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item">
          <a class="page-link icon" href="#" aria-label="Next">
            <i class="material-symbols-outlined">keyboard_arrow_right</i>
          </a>
        </li>
      </ul>
    </nav> -->
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomerReviews",
});
</script>

<style lang="scss" scoped>
.customer-reviews-card {
  .mb-4 {
    margin-bottom: 1.4rem !important;
  }
}
</style>
