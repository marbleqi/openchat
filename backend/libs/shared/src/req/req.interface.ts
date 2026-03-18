/**请求日志创建接口 */
export interface ReqCreate {
  /**请求用户ID */
  userId: number;

  /**请求路径 */
  url: string;

  /**控制器 */
  controller: string;

  /**方法名 */
  action: string;

  /**客户端IP */
  clientIp?: string | undefined;

  /**服务端IP */
  serverIp: string;

  /**请求报文（脱敏） */
  request?: any;

  /**状态码 */
  status?: number;

  /**响应报文 */
  result?: any;

  /**请求开始时间 */
  startAt: number;

  /**请求结束时间 */
  endAt?: number;
}

/**请求日志更新接口 */
export interface ReqUpdate {
  /**请求用户ID */
  userId: number;

  /**请求报文（脱敏） */
  request: any;

  /**响应状态码 */
  status: number;

  /**响应报文 */
  result: any;

  /**请求结束时间 */
  endAt: number;
}
