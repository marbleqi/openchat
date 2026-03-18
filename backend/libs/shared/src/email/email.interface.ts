/**邮件 */
export interface Email {
  /**发件人（显示名称可自定义） */
  from: string;

  /**收件人邮箱 */
  to: string;

  /**邮件主题 */
  subject: string;

  /**HTML内容 */
  html: string;
}
