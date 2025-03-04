<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 rounded-3 bg-white mb-4">
        <div class="p-4">
          <h5 class="mb-3">About Johnson</h5>
          <p>
            With over a decade of experience in the real estate market, John
            Smith has built a reputation for his in-depth knowledge of
            residential and commercial properties. His commitment to client
            satisfaction, combined with an extensive network, ensures a smooth
            and efficient process, whether buying or selling.
          </p>
          <p class="mb-md-5 mb-4">
            John’s approach focuses on understanding each client’s unique needs
            and goals, providing tailored advice and insights. His market
            expertise and negotiation skills consistently deliver the best
            outcomes, helping clients make informed real estate decisions.
          </p>

          <h5 class="mb-3">Property Status</h5>
          <PropertyStatus />

          <h5 class="mb-3">Specialization</h5>
          <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Expert in City A and surrounding neighborhoods
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Proficient in handling first-time homebuyers, seasoned
                investors, and luxury clients
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Strong understanding of local market trends and pricing
                strategies
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Provides comprehensive property assessments and personalized
                marketing plans
              </span>
            </li>
          </ul>

          <h5 class="mb-3">Recent Achievements</h5>
          <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Closed over $10 million in sales in 2023</span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Top Agent Award at Prime Realty for 3 consecutive years
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Successfully negotiated deals for 20+ residential and commercial
                properties in the past year
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">5-star client satisfaction rating</span>
            </li>
          </ul>

          <ClientTestimonials />
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <Profile />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PropertyStatus from "./PropertyStatus/index.vue";
import ClientTestimonials from "./ClientTestimonials.vue";
import Profile from "./Profile.vue";

export default defineComponent({
  name: "AgentOverview",
  components: {
    PropertyStatus,
    ClientTestimonials,
    Profile,
  },
});
</script>

<style lang="scss" scoped>
ul {
  li {
    span {
      color: var(--bodyColor);
    }
  }
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
@media (min-width: 768px) {
  .mb-md-5 {
    margin-bottom: 3rem !important;
  }
}
</style>
