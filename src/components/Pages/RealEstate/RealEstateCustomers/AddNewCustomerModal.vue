<template>
  <v-dialog max-width="1120px">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="add-new-btn">
        <i class="material-symbols-outlined">add</i>
        Add Customer
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Add A New Customer</h5>
          <button
            class="close-btn bg-transparent p-0 border-none"
            @click="isActive.value = false"
          >
            <i class="ri-close-fill"></i>
          </button>
        </div>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Customer ID
                </v-label>
                <v-text-field
                  label="Customer ID"
                  placeholder="#TRE0015"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Customer Name
                </v-label>
                <v-text-field
                  label="Customer Name"
                  placeholder="Enter name"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Customer Address
                </v-label>
                <v-text-field
                  label="Customer Address"
                  placeholder="Enter location"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Join Date
                </v-label>
                <v-text-field type="date" class="date-input"> </v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Customer Phone
                </v-label>
                <v-text-field
                  label="Customer Phone"
                  placeholder="Enter phone"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Customer Email
                </v-label>
                <v-text-field
                  label="Customer Email"
                  placeholder="Enter email"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Customer Type
                </v-label>
                <v-select
                  label="Select Type:"
                  :items="['Buyer', 'Seller', 'Commercial', 'Investor']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Action </v-label>
                <v-select
                  label="Select Type"
                  :items="['View', 'Edit', 'Delete']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-md-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Add Customer Photo
                </v-label>

                <FileUploader />
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button @click="isActive.value = false" class="warn">Cancel</button>
            <button @click="isActive.value = false" class="primary">
              <i class="material-symbols-outlined"> add </i>
              Create
            </button>
          </div>
        </form>
      </div>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileUploader from "@/components/Common/FileUploader.vue";

export default defineComponent({
  name: "AddNewCustomerModal",
  components: {
    FileUploader,
  },
});
</script>

<style lang="scss" scoped>
.add-new-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 6px 13px 6px 35px;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--primaryColor);
  border: 1px solid var(--primaryColor);
  margin: {
    top: 15px;
  }

  i {
    top: 50%;
    left: 8px;
    font-size: 22px;
    position: absolute;
    transform: translateY(-50%);
  }
}
</style>
