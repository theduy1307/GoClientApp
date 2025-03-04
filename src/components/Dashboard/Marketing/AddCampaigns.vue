<template>
  <v-dialog width="90%" height="90%">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="add-new-btn">
        <i class="material-symbols-outlined">add</i>
        Add Campaigns
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h1 class="modal-title fs-24 mb-0" id="exampleModalLabel">
            Create Campaigns
          </h1>
          <button
            type="button"
            class="close-btn bg-transparent p-0 border-none"
            @click="isActive.value = false"
          >
            <i class="ri-close-fill"></i>
          </button>
        </div>

        <div class="dialog-content p-md-5 p-4">
          <ul
            class="tabs create-campaigns-tabs d-flex flex-wrap justify-content-between ga-2 list-unstyled pb-0"
          >
            <li
              :class="['tab', { active: activeTab === 'campaignDetails' }]"
              @click="setActiveTab('campaignDetails')"
            >
              <button class="nav-linkborder-0">CAMPAIGN DETAILS</button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'creativeUploads' }]"
              @click="setActiveTab('creativeUploads')"
            >
              <button class="nav-link fw-medium border-0">
                CREATIVE UPLOADS
              </button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'audiences' }]"
              @click="setActiveTab('audiences')"
            >
              <button class="nav-link fw-medium border-0">AUDIENCES</button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'budgetEstimates' }]"
              @click="setActiveTab('budgetEstimates')"
            >
              <button class="nav-link fw-medium border-0">
                BUDGET ESTIMATES
              </button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'completed' }]"
              @click="setActiveTab('completed')"
            >
              <button class="nav-link fw-medium border-0">COMPLETED</button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'viewCampaign' }]"
              @click="setActiveTab('viewCampaign')"
            >
              <button class="nav-link fw-medium border-0">VIEW CAMPAIGN</button>
            </li>
          </ul>

          <div class="tab-content-wrap">
            <div
              class="tab-contents back-none"
              v-show="activeTab === 'campaignDetails'"
            >
              <form
                class="campaign-stepper-content m-auto"
                style="max-width: 625px"
              >
                <h3 class="fs-18 mb-3 mb-md-5">Campaign Details</h3>

                <div class="mb-5">
                  <label class="d-block text-body fw-semibold mb-2">
                    Campaign Name
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control bg-border-color h-55 fs-16"
                    placeholder="Christmas Eve"
                  />
                </div>
                <div class="mb-5">
                  <label class="fw-semibold d-block text-body mb-2">
                    Company Logo
                    <span class="text-danger">*</span>
                  </label>
                  <AvatarPreview />
                  <span class="fs-14 d-block text-body mt-4">
                    Allowed file types: png, jpg, jpeg. Max size: 1 MB
                  </span>
                </div>
                <div class="mb-5">
                  <label class="fw-semibold d-block text-body mb-2">
                    Campaign Goal <span class="text-danger">*</span>
                  </label>

                  <label
                    for="radio5"
                    class="custom-radio d-block style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      checked
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio5"
                    />
                    <div class="radio-content">
                      <span class="fw-medium mb-1 d-block">
                        Get more visitors
                      </span>
                      <p>Increase impression traffic onto the platform</p>
                    </div>
                  </label>
                  <label
                    for="radio6"
                    class="custom-radio d-block style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio6"
                    />
                    <div class="radio-content">
                      <span class="fw-medium mb-1 d-block">
                        Get more messages on chat
                      </span>
                      <p>Increase community interaction and communication</p>
                    </div>
                  </label>
                  <label
                    for="radio7"
                    class="custom-radio d-block style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio7"
                    />
                    <div class="radio-content">
                      <span class="fw-medium mb-1 d-block">
                        Get more calls
                      </span>
                      <p>
                        Boost telecommunication feedback to provide precise and
                        accurate information
                      </p>
                    </div>
                  </label>
                  <label
                    for="radio8"
                    class="custom-radio d-block style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio8"
                    />
                    <div class="radio-content">
                      <span class="fw-medium mb-1 d-block">
                        Get more likes
                      </span>
                      <p>
                        Increase positive interactivity on social media
                        platforms
                      </p>
                    </div>
                  </label>
                  <label
                    for="radio9"
                    class="custom-radio d-block style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio9"
                    />
                    <div class="radio-content">
                      <span class="fw-medium mb-1 d-block">
                        Lead generation
                      </span>
                      <p>Collect contact information for potential customers</p>
                    </div>
                  </label>
                </div>
              </form>
            </div>

            <div class="tab-contents" v-show="activeTab === 'creativeUploads'">
              <form
                class="campaign-stepper-content m-auto"
                style="max-width: 625px"
              >
                <h3 class="fs-18 mb-4">Upload Files</h3>

                <div class="mb-5 only-file-upload">
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

                <h3 class="fs-18 mb-4">Uploaded Files</h3>

                <div class="mb-5">
                  <div
                    class="d-flex flex-wrap ga-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/pdf.png"
                          style="width: 35px"
                          alt="pdf"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="fs-16 mb-0">Campaign Requirements</h4>
                        <p>Increase impression traffic onto the platform</p>
                      </div>
                    </div>

                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <button
                          type="button"
                          v-bind="props"
                          class="card-header-menu border-none d-inline-block border-radius"
                        >
                          Edit
                        </button>
                      </template>
                      <v-list class="menu-content">
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          Delete
                        </button>
                      </v-list>
                    </v-menu>
                  </div>
                  <div
                    class="d-flex flex-wrap ga-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/doc.png"
                          style="width: 35px"
                          alt="doc"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="fs-16 mb-0">
                          Campaign’s mission and vision
                        </h4>
                        <p>Increase impression traffic onto the platform</p>
                      </div>
                    </div>

                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <button
                          type="button"
                          v-bind="props"
                          class="card-header-menu border-none d-inline-block border-radius"
                        >
                          Edit
                        </button>
                      </template>
                      <v-list class="menu-content">
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          Delete
                        </button>
                      </v-list>
                    </v-menu>
                  </div>
                  <div
                    class="d-flex flex-wrap ga-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/xl4.png"
                          style="width: 35px"
                          alt="xl4"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="fs-16 mb-0">Campaign Banner</h4>
                        <p>Increase impression traffic onto the platform</p>
                      </div>
                    </div>

                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <button
                          type="button"
                          v-bind="props"
                          class="card-header-menu border-none d-inline-block border-radius"
                        >
                          Edit
                        </button>
                      </template>
                      <v-list class="menu-content">
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          Delete
                        </button>
                      </v-list>
                    </v-menu>
                  </div>
                  <div
                    class="d-flex flex-wrap ga-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <v-img
                          src="@/assets/images/jpg.png"
                          style="width: 35px"
                          alt="pdf"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="fs-16 mb-0">Campaign Image</h4>
                        <p>Increase impression traffic onto the platform</p>
                      </div>
                    </div>

                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <button
                          type="button"
                          v-bind="props"
                          class="card-header-menu border-none d-inline-block border-radius"
                        >
                          Edit
                        </button>
                      </template>
                      <v-list class="menu-content">
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="bg-transparent border-none"
                        >
                          Delete
                        </button>
                      </v-list>
                    </v-menu>
                  </div>
                </div>
              </form>
            </div>

            <div class="tab-contents" v-show="activeTab === 'audiences'">
              <div
                class="campaign-stepper-content m-auto"
                style="max-width: 625px"
              >
                <h3 class="fs-18 mb-4">Configure Audiences</h3>

                <div class="mb-5">
                  <label class="text-body d-block fw-semibold mb-3">
                    Gender
                  </label>
                  <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <label for="radio" class="custom-radio">
                        <input
                          checked
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio"
                        />
                        <div class="radio-content">
                          <span class="fw-medium">All</span>
                        </div>
                      </label>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <label for="radio2" class="custom-radio">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio2"
                        />
                        <div class="radio-content">
                          <span class="fw-medium">Male</span>
                        </div>
                      </label>
                    </div>
                    <div class="col-sm-4">
                      <label for="radio3" class="custom-radio">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio3"
                        />
                        <div class="radio-content">
                          <span class="fw-medium">Female</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="text-body d-block fw-semibold mb-3">Age</label>
                  <div class="d-flex justify-content-between mb-1">
                    <span
                      id="min-value"
                      class="d-block text-black fw-medium fs-13"
                    >
                      ${{ minAge }}
                    </span>
                    <span
                      id="max-value"
                      class="d-block text-black fw-medium fs-13"
                    >
                      ${{ maxAge }}
                    </span>
                  </div>
                  <input type="range" v-model="minAge" @change="updateRange" />
                </div>

                <div class="mb-5">
                  <label class="text-body d-block fw-semibold mb-3">
                    Location
                  </label>
                  <div class="form-group mb-4">
                    <div
                      class="tag-container p-1 rounded-3 form-control h-auto p-0 bg-border-color"
                      id="tagContainer"
                      style="border: 2px dashed #5da8ff"
                    >
                      <input
                        type="text"
                        id="tagInput"
                        class="form-control h-60 border-0 bg-border-color"
                        placeholder="Type and press Enter"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="text-body d-block fw-semibold mb-3">
                    Media
                  </label>
                  <div class="form-group mb-4">
                    <div
                      class="tag-container p-1 rounded-3 form-control h-auto p-0 bg-border-color"
                      id="MediaContainer"
                      style="border: 2px dashed #5da8ff"
                    >
                      <input
                        type="text"
                        id="MediaInput"
                        class="form-control h-60 border-0 bg-border-color"
                        placeholder="Type and press Enter"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="text-body d-block fw-semibold mb-3">
                    Add Team Member
                  </label>
                  <div class="form-group mb-4">
                    <div
                      class="tag-container p-1 rounded-3 form-control h-auto p-0 bg-border-color"
                      id="AddTeamMemberContainer"
                      style="border: 2px dashed #5da8ff"
                    >
                      <input
                        type="text"
                        id="AddTeamMemberInput"
                        class="form-control h-60 border-0 bg-border-color"
                        placeholder="Type and press Enter"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-contents" v-show="activeTab === 'budgetEstimates'">
              <form
                class="campaign-stepper-content m-auto"
                style="max-width: 625px"
              >
                <h3 class="fs-18 mb-4">Budget Estimates</h3>

                <div class="mb-5">
                  <label class="text-body d-block fw-semibold mb-3"
                    >Budgets Estimates</label
                  >
                  <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <label for="radio4" class="custom-radio">
                        <input
                          checked
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio4"
                        />
                        <div class="radio-content">
                          <span class="fw-medium mb-1 d-block">
                            Continuous Duration
                          </span>
                          <p>
                            Your Ad will run continuously for a daily budget.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div class="col-sm-6">
                      <label for="radio10" class="custom-radio">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio10"
                        />
                        <div class="radio-content">
                          <span class="fw-medium mb-1 d-block">
                            Fixed Duration
                          </span>
                          <p>Your Ad will run only specified dates only.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="text-body d-block fw-semibold mb-3"
                    >Daily Budget</label
                  >
                  <div class="d-flex justify-content-between mb-1">
                    <span
                      id="min-value"
                      class="d-block text-black fw-medium fs-13"
                    >
                      ${{ minBudget }}
                    </span>
                    <span
                      id="max-value"
                      class="d-block text-black fw-medium fs-13"
                    >
                      ${{ maxBudget }}
                    </span>
                  </div>
                  <input
                    type="range"
                    max="5000"
                    data-from="1000"
                    v-model="minBudget"
                    @change="updateBudget"
                  />
                </div>
              </form>
            </div>

            <div class="tab-contents" v-show="activeTab === 'completed'">
              <div
                class="campaign-stepper-content m-auto text-center mb-5"
                style="max-width: 625px"
              >
                <div class="mb-4 d-flex justify-content-center">
                  <v-img
                    src="@/assets/images/interface-welcome.png"
                    alt="interface-welcome"
                  />
                </div>

                <h3 class="fs-24 mb-3">Campaign Completed!</h3>
                <p class="mx-auto mb-4" style="max-width: 463px">
                  You will receive an email with with the summary of your newly
                  created campaign!
                </p>

                <div
                  class="buttons d-flex flex-wrap justify-content-center ga-2 ga-sm-4"
                >
                  <button
                    class="btn btn-secondary"
                    @click="isActive.value = false"
                  >
                    Create New Campaign
                    <i class="ri-arrow-right-line text-white"></i>
                  </button>
                  <button class="btn btn-primary">
                    View Campaign
                    <i class="ri-arrow-right-line text-white"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="tab-contents" v-show="activeTab === 'viewCampaign'">
              <div class="campaign-stepper-content">
                <div class="d-flex align-items-center mb-4 mb-md-5">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/christmas.png"
                      alt="christmas"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3 class="fs-24">Christmas Eve</h3>
                    <span class="fs-16 fw-medium"
                      >From 10 Oct - 15 Oct, 24</span
                    >
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-4">
                    <div class="card border p-4 bg-border-color rounded-3 mb-4">
                      <div
                        class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
                      >
                        <h4 class="fs-18 mb-0">Campaign Goal:</h4>

                        <v-menu>
                          <template v-slot:activator="{ props }">
                            <button
                              type="button"
                              v-bind="props"
                              class="card-header-menu border-none d-inline-block border-radius"
                            >
                              Today
                            </button>
                          </template>
                          <v-list class="menu-content">
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              Today
                            </button>
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              Delete
                            </button>
                          </v-list>
                        </v-menu>
                      </div>
                      <h4 class="fw-medium fs-14">Get more visitors</h4>
                      <p>Increase impression traffic onto the platform</p>
                    </div>
                    <div class="card border p-4 bg-border-color rounded-3 mb-4">
                      <div
                        class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
                      >
                        <h4 class="fs-18 mb-0">Team Members:</h4>

                        <v-menu>
                          <template v-slot:activator="{ props }">
                            <button
                              type="button"
                              v-bind="props"
                              class="card-header-menu border-none d-inline-block border-radius"
                            >
                              Today
                            </button>
                          </template>
                          <v-list class="menu-content">
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              Today
                            </button>
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              Delete
                            </button>
                          </v-list>
                        </v-menu>
                      </div>
                      <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-3">
                        <li>
                          <button
                            class="border-0 p-2 bg-body-bg d-flex align-items-center rounded-2"
                          >
                            <v-img
                              src="@/assets/images/user-90.png"
                              class="border border-white rounded-circle"
                              alt="user"
                            />
                            <span class="fw-medium ms-2">Jonathon Ronan</span>
                          </button>
                        </li>
                        <li>
                          <button
                            class="border-0 p-2 bg-body-bg d-flex align-items-center rounded-2"
                          >
                            <v-img
                              src="@/assets/images/user-91.png"
                              class="border border-white rounded-circle"
                              alt="user"
                            />
                            <span class="fw-medium ms-2">Walter White</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card border p-4 bg-border-color rounded-3 mb-4">
                      <div
                        class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
                      >
                        <h4 class="fs-18 mb-0">Audiences</h4>

                        <v-menu>
                          <template v-slot:activator="{ props }">
                            <button
                              type="button"
                              v-bind="props"
                              class="card-header-menu border-none d-inline-block border-radius"
                            >
                              Today
                            </button>
                          </template>
                          <v-list class="menu-content">
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              Today
                            </button>
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              Delete
                            </button>
                          </v-list>
                        </v-menu>
                      </div>

                      <ul class="ps-0 mb-0 list-unstyled">
                        <li class="border-bottom pb-2 mb-2 border-body-bg">
                          <span class="fw-medium">Gender:</span>
                          All
                        </li>
                        <li class="border-bottom pb-2 mb-2 border-body-bg">
                          <span class="fw-medium">Age Range:</span>
                          18-60
                        </li>
                        <li class="border-bottom pb-2 mb-2 border-body-bg">
                          <span class="fw-medium">Location:</span>
                          Canada, USA
                        </li>
                        <li>
                          <span class="fw-medium">Media:</span>Facebook,
                          Instagram
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card border p-4 bg-border-color rounded-3 mb-4">
                      <div
                        class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
                      >
                        <h4 class="fs-18 mb-0">Uploaded Files</h4>

                        <v-menu>
                          <template v-slot:activator="{ props }">
                            <button
                              type="button"
                              v-bind="props"
                              class="card-header-menu border-none d-inline-block border-radius"
                            >
                              Today
                            </button>
                          </template>
                          <v-list class="menu-content">
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              Today
                            </button>
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="bg-transparent border-none"
                            >
                              Delete
                            </button>
                          </v-list>
                        </v-menu>
                      </div>

                      <div
                        class="d-flex flex-wrap ga-2 justify-content-between align-items-center border-bottom border-body-bg pb-4 mb-4"
                      >
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <v-img
                              src="@/assets/images/pdf.png"
                              style="width: 35px"
                              alt="pdf"
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h4 class="fs-16 mb-0">Campaign Requirements</h4>
                            <p>Increase impression traffic onto the platform</p>
                          </div>
                        </div>

                        <button
                          class="bg-white rounded-circle border-0"
                          style="width: 30px; height: 30px"
                        >
                          <i class="ri-download-2-line text-primary fs-16"></i>
                        </button>
                      </div>
                      <div
                        class="d-flex flex-wrap ga-2 justify-content-between align-items-center border-bottom border-body-bg pb-4 mb-4"
                      >
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <v-img
                              src="@/assets/images/doc.png"
                              style="width: 35px"
                              alt="doc"
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h4 class="fs-16 mb-0">
                              Campaign’s mission and vision
                            </h4>
                            <p>Increase impression traffic onto the platform</p>
                          </div>
                        </div>

                        <button
                          class="bg-white rounded-circle border-0"
                          style="width: 30px; height: 30px"
                        >
                          <i class="ri-download-2-line text-primary fs-16"></i>
                        </button>
                      </div>
                      <div
                        class="d-flex flex-wrap ga-2 justify-content-between align-items-center border-bottom border-body-bg pb-4 mb-4"
                      >
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <v-img
                              src="@/assets/images/xl4.png"
                              style="width: 35px"
                              alt="xl4"
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h4 class="fs-16 mb-0">Campaign Banner</h4>
                            <p>Increase impression traffic onto the platform</p>
                          </div>
                        </div>

                        <button
                          class="bg-white rounded-circle border-0"
                          style="width: 30px; height: 30px"
                        >
                          <i class="ri-download-2-line text-primary fs-16"></i>
                        </button>
                      </div>
                      <div
                        class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <v-img
                              src="@/assets/images/jpg.png"
                              style="width: 35px"
                              alt="pdf"
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h4 class="fs-16 mb-0">Campaign Image</h4>
                            <p>Increase impression traffic onto the platform</p>
                          </div>
                        </div>

                        <button
                          class="bg-white rounded-circle border-0"
                          style="width: 30px; height: 30px"
                        >
                          <i class="ri-download-2-line text-primary fs-16"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation buttons -->
            <div
              class="buttons d-flex justify-content-between m-auto"
              style="max-width: 625px"
            >
              <button
                @click="prevTab"
                class="btn btn-secondary"
                :disabled="activeTab === 'campaignDetails'"
              >
                <i class="ri-arrow-left-line text-white"></i> Back
              </button>
              <button
                @click="nextTab"
                class="btn btn-primary"
                :disabled="activeTab === 'viewCampaign'"
              >
                Continue <i class="ri-arrow-right-line text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import AvatarPreview from "./AvatarPreview.vue";
import feather from "feather-icons";

export default defineComponent({
  name: "AddCampaigns",
  components: {
    AvatarPreview,
  },
  setup() {
    const activeTab = ref("campaignDetails");
    const minAge = ref(10);
    const maxAge = ref(100);
    const minBudget = ref(1000);
    const maxBudget = ref(5000);
    const uploadedFiles = ref<{ name: string; url: string }[]>([]);

    function updateRange() {
      if (minAge.value > maxAge.value) {
        [minAge.value, maxAge.value] = [maxAge.value, minAge.value];
      }
    }
    function updateBudget() {
      if (minBudget.value > maxBudget.value) {
        [minBudget.value, maxBudget.value] = [maxBudget.value, minBudget.value];
      }
    }
    watch([minAge, maxAge, minBudget, maxBudget], () => {
      updateRange();
      updateBudget();
    });

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    const prevTab = () => {
      if (activeTab.value === "creativeUploads") {
        activeTab.value = "campaignDetails";
      }
      if (activeTab.value === "audiences") {
        activeTab.value = "creativeUploads";
      }
      if (activeTab.value === "budgetEstimates") {
        activeTab.value = "audiences";
      }
      if (activeTab.value === "completed") {
        activeTab.value = "budgetEstimates";
      }
      if (activeTab.value === "viewCampaign") {
        activeTab.value = "completed";
      }
    };

    const nextTab = () => {
      if (activeTab.value === "completed") {
        activeTab.value = "viewCampaign";
      }
      if (activeTab.value === "budgetEstimates") {
        activeTab.value = "completed";
      }
      if (activeTab.value === "audiences") {
        activeTab.value = "budgetEstimates";
      }
      if (activeTab.value === "creativeUploads") {
        activeTab.value = "audiences";
      }
      if (activeTab.value === "campaignDetails") {
        activeTab.value = "creativeUploads";
      }
    };

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

    onMounted(() => {
      feather.replace();
    });

    return {
      activeTab,
      uploadedFiles,
      handleFileUpload,
      setActiveTab,
      prevTab,
      nextTab,
      minAge,
      maxAge,
      updateRange,
      minBudget,
      maxBudget,
      updateBudget,
    };
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

  i {
    top: 50%;
    left: 8px;
    font-size: 22px;
    position: absolute;
    transform: translateY(-50%);
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
.create-dialog-box {
  height: 100%;
}
.tab-contents {
  input {
    width: 100%;
  }
  &::before {
    display: none;
  }
}
.create-dialog-box {
  height: 100%;
  overflow-y: scroll;
}
.create-campaigns-tabs {
  max-width: 960px;
  margin: 40px auto;

  .tab {
    button {
      position: relative;
      padding: 0;
      padding-bottom: 5px;
      letter-spacing: 2px;
      font-size: 12px !important;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background-color: var(--primaryColor);
        transition: var(--transition);
      }
    }
    &.active {
      button {
        color: var(--primaryColor) !important;
        &::before {
          width: 100%;
          right: auto;
          left: 0;
        }
      }
    }
  }
}
.custom-radio {
  width: 100%;
  position: relative;
  cursor: pointer;
  input {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: #e2e4e7;
    width: 20px;
    height: 20px;
    margin-top: 2px;
    &:focus {
      box-shadow: none;
    }
  }
  .radio-content {
    border: 2px dashed #e2e4e7;
    border-radius: 10px;
    position: relative;
    padding: 18px;
    padding-left: 55px;
  }
  &.style-two {
    input[type="radio"] {
      left: 0;
      width: 30px;
      height: 30px;
      margin-top: -9px;
      &:checked + .radio-content:after {
        left: 0;
        width: 30px;
        height: 30px;
      }
      &:checked + .radio-content {
        border: none;
        background-color: transparent;
      }
    }
    .radio-content {
      padding: 0;
      border: none;
      padding-left: 45px;
    }
  }
}
.tab-content-wrap {
  margin-bottom: 50px;
  .tab-contents {
    &.active {
      display: block;
    }
    &.back-none {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: -88px;
        left: -560px;
        right: 0;
        margin: auto;
        width: 625px;
        height: 50px;
        background-color: #f6f7f9;
      }
    }
  }
}
.form-control {
  background-color: #ffffff;
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
.cursor {
  cursor: pointer;
  input#upload-files {
    opacity: 0;
  }
}
.card-header-menu {
  border-radius: 7px !important;
  color: var(--bodyColor);
  padding: 0 20px 0 0 !important;
  min-width: auto;
  height: auto;
  position: relative;
  &:before {
    top: 50%;
    right: 0;
    content: "\ea4e";
    position: absolute;
    transform: translateY(-50%);
    font-size: 18px;
    font-family: remixicon;
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
.mb-3 {
  margin-bottom: 1rem !important;
}
.p-4 {
  padding: 1.5rem !important;
}
@media (min-width: 768px) {
  .p-md-5 {
    padding: 3rem !important;
  }
}
@media only screen and (max-width: 767px) {
  .create-campaigns-tabs {
    margin-bottom: 25px;
  }
}
@media (min-width: 992px) {
  .p-lg-5 {
    padding: 3rem !important;
  }
}
</style>
