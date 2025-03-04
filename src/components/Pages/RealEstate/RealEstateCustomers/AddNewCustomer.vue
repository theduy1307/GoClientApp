<template>
  <div class="row pb-4 align-items-center">
    <div class="col-sm-5">
      <div class="pe-md-5 me-md-5">
        <form class="src-form position-relative">
          <input
            type="text"
            class="form-control"
            style="height: 45px"
            placeholder="Search here....."
          />
          <button
            type="submit"
            class="position-absolute top-50 end-0 translate-middle-y bg-transparent p-0 border-0"
          >
            <span
              class="material-symbols-outlined position-relative top-5 text-primary pe-2"
            >
              search
            </span>
          </button>
        </form>
      </div>
    </div>
    <div class="col-sm-7 text-sm-end text-center mt-3 mt-sm-0">
      <AddNewCustomerModal />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddNewCustomerModal from "./AddNewCustomerModal.vue";

export default defineComponent({
  name: "AddNewCustomer",
  components: {
    AddNewCustomerModal,
  },
});
</script>

<style lang="scss" scoped>
.pb-4 {
  padding-bottom: 1.5rem !important;
}
.top-5 {
  top: 5px;
}
.form-control {
  background-color: #ffffff !important;
  border: 1px solid #d5d9e2;
  height: 50px;
  color: #3a4252 !important;
  font-size: 15px;
  padding: 14px 16px;
  width: 100%;
  transition: all ease 0.5s;
  border-radius: 7px;
  &:focus {
    background-color: #ffffff;
    box-shadow: unset;
    outline: 0;
    border: 1px solid #605dff;
    color: #8695aa;
  }
}
@media (min-width: 576px) {
  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
}
@media (min-width: 768px) {
  .pe-md-5 {
    padding-right: 3rem !important;
  }
  .me-md-5 {
    margin-right: 3rem !important;
  }
}
</style>
