/**腾讯云请求参数 */
export interface Config {
  /**密钥ID */
  id: number;
  /**服务地址 */
  host: string;
  /**对象 */
  service: string;
  /**地域 */
  region: string;
  /**API名称 */
  action: string;
  /**API版本 */
  version: string;
  /**请求参数 */
  params?: object;
}
