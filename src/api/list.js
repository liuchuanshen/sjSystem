import http from '@/utils/http'

export const list = (data) => http.get(`/list?page=${data.page}`);