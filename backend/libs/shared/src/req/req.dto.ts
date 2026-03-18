/**查询日志DTO */
export class ReqDto {
  /**用户ID */
  userId: number;

  /**请求路径 */
  url: string;

  /**控制器 */
  controller: string;

  /**方法名 */
  action: string;

  /**客户端IP */
  status!: number;

  /**服务端IP */
  serverIp: string;

  /**请求开始时间 */
  startAt: number;

  /**请求结束时间 */
  endAt: number;
}
