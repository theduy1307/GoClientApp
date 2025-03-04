<template>
  <div class="row">
    <div class="col-lg-8 col-xxl-9">
      <div class="card border-0 bg-white p-4 mb-4">
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <h3 class="mb-0 fs-18">Live Auction</h3>

          <ul
            class="nav nav-tabs live-auction ga-2 ga-md-4 border-0 bg-transparent"
          >
            <li class="nav-item">
              <button
                class="nav-link fs-12 fw-medium text-body bg-transparent border-0"
                :class="['tab', { active: activeTab === 'allItems' }]"
                @click="setActiveTab('allItems')"
              >
                ALL ITEMS (12)
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link fs-12 fw-medium text-body bg-transparent border-0"
                :class="['tab', { active: activeTab === 'upToFifteen' }]"
                @click="setActiveTab('upToFifteen')"
              >
                UP TO 15%(05)
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link fs-12 fw-medium text-body bg-transparent border-0"
                :class="['tab', { active: activeTab === 'upToThirteen' }]"
                @click="setActiveTab('upToThirteen')"
              >
                UP TO 30%(07)
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link fs-12 fw-medium text-body bg-transparent border-0"
                :class="['tab', { active: activeTab === 'upToFifty' }]"
                @click="setActiveTab('upToFifty')"
              >
                UP TO 50%(05)
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content">
        <div class="tab-pane" v-show="activeTab === 'allItems'">
          <div class="row justify-content-center">
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-10.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35246</span>
                      <h4 class="fw-semibold fs-14 mb-0">Christmas Eve</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1">
                        Highest Bid:
                        <span class="fw-semibold"> 9.75 ETH </span>
                      </span>
                      <h4 class="fw-semibold fs-14 mb-0">5.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold">
                      9.2
                      <span class="text-body">/10</span>
                    </span>
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-11.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="January 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35247</span>
                      <h4 class="fw-semibold fs-14 mb-0">Humming Bird</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">10.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.5<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-12.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35228</span>
                      <h4 class="fw-semibold fs-14 mb-0">Naughty Pool</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">8.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">9.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 70%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-14.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35248</span>
                      <h4 class="fw-semibold fs-14 mb-0">Pixel Watermmelon</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">1.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">3.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-3.gif"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35258</span>
                      <h4 class="fw-semibold fs-14 mb-0">BDancing Cookies</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">10.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-15.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35158</span>
                      <h4 class="fw-semibold fs-14 mb-0">Rotating Flower</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">3.95 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">6.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold">
                      9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 75%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <Pagination items="6" total="30" class="border-0 pb-0" />
            </div>
          </div>
        </div>
        <div class="tab-pane" v-show="activeTab === 'upToFifteen'">
          <div class="row justify-content-center">
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-14.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35248</span>
                      <h4 class="fw-semibold fs-14 mb-0">Pixel Watermmelon</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">1.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">3.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-3.gif"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35258</span>
                      <h4 class="fw-semibold fs-14 mb-0">BDancing Cookies</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">10.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-15.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35158</span>
                      <h4 class="fw-semibold fs-14 mb-0">Rotating Flower</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">3.95 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">6.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 75%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-10.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35246</span>
                      <h4 class="fw-semibold fs-14 mb-0">Christmas Eve</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">9.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">5.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.2<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-11.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="January 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35247</span>
                      <h4 class="fw-semibold fs-14 mb-0">Humming Bird</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">10.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.5<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-12.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35228</span>
                      <h4 class="fw-semibold fs-14 mb-0">Naughty Pool</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">8.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">9.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 70%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <Pagination items="6" total="30" class="border-0 pb-0" />
            </div>
          </div>
        </div>
        <div class="tab-pane" v-show="activeTab === 'upToThirteen'">
          <div class="row justify-content-center">
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-10.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35246</span>
                      <h4 class="fw-semibold fs-14 mb-0">Christmas Eve</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">9.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">5.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.2<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-11.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="January 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35247</span>
                      <h4 class="fw-semibold fs-14 mb-0">Humming Bird</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">10.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.5<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-12.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35228</span>
                      <h4 class="fw-semibold fs-14 mb-0">Naughty Pool</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">8.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">9.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 70%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-14.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35248</span>
                      <h4 class="fw-semibold fs-14 mb-0">Pixel Watermmelon</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">1.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">3.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-3.gif"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35258</span>
                      <h4 class="fw-semibold fs-14 mb-0">BDancing Cookies</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">10.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-15.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35158</span>
                      <h4 class="fw-semibold fs-14 mb-0">Rotating Flower</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">3.95 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">6.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 75%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <Pagination items="6" total="30" class="border-0 pb-0" />
            </div>
          </div>
        </div>
        <div class="tab-pane" v-show="activeTab === 'upToFifty'">
          <div class="row justify-content-center">
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-14.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35248</span>
                      <h4 class="fw-semibold fs-14 mb-0">Pixel Watermmelon</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">1.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">3.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-3.gif"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35258</span>
                      <h4 class="fw-semibold fs-14 mb-0">BDancing Cookies</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">10.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-15.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35158</span>
                      <h4 class="fw-semibold fs-14 mb-0">Rotating Flower</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">3.95 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">6.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.7<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 75%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-10.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="December 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-76.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35246</span>
                      <h4 class="fw-semibold fs-14 mb-0">Christmas Eve</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">9.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">5.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.2<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 50%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-11.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="January 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-77.gif"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35247</span>
                      <h4 class="fw-semibold fs-14 mb-0">Humming Bird</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1"
                        >Highest Bid:
                        <span class="fw-semibold">10.75 ETH</span></span
                      >
                      <h4 class="fw-semibold fs-14 mb-0">12.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold"
                      >9.5<span class="text-body">/10</span></span
                    >
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 60%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-sm-6">
              <div
                class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4"
              >
                <RouterLink
                  to="/nft-marketplace/nft-details"
                  class="d-block mb-3 text-decoration-none position-relative"
                >
                  <v-img
                    src="@/assets/images/nft-12.png"
                    class="rounded-3"
                    alt="nft"
                  />

                  <span class="place-bid-btn position-absolute">
                    Place Bid
                  </span>
                  <CountdownTimer endDate="February 14, 2026 21:14:01" />
                </RouterLink>

                <div
                  class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                >
                  <RouterLink
                    to="/nft-marketplace/creator-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-shrink-0">
                      <v-img
                        src="@/assets/images/user-85.png"
                        class="rounded-circle"
                        style="width: 27px; height: 27px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <span class="fs-12">NFT ID: 35228</span>
                      <h4 class="fw-semibold fs-14 mb-0">Naughty Pool</h4>
                    </div>
                  </RouterLink>
                  <v-img
                    src="@/assets/images/verify.svg"
                    class="cursor"
                    alt="verify"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Verified"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4 pb-2"
                >
                  <RouterLink
                    to="/nft-marketplace/nft-details"
                    class="d-flex align-items-center text-decoration-none"
                  >
                    <div class="flex-grow-1">
                      <span class="fs-12 d-block mb-1">
                        Highest Bid:
                        <span class="fw-semibold"> 8.75 ETH </span>
                      </span>
                      <h4 class="fw-semibold fs-14 mb-0">9.50 ETH</h4>
                    </div>
                  </RouterLink>
                  <button class="bg-transparent p-0 border-0">
                    <i
                      class="ri-heart-fill fs-20 position-relative top-2"
                      style="color: #ee3e08"
                    ></i>
                    <span class="fs-12 fw-semibold">
                      9.7<span class="text-body">/10</span>
                    </span>
                  </button>
                </div>

                <div
                  class="progress rounded-0 mb-2"
                  style="height: 4px"
                  role="progressbar"
                  aria-label="Primary example"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar bg-primary rounded-0"
                    style="width: 70%; height: 4px"
                  ></div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-body fs-12">Sold: 130</span>
                  <span class="text-body fs-12">Available: 123</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <Pagination items="6" total="30" class="border-0 pb-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-xxl-3">
      <NewMobileApp />

      <HistoryOfBids />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NewMobileApp from "./NewMobileApp.vue";
import HistoryOfBids from "./HistoryOfBids.vue";
import CountdownTimer from "./CountdownTimer.vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "LiveAuction",
  components: {
    NewMobileApp,
    HistoryOfBids,
    CountdownTimer,
    Pagination,
  },
  setup() {
    const activeTab = ref("allItems");

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
.p-4 {
  padding: 1.5rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.place-bid {
  .place-bid-btn {
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    padding: 0.5rem 1.5rem;
    border-radius: 7px;
    display: inline-block;
    color: var(--whiteColor);
    border: 1px solid var(--primaryColor);
    background-color: var(--primaryColor);
    opacity: 0 !important;
  }
  &:hover {
    .place-bid-btn {
      opacity: 1 !important;
    }
  }
  .progress {
    display: flex;
    background-color: #e9ecef !important;

    .bg-primary {
      background-color: rgb(96 93 255) !important;
    }
  }
}
@media (min-width: 768px) {
  .ga-md-4 {
    gap: 1.5rem !important;
  }
}
</style>
