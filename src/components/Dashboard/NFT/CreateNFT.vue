<template>
  <v-dialog width="100%" height="100%">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="create-nft-btn">Create NFT</button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h1 class="modal-title fs-24 mb-0" id="exampleModalLabel">
            Create NFT
          </h1>
          <button
            type="button"
            class="close-btn bg-transparent p-0 border-none"
            @click="isActive.value = false"
          >
            <i class="ri-close-fill"></i>
          </button>
        </div>

        <div class="dialog-content">
          <form
            class="campaign-stepper-content m-auto p-4 p-md-5"
            style="max-width: 1208px"
          >
            <h3 class="fs-18 mb-4">Upload Image, Video, Audio, or 3D Model</h3>

            <div class="mb-4 only-file-upload">
              <div
                class="d-flex align-items-center position-relative z-1 bg-border-color p-4 rounded-2"
                style="border: 2px dashed #5da8ff"
              >
                <div class="flex-shrink-0">
                  <v-img src="@/assets/images/upload.png" alt="upload" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h4 class="fs-16">
                    Drop campaign files here or click to upload.
                  </h4>
                  <p>Upload upto 12 files, max size each file: 5MB.</p>
                </div>
                <label
                  class="position-absolute top-0 bottom-0 start-0 end-0 cursor"
                  id="upload-container"
                >
                  <input
                    class="form__file bottom-0"
                    id="upload-files"
                    type="file"
                    multiple
                    @change="handleFileUpload"
                  />
                </label>
              </div>
              <div id="files-list-container">
                <div
                  v-for="(file, index) in uploadedFiles"
                  :key="index"
                  class="form__files-container"
                >
                  <span class="form__text">{{ file.name }}</span>
                  <div>
                    <a
                      class="form__icon me-2"
                      :href="file.url"
                      target="_blank"
                      title="Preview"
                    >
                      &#128065;
                    </a>
                    <a
                      class="form__icon"
                      :href="file.url"
                      title="Download"
                      download
                    >
                      &#11123;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Product Name
                </v-label>
                <v-text-field
                  label="Enter product name"
                  placeholder="Christmas Eve"
                  required
                ></v-text-field>
              </div>
            </div>

            <div class="mb-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Description
                </v-label>
                <CommonTextEditor />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    Item Price
                  </v-label>
                  <v-text-field
                    label="Enter item price"
                    placeholder="12.50 ETH"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black"> Size </v-label>
                  <v-text-field
                    label="Enter size"
                    placeholder="12.50 ETH"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    Properties
                  </v-label>
                  <v-text-field
                    label="Enter link"
                    placeholder="Enter Link"
                    required
                  ></v-text-field>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  External Link
                </v-label>
                <CommonTextEditor />
              </div>
            </div>

            <div class="d-flex flex-wrap ga-3 mb-4">
              <div class="d-flex align-items-center form-check style">
                <div class="flex-shrink-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    style="width: 20px; height: 20px; line-height: 20px"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <label
                    class="form-check-label ps-0 fs-14 fw-medium"
                    for="flexRadioDefault1"
                  >
                    Put On Sale
                  </label>
                </div>
              </div>
              <div class="d-flex align-items-center form-check style">
                <div class="flex-shrink-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    style="width: 20px; height: 20px; line-height: 20px"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <label
                    class="form-check-label ps-0 fs-14 fw-medium"
                    for="flexRadioDefault2"
                  >
                    Instant Sale Price
                  </label>
                </div>
              </div>
              <div class="d-flex align-items-center form-check style">
                <div class="flex-shrink-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    style="width: 20px; height: 20px; line-height: 20px"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <label
                    class="form-check-label ps-0 fs-14 fw-medium"
                    for="flexRadioDefault3"
                  >
                    Unlock One Purchased
                  </label>
                </div>
              </div>
            </div>

            <div class="buttons d-flex justify-content-end">
              <button class="btn btn-primary py-2 px-4">Create NFT</button>
            </div>
          </form>
        </div>
      </div>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CreateNFT",
  setup() {
    const uploadedFiles = ref<{ name: string; url: string }[]>([]);

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const files = input.files;
      if (files) {
        uploadedFiles.value = Array.from(files).map((file) => ({
          name: file.name,
          url: URL.createObjectURL(file),
        }));
      }
    };

    return {
      uploadedFiles,
      handleFileUpload,
    };
  },
});
</script>

<style lang="scss" scoped>
.create-nft-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 8px 1.5rem;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--whiteColor);
  border: 1px solid var(--primaryColor);
  background-color: var(--primaryColor);
}
.create-dialog-box {
  height: 100%;
  overflow-y: scroll;
}
.tab-contents {
  input {
    width: 100%;
  }
}
.cursor {
  cursor: pointer;
  input#upload-files {
    opacity: 0;
  }
}
.buttons {
  .btn {
    height: auto;
    min-width: auto;
    font-weight: 500;
    padding: 8px 15px;
    position: relative;
    border-radius: 7px;
    display: inline-block;
    color: var(--whiteColor);
    background-color: var(--primaryColor);
    border-color: var(--primaryColor);

    &:disabled {
      pointer-events: none;
      background-color: #6c757d;
      border-color: #6c757d;
      opacity: 0.65;
    }
  }
}
.only-file-upload {
  .form__file {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    opacity: 0;
  }
  .form__files-container {
    display: flex;
    width: 100%;
    padding: 5px 0;
    justify-content: space-between;
    align-items: center;
    background-color: #eceef2;
    padding: 10px;
    margin-top: 10px;
    border-radius: 6px;
  }
  .form__text {
    font-size: 14px;
    color: #3a4252;
    max-width: 450px;
    whitespace: no-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .form__icon {
    font-size: 22px;
    color: var(--primaryColor);
    text-decoration: none;
    background-color: rgba(31, 100, 241, 0.1);
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 4px;
    display: inline-block;
    &:hover {
      background-color: var(--primaryColor);
      color: var(--whiteColor);
    }
  }
}

.p-4 {
  padding: 1.5rem !important;
}
@media (min-width: 768px) {
  .p-md-5 {
    padding: 3rem !important;
  }
}
</style>
