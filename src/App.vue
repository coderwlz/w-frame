<script setup lang="ts">
import { RouterView } from 'vue-router'
import { login } from '@/services'
import { ConfigProvider } from 'ant-design-vue'

const init = async () => {
  let res = await login()
  console.log(res)
}
init()

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864'
  }
})
</script>

<template>
  <a-config-provider>
    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
