<template>
  <div class="position-relative" ref="datePickerContainer">
    <input
      type="text"
      class="form-control bg-body-bg position-relative border"
      style="width: 216px; height: 30px; padding-left: 35px"
      :placeholder="formattedDateRange"
      @focus="toggleDatePicker"
    />
    <i
      class="ri-calendar-line position-absolute top-50 start-0 translate-middle-y ps-3 fs-15"
    ></i>
    <div :class="['date-picker', { active: isDatePickerActive }]" @click.stop>
      <DatePicker v-model="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import { format } from "date-fns";
import {
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  defineComponent,
} from "vue";

import DatePicker from "@/components/Common/DatePicker.vue";

export default defineComponent({
  name: "DateRangePicker",
  components: {
    DatePicker,
  },
  setup() {
    // Reactive state for the selected date range
    const selected = ref<{ start: Date | null; end: Date | null }>({
      start: new Date(),
      end: new Date(),
    });

    // Computed property for formatted date range
    const formattedDateRange = computed(() => {
      const { start, end } = selected.value;
      if (!start || !end) {
        return "Select a date range";
      }
      return `${format(start, "dd/MM/yyyy")} - ${format(end, "dd/MM/yyyy")}`;
    });

    // Reactive state for toggling the date picker visibility
    const isDatePickerActive = ref(false);
    const datePickerContainer = ref<HTMLElement | null>(null);

    // Show the date picker
    const toggleDatePicker = () => {
      isDatePickerActive.value = true;
    };

    // Close the date picker
    const closeDatePicker = () => {
      isDatePickerActive.value = false;
    };

    // Handle clicks outside the date picker
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        datePickerContainer.value &&
        !datePickerContainer.value.contains(target)
      ) {
        closeDatePicker();
      }
    };

    // Add and remove event listeners
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      selected,
      formattedDateRange,
      isDatePickerActive,
      datePickerContainer,
      toggleDatePicker,
    };
  },
});
</script>

<style lang="scss">
.date-picker {
  display: none;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 10;

  &.active {
    display: block;
  }
}
.form-control {
  background-color: rgb(246 247 249) !important;
  color: #3a4252 !important;
  font-size: 15px;
  padding: 14px 16px;
  transition: all ease 0.5s;
  border-radius: 7px;
}
</style>
