<template>
  <div class="row justify-content-center">
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="card bg-white border-0 rounded-3 p-4 py-lg-5 text-center">
        <div class="mb-3 d-flex justify-content-center">
          <v-img
            src="@/assets/images/wallet-1.png"
            class="rounded-circle"
            style="width: 54px; height: 54px"
            alt="wallet"
          />
        </div>
        <h5 class="mb-3">Metamask</h5>
        <p style="max-width: 285px" class="mx-auto mb-4">
          MetaMask is a software cryptocurrency wallet used to interact with the
          Ethereum blockchain.
        </p>
        <div class="">
          <button class="connect-btn">Connect</button>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="card bg-white border-0 rounded-3 p-4 py-lg-5 text-center">
        <div class="mb-3 d-flex justify-content-center">
          <v-img
            src="@/assets/images/wallet-2.png"
            class="rounded-circle"
            style="width: 54px; height: 54px"
            alt="wallet"
          />
        </div>
        <h5 class="mb-3">Binance</h5>
        <p style="max-width: 285px" class="mx-auto mb-4">
          Binance offers a relatively secure, versatile way to invest in and
          trade cryptocurrencies.
        </p>
        <div class="">
          <button class="connect-btn">Connect</button>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-sm-6 mb-4">
      <div
        class="card bg-white border-0 rounded-3 p-4 py-lg-5 text-center h-100"
      >
        <div class="mb-3 d-flex justify-content-center">
          <v-img
            src="@/assets/images/wallet-3.png"
            class="rounded-circle"
            style="width: 54px; height: 54px"
            alt="wallet"
          />
        </div>
        <h5 class="mb-3">Coinbase</h5>
        <p style="max-width: 285px" class="mx-auto mb-4">
          Coinbase Wallet is a software product that gives you access to a wide
          spectrum.
        </p>
        <div class="">
          <button class="connect-btn">Connect</button>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="card bg-white border-0 rounded-3 p-4 py-lg-5 text-center">
        <div class="mb-3 d-flex justify-content-center">
          <v-img
            src="@/assets/images/user-76.gif"
            class="rounded-circle"
            style="width: 54px; height: 54px"
            alt="user"
          />
        </div>
        <h5 class="mb-3">Hello Thumbs</h5>
        <p style="max-width: 285px" class="mx-auto mb-4">
          MetaMask is a software cryptocurrency wallet used to interact with the
          Ethereum blockchain.
        </p>
        <div class="">
          <button class="connect-btn">Connect</button>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="card bg-white border-0 rounded-3 p-4 py-lg-5 text-center">
        <div class="mb-3 d-flex justify-content-center">
          <v-img
            src="@/assets/images/user-77.gif"
            class="rounded-circle"
            style="width: 54px; height: 54px"
            alt="user"
          />
        </div>
        <h5 class="mb-3">Christmas Eve</h5>
        <p style="max-width: 285px" class="mx-auto mb-4">
          Binance offers a relatively secure, versatile way to invest in and
          trade cryptocurrencies.
        </p>
        <div class="">
          <button class="connect-btn">Connect</button>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-sm-6 mb-4">
      <div
        class="card bg-white border-0 rounded-3 p-4 py-lg-5 text-center h-100"
      >
        <div class="mb-3 d-flex justify-content-center">
          <v-img
            src="@/assets/images/user-78.gif"
            class="rounded-circle"
            style="width: 54px; height: 54px"
            alt="user"
          />
        </div>
        <h5 class="mb-3">Humming Bird</h5>
        <p style="max-width: 285px" class="mx-auto mb-4">
          Coinbase Wallet is a software product that gives you access to a wide
          spectrum.
        </p>
        <div class="">
          <button class="connect-btn">Connect</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WalletConnect",
});
</script>

<style lang="scss" scoped>
.p-4 {
  padding: 1.5rem !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
@media (min-width: 992px) {
  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
.connect-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 7px;
  display: inline-block;
  color: var(--whiteColor);
  border: 1px solid var(--primaryColor);
  background-color: var(--primaryColor);
}
</style>
