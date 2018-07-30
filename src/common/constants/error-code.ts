export enum ErrorCode {
  /**
   * 错误格式是   [主模块]_[业务关键字]_[xxx]_ERROR（全部大写）
   * 号码为四位   [A-Z](XXX) 第一位为业务模块不重复即可
   * 实例
   */
  //
  /***************************************************************************	AUTH Module */
  /**
   * 用户找不到
   */
  AUTH_MEMBER_NOT_FOUND_ERROR = 'A001',

  /**
   * 用户和密码错误
   */
  AUTH_ACCOUNT_OR_PASSWORD_NOT_RIGHT_ERROR = 'A002',

  /**
   * 用户密码找回Token找回发送邮件超量
   */
  AUTH_MEMBER_SEND_FORGET_PASSWORD_TOKEN_LIMIT_ERROR = 'A003',

  /**
   * 用户激活码过期
   */
  AUTH_USER_ACTIVATION_CODE_EXPRIED_ERROR = 'A2002',

  /**
   * 用户密码错误
   */
  AUTH_MEMBER_PASSWORD_INCORRECT = 'A004',

  /**
   * 用户通过Email找回密码时发出的Token 不存在
   */
  AUTH_MEMBER_FORGET_PASSWORD_TOKEN_ERROR = 'A005',

  /**
   * 用户通过Email找回密码时发出的Token 过期
   */
  AUTH_MEMBER_FORGET_PASSWORD_TOKEN_EXPRIED_ERROR = 'A006',

  /**
   * 用户激活码错误
   */
  AUTH_MEMBER_ACTIVATION_CODE_ERROR = 'A007',

  /**
   * 用户不能再次激活
   */
  AUTH_MEMBER_ACTIVATED_ERROR = 'A008',
  /***************************************************************************	Member Module */
  /**
   * 用户已经存在
   */
  MEMBER_ALREADY_EXIST = 'B001',

  /**
   * 用户不存在
   */
  MEMBER_NOT_EXIST = 'B002',

  /**
   * 用户未激活
   */
  MEMBER_UNACTIVATED_ERROR = 'B003',
}
