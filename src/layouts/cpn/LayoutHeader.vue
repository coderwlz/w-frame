<template>
  <a-layout-header>
    <a-row type="flex" justify="space-between">
      <!-- Header Breadcrumbs & Title Column -->
      <a-col :span="24" :md="6" class="layout-breadcrumb">
        <!-- Header Breadcrumbs -->
        <a-breadcrumb>
          <a-breadcrumb-item><router-link to="/"> Pages</router-link></a-breadcrumb-item>
          <a-breadcrumb-item>{{ $route.name }}</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- / Header Breadcrumbs -->

        <!-- Header Page Title -->
        <div class="ant-page-header-heading">
          <span class="ant-page-header-heading-title">{{ $route.name }}</span>
        </div>
        <!-- / Header Page Title -->
      </a-col>
      <!-- / Header Breadcrumbs & Title Column -->

      <!-- Header Control Column -->
      <a-col :span="24" :md="18" class="header-control">
        <!-- Header Control Buttons -->
        <a-dropdown :trigger="['click']" overlayClassName="header-notifications-dropdown">
          <a-badge count="4">
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z"
                  fill="#111827"
                />
                <path
                  d="M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z"
                  fill="#111827"
                />
              </svg>
            </a>
          </a-badge>
        </a-dropdown>

        <a-button type="link" class="switch" ref="secondarySidebarTriggerBtn" @click="changeLang">
          <svg
            t="1677726119940"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2000"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="200"
            height="200"
          >
            <path
              d="M231 653m-155 0a155 155 0 1 0 310 0 155 155 0 1 0-310 0Z"
              fill="currentColor"
              p-id="2001"
            ></path>
            <path
              d="M914.089 623.023H781.52v-34.898c0-19.28-15.614-34.899-34.89-34.899-19.265 0-34.89 15.618-34.89 34.899v34.898H579.195c-19.276 0-34.89 8.636-34.89 27.917v167.488c0 19.28 15.614 41.87 34.89 41.87h132.568v62.804c0 19.28 15.614 34.898 34.89 34.898s34.89-15.618 34.89-34.898v-62.805H914.11c19.265 0 34.89-22.6 34.89-41.869v-167.5c-0.021-19.269-15.635-27.905-34.911-27.905zM711.75 790.512h-97.678v-97.703h97.678v97.703z m167.448 0H781.52v-97.703H879.2v97.703zM530.849 145.939c8.784 0.204 207.362 7.272 237.925 189.938l-10.428-6.96c-18.341-12.245-43.19-7.283-55.422 11.085-12.242 18.367-7.28 43.19 11.083 55.435L788.8 445.31a0.762 0.762 0 0 1 0.15 0.107l0.473 0.312c0.247 0.16 0.505 0.268 0.752 0.419a38.46 38.46 0 0 0 3.833 2.159c0.612 0.3 1.225 0.558 1.847 0.827 1.02 0.44 2.062 0.838 3.115 1.181 0.72 0.237 1.439 0.473 2.18 0.677 1.041 0.28 2.094 0.494 3.146 0.687 0.687 0.13 1.375 0.29 2.073 0.376 1.578 0.215 3.178 0.323 4.778 0.344 0.14 0 0.28 0.032 0.408 0.032h0.086c0.14 0 0.269-0.032 0.408-0.032 1.6-0.021 3.2-0.129 4.779-0.344 0.687-0.086 1.364-0.247 2.051-0.376a40.956 40.956 0 0 0 3.179-0.698c0.72-0.193 1.439-0.43 2.147-0.666a40.895 40.895 0 0 0 3.136-1.192c0.612-0.268 1.224-0.526 1.836-0.816a39.973 39.973 0 0 0 3.845-2.17c0.247-0.15 0.505-0.258 0.752-0.419l0.472-0.311a0.762 0.762 0 0 0 0.15-0.108l76.814-51.225c18.363-12.245 23.335-37.068 11.082-55.436-12.242-18.367-37.048-23.362-55.422-11.085l-16.935 11.3C824.84 129 632.898 68.43 532.781 66.014c-21.595-0.57-40.388 16.928-40.924 39.001-0.527 22.073 16.934 40.398 38.991 40.924zM273.357 675.172l13.616 9.076a39.738 39.738 0 0 0 22.133 6.714c12.918 0 25.59-6.252 33.29-17.799 12.241-18.367 7.28-43.19-11.083-55.435l-75.417-50.291a39.351 39.351 0 0 0-7.088-3.76c-0.72-0.29-1.46-0.408-2.18-0.655-1.729-0.59-3.447-1.192-5.24-1.546-1.02-0.204-2.051-0.194-3.072-0.312-1.546-0.182-3.092-0.43-4.65-0.419-0.794 0-1.567 0.161-2.351 0.215-1.793 0.107-3.576 0.193-5.359 0.548-0.633 0.129-1.235 0.397-1.868 0.548-1.858 0.462-3.716 0.923-5.51 1.665a38.998 38.998 0 0 0-6.958 3.705c-0.007 0.007-25.837 17.23-77.49 51.666-18.363 12.245-23.335 37.068-11.082 55.435 7.7 11.558 20.371 17.799 33.29 17.799 7.613 0 15.324-2.17 22.132-6.714l14.53-9.688c21.745 215.287 216.694 277.124 317.863 279.563 22.615 0.01 40.399-17.262 40.925-39.002 0.526-22.073-16.924-40.398-38.992-40.935-8.945-0.215-214.826-7.551-239.44-200.378zM147.963 455.277c1.653 0.204 3.286 0.505 4.993 0.505h223.986c22.068 0 39.97-17.895 39.97-39.98 0-22.083-17.89-39.978-39.97-39.978H182.938v-59.969h194.015c22.068 0 39.97-17.895 39.97-39.979s-17.891-39.979-39.97-39.979H182.938V175.93h194.015c22.068 0 39.97-17.895 39.97-39.98 0-22.083-17.891-39.978-39.97-39.978H152.956c-1.707 0-3.34 0.29-4.993 0.505-1.654-0.204-3.286-0.505-4.994-0.505C120.901 95.97 103 113.866 103 135.95v279.842c0 22.073 17.89 39.979 39.97 39.979 1.707 0 3.339-0.29 4.993-0.494z"
              fill="currentColor"
              p-id="2002"
            ></path>
          </svg>
        </a-button>
        <a-button
          type="link"
          class="sidebar-toggler"
          @click="$emit('toggleSidebar', !sidebarCollapsed)"
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </a-button>
        <a-popover>
          <template #content>
            <Sketch v-model="colors" @changButton="changSketchButton"></Sketch>
          </template>
          <div class="frame-color"></div>
        </a-popover>
        <router-link to="/" class="btn-sign-in">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
              fill="#111827"
            />
          </svg>
          <span>Sign In</span>
        </router-link>
        <!-- / Header Control Buttons -->

        <!-- Header Search Input -->
        <!-- <a-input-search class="header-search" placeholder="Type here…">
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
              fill="#111827"
            />
          </svg>
        </a-input-search> -->
        <!-- / Header Search Input -->
      </a-col>
      <!-- / Header Control Column -->
    </a-row>
  </a-layout-header>
</template>
<script setup>
import { Sketch } from '@ans1998/vue3-color'
import { ref } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const colors = ref('')
const changSketchButton = (item) => {
  if (item.isOk) {
    ConfigProvider.config({
      theme: {
        primaryColor: item.activeColor
      }
    })
  } else {
    console.log('取消')
  }
}

const default_lang = ref(localStorage.getItem('default_lang') || 'en-US')
// 切换语言
const changeLang = () => {
  default_lang.value = default_lang.value == 'en-US' ? 'zh-US' : 'en-US'
  localStorage.setItem('default_lang', default_lang.value)
  locale.value = default_lang.value
}

defineProps({
  sidebarCollapsed: {
    type: Boolean,
    default: false
  }
})
</script>
