import http from '@/utils/http'

// https://ig507.com/home.html
const licence = '44E2170B-744D-87B3-DA49-972AA4E99A72'

// 股票列表
export const list = () => http.get(`https://ig507.com/data/base/gplist?licence=${licence}`);

//上市公司详情
export const detailInfo = (data) => http.get(`https://ig507.com/data/time/f10/info/${data}?licence=${licence}`);
