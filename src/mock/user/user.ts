import Mock from 'mockjs'

Mock.mock('/mock/login', 'get', {
  message: 'success',
  data: 'token ' + new Date().getTime()
})
