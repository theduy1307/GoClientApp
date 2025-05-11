<template>
  <v-card class="contacts-card trezo-card border-radius d-block bg-white border-0 shadow-none">
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input type="text" class="input-search d-block" placeholder="Search contact here....." v-model="searchTerm" />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button type="button" v-bind="props" class="card-header-menu d-inline-block border-radius">All</button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">All</button>
          <button type="button" class="bg-transparent border-none">Active</button>
          <button type="button" class="bg-transparent border-none">Deactive</button>
        </v-list>
      </v-menu>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th class="text-start">Đợt tuyển dụng</th>
              <th class="text-start">Chứng chỉ yêu cầu</th>
              <th class="text-start">Mô tả công việc</th>
              <th class="text-start">Thời hạn</th>
              <th class="text-start">Người tạo</th>
              <th class="text-start">Ngày tạo</th>
              <th class="text-start">Ngày cập nhật gần nhất</th>
              <th class="text-start">Người cập nhật</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in recruitments" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ 'TOEIC, AWS' }}</td>
              <td class="text-body">{{ 'Mô tả công việc' }}</td>
              <td class="text-body">{{ '31/03/2025' }}</td>
              <td class="text-body">{{ 'Trần Thế Duy' }}</td>
              <td class="text-body">{{ '22/03/2025' }}</td>
              <td class="text-body">{{ '' }}</td>
              <td class="text-body">{{ '' }}</td>
            </tr>
          </tbody>
        </v-table>
        <!-- <PaginationTwo items="8" /> -->
        <v-pagination :length="6"></v-pagination>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Recruitment } from '@/infrastructure/entities/Recruitment'
import { recruitmentApi } from '@/infrastructure/apis/recruitmentApi'
const params = ref({ pageSize: 10, pageIndex: 1 })
const recruitments = ref<Recruitment[]>([])
const fetchData = async () => {
  const response = await recruitmentApi().getRecruitmentPaging(params.value.pageIndex, params.value.pageSize)
  recruitments.value = [...response.data.value.items]
  console.log(response.data.value.items)
}
onMounted(() => {
  fetchData()
})
const searchTerm = ref('')
</script>

<style lang="scss" scoped>
.contacts-card {
  padding-bottom: 8px !important;
  .trezo-table-content {
    .trezo-table {
      margin-left: -25px;
      margin-right: -25px;
      table {
        thead {
          tr {
            th {
              background-color: #ecf0ff !important;
              padding: {
                top: 13px;
                bottom: 13px;
              }
              &:first-child {
                border-top-left-radius: 0 !important;
                padding: {
                  left: 25px !important;
                  right: 0;
                }
              }
              &:last-child {
                border-top-right-radius: 0 !important;
                padding-right: 25px;
              }
              .v-checkbox.v-input {
                margin: -27px -33px -30px -7px;
              }
              .v-input__details {
                display: none !important;
              }
              .v-selection-control__input {
                width: 0 !important;
                height: 0 !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              padding: {
                top: 17px !important;
                bottom: 17px !important;
              }
              &:first-child {
                border-left-width: 0 !important;
                padding: {
                  left: 25px !important;
                  right: 0;
                }
              }
              &:last-child {
                padding-right: 25px;
                border-right-width: 0 !important;
              }
              .v-checkbox.v-input {
                margin: -10px -32px -13px -10px;
              }
              .v-input__details {
                display: none !important;
              }
              .v-selection-control__input {
                width: 0 !important;
                height: 0 !important;
              }
            }
            &:last-child {
              td {
                border-bottom-width: 0 !important;
              }
            }
            &:first-child {
              td {
                border-top-width: 0 !important;
              }
            }
          }
        }
      }
      .pagination-content {
        margin-top: 0;
        padding: 15px 20px;
        border-radius: 0 0 7px 7px;
        color: var(--blackColor) !important;
        background-color: transparent !important;
        border-top: 1px solid #eceef2;
      }
    }
  }
}
</style>
