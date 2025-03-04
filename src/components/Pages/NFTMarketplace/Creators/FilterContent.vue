<template>
  <div class="card border-0 rounded-3 bg-white p-4 mb-4 pb-0">
    <form>
      <div class="row">
        <div class="col-lg-3">
          <div class="position-relative mb-4">
            <input
              type="text"
              class="form-control bg-body-bg border-0"
              placeholder="Search here....."
            />
            <button
              type="submit"
              class="position-absolute top-50 end-0 translate-middle-y bg-transparent p-0 border-0 pe-3 pt-2 text-primary"
            >
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group mb-4">
            <select
              class="form-select form-control bg-body-bg border-0"
              aria-label="Default select example"
            >
              <option selected>Category</option>
              <option value="1">NFT</option>
              <option value="2">Bird</option>
              <option value="3">Pool</option>
            </select>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group mb-4">
            <select
              class="form-select form-control bg-body-bg border-0"
              aria-label="Default select example"
            >
              <option selected>File Type</option>
              <option value="1">Full File</option>
              <option value="2">Zip FIle</option>
              <option value="3">Only Card</option>
            </select>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group mb-4">
            <select
              class="form-select form-control bg-body-bg border-0"
              aria-label="Default select example"
            >
              <option selected>Sales Type</option>
              <option value="1">Full File</option>
              <option value="2">Zip FIle</option>
              <option value="3">Only Card</option>
            </select>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-group mb-4 text-end">
            <button class="btn btn-primary py-2 px-5">
              <span class="filter-btn">Filter</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterContent",
});
</script>

<style lang="scss" scoped>
.p-4 {
  padding: 1.5rem !important;
}
.pe-3 {
  padding-right: 1rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.pb-0 {
  padding-bottom: 0px !important;
}
.form-control {
  color: #3a4252 !important;
  font-size: 15px;
  padding: 14px 16px;
  transition: all ease 0.5s;
  border-radius: 7px;
  width: 100%;
}
.form-select {
  --form-select-bg-img: url(data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e);
  display: block;
  font-weight: 400;
  line-height: 1.5;
  appearance: none;
  background-image: var(--form-select-bg-img);
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
}
.filter-btn {
  background-color: #605dff;
  color: #fff;
  padding: 0.5rem 3rem;
  font-size: 15px;
  font-weight: 400;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border: 1px solid #605dff;
  border-radius: 7px;
  transition: var(--transition);
}
</style>
