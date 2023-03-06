import Request from '../request'

export function login() {
  return Request.get({
    url: '/mock/login'
  })
}
