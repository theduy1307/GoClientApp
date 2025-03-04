<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 rounded-3 bg-white p-4 mb-4">
        <div class="position-relative mb-4">
          <v-img src="@/assets/images/property-5.png" alt="property" />
          <span
            class="text-white bg-success d-inline-block fs-12 px-2 rounded-2 position-absolute top-0 end-0 mt-3 me-3"
          >
            Sale
          </span>
        </div>

        <h5 class="mb-3 text-danger">$250,000</h5>

        <div class="d-flex align-items-center mb-3">
          <span class="material-symbols-outlined fs-20 text-primary">
            location_on
          </span>
          <span class="text-body ms-1">Largo Prazeres 32</span>
        </div>

        <div
          class="border-top border-bottom py-2 mb-4 d-flex justify-content-between align-items-center ga-2 mb-4"
        >
          <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap ga-2 ga-md-4">
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  bed
                </span>
                <span class="ms-2">6 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  bathtub
                </span>
                <span class="ms-2">5 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  square_foot
                </span>
                <span class="ms-2">1800 qft</span>
              </div>
            </li>
          </ul>

          <div class="d-flex align-items-center">
            <div class="d-flex ga-1">
              <i class="ri-star-line text-danger"></i>
              <i class="ri-star-line text-danger"></i>
              <i class="ri-star-line text-danger"></i>
              <i class="ri-star-line text-danger"></i>
              <i class="ri-star-line text-danger"></i>
            </div>
            <span class="text-body ms-2">4.9(Review)</span>
          </div>
        </div>

        <h5 class="mb-3">Description</h5>
        <p>
          This stunning 4-bedroom, 3-bathroom residence offers 2,000 square feet
          of modern living space in a quiet, family-friendly neighborhood. Built
          in 2010, the home features a spacious layout with a bright and airy
          living room, perfect for relaxation or entertaining guests. The
          beautifully updated kitchen includes granite countertops and stainless
          steel appliances, ideal for home cooking.
        </p>
        <p class="mb-md-5 mb-4">
          The master suite boasts an en-suite bathroom and plenty of closet
          space, while the additional bedrooms are perfect for family or guests.
          Step outside to your private backyard, complete with a deck for
          outdoor dining and a well-maintained garden area.
        </p>

        <h5 class="mb-3">Features</h5>
        <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>Spacious living room with natural light</span>
          </li>
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>Modern kitchen with granite countertops</span>
          </li>
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>Master bedroom with en-suite bathroom</span>
          </li>
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>Private backyard with deck</span>
          </li>
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>2-car garage</span>
          </li>
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>Central heating and air conditioning</span>
          </li>
        </ul>

        <h5 class="mb-3">Neighborhood</h5>
        <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span> Located in a quiet residential area with nearby parks </span>
          </li>
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>
              Close to schools, shopping centers, and public transportation
            </span>
          </li>
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>Safe and family-friendly community</span>
          </li>
        </ul>

        <h5 class="mb-3">Location</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622236789!2d-74.30932477148002!3d40.69701929469058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1730886027412!5m2!1sen!2sbd"
          class="d-block w-100 rounded-3 mb-md-5 mb-4"
          style="height: 250px"
        ></iframe>

        <h5 class="mb-3">Recent Renovations</h5>
        <ul class="ps-0 mb-0 list-unstyled">
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>New roof installed in 2023</span>
          </li>
          <li class="mb-2 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span> Fresh paint throughout the interior in 2024 </span>
          </li>
          <li class="mb-0 d-flex align-items-center ga-2">
            <span
              class="d-inline-block rounded-circle"
              style="width: 7px; height: 7px; background-color: #605dff"
            ></span>
            <span>Updated appliances in the kitchen</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="col-lg-4">
      <Profile />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Profile from "./Profile/index.vue";

export default defineComponent({
  name: "PropertyOverview",
  components: {
    Profile,
  },
});
</script>

<style lang="scss" scoped>
.bg-success {
  background-color: var(--successColor) !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.ms-1 {
  margin-left: 0.25rem !important;
}
.ms-2 {
  margin-left: 0.5rem !important;
}
.p-4 {
  padding: 1.5rem !important;
}
.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.list-unstyled {
  list-style: none;
}
ul {
  li {
    span {
      color: var(--bodyColor);
    }
  }
}
iframe.d-block.w-100.rounded-3.mb-md-5.mb-4 {
  border: none;
}
.ga-2 {
  gap: 0.5rem !important;
}
@media (min-width: 768px) {
  .ga-md-4 {
    gap: 1.5rem !important;
  }
}
</style>
