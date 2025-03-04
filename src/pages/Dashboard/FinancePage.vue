<template>
  <v-row>
    <v-col lg="3" sm="6">
      <TotalIncome />
    </v-col>
    <v-col lg="3" sm="6">
      <TotalExpenses />
    </v-col>
    <v-col lg="3" sm="6">
      <AccountsReceivable />
    </v-col>
    <v-col lg="3" sm="6">
      <AccountPayable />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <StaticChart />
    </v-col>
    <v-col lg="4">
      <v-row>
        <v-col lg="12" sm="6">
          <CashEndOfTheMonthChart />
        </v-col>
        <v-col lg="12" sm="6">
          <WeeklyExpensesChart />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="4">
      <v-row>
        <v-col lg="12" sm="6">
          <IncomeSourceChart />
        </v-col>
        <v-col lg="12" sm="6">
          <NetProfitChart />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="8">
      <TransactionHistory />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8" md="7">
      <DebitCard />
    </v-col>
    <v-col lg="4" md="5">
      <ExpenseBreakdownChart />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalIncome from "../../components/Dashboard/Finance/TotalIncome.vue";
import TotalExpenses from "../../components/Dashboard/Finance/TotalExpenses.vue";
import AccountsReceivable from "../../components/Dashboard/Finance/AccountsReceivable.vue";
import AccountPayable from "../../components/Dashboard/Finance/AccountPayable.vue";
import StaticChart from "../../components/Dashboard/Finance/StaticChart.vue";
import CashEndOfTheMonthChart from "../../components/Dashboard/Finance/CashEndOfTheMonthChart.vue";
import WeeklyExpensesChart from "../../components/Dashboard/Finance/WeeklyExpensesChart.vue";
import IncomeSourceChart from "../../components/Dashboard/Finance/IncomeSourceChart.vue";
import NetProfitChart from "../../components/Dashboard/Finance/NetProfitChart.vue";
import TransactionHistory from "../../components/Dashboard/Finance/TransactionHistory.vue";
import DebitCard from "../../components/Dashboard/Finance/DebitCard.vue";
import ExpenseBreakdownChart from "../../components/Dashboard/Finance/ExpenseBreakdownChart.vue";

export default defineComponent({
  name: "FinancePage",
  components: {
    TotalIncome,
    TotalExpenses,
    AccountsReceivable,
    AccountPayable,
    StaticChart,
    CashEndOfTheMonthChart,
    WeeklyExpensesChart,
    IncomeSourceChart,
    NetProfitChart,
    TransactionHistory,
    DebitCard,
    ExpenseBreakdownChart,
  },
});
</script>
