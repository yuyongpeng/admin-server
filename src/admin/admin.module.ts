import { Module } from '@nestjs/common';
import { CaptchaController } from '@/admin/common/captcha/captcha.controller';
import { UploadController } from './common/upload/upload.controller';
import { AuthController } from './system/auth/auth.controller';
import { SysUserController } from './system/user/sys-user.controller';
import { SysDeptController } from './system/dept/sys-dept.controller';
import { SysConfigController } from './system/config/sys-config.controller';
import { DictDataController } from './system/dict-data/dict-data.controller';
import { DictTypeController } from './system/dict-type/dict-type.controller';
import { SysMenuController } from './system/menu/sys-menu.controller';
import { SysPostController } from './system/post/sys-post.controller';
import { SysRoleController } from './system/role/sys-role.controller';
import { GenController } from './gen/gen.controller';
import { DeptService } from './system/dept/service/sys-dept.service';
import { MenuService } from './system/menu/service/sys-menu.service';
import { ConfigService } from './system/config/service/sys-config.service';
import { LogininforService } from './system/logininfor/service/sys-logininfor.service';
import { NoticeService } from './system/notice/service/sys-notice.service';
import { PostService } from './system/post/service/sys-post.service';
import { RoleService } from './system/role/service/sys-role.service';
import { GenService } from '@/common/service/gen/gen.service';
import { SysDictTypeService } from './system/dict-type/service/sys-dict-type.service';
import { SysDictDataService } from './system/dict-data/service/sys-dict-data.service';
import { UserService } from './system/user/service/sys-user.service';
import { SysNoticeController } from './system/notice/sys-notice.controller';
import { SysLogininforController } from './system/logininfor/sys-logininfor.controller';
import { monitorController } from './system/monitor/monitor.controller';
import { TicketService } from './fangcunjiyi/ticket/service/ticket.service';
import { SysTicketController } from './fangcunjiyi/ticket/ticket.controller';

import { ResourceService } from '@/admin/fangcunjiyi/resource/service/resource.service';
import { ResourceController } from '@/admin/fangcunjiyi/resource/resource.controller';
import { DeclareService } from '@/admin/fangcunjiyi/declare/service/declare.service';
import { DeclareController } from '@/admin/fangcunjiyi/declare/declare.controller';

import { CollectionService } from '@/admin/fangcunjiyi/collection/service/collection.service';
import { CollectionController } from '@/admin/fangcunjiyi/collection/collection.controller';

import { TransferService } from '@/admin/fangcunjiyi/transfer/service/transfer.service';
import { TransferController } from '@/admin/fangcunjiyi/transfer/transfer.controller';
import { FCUserController } from './fangcunjiyi/user/user.controller';
import { FCUserService } from './fangcunjiyi/user/service/user.service';
import { RecommendImgController } from './fangcunjiyi/recommendimg/recommendimg.controller';
import { RecommendImgService } from './fangcunjiyi/recommendimg/service/recommendimg.service';

@Module({
  imports: [],
  controllers: [
    CaptchaController,
    UploadController,
    AuthController,
    SysDeptController,
    SysConfigController,
    DictDataController,
    DictTypeController,
    SysMenuController,
    SysPostController,
    SysRoleController,
    GenController,
    SysUserController,
    SysNoticeController,
    SysLogininforController,
    monitorController,
    SysTicketController,
    ResourceController,
    DeclareController,
    CollectionController,
    TransferController,
    FCUserController,
    RecommendImgController,
  ],
  providers: [
    DeptService,
    MenuService,
    ConfigService,
    LogininforService,
    MenuService,
    NoticeService,
    PostService,
    RoleService,
    GenService,
    SysDictDataService,
    SysDictTypeService,
    UserService,
    LogininforService,
    TicketService,
    ResourceService,
    DeclareService,
    CollectionService,
    TransferService,
    FCUserService,
    RecommendImgService,
  ],
})
export class AdminModule {}
