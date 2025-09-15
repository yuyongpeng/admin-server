
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.GenTableScalarFieldEnum = {
  tableId: 'tableId',
  tableName: 'tableName',
  tableComment: 'tableComment',
  subTableName: 'subTableName',
  subTableFkName: 'subTableFkName',
  className: 'className',
  tplCategory: 'tplCategory',
  tplWebType: 'tplWebType',
  packageName: 'packageName',
  moduleName: 'moduleName',
  businessName: 'businessName',
  functionName: 'functionName',
  functionAuthor: 'functionAuthor',
  genType: 'genType',
  genPath: 'genPath',
  options: 'options',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.GenTableColumnScalarFieldEnum = {
  columnId: 'columnId',
  tableId: 'tableId',
  columnName: 'columnName',
  columnComment: 'columnComment',
  columnType: 'columnType',
  javaType: 'javaType',
  javaField: 'javaField',
  isPk: 'isPk',
  isIncrement: 'isIncrement',
  isRequired: 'isRequired',
  isInsert: 'isInsert',
  isEdit: 'isEdit',
  isList: 'isList',
  isQuery: 'isQuery',
  queryType: 'queryType',
  htmlType: 'htmlType',
  dictType: 'dictType',
  sort: 'sort',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime'
};

exports.Prisma.SysConfigScalarFieldEnum = {
  configId: 'configId',
  configName: 'configName',
  configKey: 'configKey',
  configValue: 'configValue',
  configType: 'configType',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysDeptScalarFieldEnum = {
  deptId: 'deptId',
  parentId: 'parentId',
  ancestors: 'ancestors',
  deptName: 'deptName',
  orderNum: 'orderNum',
  leader: 'leader',
  phone: 'phone',
  email: 'email',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime'
};

exports.Prisma.SysDictDataScalarFieldEnum = {
  dictCode: 'dictCode',
  dictSort: 'dictSort',
  dictLabel: 'dictLabel',
  dictValue: 'dictValue',
  dictType: 'dictType',
  cssClass: 'cssClass',
  listClass: 'listClass',
  isDefault: 'isDefault',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysDictTypeScalarFieldEnum = {
  dictId: 'dictId',
  dictName: 'dictName',
  dictType: 'dictType',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysLogininforScalarFieldEnum = {
  infoId: 'infoId',
  userName: 'userName',
  ipaddr: 'ipaddr',
  loginLocation: 'loginLocation',
  browser: 'browser',
  os: 'os',
  status: 'status',
  msg: 'msg',
  loginTime: 'loginTime'
};

exports.Prisma.SysMenuScalarFieldEnum = {
  menuId: 'menuId',
  menuName: 'menuName',
  parentId: 'parentId',
  orderNum: 'orderNum',
  path: 'path',
  component: 'component',
  query: 'query',
  isFrame: 'isFrame',
  isCache: 'isCache',
  menuType: 'menuType',
  visible: 'visible',
  status: 'status',
  perms: 'perms',
  icon: 'icon',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysNoticeScalarFieldEnum = {
  noticeId: 'noticeId',
  noticeTitle: 'noticeTitle',
  noticeType: 'noticeType',
  noticeContent: 'noticeContent',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysPostScalarFieldEnum = {
  postId: 'postId',
  postCode: 'postCode',
  postName: 'postName',
  postSort: 'postSort',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysUserPostScalarFieldEnum = {
  userId: 'userId',
  postId: 'postId'
};

exports.Prisma.SysRoleDeptScalarFieldEnum = {
  roleId: 'roleId',
  deptId: 'deptId'
};

exports.Prisma.SysRoleMenuScalarFieldEnum = {
  roleId: 'roleId',
  menuId: 'menuId'
};

exports.Prisma.SysUserScalarFieldEnum = {
  userId: 'userId',
  deptId: 'deptId',
  userName: 'userName',
  nickName: 'nickName',
  userType: 'userType',
  email: 'email',
  phonenumber: 'phonenumber',
  sex: 'sex',
  avatar: 'avatar',
  password: 'password',
  status: 'status',
  loginIp: 'loginIp',
  loginDate: 'loginDate',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysRoleScalarFieldEnum = {
  roleId: 'roleId',
  roleName: 'roleName',
  roleKey: 'roleKey',
  roleSort: 'roleSort',
  dataScope: 'dataScope',
  menuCheckStrictly: 'menuCheckStrictly',
  deptCheckStrictly: 'deptCheckStrictly',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysUserRoleScalarFieldEnum = {
  userId: 'userId',
  roleId: 'roleId'
};

exports.Prisma.CollectionScalarFieldEnum = {
  id: 'id',
  collection_name: 'collection_name',
  ticket_id: 'ticket_id',
  ticket_type: 'ticket_type',
  chain_type: 'chain_type',
  casting_uid: 'casting_uid',
  casting_name: 'casting_name',
  daop_casting_id: 'daop_casting_id',
  daop_casting_address: 'daop_casting_address',
  owner_uid: 'owner_uid',
  owner_name: 'owner_name',
  daop_user_id: 'daop_user_id',
  daop_user_address: 'daop_user_address',
  license_id: 'license_id',
  shared_uid: 'shared_uid',
  price: 'price',
  trade_time: 'trade_time',
  daop_collection_id: 'daop_collection_id',
  out_ticket_id: 'out_ticket_id',
  token_id: 'token_id',
  collection_hash: 'collection_hash',
  mint_tx_id: 'mint_tx_id',
  mint_chain_status: 'mint_chain_status',
  mint_chain_time: 'mint_chain_time',
  transfer_tx_id: 'transfer_tx_id',
  transfer_chain_status: 'transfer_chain_status',
  transfer_chain_time: 'transfer_chain_time',
  checkeIn_tx_id: 'checkeIn_tx_id',
  checkIn_chain_status: 'checkIn_chain_status',
  checkIn_chain_time: 'checkIn_chain_time',
  credential: 'credential',
  last_credential: 'last_credential',
  sale_status: 'sale_status',
  available_status: 'available_status',
  available_time: 'available_time',
  available_expire_time: 'available_expire_time',
  check_code: 'check_code',
  authorization_id: 'authorization_id',
  authorization_code: 'authorization_code',
  modify_time: 'modify_time',
  create_time: 'create_time',
  dar_status: 'dar_status',
  old_status: 'old_status',
  certificate_url: 'certificate_url',
  block_number: 'block_number',
  sjt_status: 'sjt_status',
  reg_code: 'reg_code',
  asset_number: 'asset_number'
};

exports.Prisma.Init_mobileScalarFieldEnum = {
  id: 'id',
  mobile: 'mobile'
};

exports.Prisma.Platform_tokenScalarFieldEnum = {
  id: 'id',
  platform: 'platform',
  mobile: 'mobile',
  token: 'token',
  expire_in: 'expire_in',
  create_time: 'create_time'
};

exports.Prisma.PublisherScalarFieldEnum = {
  id: 'id',
  publisher_name: 'publisher_name',
  industry: 'industry',
  logo: 'logo'
};

exports.Prisma.TicketScalarFieldEnum = {
  id: 'id',
  ticket_name: 'ticket_name',
  ticket_type: 'ticket_type',
  chain_type: 'chain_type',
  cover_uri: 'cover_uri',
  content_uri: 'content_uri',
  td_files: 'td_files',
  creator_uid: 'creator_uid',
  creator_name: 'creator_name',
  creator_avatar: 'creator_avatar',
  daop_user_id: 'daop_user_id',
  daop_user_address: 'daop_user_address',
  publisher_id: 'publisher_id',
  publisher_name: 'publisher_name',
  publisher_logo: 'publisher_logo',
  amount: 'amount',
  sold_amount: 'sold_amount',
  sku_balance: 'sku_balance',
  price: 'price',
  available_time: 'available_time',
  expire_time: 'expire_time',
  sale_begin_time: 'sale_begin_time',
  sale_end_time: 'sale_end_time',
  description: 'description',
  usage: 'usage',
  sale_status: 'sale_status',
  available_status: 'available_status',
  authorization_id: 'authorization_id',
  authorization_code: 'authorization_code',
  did_credential: 'did_credential',
  copyright_credential: 'copyright_credential',
  authorization_credential: 'authorization_credential',
  chain_txid: 'chain_txid',
  chain_block_number: 'chain_block_number',
  chain_time: 'chain_time',
  chain_status: 'chain_status',
  is_sale: 'is_sale',
  modify_time: 'modify_time',
  create_time: 'create_time',
  registration_id: 'registration_id',
  send_status: 'send_status',
  landing_uri: 'landing_uri',
  download_status: 'download_status',
  origin_uri: 'origin_uri',
  creation_date: 'creation_date',
  start_date: 'start_date'
};

exports.Prisma.Tr_orderScalarFieldEnum = {
  order_id: 'order_id',
  order_no: 'order_no',
  ticket_id: 'ticket_id',
  ticket_did_credential: 'ticket_did_credential',
  ticket_copyright_credential: 'ticket_copyright_credential',
  ticket_authorization_credential: 'ticket_authorization_credential',
  collection_id: 'collection_id',
  collection_name: 'collection_name',
  collection_hash: 'collection_hash',
  collection_credential: 'collection_credential',
  collection_last_credential: 'collection_last_credential',
  collection_token_id: 'collection_token_id',
  daop_collection_id: 'daop_collection_id',
  seller_uid: 'seller_uid',
  seller_daop_user_id: 'seller_daop_user_id',
  seller_daop_user_address: 'seller_daop_user_address',
  seller_mobile: 'seller_mobile',
  buyer_uid: 'buyer_uid',
  buyer_realname: 'buyer_realname',
  buyer_mobile: 'buyer_mobile',
  buyer_nickname: 'buyer_nickname',
  buyer_daop_user_id: 'buyer_daop_user_id',
  buyer_daop_user_address: 'buyer_daop_user_address',
  shared_uid: 'shared_uid',
  price: 'price',
  amount: 'amount',
  check_in: 'check_in',
  pay_channel: 'pay_channel',
  pay_scene: 'pay_scene',
  pay_trade_no: 'pay_trade_no',
  pay_time: 'pay_time',
  pay_status: 'pay_status',
  pay_failed_reason: 'pay_failed_reason',
  transfer_status: 'transfer_status',
  expire_time: 'expire_time',
  expire_time_at: 'expire_time_at',
  status: 'status',
  deleted_at: 'deleted_at',
  modify_time: 'modify_time',
  create_time: 'create_time'
};

exports.Prisma.Tr_pay_notificationScalarFieldEnum = {
  id: 'id',
  pay_channel: 'pay_channel',
  order_no: 'order_no',
  data: 'data',
  modify_time: 'modify_time',
  create_time: 'create_time'
};

exports.Prisma.Tr_transferScalarFieldEnum = {
  id: 'id',
  collection_id: 'collection_id',
  collection_credential: 'collection_credential',
  collection_last_credential: 'collection_last_credential',
  token_id: 'token_id',
  order_id: 'order_id',
  transfer_uid: 'transfer_uid',
  transfer_name: 'transfer_name',
  receiver_uid: 'receiver_uid',
  receiver_name: 'receiver_name',
  receiver_mobile: 'receiver_mobile',
  tx_id: 'tx_id',
  chain_status: 'chain_status',
  chain_time: 'chain_time',
  transfer_type: 'transfer_type',
  modify_time: 'modify_time',
  create_time: 'create_time',
  block_number: 'block_number'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  wx_mini_openid: 'wx_mini_openid',
  union_id: 'union_id',
  mobile: 'mobile',
  country_code: 'country_code',
  full_mobile: 'full_mobile',
  nick_name: 'nick_name',
  avatar: 'avatar',
  description: 'description',
  gendar: 'gendar',
  user_type: 'user_type',
  is_publisher: 'is_publisher',
  id_card_no: 'id_card_no',
  realname: 'realname',
  realname_state: 'realname_state',
  realname_type: 'realname_type',
  realname_time: 'realname_time',
  daop_account_id: 'daop_account_id',
  daop_user_id: 'daop_user_id',
  daop_user_address: 'daop_user_address',
  tags: 'tags',
  available_status: 'available_status',
  create_time: 'create_time',
  modify_time: 'modify_time'
};

exports.Prisma.DeclarexScalarFieldEnum = {
  id: 'id',
  name: 'name',
  content: 'content',
  types: 'types',
  create_by: 'create_by',
  create_time: 'create_time',
  update_by: 'update_by',
  update_time: 'update_time',
  status: 'status',
  remark: 'remark'
};

exports.Prisma.Recommend_imgScalarFieldEnum = {
  id: 'id',
  name: 'name',
  img: 'img',
  link: 'link',
  order: 'order',
  recommend: 'recommend',
  create_by: 'create_by',
  create_time: 'create_time',
  update_by: 'update_by',
  update_time: 'update_time',
  status: 'status',
  remark: 'remark'
};

exports.Prisma.ResourceScalarFieldEnum = {
  id: 'id',
  ticket_id: 'ticket_id',
  name: 'name',
  resource_url: 'resource_url',
  order: 'order',
  create_by: 'create_by',
  create_time: 'create_time',
  update_by: 'update_by',
  update_time: 'update_time',
  status: 'status',
  remark: 'remark'
};

exports.Prisma.Collection_day_countScalarFieldEnum = {
  t_day: 't_day',
  sum: 'sum'
};

exports.Prisma.Collection_day_ticket_countScalarFieldEnum = {
  id: 'id',
  ticket_name: 'ticket_name',
  ticket_id: 'ticket_id',
  t_day: 't_day',
  sum: 'sum'
};

exports.Prisma.User_day_countScalarFieldEnum = {
  c_day: 'c_day',
  sum: 'sum'
};

exports.Prisma.User_month_countScalarFieldEnum = {
  id: 'id',
  c_year: 'c_year',
  c_month: 'c_month',
  sum: 'sum'
};

exports.Prisma.User_week_countScalarFieldEnum = {
  c_week: 'c_week',
  sum: 'sum'
};

exports.Prisma.Transfer_day_countScalarFieldEnum = {
  t_day: 't_day',
  sum: 'sum'
};

exports.Prisma.Transfer_day_ticket_countScalarFieldEnum = {
  id: 'id',
  ticket_name: 'ticket_name',
  ticket_id: 'ticket_id',
  t_day: 't_day',
  sum: 'sum'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.GenTableOrderByRelevanceFieldEnum = {
  tableName: 'tableName',
  tableComment: 'tableComment',
  subTableName: 'subTableName',
  subTableFkName: 'subTableFkName',
  className: 'className',
  tplCategory: 'tplCategory',
  tplWebType: 'tplWebType',
  packageName: 'packageName',
  moduleName: 'moduleName',
  businessName: 'businessName',
  functionName: 'functionName',
  functionAuthor: 'functionAuthor',
  genType: 'genType',
  genPath: 'genPath',
  options: 'options',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.GenTableColumnOrderByRelevanceFieldEnum = {
  columnName: 'columnName',
  columnComment: 'columnComment',
  columnType: 'columnType',
  javaType: 'javaType',
  javaField: 'javaField',
  isPk: 'isPk',
  isIncrement: 'isIncrement',
  isRequired: 'isRequired',
  isInsert: 'isInsert',
  isEdit: 'isEdit',
  isList: 'isList',
  isQuery: 'isQuery',
  queryType: 'queryType',
  htmlType: 'htmlType',
  dictType: 'dictType',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime'
};

exports.Prisma.SysConfigOrderByRelevanceFieldEnum = {
  configName: 'configName',
  configKey: 'configKey',
  configValue: 'configValue',
  configType: 'configType',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysDeptOrderByRelevanceFieldEnum = {
  ancestors: 'ancestors',
  deptName: 'deptName',
  leader: 'leader',
  phone: 'phone',
  email: 'email',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime'
};

exports.Prisma.SysDictDataOrderByRelevanceFieldEnum = {
  dictLabel: 'dictLabel',
  dictValue: 'dictValue',
  dictType: 'dictType',
  cssClass: 'cssClass',
  listClass: 'listClass',
  isDefault: 'isDefault',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysDictTypeOrderByRelevanceFieldEnum = {
  dictName: 'dictName',
  dictType: 'dictType',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysLogininforOrderByRelevanceFieldEnum = {
  userName: 'userName',
  ipaddr: 'ipaddr',
  loginLocation: 'loginLocation',
  browser: 'browser',
  os: 'os',
  status: 'status',
  msg: 'msg',
  loginTime: 'loginTime'
};

exports.Prisma.SysMenuOrderByRelevanceFieldEnum = {
  menuName: 'menuName',
  path: 'path',
  component: 'component',
  query: 'query',
  menuType: 'menuType',
  visible: 'visible',
  status: 'status',
  perms: 'perms',
  icon: 'icon',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysNoticeOrderByRelevanceFieldEnum = {
  noticeTitle: 'noticeTitle',
  noticeType: 'noticeType',
  noticeContent: 'noticeContent',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysPostOrderByRelevanceFieldEnum = {
  postCode: 'postCode',
  postName: 'postName',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysUserOrderByRelevanceFieldEnum = {
  userName: 'userName',
  nickName: 'nickName',
  userType: 'userType',
  email: 'email',
  phonenumber: 'phonenumber',
  sex: 'sex',
  avatar: 'avatar',
  password: 'password',
  status: 'status',
  loginIp: 'loginIp',
  loginDate: 'loginDate',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysRoleOrderByRelevanceFieldEnum = {
  roleName: 'roleName',
  roleKey: 'roleKey',
  dataScope: 'dataScope',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.collectionOrderByRelevanceFieldEnum = {
  collection_name: 'collection_name',
  casting_name: 'casting_name',
  daop_casting_address: 'daop_casting_address',
  owner_name: 'owner_name',
  daop_user_address: 'daop_user_address',
  token_id: 'token_id',
  collection_hash: 'collection_hash',
  mint_tx_id: 'mint_tx_id',
  transfer_tx_id: 'transfer_tx_id',
  checkeIn_tx_id: 'checkeIn_tx_id',
  credential: 'credential',
  last_credential: 'last_credential',
  check_code: 'check_code',
  authorization_code: 'authorization_code',
  certificate_url: 'certificate_url',
  reg_code: 'reg_code',
  asset_number: 'asset_number'
};

exports.Prisma.init_mobileOrderByRelevanceFieldEnum = {
  mobile: 'mobile'
};

exports.Prisma.platform_tokenOrderByRelevanceFieldEnum = {
  platform: 'platform',
  mobile: 'mobile',
  token: 'token'
};

exports.Prisma.publisherOrderByRelevanceFieldEnum = {
  publisher_name: 'publisher_name',
  industry: 'industry',
  logo: 'logo'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.ticketOrderByRelevanceFieldEnum = {
  ticket_name: 'ticket_name',
  cover_uri: 'cover_uri',
  content_uri: 'content_uri',
  creator_name: 'creator_name',
  creator_avatar: 'creator_avatar',
  daop_user_address: 'daop_user_address',
  publisher_name: 'publisher_name',
  publisher_logo: 'publisher_logo',
  description: 'description',
  usage: 'usage',
  authorization_code: 'authorization_code',
  did_credential: 'did_credential',
  copyright_credential: 'copyright_credential',
  authorization_credential: 'authorization_credential',
  chain_txid: 'chain_txid',
  landing_uri: 'landing_uri',
  origin_uri: 'origin_uri'
};

exports.Prisma.tr_orderOrderByRelevanceFieldEnum = {
  order_no: 'order_no',
  ticket_did_credential: 'ticket_did_credential',
  ticket_copyright_credential: 'ticket_copyright_credential',
  ticket_authorization_credential: 'ticket_authorization_credential',
  collection_name: 'collection_name',
  collection_hash: 'collection_hash',
  collection_credential: 'collection_credential',
  collection_last_credential: 'collection_last_credential',
  collection_token_id: 'collection_token_id',
  seller_daop_user_address: 'seller_daop_user_address',
  seller_mobile: 'seller_mobile',
  buyer_realname: 'buyer_realname',
  buyer_mobile: 'buyer_mobile',
  buyer_nickname: 'buyer_nickname',
  buyer_daop_user_address: 'buyer_daop_user_address',
  pay_channel: 'pay_channel',
  pay_scene: 'pay_scene',
  pay_trade_no: 'pay_trade_no',
  pay_failed_reason: 'pay_failed_reason'
};

exports.Prisma.tr_pay_notificationOrderByRelevanceFieldEnum = {
  pay_channel: 'pay_channel',
  order_no: 'order_no'
};

exports.Prisma.tr_transferOrderByRelevanceFieldEnum = {
  collection_credential: 'collection_credential',
  collection_last_credential: 'collection_last_credential',
  token_id: 'token_id',
  transfer_name: 'transfer_name',
  receiver_name: 'receiver_name',
  receiver_mobile: 'receiver_mobile',
  tx_id: 'tx_id'
};

exports.Prisma.userOrderByRelevanceFieldEnum = {
  wx_mini_openid: 'wx_mini_openid',
  union_id: 'union_id',
  mobile: 'mobile',
  country_code: 'country_code',
  full_mobile: 'full_mobile',
  nick_name: 'nick_name',
  avatar: 'avatar',
  description: 'description',
  id_card_no: 'id_card_no',
  realname: 'realname',
  daop_user_address: 'daop_user_address',
  tags: 'tags'
};

exports.Prisma.declarexOrderByRelevanceFieldEnum = {
  name: 'name',
  content: 'content',
  create_by: 'create_by',
  create_time: 'create_time',
  update_by: 'update_by',
  update_time: 'update_time',
  remark: 'remark'
};

exports.Prisma.recommend_imgOrderByRelevanceFieldEnum = {
  name: 'name',
  img: 'img',
  link: 'link',
  create_by: 'create_by',
  create_time: 'create_time',
  update_by: 'update_by',
  update_time: 'update_time',
  remark: 'remark'
};

exports.Prisma.resourceOrderByRelevanceFieldEnum = {
  name: 'name',
  resource_url: 'resource_url',
  create_by: 'create_by',
  create_time: 'create_time',
  update_by: 'update_by',
  update_time: 'update_time',
  remark: 'remark'
};

exports.Prisma.collection_day_countOrderByRelevanceFieldEnum = {
  t_day: 't_day'
};

exports.Prisma.collection_day_ticket_countOrderByRelevanceFieldEnum = {
  id: 'id',
  ticket_name: 'ticket_name',
  t_day: 't_day'
};

exports.Prisma.user_day_countOrderByRelevanceFieldEnum = {
  c_day: 'c_day'
};

exports.Prisma.user_month_countOrderByRelevanceFieldEnum = {
  id: 'id'
};

exports.Prisma.transfer_day_countOrderByRelevanceFieldEnum = {
  t_day: 't_day'
};

exports.Prisma.transfer_day_ticket_countOrderByRelevanceFieldEnum = {
  id: 'id',
  ticket_name: 'ticket_name',
  t_day: 't_day'
};


exports.Prisma.ModelName = {
  GenTable: 'GenTable',
  GenTableColumn: 'GenTableColumn',
  SysConfig: 'SysConfig',
  SysDept: 'SysDept',
  SysDictData: 'SysDictData',
  SysDictType: 'SysDictType',
  SysLogininfor: 'SysLogininfor',
  SysMenu: 'SysMenu',
  SysNotice: 'SysNotice',
  SysPost: 'SysPost',
  SysUserPost: 'SysUserPost',
  SysRoleDept: 'SysRoleDept',
  SysRoleMenu: 'SysRoleMenu',
  SysUser: 'SysUser',
  SysRole: 'SysRole',
  SysUserRole: 'SysUserRole',
  collection: 'collection',
  init_mobile: 'init_mobile',
  platform_token: 'platform_token',
  publisher: 'publisher',
  ticket: 'ticket',
  tr_order: 'tr_order',
  tr_pay_notification: 'tr_pay_notification',
  tr_transfer: 'tr_transfer',
  user: 'user',
  declarex: 'declarex',
  recommend_img: 'recommend_img',
  resource: 'resource',
  collection_day_count: 'collection_day_count',
  collection_day_ticket_count: 'collection_day_ticket_count',
  user_day_count: 'user_day_count',
  user_month_count: 'user_month_count',
  user_week_count: 'user_week_count',
  transfer_day_count: 'transfer_day_count',
  transfer_day_ticket_count: 'transfer_day_ticket_count'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
