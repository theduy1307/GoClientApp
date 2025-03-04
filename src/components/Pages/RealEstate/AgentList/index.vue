<template>
  <div class="row justify-content-center">
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-1.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Sarah Johnson</h4>
            <span class="text-primary">sarah@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(123) 456-7890</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">74 Grim Avenue San Diego</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-2.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Pauline Knott</h4>
            <span class="text-primary">pauline@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(987) 654-3210</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">9 Paul Wayne Haggerty Road</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-3.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">James Combs</h4>
            <span class="text-primary">sarah@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(555) 258-1598</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">61 Ottis Street Oklahoma City</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-4.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Margaret Wade</h4>
            <span class="text-primary">margaret@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(431) 335-2321</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">69 Leverton Cove Road Springfield</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-5.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Mike Harris</h4>
            <span class="text-primary">harris@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(605) 823-8868</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">30 Hartway Street Mclaughlin</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-6.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Emily Jones</h4>
            <span class="text-primary">emily@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(617) 756-9911</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">1654 Valley View Drive Brighton</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-7.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Trent Heiser</h4>
            <span class="text-primary">heiser@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(507) 646-1869</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">46 Trymore Road Northfield</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-8.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Amiee Brown</h4>
            <span class="text-primary">brown@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(602) 525-5444</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">79 Hall Street Las Vegas</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-9.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Edward Lebouef</h4>
            <span class="text-primary">lebouef@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(337) 456-7858</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">05 Sherwood Circle Lafayette</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-10.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Marilyn Kelly</h4>
            <span class="text-primary">marilyn@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(864) 933-2339</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">46 Brown Avenue Anderson</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-11.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Gary Manes</h4>
            <span class="text-primary">manes@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(603) 258-7598</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">75 Wildrose Lane Southfield</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="bg-body pe-3 pb-3 bg-for-dark-mode">
              <v-img
                src="@/assets/images/agent-12.png"
                style="width: 71px; height: 71px"
                class="rounded-3"
                alt="agent"
              />
            </div>
          </div>
          <div class="flex-grow-1 p-20 pb-0">
            <h4 class="mb-1 fs-14 fw-medium">Francis Berg</h4>
            <span class="text-primary">francis@email.com</span>
          </div>
        </div>
        <div class="p-4">
          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-2 pb-1">
              <span>Phone:</span>
              <span class="text-body">(651) 778-2290</span>
            </li>
            <li class="mb-0">
              <span>Location:</span>
              <span class="text-body">93 Park Boulevard Ottumwa</span>
            </li>
          </ul>
          <ul class="ps-0 mb-4 list-unstyled d-flex flex-wrap ga-3">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #3a559f;
                "
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #03a9f4;
                "
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="d-inline-block text-center rounded-circle text-decoration-none text-white"
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  background-color: #007ab9;
                "
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <RouterLink
              to="/apps/chat"
              class="btn btn-primary py-2 px-3 fw-medium"
            >
              Message
            </RouterLink>
            <RouterLink
              to="/real-estate/agent-overview"
              class="btn btn-outline-primary py-2 px-3 fw-medium ms-3"
            >
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-12">
      <div class="card border-0 bg-white p-4 rounded-3">
        <Pagination total="30" items="12" class="p-0 border-0" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "AgentList",
  components: {
    Pagination,
  },
});
</script>

<style lang="scss" scoped>
.bg-body {
  background-color: rgb(246 247 249) !important;
}
.text-primary {
  color: var(--primaryColor) !important;
}
span.text-body {
  margin-left: 3px;
}
.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
.pb-1 {
  padding-bottom: 0.25rem !important;
}
.mb-2 {
  margin-bottom: 0.5rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.btn {
  color: var(--whiteColor);
  border: 1px solid #605dff;
  border-radius: 7px;

  &.btn-primary {
    background-color: #605dff !important;
  }
  &.btn-outline-primary {
    color: #605dff !important;
  }
}
</style>
