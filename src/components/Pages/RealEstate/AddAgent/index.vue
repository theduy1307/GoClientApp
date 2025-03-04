<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Agent Information</h5>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black"> Agent Name </v-label>
          <v-text-field
            label="Agent Name"
            placeholder="Enter agent name"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black"> Agency </v-label>
          <v-text-field
            label="Agency"
            placeholder="Enter agency name"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black"> Phone Number </v-label>
          <v-text-field
            label="Phone Number"
            placeholder="Enter phone number"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black"> Email </v-label>
          <v-text-field
            label="Email"
            placeholder="Enter email address"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            License Number
          </v-label>
          <v-text-field
            label="Enter license number"
            placeholder="6"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Years of Experience
          </v-label>
          <v-text-field
            label="Enter Years of Experience"
            placeholder="Enter years of experience"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Specialization
          </v-label>
          <v-text-field
            label="Specialization"
            placeholder="Enter areas of expertise"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Office Location
          </v-label>
          <v-text-field
            label="Office Location"
            placeholder="Enter office address"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Recent Achievements
          </v-label>
          <v-text-field
            label="Recent Achievements"
            placeholder="Enter recent achievements"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Client Testimonials
          </v-label>
          <v-text-field
            label="Client Testimonials"
            placeholder="Include client testimonials"
            required
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Additional Notes
          </v-label>
          <TextEditor />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black">
            Add Agent Photo
          </v-label>

          <FileUploader />
        </div>
      </div>
    </div>
    <div class="btn-box">
      <button type="button" class="warn">Cancel</button>
      <button type="button" class="primary">
        <i class="material-symbols-outlined"> add </i>
        Add Agent
      </button>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";
import FileUploader from "@/components/Common/FileUploader.vue";

export default defineComponent({
  name: "AddAgent",
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
