<template>
  <v-dialog max-width="1120px">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="add-transaction-btn me-3">
        <i class="material-symbols-outlined">add</i>
        Add Transaction
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Add A New Transaction</h5>
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
                  Transaction ID
                </v-label>
                <v-text-field
                  label="Transaction ID"
                  placeholder="Enter transaction ID"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Date </v-label>
                <v-text-field type="date" class="date-input"> </v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Description
                </v-label>
                <v-text-field
                  label="Card Number"
                  placeholder="Enter card number"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Amount </v-label>
                <v-text-field
                  label="Amount"
                  placeholder="Enter Amount"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Type </v-label>
                <v-select
                  label="Select Type: Income/Expense"
                  :items="['Income', 'Expense']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Status </v-label>
                <v-select
                  label="Select Type: Completed/Pending"
                  :items="['Completed', 'Pending']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Payment Method
                </v-label>
                <v-text-field
                  label="Payment Method"
                  placeholder="Enter Payment Method: Bank Transfer, Cash, Card"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Action </v-label>
                <v-select
                  label="Select Type: Action"
                  :items="['View', 'Edit', 'Delete']"
                >
                </v-select>
              </div>
            </div>
            <div class="col-md-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Notes
                  <span class="text-body fw-normal"> [Optional Notes] </span>
                </v-label>
                <TextEditor />
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button @click="isActive.value = false" class="warn">Cancel</button>
            <button @click="isActive.value = false" class="primary">
              <i class="material-symbols-outlined"> add </i>
              Add Card
            </button>
          </div>
        </form>
      </div>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";

export default defineComponent({
  name: "AddNewTransactionModal",
  components: {
    TextEditor,
  },
});
</script>

<style lang="scss" scoped>
.add-transaction-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 6px 13px 6px 35px;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--primaryColor);
  border: 1px solid var(--primaryColor);

  i {
    top: 50%;
    left: 8px;
    font-size: 22px;
    position: absolute;
    transform: translateY(-50%);
  }
}
</style>
