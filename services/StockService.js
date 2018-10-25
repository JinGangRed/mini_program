import { URL } from '../configs/index.js';
const api = require('../utils/common-api.js');
class StockService{
  /**
   * 股票中心
   */
  stockCenter(stockType,success,fail){
    api.Get(URL.stock_center_url + `/${stockType}`,success,fail);
  }
}
module.exports = new StockService();