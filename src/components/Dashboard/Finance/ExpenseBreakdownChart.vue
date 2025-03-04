<template>
  <v-card
    class="expense-breakdown-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Expense Breakdown</h5>
    </div>
    <div style="margin: -70px 0 0 0">
      <div
        ref="expenseBreakdown"
        style="width: 376px; height: 345px"
        class="mx-auto"
      ></div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "ExpenseBreakdownChart",
  setup() {
    const expenseBreakdown = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      if (expenseBreakdown.value) {
        const chartInstance = echarts.init(expenseBreakdown.value);

        const options = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            bottom: "0",
            left: "center",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              fontSize: 12,
              color: "#64748B",
            },
          },
          color: ["#AD63F6", "#BF85FB", "#D7B5FD", "#E9D5FF"],
          series: [
            {
              name: "Expense Breakdown",
              type: "pie",
              radius: "50%",
              data: [
                { value: 1048, name: "Marketing" },
                { value: 735, name: "Sales" },
                { value: 580, name: "Salaries" },
                { value: 484, name: "Miscellaneous" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };

        chartInstance.setOption(options);
      }
    });

    return {
      expenseBreakdown,
    };
  },
});
</script>
