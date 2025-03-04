<template>
  <div class="row">
    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">New York</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-5.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$18,000</h5>
          <span
            class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
          >
            Sale
          </span>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="ms-1 text-body">35 Prince Consort Road</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">6 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">5 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">1800 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user1.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Harold Cook</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">London</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-6.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$220,000</h5>
          <span
            class="text-primary bg-primary bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
          >
            Rent
          </span>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="ms-1 text-body">58 Gateway Road Portland</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">8 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">6 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">2000 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user2.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Debra Sisk</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">France</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-7.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$350,000</h5>
          <span
            class="text-danger bg-danger bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
          >
            Sold
          </span>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="ms-1 text-body">18 Chemin Challet</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">6 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">5 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">1800 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user3.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Harold Cook</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">Australia</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-9.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$158,000</h5>
          <span
            class="text-primary bg-primary bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
          >
            Rent
          </span>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="ms-1 text-body">51 Decca Road GUNN</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">8 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">8 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">2000 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user5.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Steven Bryant</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">Italy</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-10.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$99,000</h5>
          <span
            class="text-danger bg-danger bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
            >Sold</span
          >
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary"
            >location_on</span
          >
          <span class="ms-1 text-body">35 Vicolo Tre Marchetti</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger"
                >bed</span
              >
              <span class="ms-2 text-body">6 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">5 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">1500 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user6.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Jannie James</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">Germany</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-11.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$110,000</h5>
          <span
            class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
          >
            Sale
          </span>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="ms-1 text-body">Ansbacher Strasse 44</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">10 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">10 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">2500 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user7.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Larry Greenberg</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">Poland</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-12.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$150,500</h5>
          <span
            class="text-primary bg-primary bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
            >Rent</span
          >
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary"
            >location_on</span
          >
          <span class="ms-1 text-body">Czerwonych Beretów 124</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">6 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger"
                >bathtub</span
              >
              <span class="ms-2 text-body">5 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">1800 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user8.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Kara Spangler</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">Norway</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-13.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$120,000</h5>
          <span
            class="text-primary bg-primary bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
          >
            Rent
          </span>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="ms-1 text-body">Moeneveien 228 VARTEIG</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">5 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">5 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger"
                >square_foot</span
              >
              <span class="ms-2 text-body">1400 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user9.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Benjamin Dinh</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">Netherland</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-14.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$190,000</h5>
          <span
            class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
          >
            Sale
          </span>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="ms-1 text-body">Overburgkade 23</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">6 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">6 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">1900 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user10.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Jane Wright</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">Spain</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-15.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$155,000</h5>
          <span
            class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
          >
            Sale
          </span>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="ms-1 text-body">Paseo Junquera, 98</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">6 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">5 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">1800 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user11.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Kirk Jensen</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">Hungary</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-16.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$340,000</h5>
          <span
            class="text-danger bg-danger bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
            >Sold</span
          >
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary"
            >location_on</span
          >
          <span class="ms-1 text-body">8985 Becsvölgye Nyár utca</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger"
                >bed</span
              >
              <span class="ms-2 text-body">10 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger"
                >bathtub</span
              >
              <span class="ms-2 text-body">10 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger"
                >square_foot</span
              >
              <span class="ms-2 text-body">2500 sqft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user12.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Harold Cook</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div
        class="card border-0 rounded-3 bg-white property-list-hover mb-4 p-4"
      >
        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center mb-4"
        >
          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none"
          >
            <h5 class="mb-0">Potugal</h5>
          </RouterLink>

          <div class="action">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  type="button"
                  v-bind="props"
                  class="dot-menu p-0 d-inline-block border-radius-0"
                >
                  <i class="ri-more-fill"></i>
                </button>
              </template>
              <v-list class="card-header-menu menu-content">
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Delete</button>
              </v-list>
            </v-menu>
          </div>
        </div>

        <RouterLink
          to="/real-estate/property-overview"
          class="text-decoration-none d-block mb-4"
        >
          <v-img
            src="@/assets/images/property-8.png"
            class="rounded-2"
            alt="property"
          />
        </RouterLink>

        <div class="d-flex justify-content-between mb-3">
          <h5 class="mb-0 text-danger">$250,000</h5>
          <span
            class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
          >
            Sale
          </span>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="ms-1 text-body">Largo Prazeres 32</span>
        </div>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4 border-top border-bottom py-2 mb-4"
        >
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bed
              </span>
              <span class="ms-2 text-body">6 Bed</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                bathtub
              </span>
              <span class="ms-2 text-body">5 Bath</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-18 text-danger">
                square_foot
              </span>
              <span class="ms-2 text-body">1800 qft</span>
            </div>
          </li>
        </ul>

        <div
          class="d-flex flex-wrap ga-2 justify-content-between align-items-center"
        >
          <RouterLink
            to="/real-estate/agent-overview"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <v-img
                src="@/assets/images/users/user4.jpg"
                style="width: 40px; height: 40px"
                class="rounded-circle border border-white"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-0 fs-16 fw-semibold">Judith Brooks</h6>
              <span class="fs-13 text-body">Owner</span>
            </div>
          </RouterLink>
          <RouterLink
            to="/real-estate/property-overview"
            class="text-primary fs-15 text-decoration-none read"
          >
            View More
          </RouterLink>
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
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "PropertyList",
  components: {
    Pagination,
  },
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>

<style lang="scss" scoped>
.p-4 {
  padding: 1.5rem !important;
}
.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.ga-2 {
  gap: 0.5rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.action {
  .dot-menu {
    height: 21.59px;
    min-width: auto;
    margin-right: -2px;
    i {
      line-height: 21.59px;
      color: var(--bodyColor);
      font-size: 26px;
    }
  }
}
.bg-primary {
  background-color: rgb(96 93 255 / 10%) !important;
}
.text-primary {
  color: var(--primaryColor) !important;
}
.bg-success {
  background-color: rgb(55 216 10 / 10%) !important;
}
.text-success {
  color: rgb(55 216 10) !important;
}
.bg-danger {
  background-color: rgb(253 88 18 / 10%) !important;
}
.text-danger {
  color: rgb(253 88 18) !important;
}
@media (min-width: 768px) {
  .ga-md-4 {
    gap: 1.5rem !important;
  }
}
</style>
