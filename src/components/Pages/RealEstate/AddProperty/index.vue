<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Add A Product</h5>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Property Name
          </v-label>
          <v-text-field
            label="Property Name"
            placeholder="Enter property name"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Property Status
          </v-label>
          <v-select label="Select" :items="['Sale', 'Rent', 'Sold']">
          </v-select>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Property Price
          </v-label>
          <v-text-field
            label="Enter Property"
            placeholder="$18,000"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Property Categories
          </v-label>
          <v-text-field
            label="Enter Categories"
            placeholder="Multi family"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black"> Beds </v-label>
          <v-text-field
            label="Enter Beds"
            placeholder="6"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black"> Baths </v-label>
          <v-text-field
            label="Enter Baths"
            placeholder="5"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black"> Area </v-label>
          <v-text-field
            label="Enter Area"
            placeholder="1800 sqft"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black"> Address </v-label>
          <v-text-field
            label="Address"
            placeholder="Enter Address"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Product Description
          </v-label>
          <TextEditor />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Upload Product Images
          </v-label>

          <FileUploader />
        </div>
      </div>
    </div>

    <div class="btn-box">
      <button type="button" class="warn">Cancel</button>
      <button type="button" class="primary">
        <i class="material-symbols-outlined"> add </i>
        Add Property
      </button>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";
import FileUploader from "@/components/Common/FileUploader.vue";

export default defineComponent({
  name: "AddProperty",
  components: {
    TextEditor,
    FileUploader,
  },
});
</script>

<style lang="scss" scoped>
.btn-box {
  text-align: end;

  button {
    height: auto;
    min-width: auto;
    font-weight: 500;
    margin-right: 15px;
    border-radius: 7px;
    padding: 10px 26.5px;
    display: inline-block;

    &.warn {
      color: var(--whiteColor);
      background-color: var(--dangerColor);
    }
    &.primary {
      color: var(--whiteColor);
      background-color: var(--primaryColor);
      padding-left: 45px;
      position: relative;

      i {
        left: 20px;
        top: 50%;
        font-size: 20px;
        position: absolute;
        transform: translateY(-50%);
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
