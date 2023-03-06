import { createI18n } from 'vue-i18n'

import zh from './zh'
import en from './en'

// 默认语言 -
const default_lang = localStorage.getItem('default_lang') || 'en-US'
console.log(zh, en)

const i18n = createI18n({
  legacy: false,
  locale: default_lang,
  messages: {
    'zh-US': zh,
    'en-US': en
  }
})

export default i18n //对外暴露 i18n, 在 main.js 中挂载
