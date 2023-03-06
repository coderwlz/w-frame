<template>
  <!-- Authors Table Card -->
  <a-card :bordered="false" class="header-solid h-full" :bodyStyle="{ padding: 0 }">
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h5 class="font-semibold m-0">Authors Table</h5>
        </a-col>
        <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <a-radio-group v-model:value="authorsHeaderBtns" size="small">
            <a-radio-button value="all">ALL</a-radio-button>
            <a-radio-button value="online">ONLINE</a-radio-button>
          </a-radio-group>
        </a-col>
      </a-row>
    </template>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'author'">
          <div class="table-avatar-info">
            <a-avatar shape="square" :src="record.author.avatar" />
            <div class="avatar-info">
              <h6>{{ record.author.name }}</h6>
              <p>{{ record.author.email }}</p>
            </div>
          </div>
        </template>
        <template v-if="column.dataIndex === 'func'">
          <div class="author-info">
            <h6 class="m-0">{{ record.func.job }}</h6>
            <p class="m-0 font-regular text-muted">{{ record.func.department }}</p>
          </div>
        </template>
        <template v-if="column.dataIndex === 'status'">
          <a-tag class="tag-status" :class="record.status ? 'ant-tag-primary' : 'ant-tag-muted'">
            {{ record.status ? 'ONLINE' : 'OFFLINE' }}
          </a-tag>
        </template>
        <template v-if="column.dataIndex === 'editBtn'">
          <a-button type="link" :data-id="record.row.key" class="btn-edit"> Edit </a-button>
        </template>
      </template>
    </a-table>
  </a-card>
  <!-- / Authors Table Card -->
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // Active button for the "Authors" table's card header radio button group.
      authorsHeaderBtns: 'all'
    }
  }
}
</script>
