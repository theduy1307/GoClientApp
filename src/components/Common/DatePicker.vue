<template>
  <VCalendarDatePicker
    v-if="isDatePickerRangeObject(date)"
    v-model.range="date"
    v-bind="{ ...attrs, ...$attrs }"
    @dayclick="onDayClick"
  />
  <VCalendarDatePicker
    v-else
    v-model="date"
    v-bind="{ ...attrs, ...$attrs }"
    @dayclick="onDayClick"
  />
</template>

<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
import {
  computed,
  defineProps,
  defineEmits,
  reactive,
  watch,
  PropType,
} from "vue";
import type {
  DatePickerDate,
  DatePickerRangeObject,
} from "v-calendar/dist/types/src/use/datePicker";

const props = defineProps({
  modelValue: {
    type: [Date, Object] as PropType<
      DatePickerDate | DatePickerRangeObject | null
    >,
    default: null,
  },
});

const emit = defineEmits(["update:model-value", "close"]);

const date = computed({
  get: () => props.modelValue,
  set: (value: unknown) => {
    emit("update:model-value", value);
    emit("close");
  },
});

const attrs = reactive({
  color: "primary",
  "is-dark": false,
  "first-day-of-week": 1,
});

function onDayClick(_: unknown, event: MouseEvent): void {
  const target = event.target as HTMLElement;
  if (target) target.blur();
}

function isDatePickerRangeObject(
  value: DatePickerDate | DatePickerRangeObject | null
): value is DatePickerRangeObject {
  return (
    !!value && typeof value === "object" && "start" in value && "end" in value
  );
}

watch(
  () => props.modelValue,
  (newValue) => {
    console.log("modelValue changed:", newValue);
  }
);
</script>

<style lang="scss">
.vc-primary {
  --vc-accent-50: #e0f7fa;
  --vc-accent-100: #b2ebf2;
  --vc-accent-200: #268bd21a;
  --vc-accent-300: #4dd0e1;
  --vc-accent-400: #26c6da;
  --vc-accent-500: #00bcd4;
  --vc-accent-600: #605dff;
  --vc-accent-700: #0097a7;
  --vc-accent-800: #00838f;
  --vc-accent-900: #006064;
}
.vc-header {
  .vc-title {
    span {
      font-size: 16px;
    }
  }
}
</style>
