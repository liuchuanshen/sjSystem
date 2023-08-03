import http from '@/utils/http'

export const list = (data) => http.get(`/list?${data}`);

export const getStockIssue = (data) => http.get(`/getStockIssue?code=${data}`);

export const getDailyHis = (data) => http.get(`/getDailyHis?code=${data}`);

export const getTencent = (data) => http.get(`/getTencent?code=${data}`);

