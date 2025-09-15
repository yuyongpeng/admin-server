
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\yuyongpeng\\git\\admin-vue3\\admin-server\\src\\common\\prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl"
      }
    ],
    "previewFeatures": [
      "views",
      "relationJoins",
      "prismaSchemaFolder",
      "omitApi"
    ],
    "sourceFilePath": "C:\\Users\\yuyongpeng\\git\\admin-vue3\\admin-server\\src\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "mysql://root:123456@172.22.135.106:3306/dstamp?charset=utf8mb4"
      }
    }
  },
  "inlineSchema": "model GenTable {\n  tableId        Int              @id @default(autoincrement()) @map(\"table_id\") @db.UnsignedInt\n  tableName      String?          @default(\"\") @map(\"table_name\") @db.VarChar(200)\n  tableComment   String?          @default(\"\") @map(\"table_comment\") @db.VarChar(500)\n  subTableName   String?          @map(\"sub_table_name\") @db.VarChar(64)\n  subTableFkName String?          @map(\"sub_table_fk_name\") @db.VarChar(64)\n  className      String?          @default(\"\") @map(\"class_name\") @db.VarChar(100)\n  tplCategory    String?          @default(\"crud\") @map(\"tpl_category\") @db.VarChar(200)\n  tplWebType     String?          @default(\"\") @map(\"tpl_web_type\") @db.VarChar(30)\n  packageName    String?          @map(\"package_name\") @db.VarChar(100)\n  moduleName     String?          @map(\"module_name\") @db.VarChar(30)\n  businessName   String?          @map(\"business_name\") @db.VarChar(30)\n  functionName   String?          @map(\"function_name\") @db.VarChar(50)\n  functionAuthor String?          @map(\"function_author\") @db.VarChar(50)\n  genType        String?          @default(\"0\") @map(\"gen_type\") @db.Char(1)\n  genPath        String?          @default(\"/\") @map(\"gen_path\") @db.VarChar(200)\n  options        String?          @map(\"options\") @db.VarChar(1000)\n  createBy       String?          @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime     String?          @map(\"create_time\") @db.VarChar(25)\n  updateBy       String?          @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime     String?          @map(\"update_time\") @db.VarChar(25)\n  remark         String?          @db.VarChar(500)\n  tableColumns   GenTableColumn[]\n\n  @@map(\"gen_table\")\n}\n\nmodel GenTableColumn {\n  columnId      Int       @id @default(autoincrement()) @map(\"column_id\") @db.UnsignedInt\n  tableId       Int?      @map(\"table_id\") @db.UnsignedInt\n  columnName    String?   @map(\"column_name\") @db.VarChar(200)\n  columnComment String?   @map(\"column_comment\") @db.VarChar(500)\n  columnType    String?   @map(\"column_type\") @db.VarChar(100)\n  javaType      String?   @map(\"java_type\") @db.VarChar(500)\n  javaField     String?   @map(\"java_field\") @db.VarChar(200)\n  isPk          String?   @map(\"is_pk\") @db.Char(1)\n  isIncrement   String?   @map(\"is_increment\") @db.Char(1)\n  isRequired    String?   @map(\"is_required\") @db.Char(1)\n  isInsert      String?   @map(\"is_insert\") @db.Char(1)\n  isEdit        String?   @map(\"is_edit\") @db.Char(1)\n  isList        String?   @map(\"is_list\") @db.Char(1)\n  isQuery       String?   @map(\"is_query\") @db.Char(1)\n  queryType     String?   @default(\"EQ\") @map(\"query_type\") @db.VarChar(200)\n  htmlType      String?   @map(\"html_type\") @db.VarChar(200)\n  dictType      String?   @default(\"\") @map(\"dict_type\") @db.VarChar(200)\n  sort          Int?      @map(\"sort\")\n  createBy      String?   @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime    String?   @map(\"create_time\") @db.VarChar(25)\n  updateBy      String?   @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime    String?   @map(\"update_time\") @db.VarChar(25)\n  table         GenTable? @relation(fields: [tableId], references: [tableId])\n\n  @@index([tableId])\n  @@map(\"gen_table_column\")\n}\n\nmodel SysConfig {\n  configId    Int     @id @default(autoincrement()) @map(\"config_id\")\n  configName  String? @default(\"\") @map(\"config_name\") @db.VarChar(100)\n  configKey   String? @default(\"\") @map(\"config_key\") @db.VarChar(100)\n  configValue String? @default(\"\") @map(\"config_value\") @db.VarChar(500)\n  configType  String? @default(\"N\") @map(\"config_type\") @db.Char(1)\n  createBy    String? @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime  String? @map(\"create_time\") @db.VarChar(25)\n  updateBy    String? @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime  String? @map(\"update_time\") @db.VarChar(25)\n  remark      String? @map(\"remark\") @db.VarChar(500)\n\n  @@map(\"sys_config\")\n}\n\nmodel SysDept {\n  deptId     Int           @id @default(autoincrement()) @map(\"dept_id\") @db.UnsignedInt\n  parentId   Int?          @default(0) @map(\"parent_id\") @db.UnsignedInt\n  ancestors  String?       @default(\"\") @map(\"ancestors\") @db.VarChar(50)\n  deptName   String?       @default(\"\") @map(\"dept_name\") @db.VarChar(30)\n  orderNum   Int?          @default(0) @map(\"order_num\")\n  leader     String?       @map(\"leader\") @db.VarChar(20)\n  phone      String?       @map(\"phone\") @db.VarChar(11)\n  email      String?       @map(\"email\") @db.VarChar(50)\n  status     String?       @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy   String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy   String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime String?       @map(\"update_time\") @db.VarChar(25)\n  users      SysUser[]\n  roles      SysRoleDept[]\n\n  @@map(\"sys_dept\")\n}\n\nmodel SysDictData {\n  dictCode    Int          @id @default(autoincrement()) @map(\"dict_code\") @db.UnsignedInt\n  dictSort    Int?         @default(0) @map(\"dict_sort\")\n  dictLabel   String?      @default(\"\") @map(\"dict_label\") @db.VarChar(100)\n  dictValue   String?      @default(\"\") @map(\"dict_value\") @db.VarChar(100)\n  dictType    String?      @default(\"\") @map(\"dict_type\") @db.VarChar(100)\n  cssClass    String?      @map(\"css_class\") @db.VarChar(100)\n  listClass   String?      @map(\"list_class\") @db.VarChar(100)\n  isDefault   String?      @default(\"N\") @map(\"is_default\") @db.Char(1)\n  status      String?      @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy    String?      @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime  String?      @map(\"create_time\") @db.VarChar(25)\n  updateBy    String?      @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime  String?      @map(\"update_time\") @db.VarChar(25)\n  remark      String?      @map(\"remark\") @db.VarChar(500)\n  sysDictType SysDictType? @relation(fields: [dictType], references: [dictType])\n\n  @@index([dictType])\n  @@map(\"sys_dict_data\")\n}\n\nmodel SysDictType {\n  dictId     Int           @id @default(autoincrement()) @map(\"dict_id\") @db.UnsignedInt\n  dictName   String?       @default(\"\") @map(\"dict_name\") @db.VarChar(100)\n  dictType   String?       @unique(map: \"dict_type\") @default(\"\") @map(\"dict_type\") @db.VarChar(100)\n  status     String?       @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy   String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy   String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime String?       @map(\"update_time\") @db.VarChar(25)\n  remark     String?       @map(\"remark\") @db.VarChar(500)\n  dictDatas  SysDictData[]\n\n  @@map(\"sys_dict_type\")\n}\n\nmodel SysLogininfor {\n  infoId        Int     @id @default(autoincrement()) @map(\"info_id\") @db.UnsignedInt\n  userName      String? @default(\"\") @map(\"user_name\") @db.VarChar(50)\n  ipaddr        String? @default(\"\") @map(\"ipaddr\") @db.VarChar(128)\n  loginLocation String? @default(\"\") @map(\"login_location\") @db.VarChar(255)\n  browser       String? @default(\"\") @map(\"browser\") @db.VarChar(50)\n  os            String? @default(\"\") @map(\"os\") @db.VarChar(50)\n  status        String? @default(\"1\") @map(\"status\") @db.Char(1)\n  msg           String? @default(\"\") @map(\"msg\") @db.VarChar(255)\n  loginTime     String? @map(\"login_time\") @db.VarChar(25)\n\n  @@index([loginTime], map: \"idx_sys_logininfor_lt\")\n  @@index([status], map: \"idx_sys_logininfor_s\")\n  @@map(\"sys_logininfor\")\n}\n\nmodel SysMenu {\n  menuId     Int           @id @default(autoincrement()) @map(\"menu_id\") @db.UnsignedInt\n  menuName   String        @map(\"menu_name\") @db.VarChar(50)\n  parentId   Int?          @default(0) @map(\"parent_id\") @db.UnsignedInt\n  orderNum   Int?          @default(0) @map(\"order_num\")\n  path       String?       @default(\"\") @map(\"path\") @db.VarChar(200)\n  component  String?       @map(\"component\") @db.VarChar(255)\n  query      String?       @map(\"query\") @db.VarChar(255)\n  isFrame    Int?          @default(0) @map(\"is_frame\")\n  isCache    Int?          @default(1) @map(\"is_cache\")\n  menuType   String?       @default(\"\") @map(\"menu_type\") @db.Char(1)\n  visible    String?       @default(\"1\") @map(\"visible\") @db.Char(1)\n  status     String?       @default(\"1\") @map(\"status\") @db.Char(1)\n  perms      String?       @map(\"perms\") @db.VarChar(100)\n  icon       String?       @default(\"#\") @map(\"icon\") @db.VarChar(100)\n  createBy   String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy   String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime String?       @map(\"update_time\") @db.VarChar(25)\n  remark     String?       @default(\"\") @map(\"remark\") @db.VarChar(500)\n  roles      SysRoleMenu[]\n\n  @@map(\"sys_menu\")\n}\n\nmodel SysNotice {\n  noticeId      Int     @id @default(autoincrement()) @map(\"notice_id\")\n  noticeTitle   String  @map(\"notice_title\") @db.VarChar(50)\n  noticeType    String  @map(\"notice_type\") @db.Char(1)\n  noticeContent String? @map(\"notice_content\") @db.MediumText\n  status        String? @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy      String? @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime    String? @map(\"create_time\") @db.VarChar(25)\n  updateBy      String? @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime    String? @map(\"update_time\") @db.VarChar(25)\n  remark        String? @map(\"remark\") @db.VarChar(255)\n\n  @@map(\"sys_notice\")\n}\n\nmodel SysPost {\n  postId     Int           @id @default(autoincrement()) @map(\"post_id\") @db.UnsignedInt\n  postCode   String        @map(\"post_code\") @db.VarChar(64)\n  postName   String        @map(\"post_name\") @db.VarChar(50)\n  postSort   Int           @map(\"post_sort\")\n  status     String        @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy   String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy   String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime String?       @map(\"update_time\") @db.VarChar(25)\n  remark     String?       @map(\"remark\") @db.VarChar(500)\n  users      SysUserPost[]\n\n  @@map(\"sys_post\")\n}\n\nmodel SysUserPost {\n  userId Int     @map(\"user_id\") @db.UnsignedInt\n  postId Int     @map(\"post_id\") @db.UnsignedInt\n  user   SysUser @relation(fields: [userId], references: [userId])\n  post   SysPost @relation(fields: [postId], references: [postId])\n\n  @@id([userId, postId])\n  @@index([postId])\n  @@map(\"sys_user_post\")\n}\n\nmodel SysRoleDept {\n  roleId Int     @map(\"role_id\") @db.UnsignedInt\n  deptId Int     @map(\"dept_id\") @db.UnsignedInt\n  role   SysRole @relation(fields: [roleId], references: [roleId])\n  dept   SysDept @relation(fields: [deptId], references: [deptId])\n\n  @@id([roleId, deptId])\n  @@index([deptId])\n  @@map(\"sys_role_dept\")\n}\n\nmodel SysRoleMenu {\n  roleId Int     @map(\"role_id\") @db.UnsignedInt\n  menuId Int     @map(\"menu_id\") @db.UnsignedInt\n  menu   SysMenu @relation(fields: [menuId], references: [menuId])\n  role   SysRole @relation(fields: [roleId], references: [roleId])\n\n  @@id([roleId, menuId])\n  @@index([menuId])\n  @@map(\"sys_role_menu\")\n}\n\nmodel SysUser {\n  userId      Int           @id @default(autoincrement()) @map(\"user_id\") @db.UnsignedInt\n  deptId      Int?          @map(\"dept_id\") @db.UnsignedInt\n  userName    String        @map(\"user_name\") @db.VarChar(30)\n  nickName    String        @map(\"nick_name\") @db.VarChar(30)\n  userType    String?       @default(\"00\") @map(\"user_type\") @db.VarChar(2)\n  email       String?       @default(\"\") @map(\"email\") @db.VarChar(50)\n  phonenumber String?       @default(\"\") @map(\"phonenumber\") @db.VarChar(11)\n  sex         String?       @default(\"0\") @map(\"sex\") @db.Char(1)\n  avatar      String?       @default(\"\") @map(\"avatar\") @db.VarChar(100)\n  password    String?       @default(\"\") @map(\"password\") @db.VarChar(100)\n  status      String?       @default(\"1\") @map(\"status\") @db.Char(1)\n  loginIp     String?       @default(\"\") @map(\"login_ip\") @db.VarChar(128)\n  loginDate   String?       @map(\"login_date\") @db.VarChar(25)\n  createBy    String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime  String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy    String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime  String?       @map(\"update_time\") @db.VarChar(25)\n  remark      String?       @map(\"remark\") @db.VarChar(500)\n  dept        SysDept?      @relation(fields: [deptId], references: [deptId])\n  roles       SysUserRole[]\n  posts       SysUserPost[]\n\n  @@index([deptId])\n  @@map(\"sys_user\")\n}\n\nmodel SysRole {\n  roleId            Int           @id @default(autoincrement()) @map(\"role_id\") @db.UnsignedInt\n  roleName          String        @map(\"role_name\") @db.VarChar(30)\n  roleKey           String        @map(\"role_key\") @db.VarChar(100)\n  roleSort          Int           @map(\"role_sort\")\n  dataScope         String?       @default(\"5\") @map(\"data_scope\") @db.Char(1)\n  menuCheckStrictly Int?          @default(1) @map(\"menu_check_strictly\") @db.TinyInt\n  deptCheckStrictly Int?          @default(1) @map(\"dept_check_strictly\") @db.TinyInt\n  status            String        @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy          String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime        String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy          String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime        String?       @map(\"update_time\") @db.VarChar(25)\n  remark            String?       @map(\"remark\") @db.VarChar(500)\n  users             SysUserRole[]\n  menus             SysRoleMenu[]\n  depts             SysRoleDept[]\n\n  @@map(\"sys_role\")\n}\n\nmodel SysUserRole {\n  userId Int     @map(\"user_id\") @db.UnsignedInt\n  roleId Int     @map(\"role_id\") @db.UnsignedInt\n  user   SysUser @relation(fields: [userId], references: [userId])\n  role   SysRole @relation(fields: [roleId], references: [roleId])\n\n  @@id([userId, roleId])\n  @@index([roleId])\n  @@map(\"sys_user_role\")\n}\n\nmodel collection {\n  id                    Int           @id @default(autoincrement()) @db.UnsignedInt\n  collection_name       String?       @db.VarChar(256)\n  ticket_id             Int?          @default(0) @db.UnsignedInt\n  ticket_type           Int           @default(1) @db.UnsignedTinyInt\n  chain_type            Int?          @default(1) @db.UnsignedTinyInt\n  casting_uid           Int           @default(0) @db.UnsignedInt\n  casting_name          String?       @db.VarChar(64)\n  daop_casting_id       Int?          @default(0) @db.UnsignedInt\n  daop_casting_address  String?       @db.VarChar(128)\n  owner_uid             Int           @default(0) @db.UnsignedInt\n  owner_name            String?       @db.VarChar(64)\n  daop_user_id          Int?          @default(0) @db.UnsignedInt\n  daop_user_address     String?       @db.VarChar(128)\n  license_id            Int           @default(0)\n  shared_uid            Int?          @default(0) @db.UnsignedInt\n  price                 Int           @default(0) @db.UnsignedInt\n  trade_time            DateTime?     @db.Timestamp(0)\n  daop_collection_id    Int?          @default(0) @db.UnsignedInt\n  out_ticket_id         Int?          @default(0) @db.UnsignedInt\n  token_id              String?       @db.VarChar(128)\n  collection_hash       String        @db.VarChar(128)\n  mint_tx_id            String?       @db.VarChar(128)\n  mint_chain_status     Int?          @default(0) @db.UnsignedTinyInt\n  mint_chain_time       DateTime?     @db.Timestamp(0)\n  transfer_tx_id        String?       @db.VarChar(128)\n  transfer_chain_status Int?          @default(0) @db.UnsignedTinyInt\n  transfer_chain_time   DateTime?     @db.Timestamp(0)\n  checkeIn_tx_id        String?       @db.VarChar(128)\n  checkIn_chain_status  Int?          @default(0) @db.UnsignedTinyInt\n  checkIn_chain_time    DateTime?     @db.Timestamp(0)\n  credential            String?       @db.VarChar(128)\n  last_credential       String?       @db.VarChar(128)\n  sale_status           Int?          @default(0) @db.UnsignedTinyInt\n  available_status      Int?          @default(1) @db.UnsignedTinyInt\n  available_time        DateTime?     @db.Timestamp(0)\n  available_expire_time DateTime?     @db.Timestamp(0)\n  check_code            String        @db.VarChar(128)\n  authorization_id      Int?          @default(0) @db.UnsignedInt\n  authorization_code    String        @db.VarChar(32)\n  modify_time           DateTime?     @default(now()) @db.Timestamp(0)\n  create_time           DateTime?     @default(now()) @db.Timestamp(0)\n  dar_status            Int?          @default(0) @db.UnsignedTinyInt\n  old_status            Int?          @default(0) @db.UnsignedTinyInt\n  certificate_url       String?       @default(\"-\") @db.VarChar(255)\n  block_number          Int?          @default(0) @db.UnsignedInt\n  sjt_status            Int?          @default(0) @db.TinyInt\n  reg_code              String?       @db.VarChar(255)\n  asset_number          String?       @db.VarChar(255)\n  ticket                ticket?       @relation(fields: [ticket_id], references: [id], onDelete: Restrict, onUpdate: Restrict, map: \"fk_ticket_idx\")\n  user                  user          @relation(fields: [owner_uid], references: [id], onUpdate: Restrict, map: \"fk_user_idx\")\n  tr_order              tr_order[]\n  tr_transfer           tr_transfer[]\n\n  @@index([license_id], map: \"idx_license_id\")\n  @@index([mint_tx_id], map: \"idx_mint_tx_id\")\n  @@index([owner_uid], map: \"idx_owner_uid\")\n  @@index([shared_uid], map: \"idx_share_uid\")\n  @@index([ticket_id], map: \"idx_ticket_id\")\n  @@index([token_id], map: \"idx_token_id\")\n  @@index([transfer_tx_id], map: \"idx_transfer_tx_id\")\n}\n\nmodel init_mobile {\n  id     Int     @id @default(autoincrement()) @db.UnsignedInt\n  mobile String? @db.VarChar(16)\n}\n\nmodel platform_token {\n  id          Int       @id @default(autoincrement()) @db.UnsignedInt\n  platform    String?   @db.VarChar(32)\n  mobile      String?   @db.VarChar(32)\n  token       String?   @db.VarChar(512)\n  expire_in   BigInt?\n  create_time DateTime? @default(now()) @db.Timestamp(0)\n}\n\nmodel publisher {\n  id             Int     @id @default(autoincrement()) @db.UnsignedInt\n  publisher_name String? @db.VarChar(512)\n  industry       String? @db.VarChar(512)\n  logo           String? @db.VarChar(512)\n}\n\nmodel ticket {\n  id                       Int          @id @default(autoincrement()) @db.UnsignedInt\n  ticket_name              String       @db.VarChar(128)\n  ticket_type              Int?         @default(1) @db.UnsignedTinyInt\n  chain_type               Int?         @default(1) @db.UnsignedTinyInt\n  cover_uri                String?      @db.VarChar(512)\n  content_uri              String?      @db.VarChar(512)\n  td_files                 Json?\n  creator_uid              Int?         @default(0) @db.UnsignedInt\n  creator_name             String?      @db.VarChar(128)\n  creator_avatar           String?      @db.VarChar(128)\n  daop_user_id             Int?         @default(0) @db.UnsignedInt\n  daop_user_address        String?      @db.VarChar(128)\n  publisher_id             Int?         @default(0) @db.UnsignedInt\n  publisher_name           String?      @db.VarChar(128)\n  publisher_logo           String?      @db.VarChar(128)\n  amount                   Int          @default(1) @db.UnsignedInt\n  sold_amount              Int?         @default(0) @db.UnsignedInt\n  sku_balance              Int?         @default(0) @db.UnsignedInt\n  price                    Int          @default(0) @db.UnsignedInt\n  available_time           DateTime?    @db.Timestamp(0)\n  expire_time              DateTime?    @db.Timestamp(0)\n  sale_begin_time          DateTime?    @db.Timestamp(0)\n  sale_end_time            DateTime?    @db.Timestamp(0)\n  description              String?      @db.Text\n  usage                    String?      @db.Text\n  sale_status              Int?         @default(1) @db.UnsignedTinyInt\n  available_status         Int?         @default(1) @db.UnsignedTinyInt\n  authorization_id         Int?         @default(0) @db.UnsignedInt\n  authorization_code       String       @db.VarChar(32)\n  did_credential           String?      @default(\"\") @db.VarChar(128)\n  copyright_credential     String?      @db.VarChar(128)\n  authorization_credential String?      @db.VarChar(128)\n  chain_txid               String?      @db.VarChar(128)\n  chain_block_number       Int?         @default(0) @db.UnsignedInt\n  chain_time               Int?         @default(0) @db.UnsignedInt\n  chain_status             Int?         @default(0) @db.UnsignedTinyInt\n  is_sale                  Int?         @default(1) @db.UnsignedTinyInt\n  modify_time              DateTime?    @default(now()) @db.Timestamp(0)\n  create_time              DateTime?    @default(now()) @db.Timestamp(0)\n  registration_id          Int?         @default(0) @db.UnsignedInt\n  send_status              Int?         @default(0) @db.UnsignedTinyInt\n  landing_uri              String?      @db.VarChar(512)\n  download_status          Int?         @default(0) @db.UnsignedTinyInt\n  origin_uri               String?      @db.VarChar(512)\n  creation_date            DateTime?    @db.Timestamp(0)\n  start_date               DateTime?    @db.Timestamp(0)\n  collection               collection[]\n  resource                 resource[]\n  tr_order                 tr_order[]\n\n  @@index([available_time], map: \"idx_begin_time\")\n  @@index([creator_uid], map: \"idx_creator_uid\")\n  @@index([expire_time], map: \"idx_expire_time\")\n}\n\nmodel tr_order {\n  order_id                        Int           @id @default(autoincrement()) @db.UnsignedInt\n  order_no                        String        @unique(map: \"uniq_key_0\") @default(\"\") @db.VarChar(64)\n  ticket_id                       Int           @db.UnsignedInt\n  ticket_did_credential           String?       @default(\"\") @db.VarChar(128)\n  ticket_copyright_credential     String?       @db.VarChar(128)\n  ticket_authorization_credential String?       @db.VarChar(128)\n  collection_id                   Int           @default(0) @db.UnsignedInt\n  collection_name                 String?       @db.VarChar(256)\n  collection_hash                 String        @db.VarChar(128)\n  collection_credential           String?       @db.VarChar(128)\n  collection_last_credential      String?       @db.VarChar(128)\n  collection_token_id             String?       @db.VarChar(128)\n  daop_collection_id              Int?          @default(0) @db.UnsignedInt\n  seller_uid                      Int           @default(0) @db.UnsignedInt\n  seller_daop_user_id             Int?          @default(0) @db.UnsignedInt\n  seller_daop_user_address        String?       @db.VarChar(128)\n  seller_mobile                   String?       @db.VarChar(20)\n  buyer_uid                       Int           @default(0) @db.UnsignedInt\n  buyer_realname                  String?       @db.VarChar(64)\n  buyer_mobile                    String?       @db.VarChar(20)\n  buyer_nickname                  String?       @db.VarChar(60)\n  buyer_daop_user_id              Int?          @default(0) @db.UnsignedInt\n  buyer_daop_user_address         String?       @db.VarChar(128)\n  shared_uid                      Int?          @default(0) @db.UnsignedInt\n  price                           Int           @default(0) @db.UnsignedInt\n  amount                          Int?          @default(1) @db.UnsignedInt\n  check_in                        Int?          @default(0) @db.UnsignedTinyInt\n  pay_channel                     String?       @db.Char(32)\n  pay_scene                       String?       @db.Char(32)\n  pay_trade_no                    String?       @db.VarChar(128)\n  pay_time                        DateTime?     @db.Timestamp(0)\n  pay_status                      Int?          @default(0) @db.UnsignedTinyInt\n  pay_failed_reason               String?       @db.VarChar(512)\n  transfer_status                 Int           @default(0) @db.UnsignedTinyInt\n  expire_time                     DateTime?     @db.Timestamp(0)\n  expire_time_at                  BigInt?       @default(0) @db.UnsignedBigInt\n  status                          Int           @default(1) @db.UnsignedTinyInt\n  deleted_at                      Int?          @default(0) @db.UnsignedInt\n  modify_time                     DateTime      @default(now()) @db.Timestamp(0)\n  create_time                     DateTime?     @default(now()) @db.Timestamp(0)\n  ticket                          ticket        @relation(fields: [ticket_id], references: [id], onUpdate: Restrict, map: \"tr_order_ibfk_1\")\n  collection                      collection    @relation(fields: [collection_id], references: [id], onUpdate: Restrict, map: \"tr_order_ibfk_2\")\n  tr_transfer                     tr_transfer[]\n\n  @@index([buyer_uid], map: \"idx_buyer_uid\")\n  @@index([collection_id], map: \"idx_collection_id\")\n  @@index([seller_uid], map: \"idx_seller_uid\")\n  @@index([ticket_id], map: \"idx_ticket_id\")\n}\n\nmodel tr_pay_notification {\n  id          Int       @id @default(autoincrement()) @db.UnsignedInt\n  pay_channel String?   @db.VarChar(32)\n  order_no    String?   @db.VarChar(64)\n  data        Json?\n  modify_time DateTime? @default(now()) @db.Timestamp(0)\n  create_time DateTime? @default(now()) @db.Timestamp(0)\n\n  @@index([order_no], map: \"idx_order_no\")\n}\n\nmodel tr_transfer {\n  id                         Int        @id @default(autoincrement()) @db.UnsignedInt\n  collection_id              Int        @default(0) @db.UnsignedInt\n  collection_credential      String?    @db.VarChar(128)\n  collection_last_credential String?    @db.VarChar(128)\n  token_id                   String     @db.VarChar(228)\n  order_id                   Int        @default(0) @db.UnsignedInt\n  transfer_uid               Int        @default(0) @db.UnsignedInt\n  transfer_name              String?    @db.VarChar(128)\n  receiver_uid               Int        @default(0) @db.UnsignedInt\n  receiver_name              String?    @db.VarChar(128)\n  receiver_mobile            String?    @db.VarChar(11)\n  tx_id                      String?    @db.VarChar(128)\n  chain_status               Int?       @default(0) @db.UnsignedTinyInt\n  chain_time                 DateTime?  @db.Timestamp(0)\n  transfer_type              Int?       @default(1) @db.UnsignedTinyInt\n  modify_time                DateTime?  @default(now()) @db.Timestamp(0)\n  create_time                DateTime?  @default(now()) @db.Timestamp(0)\n  block_number               Int?       @default(0) @db.UnsignedInt\n  collection                 collection @relation(fields: [collection_id], references: [id], onUpdate: Restrict, map: \"tr_transfer_ibfk_1\")\n  tr_order                   tr_order   @relation(fields: [order_id], references: [order_id], onUpdate: Restrict, map: \"tr_transfer_ibfk_2\")\n\n  @@index([collection_id], map: \"idx_collection_id\")\n  @@index([order_id], map: \"idx_order_id\")\n  @@index([receiver_uid], map: \"idx_receiver_uid\")\n  @@index([token_id], map: \"idx_token_id\")\n  @@index([transfer_uid], map: \"idx_transfer_uid\")\n}\n\nmodel user {\n  id                Int          @id @default(autoincrement()) @db.UnsignedInt\n  wx_mini_openid    String?      @db.VarChar(128)\n  union_id          String?      @db.VarChar(128)\n  mobile            String?      @db.VarChar(20)\n  country_code      String?      @db.VarChar(16)\n  full_mobile       String?      @db.VarChar(32)\n  nick_name         String?      @db.VarChar(60)\n  avatar            String?      @db.VarChar(500)\n  description       String?      @db.VarChar(1000)\n  gendar            Int?         @default(0) @db.UnsignedTinyInt\n  user_type         Int?         @default(1) @db.UnsignedTinyInt\n  is_publisher      Int?         @default(2) @db.UnsignedTinyInt\n  id_card_no        String?      @db.VarChar(64)\n  realname          String?      @db.VarChar(64)\n  realname_state    Int?         @default(0) @db.UnsignedTinyInt\n  realname_type     Int?         @db.UnsignedTinyInt\n  realname_time     DateTime?    @db.Timestamp(0)\n  daop_account_id   Int?         @default(0) @db.UnsignedInt\n  daop_user_id      Int?         @default(0) @db.UnsignedInt\n  daop_user_address String?      @db.VarChar(66)\n  tags              String?      @db.VarChar(255)\n  available_status  Int?         @default(1) @db.UnsignedTinyInt\n  create_time       DateTime?    @default(now()) @db.Timestamp(0)\n  modify_time       DateTime?    @default(now()) @db.Timestamp(0)\n  collection        collection[]\n\n  @@unique([union_id, wx_mini_openid], map: \"uni_wx_user\")\n  @@index([daop_user_address], map: \"idx_address\")\n  @@index([mobile], map: \"idx_mobile\")\n  @@index([wx_mini_openid], map: \"idx_wx_gopenid\")\n}\n\nmodel declarex {\n  id          Int     @id @default(autoincrement())\n  name        String? @db.VarChar(255)\n  content     String? @db.VarChar(1000)\n  types       Int?    @db.TinyInt\n  create_by   String? @db.VarChar(255)\n  create_time String? @db.VarChar(64)\n  update_by   String? @db.VarChar(255)\n  update_time String? @db.VarChar(64)\n  status      Int?    @default(0) @db.TinyInt\n  remark      String? @db.VarChar(255)\n}\n\nmodel recommend_img {\n  id          Int     @id @default(autoincrement())\n  name        String? @db.VarChar(255)\n  img         String? @db.VarChar(255)\n  link        String? @db.VarChar(255)\n  order       Int?\n  recommend   Int?    @default(1) @db.TinyInt\n  create_by   String? @db.VarChar(255)\n  create_time String? @db.VarChar(255)\n  update_by   String? @db.VarChar(255)\n  update_time String? @db.VarChar(255)\n  status      Int?    @default(0) @db.TinyInt\n  remark      String? @db.VarChar(255)\n}\n\nmodel resource {\n  id           Int     @id @default(autoincrement()) @db.UnsignedInt\n  ticket_id    Int\n  ticket       ticket? @relation(fields: [ticket_id], references: [id])\n  name         String? @db.VarChar(255)\n  resource_url String? @db.VarChar(255)\n  order        Int?\n  create_by    String? @db.VarChar(25)\n  create_time  String? @db.VarChar(255)\n  update_by    String? @db.VarChar(25)\n  update_time  String? @db.VarChar(255)\n  status       Int?    @default(0) @db.TinyInt\n  remark       String? @db.VarChar(255)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview collection_day_count {\n  t_day String @unique @db.VarChar(10)\n  sum   Int    @default(0)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\n/// This view or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nview collection_day_ticket_count {\n  id          String  @unique @db.VarChar(20)\n  ticket_name String  @db.VarChar(50)\n  ticket_id   Int?    @default(0) @db.UnsignedInt\n  // t_day     DateTime? @db.Date\n  t_day       String? @db.VarChar(10)\n  sum         Int     @default(0)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview user_day_count {\n  c_day String @unique @db.VarChar(10)\n  sum   Int    @default(0)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview user_month_count {\n  id      String @unique @db.VarChar(6)\n  c_year  Int?\n  c_month Int?\n  sum     Int    @default(0)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview user_week_count {\n  c_week Int @unique\n  sum    Int @default(0)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview transfer_day_count {\n  t_day String @unique @db.VarChar(10)\n  sum   Int    @default(0)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\n/// This view or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nview transfer_day_ticket_count {\n  id          String  @unique @db.VarChar(20)\n  ticket_name String  @db.VarChar(50)\n  ticket_id   Int?    @default(0) @db.UnsignedInt\n  t_day       String? @db.VarChar(10)\n  sum         Int     @default(0)\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../common/prisma-client\"\n  previewFeatures = [\"views\", \"relationJoins\", \"prismaSchemaFolder\", \"omitApi\"]\n  binaryTargets   = [\"native\", \"linux-musl\"]\n}\n\ndatasource db {\n  provider     = \"mysql\"\n  // url          = env(\"DATABASE_URL\")\n  url          = \"mysql://root:123456@172.22.135.106:3306/dstamp?charset=utf8mb4\"\n  relationMode = \"foreignKeys\" // 从数据库中提取表关联关系并生成到prisma文件\n  // relationMode = \"prisma\"  // 不会从数据库中提取表关联关系，需要自己在prisma文件中编写\n}\n\n// 生成ER图\ngenerator erd_plantuml {\n  provider                   = \"prisma-generator-plantuml-erd\"\n  output                     = \"../doc/ER-D.puml\"\n  exportPerTables            = true\n  showUniqueKeyLabel         = true\n  isShowForeignKeyOnRelation = true\n  markdownOutput             = \"./doc/ER-D.md\"\n  markdownIncludeERD         = true\n  // asciidocOutput       = \"./example-tables.adoc\"\n  // asciidocIncludeERD      = true\n}\n\n// 数据库的注释输出到配置文件\n// generator comments {\n//   provider = \"prisma-db-comments-generator\"\n//   targets  = [\"table\", \"column\"]\n//   includeEnumInFieldComment = true\n//   // ignorePattern = \"_view$\"     // 排除特定的表\n// }\n",
  "inlineSchemaHash": "b77802288b9082190e535a9bfe6e124408c9d1905f26262d13e059d02a8a37ea",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"GenTable\":{\"dbName\":\"gen_table\",\"schema\":null,\"fields\":[{\"name\":\"tableId\",\"dbName\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableName\",\"dbName\":\"table_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableComment\",\"dbName\":\"table_comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subTableName\",\"dbName\":\"sub_table_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subTableFkName\",\"dbName\":\"sub_table_fk_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"className\",\"dbName\":\"class_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tplCategory\",\"dbName\":\"tpl_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"crud\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tplWebType\",\"dbName\":\"tpl_web_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packageName\",\"dbName\":\"package_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moduleName\",\"dbName\":\"module_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"businessName\",\"dbName\":\"business_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"functionName\",\"dbName\":\"function_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"functionAuthor\",\"dbName\":\"function_author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genType\",\"dbName\":\"gen_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genPath\",\"dbName\":\"gen_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"/\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"options\",\"dbName\":\"options\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableColumns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GenTableColumn\",\"nativeType\":null,\"relationName\":\"GenTableToGenTableColumn\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GenTableColumn\":{\"dbName\":\"gen_table_column\",\"schema\":null,\"fields\":[{\"name\":\"columnId\",\"dbName\":\"column_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableId\",\"dbName\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"columnName\",\"dbName\":\"column_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"columnComment\",\"dbName\":\"column_comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"columnType\",\"dbName\":\"column_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"javaType\",\"dbName\":\"java_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"javaField\",\"dbName\":\"java_field\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPk\",\"dbName\":\"is_pk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isIncrement\",\"dbName\":\"is_increment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRequired\",\"dbName\":\"is_required\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isInsert\",\"dbName\":\"is_insert\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEdit\",\"dbName\":\"is_edit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isList\",\"dbName\":\"is_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isQuery\",\"dbName\":\"is_query\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"queryType\",\"dbName\":\"query_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"EQ\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"htmlType\",\"dbName\":\"html_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictType\",\"dbName\":\"dict_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"dbName\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GenTable\",\"nativeType\":null,\"relationName\":\"GenTableToGenTableColumn\",\"relationFromFields\":[\"tableId\"],\"relationToFields\":[\"tableId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysConfig\":{\"dbName\":\"sys_config\",\"schema\":null,\"fields\":[{\"name\":\"configId\",\"dbName\":\"config_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"configName\",\"dbName\":\"config_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"configKey\",\"dbName\":\"config_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"configValue\",\"dbName\":\"config_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"configType\",\"dbName\":\"config_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysDept\":{\"dbName\":\"sys_dept\",\"schema\":null,\"fields\":[{\"name\":\"deptId\",\"dbName\":\"dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"dbName\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ancestors\",\"dbName\":\"ancestors\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptName\",\"dbName\":\"dept_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderNum\",\"dbName\":\"order_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leader\",\"dbName\":\"leader\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"dbName\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"dbName\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUser\",\"nativeType\":null,\"relationName\":\"SysDeptToSysUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRoleDept\",\"nativeType\":null,\"relationName\":\"SysDeptToSysRoleDept\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysDictData\":{\"dbName\":\"sys_dict_data\",\"schema\":null,\"fields\":[{\"name\":\"dictCode\",\"dbName\":\"dict_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictSort\",\"dbName\":\"dict_sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictLabel\",\"dbName\":\"dict_label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictValue\",\"dbName\":\"dict_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictType\",\"dbName\":\"dict_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cssClass\",\"dbName\":\"css_class\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listClass\",\"dbName\":\"list_class\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDefault\",\"dbName\":\"is_default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sysDictType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysDictType\",\"nativeType\":null,\"relationName\":\"SysDictDataToSysDictType\",\"relationFromFields\":[\"dictType\"],\"relationToFields\":[\"dictType\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysDictType\":{\"dbName\":\"sys_dict_type\",\"schema\":null,\"fields\":[{\"name\":\"dictId\",\"dbName\":\"dict_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictName\",\"dbName\":\"dict_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictType\",\"dbName\":\"dict_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictDatas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysDictData\",\"nativeType\":null,\"relationName\":\"SysDictDataToSysDictType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysLogininfor\":{\"dbName\":\"sys_logininfor\",\"schema\":null,\"fields\":[{\"name\":\"infoId\",\"dbName\":\"info_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"dbName\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipaddr\",\"dbName\":\"ipaddr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginLocation\",\"dbName\":\"login_location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"browser\",\"dbName\":\"browser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"os\",\"dbName\":\"os\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"msg\",\"dbName\":\"msg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginTime\",\"dbName\":\"login_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysMenu\":{\"dbName\":\"sys_menu\",\"schema\":null,\"fields\":[{\"name\":\"menuId\",\"dbName\":\"menu_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuName\",\"dbName\":\"menu_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"dbName\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderNum\",\"dbName\":\"order_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"dbName\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"component\",\"dbName\":\"component\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"query\",\"dbName\":\"query\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isFrame\",\"dbName\":\"is_frame\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isCache\",\"dbName\":\"is_cache\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuType\",\"dbName\":\"menu_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visible\",\"dbName\":\"visible\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"perms\",\"dbName\":\"perms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"dbName\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"#\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRoleMenu\",\"nativeType\":null,\"relationName\":\"SysMenuToSysRoleMenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysNotice\":{\"dbName\":\"sys_notice\",\"schema\":null,\"fields\":[{\"name\":\"noticeId\",\"dbName\":\"notice_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noticeTitle\",\"dbName\":\"notice_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noticeType\",\"dbName\":\"notice_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noticeContent\",\"dbName\":\"notice_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"MediumText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysPost\":{\"dbName\":\"sys_post\",\"schema\":null,\"fields\":[{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postCode\",\"dbName\":\"post_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postName\",\"dbName\":\"post_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postSort\",\"dbName\":\"post_sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUserPost\",\"nativeType\":null,\"relationName\":\"SysPostToSysUserPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysUserPost\":{\"dbName\":\"sys_user_post\",\"schema\":null,\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUser\",\"nativeType\":null,\"relationName\":\"SysUserToSysUserPost\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysPost\",\"nativeType\":null,\"relationName\":\"SysPostToSysUserPost\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"postId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"postId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysRoleDept\":{\"dbName\":\"sys_role_dept\",\"schema\":null,\"fields\":[{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptId\",\"dbName\":\"dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRole\",\"nativeType\":null,\"relationName\":\"SysRoleToSysRoleDept\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"roleId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dept\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysDept\",\"nativeType\":null,\"relationName\":\"SysDeptToSysRoleDept\",\"relationFromFields\":[\"deptId\"],\"relationToFields\":[\"deptId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"roleId\",\"deptId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysRoleMenu\":{\"dbName\":\"sys_role_menu\",\"schema\":null,\"fields\":[{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuId\",\"dbName\":\"menu_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysMenu\",\"nativeType\":null,\"relationName\":\"SysMenuToSysRoleMenu\",\"relationFromFields\":[\"menuId\"],\"relationToFields\":[\"menuId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRole\",\"nativeType\":null,\"relationName\":\"SysRoleToSysRoleMenu\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"roleId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"roleId\",\"menuId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysUser\":{\"dbName\":\"sys_user\",\"schema\":null,\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptId\",\"dbName\":\"dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"dbName\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickName\",\"dbName\":\"nick_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"dbName\":\"user_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"2\"]],\"default\":\"00\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"dbName\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phonenumber\",\"dbName\":\"phonenumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sex\",\"dbName\":\"sex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"dbName\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"dbName\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginIp\",\"dbName\":\"login_ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginDate\",\"dbName\":\"login_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dept\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysDept\",\"nativeType\":null,\"relationName\":\"SysDeptToSysUser\",\"relationFromFields\":[\"deptId\"],\"relationToFields\":[\"deptId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUserRole\",\"nativeType\":null,\"relationName\":\"SysUserToSysUserRole\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUserPost\",\"nativeType\":null,\"relationName\":\"SysUserToSysUserPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysRole\":{\"dbName\":\"sys_role\",\"schema\":null,\"fields\":[{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleName\",\"dbName\":\"role_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleKey\",\"dbName\":\"role_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleSort\",\"dbName\":\"role_sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataScope\",\"dbName\":\"data_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"5\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuCheckStrictly\",\"dbName\":\"menu_check_strictly\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptCheckStrictly\",\"dbName\":\"dept_check_strictly\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUserRole\",\"nativeType\":null,\"relationName\":\"SysRoleToSysUserRole\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRoleMenu\",\"nativeType\":null,\"relationName\":\"SysRoleToSysRoleMenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"depts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRoleDept\",\"nativeType\":null,\"relationName\":\"SysRoleToSysRoleDept\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysUserRole\":{\"dbName\":\"sys_user_role\",\"schema\":null,\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUser\",\"nativeType\":null,\"relationName\":\"SysUserToSysUserRole\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRole\",\"nativeType\":null,\"relationName\":\"SysRoleToSysUserRole\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"roleId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"roleId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"collection\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"256\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"casting_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"casting_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_casting_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_casting_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_user_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"license_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shared_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trade_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_collection_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"out_ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mint_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mint_chain_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mint_chain_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer_chain_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer_chain_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"checkeIn_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"checkIn_chain_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"checkIn_chain_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sale_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"available_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"available_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"available_expire_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"check_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorization_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorization_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modify_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dar_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"old_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"certificate_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"-\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sjt_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reg_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asset_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket\",\"nativeType\":null,\"relationName\":\"collectionToticket\",\"relationFromFields\":[\"ticket_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"collectionTouser\",\"relationFromFields\":[\"owner_uid\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_order\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_order\",\"nativeType\":null,\"relationName\":\"collectionTotr_order\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_transfer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_transfer\",\"nativeType\":null,\"relationName\":\"collectionTotr_transfer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"init_mobile\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"16\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"platform_token\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"platform\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire_in\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"publisher\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publisher_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"industry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ticket\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cover_uri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content_uri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"td_files\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator_avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_user_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publisher_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publisher_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publisher_logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sold_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sku_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"available_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sale_begin_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sale_end_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sale_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"available_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorization_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorization_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"did_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"copyright_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorization_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_txid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_block_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_sale\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modify_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registration_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"send_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"landing_uri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"download_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"origin_uri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creation_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"collection\",\"nativeType\":null,\"relationName\":\"collectionToticket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"resource\",\"nativeType\":null,\"relationName\":\"resourceToticket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_order\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_order\",\"nativeType\":null,\"relationName\":\"ticketTotr_order\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tr_order\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_did_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_copyright_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_authorization_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"256\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_last_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_token_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_collection_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller_daop_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller_daop_user_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller_mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buyer_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buyer_realname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buyer_mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buyer_nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"60\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buyer_daop_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buyer_daop_user_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shared_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"check_in\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pay_channel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pay_scene\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pay_trade_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pay_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pay_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pay_failed_reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire_time_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modify_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket\",\"nativeType\":null,\"relationName\":\"ticketTotr_order\",\"relationFromFields\":[\"ticket_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"collection\",\"nativeType\":null,\"relationName\":\"collectionTotr_order\",\"relationFromFields\":[\"collection_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_transfer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_transfer\",\"nativeType\":null,\"relationName\":\"tr_orderTotr_transfer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tr_pay_notification\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pay_channel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modify_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tr_transfer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_last_credential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"228\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modify_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"collection\",\"nativeType\":null,\"relationName\":\"collectionTotr_transfer\",\"relationFromFields\":[\"collection_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tr_order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tr_order\",\"nativeType\":null,\"relationName\":\"tr_orderTotr_transfer\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"order_id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wx_mini_openid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"union_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"16\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nick_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"60\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gendar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_publisher\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":2,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_card_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realname_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realname_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realname_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daop_user_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"66\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"available_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedTinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modify_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"collection\",\"nativeType\":null,\"relationName\":\"collectionTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"union_id\",\"wx_mini_openid\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"union_id\",\"wx_mini_openid\"]}],\"isGenerated\":false},\"declarex\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"types\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"recommend_img\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"img\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"resource\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket\",\"nativeType\":null,\"relationName\":\"resourceToticket\",\"relationFromFields\":[\"ticket_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"collection_day_count\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"t_day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"collection_day_ticket_count\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\\\\nThis view or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"user_day_count\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"c_day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"user_month_count\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"c_year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"c_month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"user_week_count\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"c_week\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"transfer_day_count\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"t_day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"transfer_day_ticket_count\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\\\\nThis view or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

