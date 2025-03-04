<template>
  <v-card
    class="campaigns-card trezo-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Campaigns</h5>
      <AddCampaigns />
    </div>

    <ul
      class="nav nav-tabs bg-transparent border-bottom ga-3 ga-sm-10 pb-4"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <button
          class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
          :class="['tab', { active: activeTab === 'all' }]"
          @click="setActiveTab('all')"
        >
          ALL (05)
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
          :class="['tab', { active: activeTab === 'pending' }]"
          @click="setActiveTab('pending')"
        >
          PENDING(05)
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body"
          :class="['tab', { active: activeTab === 'completed' }]"
          @click="setActiveTab('completed')"
        >
          COMPLETED(07)
        </button>
      </li>
    </ul>

    <div class="tab-content">
      <div
        class="default-table-area style-two campaigns-table"
        v-show="activeTab === 'all'"
      >
        <div class="table-responsive">
          <table
            class="table align-middle border-0"
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <tbody>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-danger ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                    <span class="fs-12">From 10 Oct - 15 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img
                      src="@/assets/images/instagram2.svg"
                      alt="instagram"
                    />
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                    <v-img src="@/assets/images/linkedin2.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                  >
                    Live Now
                  </span>
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user16.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user17.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user18.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user19.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink
                        to="/users/users-list"
                        class="wh-34 lh-34 rounded-circle d-block text-center text-decoration-none text-white fs-12 fw-medium border border-color-white"
                        style="background-color: #3a4252"
                        >+3</RouterLink
                      >
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-danger ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">Teacher’s Day</h4>
                    <span class="fs-12">From 08 Oct - 12 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img
                      src="@/assets/images/instagram2.svg"
                      alt="instagram"
                    />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                    >Reviewing</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user25.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user26.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user27.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-primary ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">ThanksGiving</h4>
                    <span class="fs-12">From 01 Oct - 05 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                    <v-img src="@/assets/images/linkedin2.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-primary bg-opacity-10 rounded-2 text-primary"
                    >Paused</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user25.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user28.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div
                    class="border-start border-2 border-primary-div ps-3 py-1"
                  >
                    <h4 class="fs-14 fw-semibold mb-1">Team Gateway</h4>
                    <span class="fs-12">From 05 Oct - 17 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                    >Live Now</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user30.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user31.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user32.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-success ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">Halloween</h4>
                    <span class="fs-12">From 20 Oct - 31 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img
                      src="@/assets/images/instagram2.svg"
                      alt="instagram"
                    />
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                    <v-img src="@/assets/images/linkedin2.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                    >Reviewing</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user16.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user17.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user18.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="default-table-area style-two campaigns-table"
        v-show="activeTab === 'pending'"
      >
        <div class="table-responsive">
          <table
            class="table align-middle border-0"
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <tbody>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-primary ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">ThanksGiving</h4>
                    <span class="fs-12">From 01 Oct - 05 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                    <v-img src="@/assets/images/linkedin2.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                    >Reviewing</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user25.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user28.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div
                    class="border-start border-2 border-primary-div ps-3 py-1"
                  >
                    <h4 class="fs-14 fw-semibold mb-1">Team Gateway</h4>
                    <span class="fs-12">From 05 Oct - 17 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                    >Reviewing</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user30.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user31.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user32.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-success ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">Halloween</h4>
                    <span class="fs-12">From 20 Oct - 31 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img
                      src="@/assets/images/instagram2.svg"
                      alt="instagram"
                    />
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                    <v-img src="@/assets/images/linkedin2.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                    >Reviewing</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user16.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user17.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user18.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-danger ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                    <span class="fs-12">From 10 Oct - 15 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img
                      src="@/assets/images/instagram2.svg"
                      alt="instagram"
                    />
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                    <v-img src="@/assets/images/linkedin2.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                    >Reviewing</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user16.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user17.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user18.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user19.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink
                        to="/users/users-list"
                        class="wh-34 lh-34 rounded-circle d-block text-center text-decoration-none text-white fs-12 fw-medium border border-color-white"
                        style="background-color: #3a4252"
                        >+3</RouterLink
                      >
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-danger ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">Teacher’s Day</h4>
                    <span class="fs-12">From 08 Oct - 12 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img
                      src="@/assets/images/instagram2.svg"
                      alt="instagram"
                    />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
                    >Reviewing</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user25.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user26.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user27.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="default-table-area style-two campaigns-table"
        v-show="activeTab === 'completed'"
      >
        <div class="table-responsive">
          <table
            class="table align-middle border-0"
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <tbody>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-danger ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                    <span class="fs-12">From 10 Oct - 15 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img
                      src="@/assets/images/instagram2.svg"
                      alt="instagram"
                    />
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                    <v-img src="@/assets/images/linkedin2.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                    >Live Now</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user16.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user17.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user18.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user19.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink
                        to="/users/users-list"
                        class="wh-34 lh-34 rounded-circle d-block text-center text-decoration-none text-white fs-12 fw-medium border border-color-white"
                        style="background-color: #3a4252"
                        >+3</RouterLink
                      >
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-danger ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">Teacher’s Day</h4>
                    <span class="fs-12">From 08 Oct - 12 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img
                      src="@/assets/images/instagram2.svg"
                      alt="instagram"
                    />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                    >Live Now</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user25.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user26.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user27.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-primary ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">ThanksGiving</h4>
                    <span class="fs-12">From 01 Oct - 05 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                    <v-img src="@/assets/images/linkedin2.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                    >Live Now</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user25.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user28.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div
                    class="border-start border-2 border-primary-div ps-3 py-1"
                  >
                    <h4 class="fs-14 fw-semibold mb-1">Team Gateway</h4>
                    <span class="fs-12">From 05 Oct - 17 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                    >Live Now</span
                  >
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user30.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user31.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user32.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <td class="border-bottom">
                  <div class="border-start border-2 border-success ps-3 py-1">
                    <h4 class="fs-14 fw-semibold mb-1">Halloween</h4>
                    <span class="fs-12">From 20 Oct - 31 Oct, 24</span>
                  </div>
                </td>
                <td class="border-bottom">
                  <div class="d-flex ga-4 ga-xl-3 ga-xxl-4 flex-wrap">
                    <v-img src="@/assets/images/facebook4.svg" alt="facebook" />
                    <v-img
                      src="@/assets/images/instagram2.svg"
                      alt="instagram"
                    />
                    <v-img src="@/assets/images/google3.svg" alt="facebook" />
                    <v-img src="@/assets/images/linkedin2.svg" alt="facebook" />
                  </div>
                </td>
                <td class="border-bottom">
                  <span
                    class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
                  >
                    Live Now
                  </span>
                </td>
                <td class="border-bottom">
                  <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                    <li>
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user16.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user17.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                    <li class="ms-m-15">
                      <RouterLink to="/my-profile">
                        <v-img
                          src="@/assets/images/users/user18.jpg"
                          class="wh-34 lh-34 rounded-circle border border-color-white"
                          alt="user"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </td>
                <td class="border-bottom">
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                    style="
                      background-color: #eceef2;
                      width: 30px;
                      height: 30px;
                      line-height: 30px;
                    "
                  >
                    <i class="ri-arrow-right-line"></i>
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AddCampaigns from "./AddCampaigns.vue";

export default defineComponent({
  name: "CampaignsContent",
  components: {
    AddCampaigns,
  },
  setup() {
    const activeTab = ref("all");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-tabs {
  .nav-item {
    .nav-link {
      &.active {
        color: #4936f5 !important;
      }
    }
  }
}
.bg-danger {
  background-color: rgba(253 88 18 / 10%) !important;
}
.bg-success {
  background-color: rgba(55 216 10 / 10%) !important;
}
.bg-primary {
  background-color: rgba(96 93 255 / 10%) !important;
}
</style>
