<template>
  <v-card
    class="order-details-card trezo-card custom-shadow for-dark-rounded-bg rounded-3 border mb-4 p-0 bg-body-bg"
  >
    <div class="v-card-header mb-0" style="padding: 8.5px 25px">
      <h3 class="mb-0 fs-20 fw-medium">Order Details</h3>

      <button class="bg-transparent p-0 border-0 text-primary">
        <i class="ri-refresh-line"></i>
      </button>
    </div>

    <div class="bg-white py-4 px-0 rounded-3 border-top">
      <div class="last-child-none">
        <div
          class="d-flex justify-content-between align-items-center child border-bottom px-3 px-sm-4"
          style="padding-bottom: 20px; margin-bottom: 20px"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/product-45.jpg"
                style="width: 40px; height: 28px"
                class="rounded-1"
                alt="product"
              />
            </div>
            <div class="flex-grow-1 ms-10">
              <h3 class="fs-14 fw-medium mb-0" style="max-width: 78px">
                Maybelline Lash
              </h3>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="product-quantity border-0 bg-body-bg rounded-2">
              <QuantityCounter />
            </div>

            <span class="fs-18 fw-medium text-primary ms-2 ms-sm-4">$29</span>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center child border-bottom px-3 px-sm-4"
          style="padding-bottom: 20px; margin-bottom: 20px"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/product-46.jpg"
                style="width: 40px; height: 28px"
                class="rounded-1"
                alt="product"
              />
            </div>
            <div class="flex-grow-1 ms-10">
              <h3 class="fs-14 fw-medium mb-0" style="max-width: 78px">
                Apple iPhone 16
              </h3>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="product-quantity border-0 bg-body-bg rounded-2">
              <QuantityCounter />
            </div>

            <span class="fs-18 fw-medium text-primary ms-2 ms-sm-4">$799</span>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center child border-bottom px-3 px-sm-4"
          style="padding-bottom: 20px; margin-bottom: 20px"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/product-47.jpg"
                style="width: 40px; height: 28px"
                class="rounded-1"
                alt="product"
              />
            </div>
            <div class="flex-grow-1 ms-10">
              <h3 class="fs-14 fw-medium mb-0" style="max-width: 78px">
                Adidas Woman
              </h3>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="product-quantity border-0 bg-body-bg rounded-2">
              <QuantityCounter />
            </div>

            <span class="fs-18 fw-medium text-primary ms-2 ms-sm-4">$85</span>
          </div>
        </div>
      </div>

      <div class="p-4 pb-0">
        <div class="bg-body-bg p-20 rounded-3 mb-30">
          <ul class="ps-0 mb-3 list-unstyled last-child-none">
            <li
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 7px"
            >
              <span class="text-body">Total</span>
              <span class="text-body">3 Items</span>
            </li>
            <li
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 7px"
            >
              <span class="fw-medium text-secondary">Subtotal:</span>
              <span class="fw-medium text-secondary">$913.00</span>
            </li>
            <li
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 7px"
            >
              <span class="fw-medium text-secondary">Shipping:</span>
              <span class="fw-medium text-secondary">$0.00</span>
            </li>
            <li
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 7px"
            >
              <span class="fw-medium text-secondary">Tax (10%):</span>
              <span class="fw-medium text-secondary">$91.30</span>
            </li>
          </ul>
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="fs-20 fw-medium mb-0">Payable Total</h3>
            <h3 class="fs-20 fw-medium mb-0">$1004.30</h3>
          </div>
        </div>

        <h3 class="fs-20 fw-medium mb-3">Payment Method</h3>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center payment-method mb-30"
        >
          <div>
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option5"
              autocomplete="off"
            />
            <label
              class="btn text-center"
              for="option5"
              style="
                width: 81px;
                height: 66px;
                background-color: #f6f7f9;
                border: 1px solid #dde4ff;
                border-radius: 0.375rem;
                padding: 9px 0;
                display: block;
                cursor: pointer;
              "
            >
              <div class="d-flex justify-content-center align-items-center">
                <v-img src="@/assets/images/cash.svg" alt="cash" />
              </div>
              <span class="d-block text-body">Cash</span>
            </label>
          </div>

          <div class="">
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option6"
              autocomplete="off"
              checked
            />
            <label
              class="btn text-center"
              for="option6"
              style="
                width: 81px;
                height: 66px;
                background-color: #f6f7f9;
                border: 1px solid #dde4ff;
                border-radius: 0.375rem;
                padding: 9px 0;
                display: block;
                cursor: pointer;
              "
            >
              <div class="d-flex justify-content-center align-items-center">
                <v-img src="@/assets/images/card.svg" alt="cash" />
              </div>
              <span class="d-block text-body">Card</span>
            </label>
          </div>

          <div class="">
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option8"
              autocomplete="off"
            />
            <label
              class="btn text-center"
              for="option8"
              style="
                width: 81px;
                height: 66px;
                background-color: #f6f7f9;
                border: 1px solid #dde4ff;
                border-radius: 0.375rem;
                padding: 9px 0;
                display: block;
                cursor: pointer;
              "
            >
              <div class="d-flex justify-content-center align-items-center">
                <v-img src="@/assets/images/e-wallet.svg" alt="cash" />
              </div>
              <span class="d-block text-body">E-Wallet</span>
            </label>
          </div>
        </div>

        <RouterLink to="/ecommerce/checkout" class="place-order-btn">
          Place Order
        </RouterLink>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuantityCounter from "./QuantityCounter.vue";

export default defineComponent({
  name: "OrderDetails",
  components: {
    QuantityCounter,
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  &.trezo-card {
    border: 1px solid var(--borderColor) !important;
  }
}
.order-details-card {
  .v-card-header {
    button {
      font-size: 24px !important;
    }
  }
  .text-primary {
    color: #605dff !important;
  }
  .text-secondary {
    --bs-text-opacity: 1;
    color: rgb(58 66 82) !important;
  }
  .payment-method {
    .btn-check:checked + .btn,
    :not(.btn-check) + .btn:active,
    .btn:first-child:active,
    .btn.active,
    .btn.show {
      border-color: #605dff !important;
      background-color: #ecf0ff !important;
    }
  }
  .btn-check {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }
  .place-order-btn {
    height: auto;
    min-width: auto;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 1.5rem;
    width: 100%;
    position: relative;
    border-radius: 7px;
    text-align: center;
    display: inline-block;
    color: var(--whiteColor);
    border: 1px solid var(--primaryColor);
    background-color: var(--primaryColor);
  }
}
</style>
