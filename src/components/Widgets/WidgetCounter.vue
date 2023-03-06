<template>
  <a-card :bordered="false" class="widget-1">
    <a-statistic
      :title="t(title)"
      :value="value"
      :prefix="prefix"
      :suffix="suffix"
      :precision="0"
      class="text-success"
      :class="'text-' + status"
    >
    </a-statistic>
    <div class="icon" v-html="icon"></div>
  </a-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: Number,
    default: 0
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'success'
  }
})
</script>
