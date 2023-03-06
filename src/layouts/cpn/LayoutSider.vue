<template>
  <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    :trigger="null"
    width="250px"
    collapsible
    :collapsed="sidebarCollapsed"
    @collapse="$emit('toggleSidebar', !sidebarCollapsed)"
    class="sider-primary"
  >
    <div class="logo"><img src="../../assets/img/frame.svg" alt="" /> Vue3 Frame</div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="clickItem">
      <a-menu-item key="/dashboard" class="item">
        <div class="icon">
          <user-outlined />
        </div>
        <span class="nav-text">Dashboard</span>
      </a-menu-item>
      <a-menu-item key="/tables" class="item">
        <div class="icon">
          <video-camera-outlined />
        </div>
        <span class="nav-text">Tables</span>
      </a-menu-item>
      <a-menu-item key="/billing" class="item">
        <div class="icon">
          <upload-outlined />
        </div>
        <span class="nav-text">Billing</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script setup>
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const selectedKeys = ref([route.path])

const clickItem = ({ key }) => {
  router.push(key)
}

defineProps({
  sidebarCollapsed: {
    type: Boolean,
    default: false
  }
})
</script>
<style></style>
