/**   
 * api接口统一管理
 */
import { get,post } from './http'

export const apiArticle = urlId => get(urlId, {}); //文章
export const apiTabs = p => get('/api/tTabs/show', p); //页签
export const apiModule = urlId => get(urlId, {}); //板块
export const apiArticleList = p => get('/api/article/show/list', p); //文章列表

export const generaList= p => get('/api/generalType/show', p); //职业、病史列表

export const planMain = urlId => get(urlId, {}); //方案查询

export const smsSend= p => post('/api/sms/send', p); //短信接口
export const sendMit= p => post('/api/customer/register', p); //提交问卷

